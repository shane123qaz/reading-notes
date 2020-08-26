# Media Query
## Why use media query
[Responsive Web Design](./source/Solution/index.html)
- let web developers do specific things for specific environments
## How to use media query
- [example](./source/media-query/index.html)
    + [over500.css](./source/media-query/over500.css)
    + [media-styles.css](./source/media-query/media-styles.css)
```html
<link rel="stylesheet" type="text/css" href="over500.css" media="screen and (min-width:500px)">
<link rel="stylesheet" type="text/css" href="media-styles.css">
```
- Use import url - *for performance reasons, we definitely want to avoid @import*
```css
@import url("no.css") only screen and (min-width:500px);
```
- Keywords
    + min-width / max-width - based on the browser window
    + min-device-width / max-device-width - based on the screen
- Breakpoints - the point at which the page changes layout
    + [original](./source/Start/index.html)
    + [solution](./source/Solution/index.html)
        * [responsive.css](./source/Solution/responsive.css)
## Resources
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
- https://classroom.udacity.com/courses/ud893/lessons/3533879576/concepts/35709090380923

