# Sass/Scss & Less
- 都是css的预编译处理语言
- 引入了mixin，参数，嵌套规则，运算，颜色，名字空间，作用域，Js赋值

## Difference
- less是基于Javascript的客户端处理 
- sass是基于ruby是服务器处理

## [Less](http://lesscss.org/)
- `npm i less -D`
- grammer
    ```less
    @box-width: 100px;
    .box {
        width: @box-width;
    }

    .box-b {
        .box
    }

    @header-border: 1px;
    @base-color: #111;
    #header {
        color: @base-color * 3;
        border-left: @header-border;
        border-right: @header-border * 2;
    }
    ```
## [Sass/Scss](http://sass-lang.com/)
- `npm i sass -D` || `brew install sass/sass/sass`
- `sass --style compressed xxx.sass xxx.css` 
- compile parameter
    - nested: 嵌套缩进的css代码, default
    - expanded: 没有缩紧的,扩展的css代码
    - campact: 简介格式的css代码
    - compressed: 压缩后的css代码, production
- grammer
    ```scss
    @import xxx.scss

    $box-width: 100px;
    .box {
        width: $box-width;
    }

    @mixin left($margin-left) {
        float: left;
        margin-left: $margin-left;
    }

    @function getHeight($height) {
        return $height*2;
    }

    .box-b {
        @extend: .box;
        @include left(10px);
        height: getHeight(20px);
    }
    ```

## [Stylus](http://stylus-lang.com/)