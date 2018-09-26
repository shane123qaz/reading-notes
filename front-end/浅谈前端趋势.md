# 浅谈前端趋势
收集前端老司机们对于前端发展的看法，借鉴前端发展史，关注近期前端热点和大家一起聊聊前端发展趋势以及作为前端开发的我们要如何应对

- 大前端仍然会很重要
    + AR/VR
    + PC
    + Mobile
- 全栈+主域
    + 学习使用框架
    + 学习写框架 - 工程实践对比
        * Js基础
        * Layout
        * 为什么？核心思想，解决的问题
    + 性能
        * 网路层
        * Cache
        * Service worker
        * Server Render
        * 部署优化
            * CDN
- 前端会向后端发展

## Tech
- 渐进式Web应用 - PWA/小程序
    - 目的？
        - 能够显著提高应用加载速度
        - 让 web 应用可以在离线环境使用  （Service Worker）
        - web 应用能够像原生应用一样被添加到主屏、全屏执行 （Web App Manifest）
        - 进一步提高 web 应用与操作系统集成能力，让 web 应用能在未被激活时发起推送通知 （Push API 与 Notification API） 等等。
    - 技术？
        - Service Worker
        - Web App manifest
        - Push API / Notification API
    - 劣势？
        - 支持性问题 - iOS ／ Andriod
        - 变数 - Push Notification没有确定的协议
- WebAssembly
    - 是什么？
        - 新的底层安全的二进制语法
        - 接近原生的性能运行
        - 能突破前端3D game 、 VR/AR 、 机器视觉、图像处理等运行速度瓶颈
    - 跟Js对比的优势
        - wasm的优势是本身就是通过编译器并优化过后的二进制文件，可以直接转换为机器码，省去了Javascript需要解析，优化的工作，所以在加载和执行上本身就具有优势
    - 具体优势点
        - 文件获取
        - 解析
        - 优化
        - 垃圾回收
- 微前端

### 主流开源协议
- BSD
- Apache
- GPL
- LGPL
- MIT

![协议分析图](https://pic2.zhimg.com/80/253a7b1819e2af555ed0a7e0f11a0b59_hd.jpg)


## 前端的其他使用场景

## Resource
- [浅谈web前端的发展趋势](https://juejin.im/post/5b440eeae51d4519195a9bd3)
- [2017前端技术发展回顾](https://hijiangtao.github.io/2017/12/18/A-Recap-of-Front-End-Development-in-2017/)