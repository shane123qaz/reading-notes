const path = require('path');
const _ = require('lodash');
const store2 = require('store2');

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