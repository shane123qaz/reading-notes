# CSS

## Main



## CSS Framework Compartion

### Styled Component

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

### CSS in JS

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

### CSS Module

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

