# Tech
## Google mWeb Specialist Certification
### [Media query](./front-end/media-query/media-query.md)
### [Responsive image](./front-end/responsive-image/responsive-image.md)
### [Flexbox](./front-end/Flexbox.md)
### [Grid](./front-end/Grid.md)
### [Progressive Web App](./front-end/progressive-web-app.md)

### HTML Basic
- <script/>标签如果没有加上async属性，会block浏览器，而<link>标签就没有这个问题
- 放在header中的javascript代码会进行预加载（即：在页面加载之前就会进行），所以需调用才执行的脚本或事件触发执行的脚本放在HTML的head部分中。当你把脚本放在head部分中时，可以保证脚本在任何调用之前被加载
    - header中的JavaScript只是比页面先加载，但是header中哪些JavaScript并没有执行，只有被调用时才会执行header中那些JavaScript
    - header中的JavaScript脚本会在页面加载前执行，事件会在被触发后执行
    - 通常外部脚本都是在header中引入
- 放在body中的JavaScript代码会在页面加载完成后才进行加载，当页面被加载时执行的脚本放在HTML的body部分。放在body部分的脚本通常被用来生成页面的内容
    - body中的JavaScript脚本会按照页面的加载顺序加载执行，事件也会在被触发后再执行
```html
<html>
    <head>
        <meta charset="utf-8">
        <title>Hello World</title>
        <link rel="stylesheet" href="css/normalize.css">
        <script src="somepath.js"></script>
    </head>
</html>
```

### [Webpack](./front-end/webpack.md)

### Tools
- [chrome-vimium](./tools/chrome-vimium.md)
- [free pictures](https://pixabay.com/)
#### Http server
- http-server
- python -m SimpleHTTPServer 8080

## Resources
- [front-end online courses](https://classroom.udacity.com/me)
- [front-end libs collection - wesomes](https://www.awesomes.cn/repos/Applications/Frameworks)
    - [using to control headless chrome by node api - puppeteer](https://www.awesomes.cn/repo/GoogleChrome/puppeteer)
    - [libs & plugins](https://juejin.im/post/5ba7d5dd5188255c6140cc9d)
- [cmd](https://github.com/jlevy/the-art-of-command-line)
- language & frameworks
    + [electron `build cross-platform desktop app with js/html/css`](https://github.com/electron/electron)
    + [perl](https://www.perl.org/)
    + [graphql](https://graphql.org/)
- tools
    - [see hover state in chrome developer tool](https://stackoverflow.com/questions/4515124/see-hover-state-in-chrome-developer-tools)






