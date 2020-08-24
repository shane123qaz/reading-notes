import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import print from './print';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // addIcon(element);
    addBtn(element);

    return element;
}

function addBtn(element) {
    const btn = document.createElement('button');
    btn.innerHTML = 'Click me to show console log';
    btn.onclick = () => print(Data);
    element.appendChild(btn);
}

function addIcon(element) {
    const icon = new Image();
    icon.src = Icon;
    element.appendChild(icon);
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated print module');
        print();
    })
}