# Javascript

- call / apply / bind
  - `func.call(this, arg1, arg2);`: call 需要把参数按顺序传递进去。
  - `func.apply(this, [arg1, arg2]);`: apply 则是把参数放在数组里。
  - `func.bind(this)`: bind 是返回对应函数，便于稍后调用; 多次 bind() 是无效的，只有第一次生效。

- `__proto__` vs `prototyoe`
  - 所有的对象都有`__proto__` 属性，即原型属性，它是一个内置属性，被用于继承。
  - `prototype` 是一个只属于function的属性，当使用new方法调用该构造函数的时候，用于构建新对象的`__proto__`。
- 原型链： 读操作通过`__proto__`一层层链下去的结构
- 原型继承实现
  - `Object.create(prototypeObj)` 而不是 `xx.__proto__=prototypeFunc`
- 继承方式对比 https://segmentfault.com/a/1190000015727237
- 作用域链：当前作用域没有找到定义，继续向父级作用域寻找，直到全局作用域的这种层级关系。
- event_loop
  - Js是单线程，先跑“执行栈”里的同步任务，再跑“任务对列”里的异步任务。
  - 当“执行栈”里的任务都执行完后，才会从“任务对列”里拿任务丢到“执行栈”里处理。
  - 宏任务(macroTask)
    - script全部code, setTimeout, setInterval, setImmediate, I/O, UI Rendering
  - 微任务(microTask)
    - Process.nextTick(only Node), Promise, Object.observer, MutationObserver 
  - 执行顺序
    - 执行栈先执行`同步任务`, 执行完；
    - 查看`执行栈`是否为空，如果为`空`，就会去检查`微任务`对列；
    - 如果`有`微任`就会一次性执行完所有的`微任务`；
    - 如果`没有`微任务，就会去执行`宏任务`；
    - 每次`单个`宏任务执行完，都会去检查微任务队列，
    - 如果`不为空`就会按照`先入先出`的规则执行完`全部`微任务后，设置微任务对列为`null`，再执行下一个宏任务，如此循环。
  - Node11和浏览器的行为一致，都是每执行一个宏任务就执行完微任务对列。
  - Node10及以前，执行完同源的宏任务，再去清空微任务列表。
    - https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#deduplication
- 闭包
  - 封住了变量的作用域，有效的防止了全剧污染。
  - 存在内存泄漏的风险，尤其是以node做服务器，由于内存限制和累积效应，可能会造成进程退出或宕机。
    - 解决方式：显示对外暴露一个接口，用于清理变量。



## Prototype

```js
function getInstanceMethods(obj) {
		const prototype = Object.getPrototypeOf(obj);
		const names = Object.getOwnPropertyNames(prototype);
		return names.filter (name => typeof obj[name] === 'function');
}
```



## Query
```js
$('selector');

document.querySelectorAll('selector');
```

```js
$('.css');

document.querySelectorAll('.css');
document.getElementsByClassName('css');
```

```js
$('#id')

document.querySelector('#id');
document.getElementById('id');
```

```js
$('a[target=_blank]');

document.querySelectorAll('a[target=_blank]');
```

## Class Operation
```js
$el.addClass(className);

el.classList.add(className);
```

```js
$el.removeClass(className);

el.classList.remove(className);
```

```js
$el.hasClass(className);

el.classList.contains(className);
```

```js
$el.toggleClass(className);

el.classList.toggle(className);
```

## CSS & Style
```js
//获取style
$el.css('color');

const view = el.ownerDocument.defaultView;
//null的意思是不返回伪元素
view.getComputedStyle(el, null).color;
```
```js
//设置style
$el.css({color: "#ff0011"});

el.style.color = "#ff0011";
```

## Node Operation
```js
//插入html
$el.before(htmlString);
$parent.append(el);
$el.after(htmlString);

el.insertBefore(newDom, ele); //insert newDom before ele
                              //ele is the child of el
parent.appendChild(el);
el.insertAdjacentHTML('beforeend', '<li>content</li>');
```

```js
//获取子节点
$el.children();

el.children;
```

```js
//上一个节点
$el.prev();

el.previousElementSibling;
```

```js
//获取兄弟节点
$el.siblings();

[].filter.call(el.parentNode.children, function(child) {
    return child !== el;
})
```

```js
$el.next();

el.nextElementSibling;
```

```js
$el.parentNode();

