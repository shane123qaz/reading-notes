# React

## Main

- React的解决方案是在JSX模版字符串上进行Diff操作来决定整个树需要如何修改

  - JSX => VDOM => Diff with prev VDOM => Patch(Changes) => Update DOM
  - 算法进化论
    - 深度优先遍历DFS（Depth-First-Seach）算法，复杂度O(n^3)
    - cito.js，采用两端同时比较算法，复杂度O(n^2)
    - snabbdom算法，复杂度O(n)
  - React算法优化
    - Tree diff：只会对同一层级的节点进行比较。不推荐进行DOM节点的跨级比较。
    - Component diff：如果组件是同一类型，就进行tree diff；如果不是，就放入patches中，被重新渲染。所以推荐使用shouldComponentUpdate来提高React性能。
    - List diff：节点比较，其实只用三种操作：插入、移动、删除。没有key的列表diff下，只能通过按顺序对每个元素对比。

- Riot的思路是直接基于浏览器的DOM进行Diff，所以Riot只有React的1/8的体积 - 在一篇文章中看到，具体怎么样尚未尝试

- [gooact-react-in-160-lines-of-javascript](https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f)

  - Elements: Processed JSX blocks to VDOM.

    - ```js
      const createElement = (type, props, ...children) => {
        if (props === null) props={};
        return {type, props, children};
      }
      ```

    - VDOM: Tree-like composition of elements

      - ```jsx
        const list = () => (
        	<ul className="some-list">
            <li className="some-list_item">One</li>
          </ul>
        );
        ```

      - ```json
        {
          "type": "ul",
          "props": {
            "className": "some-list"
          },
          "children": [
            {
              "type": "li",
              "props": {
                "className": "some-list_item"
              },
              "children": {
                "One"
              }
            }
          ]
        }
        ```

  - Rendering: Transform VDOM to DOM.

    - Custom Attribute Setter: Properties passed to VDOM are not always valid in terms of DOM
      - eventHandler / key identifiers / values
    - Primitive VDOM Renderer: Primitives — like strings, numbers, booleans and nulls
      - are turned into plain text nodes. `document.createTextNode(vdom)`
    - Complex VDOM Renderer: Nodes with string tag are turned into DOM elements with recursively rendered children.
    - Component VDOM Renderer

  - Patching: Why `key` property very important and how to use VDOM for efficient patching of existing DOM.

  - Components: React Components and their creation, lifecycle and rendering procedure.

## [Why Fiber](https://juejin.im/post/6844903874692661255)

https://juejin.im/post/6844903975112671239#heading-11

1s 60帧，所以每帧分到的时间(刷新率FPS-frame per second)是1000ms/60 = 16ms，不要让一帧的时间超过16ms

### Life of a frame

- Input Events
  - Blocking input events
    - touch
    - wheel
  - Non-blocking input events
    - click
    - keypress
- JS
  - Timers
- Begin Frame
  - Per frame events
    - window resize
    - scroll
    - media-query changes
    - animation events
- rAF
  - requestAnimationFrame callbacks
  - Intersection Observer callbacks
- Layout
  - Recalc style
  - Update layout
  - Resize Observer callbacks
- Paint
  - Compositing update
  - Paint invalidation
  - Record

### Fiber

#### What is Fiber

- 为了解决卡顿，把渲染更新过程拆分为多个任务，每次只做一部分，做完看是否还剩余时间，有就继续下一个任务；如果没有，就挂起当前任务，把时间控制权交给主线程，等主线程不忙了再继续执行。
- 为了达到这个目的，需要一种方法将任务分解为单元。Fiber就代表一种`工作单元`。
- `堆栈帧`: 每个函数为一个工作，每个工作被称为堆栈帧，它会一直工作，直到堆栈为空，无法中断。
- Fiber的本质可以理解为`虚拟的堆栈帧`,将可中断的任务拆分为多个子任务，通过按照优先级来自由调度任务，分段更新，从而将之前的同步渲染改成异步渲染。
- Fiber是一种数据结构（堆栈帧），是一种解决可中断任务的解决方案，特性是时间分片(time slicing)和暂停(supense)。

#### How does Fiber work

1. 从`ReactDom.render()`开始，把React Element转换为Fiber节点，并设置优先级，加入到更新队列。
2. Schedule阶段： `scheduleWork`, `requestWork`, `performWork`。
3. Fiber Reconciler：遍历Fiber节点，通过Diff算法计算所有的工作，产出EffectList给commit阶段使用，包括`reconciliation`和`commit`阶段。
   - [可中断] render/reconciliation 通过构造WorkInProcess Tree得到changes
     - reconciliation阶段：每次处理一个fiber，处理完可以中断或者挂起整个工作循环。通过每个节点更新结束时向上归并Effect List来收集任务结果。reconciliation结束后，根节点的EffectList里会记录包括Dom change在内的所有Side Effect
     - 因为reconciliation阶段是可中断的，一旦恢复后又会重新执行，所以该阶段的生命周期方法会被多次调用。
       - getDerivedStateFromProps
       - shouldComponentUpdate
       - render
   - [不可中断] commit应用这些dom change
     - commit阶段：将Diff结果反映到真实DOM的过程
     - commit 阶段会执行如下的声明周期方法
       - getSnapshotBeforeUpdate
       - componentDidMount
       - componentDidUpdate
       - componentWillUnmount

