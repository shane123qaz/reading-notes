### Basic

- Enum

  ```typescript
  enum Color {Red=1, Green, Blue}
  const color: Color = Color.Green;
  const colorName: string = Color[2];
  
  console.log("=======>", colorName); //"Green"
  
  enum LogLevel {
    ERROR, WARN, INFO, DEBUG
  }
  // type LogLevelStrings = "ERROR" | "WARN" | "INFO" | "DEBUG"
  type LogLevelStrings = keyof typeof LogLevel;
  
  enum Value {A}
  const a = Value.A;
  const nameOfA = Value[a]; // "A"
  ```

- Type assertions

  ```typescript
  const strValue: any = "this is a string";
  
  const numValue1: number = (<string>strValue).length;
  const numValue2: number = (strValue as string).length;
  ```

- Interface

  ```typescript
  interface Point {
    readonly x: number;
    readonly y: number;
    [propName:string]: any; //allow other fields with any type
  }
  
  const a: number[] = [1,2,3,4];
  const ra: ReadonlyArray<number> = a;
  ra[0] = 12; //error
  
  interface StringArray {
    [index: number]: string;
  }
  
  interface Shape extends StringArray, Point {
    color: string;
  }
  ```

- Class

  ```typescript
  class Employee {
    private fullName: string;
    
    get fullName(): string {return this.fullName;}
    set fullName(name: string) {this.fullName = name;}
  }
  ```

- Functions

  ```typescript
  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + "" + restOfName.join("");
  }
  
  const person = {
    name: {firstName: "hello", lastName: "ketty"},
    age: 123
    move: function() {
  		return `${this.name.firstName}${this.name.lastName} is moving`;
    }
  }
  ```

- Generic Types

  ```typescript
  function identity<T>(arg: T): T {
    return arg;
  }
  
  class GenericNumber<T> {
    zeroValue: T;
    add(x: T, y: T) => T;
  }
  
  interface Lengthwise {
    length: nubmer;
  }
  class loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg
  }
  ```

- Advanced Types

  - `obj as type`
  - `obj is type`
  - `action in obj`
  - `typeof`
  - `instanceof`
  - `identifier!`: remove `null` and `undefined`from type of identifier
  - conditional types
    - `Exclude<T, U>`
    - `Extract<T, U>`
    - `NonNullable<T>`
    - `ReturnType<T>`
    - `InstanceType<T>`

  ```typescript
  interface A {a: number}
  interface B {b: number}
  
  const andObj: A & B = {a: 1, b: 2}
  
  const orObj1: A | B = {a: 1};
  const orObj1: A | B = {b: 2};
  
  interface Bird {fly();}
  interface Fish {swim();}
  function isFish(pet: Bird | Fish): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  function move1(pet: Bird | Fish) {
    if (isFish(pet)) {
      pet.swim();
    } else {
      pet.fly();
    }
  }
  
  function move2(pet: Bird | Fish) {
    if ('swim' in pet) {
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
  ```

- Iterators and Generators

  - `for of` ,  `for in`

    ```typescript
    const list = ["a", "b", "c"];
    for (let i in list) {
      console.log(i);	// 0, 1, 2
    }
    for (let i of list) {
      console.log(i); // "a", "b", "c"
    }
    ```

- Modules

  - `export`

    ```typescript
    export interface StringValidator {}
    export const validator = {};
    export class Validator implements StringValidator {}
    class TestA {}
    export {TestA as Testaa};
    export {TestA as Testbb} from "./filepath";
    export * from "./filepath";
    export default class TestB {}
    
    import * as React from "react";
    import "./filepath"
    import { A, B as C } from "filepath"
    
    declare var A
    declare function A() {}
    declare class A {}
    declare enum A {}
    declare namespace A {}
    declare module A {}
    ```

- Namespaces

  ```typescript
  namespace Validation {
    export interface StringValidator {}
    export class ZipCodeValidator implements String Validator {}
  }
    
  declare namespace D3 {
    export interface Event {}
    export interface Selectors {}
  }
  ```

- Declaration Merging

  - class can't be merged
  - variable
  - function

  ```typescript
  interface Box {
      height: number;
      width: number;
  }
  interface Box {
      scale: number;
  }
  const box: Box = {height: 5, width: 6, scale: 10};
  ```

  