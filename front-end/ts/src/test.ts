interface Person {
    firstName: string;
    lastName: string;
    [propName: string]: any;
}
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
console.log("====1===>", greeter({firstName: "Ketty", lastName: "Lee", other: "Who are you?"}));


enum Color {
    Red = 1,
    Green,
    Blue
}
const colorName: string = Color[2];
console.log("====2===>", colorName);


const someValue: any = "This is a string";
console.log("====3===>", (<string>someValue).length);
console.log("====4===>", (someValue as string).length);

interface StringArray {
    [index: number]: string;
}
const items: StringArray = ["hello", "ketty", "who am I?"];
console.log("====5===>", items);

interface SelectableControl {
    select(): void;
}
class Control {
    private state: any;
}
class Button extends Control implements SelectableControl {
    select() {
        console.log("====6===>button be selected");
    }
}

function identity<T>(arg: T): T {
    return arg;
}
console.log("====7===>", identity<string>("Here is string"));

enum LogLevel {
    ERROR = 1, WARN, INFO, DEBUG
}
type LogLevelStrings = keyof typeof LogLevel;
function checkLogLevel(key: LogLevelStrings) {
    const num = LogLevel[key];
    console.log("====8===>", num);
}
checkLogLevel("ERROR");
const error = LogLevel.ERROR;
console.log("====9===>", LogLevel[error]); // "ERROR"

interface First {
    name: string;
    age: number;
}

interface Second {
    name: string;
    weight: number;
}

const a: First & Second = {
    name: "123",
    age: 12,
    weight: 23
}

interface Bird {
    fly();
    layEggs();
}
interface Fish {
    swim();
    layEggs();
}
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
const bird: Bird = {
    fly: () => {console.log("===fly===");},
    layEggs: () => {console.log("===lay eggs===");}
}

const fish: Fish = {
    swim: () => {console.log("===swim==")},
    layEggs: () => {console.log("===lay eggs===")}
}

const animalPlay = (pet: Fish | Bird) => {
    if (isFish(pet)) {
        pet.swim();
    } else {
        pet.fly();
    }
} 

function fixed(name: string | null): string {
    function postfix(epithet: string) {
        return name!.charAt(0) + '.  the ' + epithet; // ok
    }
    name = name || "Bob";
    return postfix("great");
}

const list = ["test", "it", "is", "value"];

for(let i in list) {
    console.log(i);
}
console.log("===============");
for (let i of list) {
    console.log(i);
}

interface Box {
    height: number;
    width: number;
}
interface Box {
    scale: number;
}

const box: Box = {height: 5, width: 6, scale: 10};

console.log("*********************");

const promise = () => new Promise((resolver, reject) => {
    setTimeout(() => {reject("Hello")}, 2000);
})

// promise.then(console.log)
const test = async () => {
    const result = await promise();
    console.log("+++++++++", result);
}

test()