##### Fiber Node

```typescript
{
  //当前fiber相关本地状态
  stateNode: any,
  //单链表结构
  return: Fiber | null, //指向parent，用来处理完该节点后向上返回
  children: Fiber | null,
  sibling: Fiber | null,
  //更新相关
  pendingProps: any, 		//新的变动带来的新的props
  memorizedProps: any,	//上次渲染完成之后的props
  updateQueue: UpdateQueue<any> | null, 	//该Fiber对应的组件产生的Update会存放在这个列表里
  memorizedState: any,	//上次渲染的时候的state  
  //Schedule相关
  expirationTime: ExpirationTime, 				//代表任务在未来哪个时间点被完成
  childrenExpirationTime: ExpirationTime, //快速确定子节点是否有等待的变化
	/**
	* WorkInProcess Tree
	* 在渲染完成后，他们会交换位置
	* current Fiber Tree 和 WorkInProcess Tree 交换
	**/
  alternate: Fiber | null,
  //Effect相关
  effectTag: SideEffectTag,
  nextEffect: Fiber | null,
  firstEffect: Fiber | null,
  lastEffect: Fiber | null,  
}
```



## React Hook

### [Why Hook](https://zhuanlan.zhihu.com/p/137183261)

- Component非UI逻辑的复用性
  - HOC和renderProps弊端
    - 可读性
    - 多个HOC组合性差，props丢失，尤其是使用第三方HOC库
    - wrapper hell 多重嵌套时，查看和调试十分困难
  - hook
    - 写法简单，都是函数
    - 组合简单
    - 没有wrapper hell，不会改变组件的层级结构
- 组件的生命周期不适合side effect逻辑管理
  - hook
    - 可以将不同的side effect相关逻辑放在不同的函数中
- class component 不友好

### Hook的坑

- useState里数据必须Immutable

- useEffect / useCallback 闭包问题（或者叫capture value）。

- useEffect and useLayoutEffect里使用async函数, 解决方式`IIFE`(Immediately-Invoked Function Expression)。
  - ```jsx
    useEffect(() => {
      (async () => {
        await fetchSomething();
      })();
    }, []);
    ```

- useEffect vs useLayoutEffect
  - useLayoutEffect会在DOM更新后同步调用，会阻塞页面渲染。
    - 可以把需要操作DOM的代码放在这，避免页面抖动。
  - useEffect是在页面渲染完才会调用。
- 使用act解决useEffect的测试问题
- useRef
  - 用来访问Dom，useRef的值被保存在它的`.current`属性里
  - 不仅限于Dom，可以用它来保存任何可变值。**当我们需要一个不受生命周期影响的变量时**，可以使用useRef
    - 当ref对象内容发生变化时，useRef并不会通知你，变更`.current`并不会引发组件re-render

### How to use

```jsx
import {useState, useEffect} from 'react'

const useFriendStatus = (friendId) => {
    const [isOnline, setIsOnline] = useState(null);

    const handleStatusChange = (status) => {
        setIsOnline(status.isOnline)
    }

    useEffect(() => { //React runs the effects after every render
        ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
        };
    }, [friendId]); //Only re-subscribe if friendId changes

    return isOnline;
}
// Mount with { friend: { id: 100 } } props
//ChatAPI.subscribeToFriendStatus(100, handleStatusChange);     // Run first effect

// Update with { friend: { id: 200 } } props
//ChatAPI.unsubscribeFromFriendStatus(100, handleStatusChange); // Clean up previous effect
//ChatAPI.subscribeToFriendStatus(200, handleStatusChange);     // Run next effect

// Unmount
//ChatAPI.unsubscribeFromFriendStatus(300, handleStatusChange); // Clean up last effect

const example = (props) => {
    const isOnline = useFriendStatus(props.friend.id);

    return (
        <li style={{color: isOnline ? 'green' : 'black'}}>
            {props.friend.name}
        </li>
    );
}
```
#### [Hook Rules](https://reactjs.org/docs/hooks-rules.html)

- Only call hooks at TOP level -- useState / useEffect
  - Don’t call Hooks inside loops, conditions, or nested functions.
  - Ensure that hooks are called in the same order each time a component render

- Call Hooks from React function components.
  
- Call Hooks from custom Hooks
  
- When we use multiple state or effect hook in a single component

  - **React relies on the order in which Hooks are called**.

- eslint-plugin-react-hooks: used to enforce the hook rules.
    - `npm install eslint-plugin-react-hooks@next`
    ```json
    // Your ESLint configuration
    {
        "plugins": [
            "react-hooks"
        ],
        "rules": {
            "react-hooks/rules-of-hooks": "error"
        }
    }
    ```

#### [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)

- `useState`
- `useEffect`: React runs the effects after every render — including the first render.
- `useReducer`
```js
function useReducer(reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch(action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}
```
- `useCallback`: return a memoized callback.
```js
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```
- `useMemo`: return a memoized value.
```js
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```
- `useRef`: returns a mutable ref object whose `.current` property is initialized to the passed argument.
```jsx
function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onBtnClick = () => {
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onBtnClick}>Focus the input</button>
        </>
    )
}
```
