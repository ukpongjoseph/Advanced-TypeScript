"use strict";
//          FUNCTIONS
// Functions are first class objects in typeScript
Object.defineProperty(exports, "__esModule", { value: true });
//              INVOKING AND DECLARING A FUNCTION
// There are 5 ways to annotate a function in typeScript just like in javascript
// (1) Named Function
function add(a, b) {
    return a + b;
}
// (2) Function expression
let greet = function (name) {
    return `Hello, ${name}`;
};
// (3) Arrow function expression
let greetUser = () => {
    return `Hello, User`;
};
// (4) Short Hand arror function expression (this method doesn't use the curly braces)
let welcomeUser = (a) => `Hello, ${a}`;
// (5) Function constructor
let sum = new Function("name", `return "Hello" + name`);
// The last method is unsafe and not adviced to be used except in specific conditions
//              OPTIONAL AND DEFAULT PARAMETERS
// Functions also support optional parameters via the use of "?", however, optional parameters should come last in function declaration
// Function also recieve default parameters. That is parameters whose values are passed during function declaration. They necessarily do not need tobe passed as argument during function call except when necessary. They are similar to optional parameters except that they do not need to come last during declaration
// OPTIONAL PARAMETER
function add1(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
// Since c is an optional parameter, we are adding conditionalyy based on the presence of c
// DEFAULT PARAMETER
function add2(a, b, c = 3) {
    return a + b + c;
}
add2(3, 4, 5);
add2(5, 7);
let sum1;
// Example 1
// In this example, we pass an argument. We check if the argument is an array using Array.isArray() method then reduce the array else we just return the number or numbers
sum1 = (list) => {
    if (Array.isArray(list)) {
        return (list.reduce((total, currentVal) => total + currentVal, 0));
    }
    return list;
};
let result = sum1([1, 2, 3, 4, 5, 6]);
console.log(result);
// Example 1 above works only if we know the number of parameters the function is execting and we can also pack the parameters into an array. But what if we don't know the number of parameters our function is expecting?. We then turn to rest operator/parameters
// Example 2 (using Rest operators)
let sum2 = (...list) => {
    if (Array.isArray(list)) {
        return (list.reduce((total, currentVal) => total + currentVal, 0));
    }
    return list;
};
sum2(1, 2, 3, 4, 5, 6, 7, 8, 9);
// CALL, APPLY AND BIND
// There are various methods of invoking functions. The regular way (function name and parenthesis) and other special methods using call, apply or bind, these methods recieve an object as their first parameter/argument. The call, apply or bind methods are most important in the context of objects (since they have their "this") because they control the "this"context within a function. To simplify it, when an object invokes a function, the "this" keyword refers to the object that invokes the function but with call, apply and bind method, it is different. With these methods, the this keyword points to the object that is passed as the first argument and these methods are beneficial when the object and the function have no relationship (function is not a method of the object) or different scope.
const person = {
    name: "Josiah",
    age: 24
};
const details = ["Mariam"];
function greet1() {
    console.log(`My name is ${this.name} and i am ${this.age} years old`);
}
function greet2() {
    console.log(`My name is ${this[0]}`);
}
greet1.call(person);
greet2.apply(details);
let greet3 = greet1.bind(person);
greet3();
// It can be seen above that greet1 and greet2 is not a method of the object person and details respectively, yet they still don't find the "this" keyword strange
// Call and apply works in the same way, except that apply works with array
// The bind keyword store the value of the function call in another variable. This new variable is then invoked
// GENERATOR FUNCTION
// Generator function are special kind of functions that can pause execution and resume execution unlike normal functions that run from start to finish at once
// Generator functions are spotted with the "yield" keyword, next() method during function call and asterik (*). They return a generator object like {value: "output of execution", done: "true/false"}. Generator functions use the yield keyword to yield values. They also yield the next value whan called via the next() method.
// Generator functions pause execution and return a generator object when they encouter the yield keyword. They resume execution when they encounter the next() method.
// To stop execution of generator functions, we use the return keyword and to return an error we use the throw keyword. Both return and throw stops the function execution
// Generator functions do not return void, a values must be return
function* test(a, b) {
    yield a;
    yield b;
}
const functionReturn = test("Atanda", "Bondu");
console.log(functionReturn.next());
console.log(functionReturn.next());
console.log(functionReturn.next());
// The Generator function above takes two parameters and yield them one by one. When the function is initially invoked, the first yield is invoked and paused until when the second function call before the second yield is return. The third function call returns a generator object of yield to be undefined (because we arenot yielding or returning anything) and done to be true
// Generator functions are used to return a bunch of value sequentially, handle large data piece by piece
// ITERATORS AND ITERABLES
// An iterator is an object with the next() method. To make it simpler, remember that arrays, objects and functions are objects (with functions as first class object). In a more simpler term, an iterator is an object (most likely a function ) with the next method. This iterator is able to iterate over an iterable (moving from one element or value in the iterable to another via the next() method and then returning a value). Iterators moves/iterates over an iterable and then return a value, most likely an object of the type, {value: return-value, done:true/false}.
// An iterable on the other hand is any object or collection of data (array, string and so on) that has a [Symbol.iterator] method/ property. This [Symbol.iterator] property returns an iteraror that is able to iterate over an iterable and then return a value. Some types like arrays and strings have default implementation of an iterator and that is why it is easy to iterate over them. The compiler checks for their [Symbol.iterator] property, if present, methods like for loops and the likes are permitted. Not all types have a default iterator property!!!! and for thses types, to itearate over them, we need to create a custom [System.iterator] property so as to be able to iterate over them.
// How do we create a custom iterable?.....It is shown below
// Remember an iterable is an object, it has a [Symbol.iterator] property. The [Symbol.iterator] property returns an iterator function/method/object. This method/function/object return an Object with a next() method. The next method returns a value (an object with value property and done property) 
const iterable = {
    name: "Josiah",
    [Symbol.iterator]: () => {
        let items = [1, 2, 3, 4, 5, 6, 7];
        let counter = 0;
        return {
            next() {
                return {
                    value: items[counter++],
                    done: counter >= items.length ? true : false
                };
            }
        };
    }
};
// The above object is an iterable. It has a custom [Symbol.iterator], a function that returns an iterator that iterates over an hard coded array (items). This idea of making an iterable makes objects behave like an array. Example is shown below. The Object below (countDown) will be made to behave like an array only using its property counter
const countDown = {
    counter: 5,
    [Symbol.iterator]() {
        let number = this.counter;
        return {
            next() {
                return {
                    value: number--,
                    done: number < 0 ? true : false
                };
            }
        };
    }
};
for (let num of countDown) {
    // The logs to the console from this loop will be 5,4,3,2,1
    console.log(num);
}
//  FUNCTION CALL SIGNATURE
// Function call signature defines the structure of a function. These call signature can further be extraxted and bound to be type aliases. Thereby when a function is declared, its type will not be Function, rather it will be of the type aliase made from the call signature.
// Say we have a function that recieves two parameters of type number, add then and returns a result of type number, the function signature will look like
let sum3;
sum3 = (a, b) => {
    return a + b;
};
let addNumbers = (x, y) => {
    return x + y;
};
let squareNumber = (a, b) => {
    return a(b);
};
// Function implementation
function add9(a, b) {
    return a + b;
}
function sum6(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    else {
        throw new Error("Invalid type");
    }
}
// From example 2, it can be seeen that the function implementation handles all cases (string or number)
//          POLYMORPHISM AND GENERICS.
// The concept of polymorphism is that a piece of code/function can work with many and different data types. The most import kind of polymorphism is the generic polymorphism also called parametric polymorphism. So far, we have been working with concrete types (Strings, booleans, number, arrays). They are called concrete types because our code knows what to expect and if any other thing is fed to the code, the code will break. In cases, where we don't know what data type to expect, how do we write our code?
// Say we have a function called filter, that expects data in form of an array (but array of what?) and filter the data based on certain conditions. How do we write the function when we don't know know what to expect.
// let filter:(a:any[], b:any)=>any[]
// The function above is loose as both parameters have the type any (which is the safest bet but this makes the function loose)
// We can define the function to expect strings but that is concrete and it may throw if something else is fed into the function and the same goes for numbers, array of numbers, array of strings and other concrete data type.
// We could use unions but this would make the code base too long as we would want our union to cover for arrays, objects, numbers, booleans and string and the function implementation would need to cover for all these scenarios. This is where generics comes in.
// With Generics, we can rewrite the function as;
let filter;
const personalDetails = {
    name: "Tar1q",
    age: 23,
    phoneNumber: 12345678
};
const mapData = (a, b) => {
    return a.map(b);
};
// In the example above, generic type T and U are used on the call signature and function.
//                                       GENRIC TYPE INFERENCE
// TypeScript can infer the type of a generic type parameter by looking at the data passed/bound to the placeholder, generic type. We can also explicitly annotate the type but in doing this , the "All or nothing rule must be applied". If you have x number of generic type parameter, all of their types must be explicitly annotated without leaving anyone out.
// There are certain scenerios where typeScript can infer wrongly, that is why explicit annotation can be necessary and useful.
//# sourceMappingURL=Function.js.map