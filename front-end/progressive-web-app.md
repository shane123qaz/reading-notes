# Progressive Web App
## Concepts
### App shell
- The app "shell" is the minimal HTML, CSS and JavaScript required to power the user interface and when cached offline can ensure instant, reliably good performance to users on repeat visits.
- This means the application shell is not loaded from the network every time the user visits. Only the necessary content is needed from the network.

### Storage
#### Local Storage
- Easy to use key/value
- Can only store strings
- Synchronous

#### Cache
- Easy to use
- Asyncronous
- FAST

#### IndexDB
- FAST
- Complex data
- Asyncronous
- Transactional

### Service Worker
A service worker is a javascript file that is run by your browser in the background, separate from your webpage.

#### Flow Chart
```mermaid
graph LR;
    WebPageRegisterSW --> Installing;
    Installing --> Actived;
    Installing --> Error;
    Actived --> Idle;
    Idle --> Push/Message;
    Idle --> Terminated;
    Idle --> Fetch;

    Push/Message --> Idle;
    Terminated --> Idle;
    Fetch --> Idle;
```

#### Service Worker Scope
```js
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => something);
}
```

- /sw.js means the service worker will fetch event for the entire origin
- /folder/sw.js means the service worker only fetch event for the page who's URL start with /folder/something

#### Caching the app shell
```js
self.addEventListener('activate', function(e) => {
    e.waitUntil(
        caches.keys
    );
})
```


## Resources
- [Web Page Test](https://www.webpagetest.org/)
- Storage
    - [localForage - Offline storage, improved. Wraps IndexedDB, WebSQL, or localStorage using a simple but powerful API](https://localforage.github.io/localForage/)
    - [store2 -  A better way to use localStorage and sessionStorage](https://github.com/nbubna/store)
    - [lovefield - a relational database for web apps](https://github.com/google/lovefield)
- Service Worker
    - [tool - show all the installed service workers, their state, update, get rid of them](chrome://serviceworker-internals/)