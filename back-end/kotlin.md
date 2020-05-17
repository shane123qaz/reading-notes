## Basic

- `open` & `override` : can't override method without open modifier

### Coroutines

[runBlocking](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/run-blocking.html) is a regular function and [coroutineScope](https://kotlin.github.io/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/coroutine-scope.html) is a suspending function. 

coroutines always running under the context.

- `runBlocking` : blocks the current thread for waiting.
- `coroutineScope`: just suspends, releasing the underlying thread for other useage.
- `global coroutings`: like daemon threads.
- `channel` 
  - Do not communicate by sharing memory; instead, share memory by communicating.
- `delay` : It doesn't block a thread, but only suspends the coroutine itself
- `Thread.sleep` : will block current thread

#### Reference

- [探究高级coroutines知识](https://www.cnblogs.com/mengdd/p/deep-explore-kotlin-coroutines.html)





