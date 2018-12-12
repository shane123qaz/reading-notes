const path = require('path');
const _ = require('lodash');
const store2 = require('store2');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const Q = require('q');

console.log('============Node============');
console.log('============path============');
console.log('join:', path.join(__dirname, 'dist'));
console.log('resolve:', path.resolve(__dirname, 'dist'));

console.log('join', path.join('a', '/b'));
console.log('resolve', path.resolve('a', '/b'));

console.log('join', path.join('a', 'b'));
console.log('resolve', path.resolve('a', 'b'));


console.log('============ECMAScript============');
console.log('============Generator============');

function* caculator(value) {
    const doubleValue = 2 * (yield(value / 2));
    const another = yield(doubleValue);
    return (value * doubleValue * another);
}

/*
{ value: 5, done: false }
{ value: 14, done: false }
{ value: 14000, done: true }
 */
const calc = caculator(10);
console.log(calc.next());
console.log(calc.next(7));
console.log(calc.next(100));
console.log('============Class============');
class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }
}

const person = new Person('Yang', 'Lu');
console.log(person.fullName);
person.firstName = 'Jie';
console.log(person.fullName);
console.log('============Prototype============');
const anObject = { y: 'y', test: () => 'zoo' };
const x = {
    __proto__: anObject,
    test() {
        return super.test() + 'x'
    }
}
console.log(x.test());
console.log('============Array============');
const arr = ['a', 'b', 'c'];
for (const v of arr) {
    console.log(v);
}

for (const [i, v] of arr.entries()) {
    console.log(i, v);
}

console.log(arr.indexOf('d'));
console.log(arr.includes('d'));
console.log('============Operator============');
console.log(Math.pow(4, 2));
console.log(4 ** 2);
console.log('============String Padding============');
console.log('testing'.padStart(12));
console.log('testing'.padStart(12, '_'));
console.log('testing'.padEnd(12, '-'));

console.log('=================lodash===============');

function isNumber(value) {
    console.log('--------isNumber------');
    if (_.isNumber(value)) {
        return { a: '1' };
    }
}

function isBoolean(value) {
    console.log('--------isBoolean------');
    if (_.isBoolean(value)) {
        return { b: '2' };
    }
}

function isEmpty(value) {
    console.log('---------isEmpty--------');
    if (_.isEmpty(value)) {
        return { c: '3' };
    }
}

const func = _.overSome([isNumber, isBoolean, isEmpty]);

func(undefined);

console.log('============Store2============');
const obj = { a: 1, b: 2 };
store2.set('string', JSON.stringify(obj));
const strVal = store2.get('string');
console.log('string value', strVal);
store2.set('object', obj);
const objVal = store2.get('object');
console.log('object value', objVal);

console.log('============Promise============');

function testPromise(isSuccess) {
    return new Promise(function(resolve, reject) {
        if (isSuccess) {
            resolve('work well~');
        } else {
            reject('something wrong!');
        }
    });
};
testPromise(true).then((msg) => console.log('success:', msg), (err) => console.log('failed:', err));
testPromise(false).then((msg) => console.log('success:', msg), (err) => console.log('failed:', err));
console.log('============Promisifying XMLHttpRequest============');

function get(url) {
    return new Promise(function(resolve, reject) {
        const req = new XMLHttpRequest();
        req.open('GET', url);
        req.onload = function() {
            if (req.status == 200) {
                resolve(req.response);
            } else {
                reject(req.statusText);
            }
        }
        req.onerror = function() {
            reject('Network Error');
        }
        req.send();
    });
};

get('package.json')
    .then(function(response) {
        console.log('success:', response);
    })
    .catch(function(error) {
        console.error('failed:', error);
    });

console.log('============Q.js============');
Q.fcall(function() { return 10; })
    .then((val) => console.log('wrap to a promise', val));


function test() {
    return Q.fcall(() => '123')
        .then(value => `test q: ${value}`)
}

function aFn() {
    return test().then(value => { console.log(value); return value; });
}

aFn().then(value => console.log('aaaaaaaaaaaaaaaa ', value))