el.parentNode;
```

```js
$el.clone(true);    //true means deep clone
                    //false means child nodes won't be cloned
el.cloneNode(true);
```

```js
$('<div/>')

document.createElement('div');
```

```js
$el.remove();

parent.removeChild(el); // remove from parent

el.parentNode.removeChild(el);
```

## Element
```js
$el.text();

el.textContent;
```

```js
$el.text(string);

el.textContent = string;
```

```js
$el.html();

el.innerHTML;
```

```js
$el.html(htmlString);

el.innerHTML = htmlString;
```

```js
$el.attr('class');

el.getAttribute('class');
```

```js
$el.attr('class', 'node');

el.setAttribute('foo', 'node');
```

```js
$el.removeAttr('class');

el.removeAttribute('class');
```

## Data
```js
$el.data("foo", "something"); //set
$el.data("foo") //get
$el.removeData("foo");

el.dataset.foo = "something";
el.dataset.foo;

el.setAttribute('data-foo', 'something');
el.getAttribute('data-foo');
el.removeAttribute('data-foo');
```

## Form
```js
$el.val();  //获取input值

el.value;
```

## Width & Height
```js
$(window).height();

//not include scrollbar
window.document.documentElement.clientHeight;
//include scrollbar
window.innerHeight;
```

```js
$(document).height();

document.documentElement.scrollHeight;
```

```js
$el.height();

//content的高度
function getHeight(el) {
    const styles = this.getComputedStyle(el);
    const height = el.offsetHeight;
    const borderTopWidth = parseFloat(styles.borderTopWidth);
      const borderBottomWidth = parseFloat(styles.borderBottomWidth);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);
    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}

el.clientHeight;
el.getBoundingClientRect().height;
```

## Position & Offset
```js
$el.position();

{left: el.offsetLeft, top: el.offsetTop}
```

```js
$el.offset();

function getOffset(el) {
    const box = el.getBoundingCientRect();

    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
    }
}
```

```js
$(window).scrollTop();

(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
```

## Event
```js
$el.on(eventName, eventHandler);

el.addEventListerner(eventName, eventHandler);
```

```js
$el.off(eventName, eventHandler);

el.removeEventListener(eventName, eventHandler);
```

```js
$(el).trigger('custom-event', {key: 'data'});

let event;
if (window.CustomEvent) { //是否支持CustomEvent
    event = new CustomEvent('custom-event', {detail: {key: 'data'}});
} else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('custom-event', true, true, {key: 'data'});
}
el.dispatchEvent(event);
```

## Location change
- navigate to external url
    ```js
    function navigateTo(target, newWindow) {
        if (newWindow) {
            window.open(target, '_blank');
        } else {
            window.location.href = target;
        }
    }
    ```
    - Redirect to external url
    ```js
    window.location.href = 'https://some-external-url';
    ```
    - Redirect to external url in new window
    ```js
    window.open('https://some-external-url', '_blank');
    ```

## Resource
- [原生Js实现JQuery常用方法](https://zhouyuexie.github.io/%E5%BC%80%E5%A7%8B%E6%8B%A5%E6%8A%B1%E5%8E%9F%E7%94%9Fjs%E6%96%B9%E6%B3%95%E5%90%A7/)

- [The Complete ECMAScript 2015-2017 Guide](https://flaviocopes.com/ecmascript/#arrow-functions)

- File Operation
    - [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
    - [Js操作Excel表格](https://github.com/SheetJS/js-xlsx)
    
- Polyfil
  
    - Using polyfil to support multiple browsers.
    
- diving-deeper-in-javascripts-objects

    - https://blog.bitsrc.io/diving-deeper-in-javascripts-objects-318b1e13dc12

    - ```javascript
        Object.getOwnPropertyDescriptor(object, keyName)
        
        Object.defineProperty(obj, keyName, {
        	value: string,
        	writable: boolean,
        	enumerable: boolean,
        	configurable: boolean
        })
        
        Object.preventExtensions(obj)
        Object.isExtensible(obj)
        
        Object.seal(obj)
        
        Object.freeze(obj)
        ```

        - object.seal
          - It prevents new properties from being added just like `Object.preventExtensions`.
          - **It marks all existing properties as non-configurable.**
          - Values of present properties can still be changed as long as they are writable.
          - In short, it prevents adding and/or removing properties.

