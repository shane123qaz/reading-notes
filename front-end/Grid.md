# Grid
- do I only need to control the layout by row or column – use a flexbox
- do I need to control the layout by row and column – use a grid
- content out - use a flexbox
- layout in - use a grid

## Concepts
### Grid Container
We create a grid container by declaring display: grid or display: inline-grid on an element. As soon as we do this all direct children of that element will become grid items.
### Grid Tracks
We define rows and columns on our grid with the `grid-template-columns` and `grid-template-rows` properties.
### Grid Lines
It should be noted that when we define a grid we define the grid tracks, not the lines.
### Grid Cells
A grid cell is the smallest unit on a grid.
### Grid Areas
Items can span one or more cells both by row or by column, and this creates a grid area.
### Gutters
Gutters or alleys between grid cells can be created using the column-gap and row-gap properties, or the shorthand gap.

### Box alignment in Grid Layout
#### The two axes of a grid layout
- block axis - column
- inline axis - row

#### Aligning items on the Block Axis
- align-items - container
- align-self - item

#### Justifying Items on the Inline Axis
- justify-items - container
- justify-self - item

#### Aligning the grid tracks on the block axis
- align-content

#### Justifying the grid tracks on the row axis
- justify-content

## How To Use
- Give a grid item `position: absolute`.
    + A grid container as containing block, add `position: relative` to `container`.
    + A grid container as parent, remove `position: relative` from `container`.
    + With a grid area as the parent, add `position: relative` to that `area`.
- If set the box `display: content`, it would normally create disappears, and the boxes of the child elements appear as if they have risen up a level. This means that children of a grid item can become grid items.

- properties
    + `grid-template-columns` / `grid-template-rows`
    + `grid-column-start` / `grid-column-end`, `grid-row-start` / `grid-row-end`
    + `grid-column` / `grid-row`
        * `grid-column`: `grid-column-start` / `grid-column-end`
        * `grid-row`: `grid-row-start` / `grid-row-end`
    + `grid-area`: `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end`
    + `grid-column-gap` / `grid-row-gap`
    + `grid-gap`: `grid-row-gap` / `grid-column-gap`
    + `span` you can specify a start line and then the number of tracks
    + `grid-template-areas`
    + `writing-mode`: `horizontal-tb` / `vertical-rl` / `vertical-lr` / `sideways-rl` / `sideways-lr`

```css
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
}

.box1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
}

.box1-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 4;
}

.box1-2 {
    grid-area: 1 / 1 / 4 / 2;
}

.box1-3 {
    grid-row: 1 / span 3;
    grid-column: 1;
}

.box2 {
    grid-column-gap: 20px;
    grid-row-gap: 1em;
}

.box2-1 {
    grid-gap: 1em / 20px;
}
```

## CSS Box Alignment Module Level 3
- box alignment properties
    + justify-content - main/inline
    + align-content - cross/block
    + justify-self - inline
    + align-self - cross/block
    + justify-items - inline
    + align-items - cross/block

## Resources
- [Box Alignment Level 3](https://drafts.csswg.org/css-align/)
- [Grid at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)