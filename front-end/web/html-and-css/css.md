## CSS

### Basic

- Every element in web design is a rectangular box

  - Box Model

    <img src="../images/box-model.png" style="zoom:40%;" />

    - width=content-box-width + padding-left + padding-right + border-left + border-right
    - height=content-box-height + padding-top + padding-bottom + border-top + border-bottom

- CSS文档流，其实分为定位流、浮动流、普通流三种。

  - 普通流：元素按照其在HTML中的位置顺序决定其排布的过程。

  - 只要不是float和绝对定位方式布局的，都在普通流里。

  - [定位](http://zh.learnlayout.com/position.html)

    - static：position默认是static，即未被设置定位的。而只有元素被定位了，它的top，left，right，bottom才会生效。
    - relative：元素会在自身文档流所在位置上被移动，其他的元素则不会调整位置来弥补它偏离后剩下的空隙。
    - absolute：脱离文档流，其他的元素会调整位置来弥补它偏离后剩下的空隙。元素偏移是相对于最近的非static元素的父级定位的。
    - fixed: 生成绝对定位的元素，元素相对的偏移的参考是可视窗口，即使页面滚动，元素仍然会在固定位置。可以做对话框或者悬浮广告。

  - z-index：指定了一个元素及其子元素的 z-order，通常来说 z-index 较大的元素会覆盖较小的一个。仅对定位的元素有效。

  - 脱离文档流

    - `position:absolute`

    - float：让block的元素无视float元素，让inline元素像流水一样围着float元素实现浮动布局。

      - [特性](https://segmentfault.com/a/1190000014554601)

        - 包裹性 - 包裹 和 自适应
        - 高度塌陷： 会让父元素的高度塌陷，可以设置父级容器的`overflow`属性为`auto`,使其自动撑满
        - 块状化：一旦设置float，就会自动具备`display:block`
        - 没有任何margin重叠

      - 使用浮动需要注意的是如果浮动的元素高度比父级容器还高，那么需要设置父级容器的`overflow`属性为`auto`,使其自动撑满。

      - 在非IE浏览器（如Firefox）下，当容器的高度为auto,且容器的内容中有浮动（float为left或right）的元素，在这种情况下，容器的高度不能自动伸长以适应内容的高度，使得内容溢出到容器外面而影响布局的现象，为了防止这个现象的出现而进行的CSS处理，就叫CSS清除浮动。

      - 清除浮动的几种方式

        - div的高度是它里面整个文档流的高度, 元素加上clear：both后，能让它在所有浮动元素的下面。但是需要添加无语义的html元素

          - ```html
            <div class="clear"></div>
            ```

          - ```css
            .clear {
              clear: both;
            }
            ```

        - 相当于在父元素里添加一个子元素（默认内联元素），用来清除容器内的浮动元素。

          - ```css
            .parent::after {
              content: "";
              display: block;  
              clear: both;
            }
            ```

        - clearfix

          ```css
          .clearfix {
            overflow: auto;
          }
          ```

- BFC / IFC / GFC / FFC

  - BFC：块级格式化上下文
    - 布局规则：内部的box会在垂直方向，一个接一个的摆放
    - 属于同一个BFC的两个相邻box的margin会发生重叠
      - 两个相邻块级子元素分别属于不同BFC时可以组织margin重叠
    - 计算BFC的高度时，浮动元素也参与计算
  - IFC：行级格式化上下文
    - IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响)
    - 用途
      - 水平居中：当一个块要在环境中水平居中时，设置其为inline-block则会在外层产生IFC，通过text-align则可以使其水平居中
      - 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置其vertical-align:middle，其他行内元素则可以在此父元素下垂直居中
  - GFC：网格布局格式化上下文
    - `display:grid`
  - FFC：自适应格式化上下文
    - `display:flex` or `display:inline-flex`

-  [选择器](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/css-selector.html)

  - 基本选择器

    - 通配符选择器（`＊`）
    - id选择器（`#ID`）
    - 类选择器（`.className`）
    - 元素选择器(`E`)
    - 后代选择器（`Ｅ Ｆ`）
    - 子元素选择器(`E>F`)
    - 相邻兄弟元素选择器(`E + F`)
    - 群组选择器（`selector1,selector2,...,selectorN`）

  - 属性选择器

    - `E[attr]`：只使用属性名，但没有确定任何属性值
    - `E[attr="value"]`：指定属性名，并指定了该属性的属性值
    - `E[attr~="value"]`：指定属性名，并且具有属性值，此属性值是一个词列表，并且以空格隔开，其中词列表中包含了一个value词，而且等号前面的“〜”不能不写
    - `E[attr^="value"]`：指定了属性名，并且有属性值，属性值是以value开头的；
    - `E[attr$="value"]`：指定了属性名，并且有属性值，而且属性值是以value结束的；
    - `E[attr*="value"]`：指定了属性名，并且有属性值，而且属值中包含了value；
    - `E[attr|="value"]`：指定了属性名，并且属性值是value或者以“value-”开头的值（比如说zh-cn）;

  - 伪类选择器

    - 锚点伪类
      - `:link`
      - `:visited`
    - 用户行为伪类
      - `:hover`
      - `:active`
      - `:focus`
    - UI元素状态伪类
      - `:checked`
      - `:enabled`
      - `:disabled`

  - CSS3:nth选择器

    - `first-child`
    - `last-child`
    - `nth-child()`

  - 权重:即选择器的优先级

    - 凡是属性值后加上了`!important`，那么它的值不会被其他值替换.

    - 选择器

      - 伪类选择器:`:link`, `:visited`, `:hover`, `:active` ...
      - 伪元素选择器: `::before`, `::after`, `::first-letter`, `::first-line`, `::selection` ...
      - 元素: `body`, `img` ...
      - 属性选择器:`*[rel=up]` , `a[id="a-02"]`...

    - 规则, 优先级矩阵:

      - `!important`标识 (+10000) > 行内样式(+1000) > ID选择器(+100) > 类、属性选择器和伪类选择器(+10) > 元素和伪元素选择器(+1) > 通配符*(+0).

      - 如果权重值相同，后出现的生效。

      - 带有上下文关系的选择器比单纯的元素选择器权重要高.

        - ```css
          p span {
            front-style: italic;
          }
          ```

      - 组合

        - 匹配所有带title的p元素

          ```css
          p[title] {
            front-weight: bold;
          }
          ```

        - 匹配所有a标签link状态之后的样式,利用伪元素来凭空生成内容

          ```css
          a:link:after {
            content: "("attr(href)")";
          }
          ```

- [布局](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/css-layout.html)

  - 常见布局：固定尺寸 和 自适应（响应式）布局

  - flexbox

    - 如果想IE10支持flex布局需要添加`-ms-flexbox`

      - ```css
        .container {
          display: flex;
          display: -ms-flexbox;
        }
        ```

- CSS命名

  - [BEM](http://getbem.com/naming/)：Block__Element--Modifier
  - OOCSS：Object Oriented CSS
  - MVCSS：Modular View CSS

- 动画

  - attributes

    - `animation-duration`: 指定动画完成一个周期所需要时间
    - `animation-timing-function`: 指定动画计时函数，即动画的速度曲线，默认是 "ease"
    - `animation-delay`: 指定动画延迟时间，即动画何时开始
    - `animation-iteration-count`: 指定动画播放的次数，默认是 1
    - `animation-direction`: 指定动画播放的方向。默认是 normal
    - `animation-fill-mode`: 指定动画填充模式。默认是 none
    - `animation-play-mode`: 指定动画播放状态，正在运行或暂停。默认是 running
    - `animation-name`: 指定 @keyframes 动画的名称

  - `@keyframes`: 关键帧

    - ```css
      .move {
        animation: move 2s linear infinite, color 3s infinite
      }
      
      @keyframe	move {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(200px, 0px);
        }
      }
      
      @keyframe color {
        20% {
          background-color: bisque;
        }
        80% {
          background-color: chocolate;
        }
      }
      ```

      

####Reference

- [学习css布局](http://zh.learnlayout.com/)
- [css基础&进阶](https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/)

### Reflow vs Repaint

 -  Page render simple flow

    ```mermaid
    graph LR
    	HTML --> HTML-parser --> DOM-tree
    	Style-Sheet --> CSS-parser --> Style-tree
    	DOM-tree --> Render-tree
    	Style-tree --> Render-tree
    	Render-tree --> Layout
    	Layout --> Render-tree
    	Render-tree --> Painting --> Display
    	
    ```

- [重排一定会导致重绘，重绘不一定导致重排](https://juejin.im/post/6844904083212468238)

  - 重排（回流）：重新生成布局，重新排列元素
    - 触发机制
      - 添加/删除可见的DOM元素
      - 元素位置改变
      - 元素本身尺寸改变
      - 内容改变
      - 页面渲染器初始化
      - 浏览器窗口大小改变
  - 重绘：改变外观，不改变布局

- 最小化渲染

  - 不要一条条地改变样式，而要通过改变class，或者csstext属性，一次性地改变样式
  - 当批量修改DOM时 - 重排2次
    - 让元素脱离文档流 - 隐藏元素 `display:none`
    - 对其进行多重修改
    - 将元素带回文档中
  - 缓存布局信息 - 中间状态不显示在DOM上
  - position属性为`absolute`或`fixed`的元素，重排的开销会比较小，因为不用考虑它对其他元素的影响
  - 使用虚拟DOM的脚本库

####Reference

- https://leohxj.gitbooks.io/front-end-database/content/html-and-css-basic/common-tag.html

### CSS Framework Compartion

#### Styled Component

```shell
npm i --save styled-components
```

```jsx
import React from 'react'
import styled from 'styled-components';

const Button = styled.button `
	color: palevioletred;
	font-size: 1em;
`;

const TomatoButton = styled(Button)`
	color: tomato;
	border-color: tomato;
`;

const Buttons = () => (
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
)
```

#### CSS in JS

```shell
npm i --save emotion
```

```jsx
import React from 'react'
import {css} from 'emotion'

const header_height='114px';
const footer_height='114px';

const headerStyles = css({
  '.header': {
		font-size: '10px'    
  }
})
const textStyles = css({
  '.text': {
    width: '440px',
    minHeight: `calc(100vh - ${header_height} - ${footer_height})`
  }
});

const Content = ({value}) => (
	<div className={headerStyles}>
  	<label className={textStyles}>{value}</label>
  </div>
)
```

#### CSS Module

- `:global`: 声明全局规则，不会被编译成hash string

- `compose`: 一个选择器继承另一个选择器的规则

- `postcss-loader & postcss-modules-values`: css modules 支持使用变量

  ```shell
  npm i --save postcss-loader postcss-modules-values
  ```

colors.css

```css
@value blue: #0c77f8;
@value red: #ff0000;
@value green: #aaf200;
```

another.css

```css
.firstname {
  color: yellow;
}
```

App.css

```css
@value colors: "./colors.css";
@value blue, green from colors;

.title {
  font-size: '10px';
  compose: firstname from './another.css'
}

:global(.title) {
  color: green;
}

.content {
  compose: title;
  background-color: blue;
}
```

App.js

```jsx
import React from 'react'
import styles from './App.scss'

const App = () => (
	<h1 className={styles.title}>Using module style</h1>
  <h2 className='title'>Using global style</h2>
)
```

webpack.config.js

```js
module.exports = {
  module: {
    loaders: [
			{
        test: /\.css$/,
        loaders: [
        	'style-loader?sourceMap',
        	'css-loader?modules&localIdentName=[path][name]__[local]--[hash:base64:5]',
          'postcss-loader'
        ]
      }
    ]
  }
}
```

or

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: { 
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```

