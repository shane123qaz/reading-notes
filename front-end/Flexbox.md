# Flexbox
It is designed as a one-dimensional layout model.

## Two axes of flexbox
- main axis / cross axis
- the cross axis runs perpendicular to the main axis
  + if your flex-direction (main axis) is set to `row` or `row-reverse` the cross axis runs down the `columns`.

## Basics & Terminology
### Flex Container
Use `display: flex` or `display: inline-flex` to create a flex container.

#### Main Axis Attributes
- change the direction `flex-direction: row | row-reverse | column | column-reverse`.
- [multi-line] wrap or not `flex-wrap: nowrap | wrap | wrap-reverse`.
- shorthand value for flex-direction & flex-wrap `flex-flox: row wrap`.
- controls alignment of all items `justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly`.



#### Cross Axis Attributes
- controls alignment of all items `align-items: flex-start | flex-end | center | stretch | baseline`.
- [multi-line]controls space between flex lines on the cross axis `align-content: flex-start | flex-end | center | space-between | space-around | stretch`.

```css
.containter {
  display: flex;
  flex-direction: row | row-reverse | column | column-reverse;
  flex-wrap: nowrap | wrap | wrap-reverse;
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;

  align-items: flex-start | flex-end | center | stretch | baseline;
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### Flex Items
- `flex-basis` defines the size of that item in terms of the space it leaves as **available space**.
    + if the items don’t have a size then the **content**'s size is used as the flex-basis.
- if `flex-grow` set to a positive integer, flex items can grow along the main axis from their flex-basis.
- if we do not have enough space in the container to lay out our items and `flex-shrink` is set to a positive integer the item can become smaller than the flex-basis.
- shorthand value for flex-grow & flex-shrink & flex-basis `flex: 0 1 auto`.
    * `flex: initial` === `flex: 0 1 auto`
    * `flex: auto` === `flex: 1 1 auto`
    * `flex: none` === `flex: 0 0 auto`
    * `flex: <positive number>`
- `align-self:flex-start | flex-end | center | stretch | baseline` controls alignment of an individual flex item on the **cross axis**
- `order: <integer>` target individual items to change where they appear in the visual order. default order value is 0.

```css
.item {
  flex-grow: 0 | <positive number>;
  flex-shrink: 0 | <positive number>;
  flex-basis: 0 | <length> | auto;
  align-self: flex-start | flex-end | center | stretch | baseline;
  order: <integer>
}
```

## Prefixing Flexbox
### Using Mixin
```css
@mixin flexbox() {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
}

@mixin flex($values) {
  -webkit-box-flex: $values;
  -moz-box-flex:  $values;
  -webkit-flex:  $values;
  -ms-flex:  $values;
  flex:  $values;
}

@mixin order($val) {
  -webkit-box-ordinal-group: $val;
  -moz-box-ordinal-group: $val;
  -ms-flex-order: $val;
  -webkit-order: $val;
  order: $val;
}

.wrapper {
  @include flexbox();
}

.item {
  @include flex(1 200px);
  @include order(2);
}
```

### Using Autoprefixer

```js
{
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer({
        browsers: [
          'ie >= 8',
          'ie_mob >= 10',
          'ff >= 30',
          'chrome >= 34',
          'safari >= 7',
          'opera >= 23',
          'ios >= 7',
          'android >= 2.3',
          'bb >= 10'
        ]
      })
    ]
  }
}
```

## Resources
- [flexbox at MDN] https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
- [flexbox at CSS-TRICKS] https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- [flexbox mixins]https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins
- [flexbox froggy](https://flexboxfroggy.com/)
