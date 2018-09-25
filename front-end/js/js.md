# Javascript

## Query
```js
$('selector');

document.querySelectorAll('selector');
```

```js
$('.css');

document.querySelectorAll('.css');
document.getElementsByClassName('css');
```

```js
$('#id')

document.querySelector('#id');
document.getElementById('id');
```

```js
$('a[target=_blank]');

document.querySelectorAll('a[target=_blank]');
```

## Class Operation
```js
$el.addClass(className);

el.classList.add(className);
```

```js
$el.removeClass(className);

el.classList.remove(className);
```

```js
$el.hasClass(className);

el.classList.contains(className);
```

```js
$el.toggleClass(className);

el.classList.toggle(className);
```

## CSS & Style
```js
//获取style
$el.css('color');

const view = el.ownerDocument.defaultView;
//null的意思是不返回伪元素
view.getComputedStyle(el, null).color;
```
```js
//设置style
$el.css({color: "#ff0011"});

el.style.color = "#ff0011";
```

## Node Operation
```js
//插入html
$el.before(htmlString);
$parent.append(el);
$el.after(htmlString);

el.insertBefore(newDom, ele); //insert newDom before ele
                              //ele is the child of el
parent.appendChild(el);
el.insertAdjacentHTML('beforeend', '<li>content</li>');
```

```js
//获取子节点
$el.children();

el.children;
```

```js
//上一个节点
$el.prev();

el.previousElementSibling;
```

```js
//获取兄弟节点
$el.siblings();

[].filter.call(el.parentNode.children, function(child) {
    return child !== el;
})
```

```js
$el.next();

el.nextElementSibling;
```

```js
$el.parentNode();

el.parentNode;
```

```js
$el.clone(true);    //true means deep clone
                    //false means child nodes won't be cloned
el.cloneNode(true);
```

```js
$('<div/>')

document.createElement('div');
```

```js
$el.remove();

parent.removeChild(el); // remove from parent

el.parentNode.removeChild(el);
```

## Element
```js
$el.text();

el.textContent;
```

```js
$el.text(string);

el.textContent = string;
```

```js
$el.html();

el.innerHTML;
```

```js
$el.html(htmlString);

el.innerHTML = htmlString;
```

```js
$el.attr('class');

el.getAttribute('class');
```

```js
$el.attr('class', 'node');

el.setAttribute('foo', 'node');
```

```js
$el.removeAttr('class');

el.removeAttribute('class');
```

## Data
```js
$el.data("foo", "something"); //set
$el.data("foo") //get
$el.removeData("foo");

el.dataset.foo = "something";
el.dataset.foo;

el.setAttribute('data-foo', 'something');
el.getAttribute('data-foo');
el.removeAttribute('data-foo');
```

## Form
```js
$el.val();  //获取input值

el.value;
```

## Width & Height
```js
$(window).height();

//not include scrollbar
window.document.documentElement.clientHeight;
//include scrollbar
window.innerHeight;
```

```js
$(document).height();

document.documentElement.scrollHeight;
```

```js
$el.height();

//content的高度
function getHeight(el) {
    const styles = this.getComputedStyle(el);
    const height = el.offsetHeight;
    const borderTopWidth = parseFloat(styles.borderTopWidth);
      const borderBottomWidth = parseFloat(styles.borderBottomWidth);
    const paddingTop = parseFloat(styles.paddingTop);
    const paddingBottom = parseFloat(styles.paddingBottom);
    return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}

el.clientHeight;
el.getBoundingClientRect().height;
```

## Position & Offset
```js
$el.position();

{left: el.offsetLeft, top: el.offsetTop}
```

```js
$el.offset();

function getOffset(el) {
    const box = el.getBoundingCientRect();

    return {
        top: box.top + window.pageYOffset - document.documentElement.clientTop,
        left: box.left + window.pageXOffset - document.documentElement.clientLeft
    }
}
```

```js
$(window).scrollTop();

(document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
```

## Event
```js
$el.on(eventName, eventHandler);

el.addEventListerner(eventName, eventHandler);
```

```js
$el.off(eventName, eventHandler);

el.removeEventListener(eventName, eventHandler);
```

```js
$(el).trigger('custom-event', {key: 'data'});

let event;
if (window.CustomEvent) { //是否支持CustomEvent
    event = new CustomEvent('custom-event', {detail: {key: 'data'}});
} else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('custom-event', true, true, {key: 'data'});
}
el.dispatchEvent(event);
```

## Resource
- [原生Js实现JQuery常用方法](https://zhouyuexie.github.io/%E5%BC%80%E5%A7%8B%E6%8B%A5%E6%8A%B1%E5%8E%9F%E7%94%9Fjs%E6%96%B9%E6%B3%95%E5%90%A7/)
- [The Complete ECMAScript 2015-2017 Guide](https://flaviocopes.com/ecmascript/#arrow-functions)