# React

## React Hook
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
- Don’t call Hooks inside loops, conditions, or nested functions.
    - Call Hooks from React function components.
    - Call Hooks from custom Hooks
- eslint-plugin-react-hooks
    - `npm install eslint-plugin-react-hooks@next`
    - 
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
    
- [Hooks API Reference](https://reactjs.org/docs/hooks-reference.html)
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