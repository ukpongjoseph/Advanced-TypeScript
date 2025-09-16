//          FUNCTIONS
// Functions are first class objects in typeScript

//              INVOKING AND DECLARING A FUNCTION
// There are 5 ways to annotate a function in typeScript just like in javascript

// (1) Named Function
function add(a: number, b: number) : number{
    return a + b 
}

// (2) Function expression
let greet = function(name: string) : string{
    return `Hello, ${name}`
}

// (3) Arrow function expression
let greetUser = () : string => {
    return `Hello, User`
}

// (4) Short Hand arror function expression (this method doesn't use the curly braces)
let welcomeUser = (a: string) : string =>
     `Hello, ${a}`

// (5) Function constructor
let sum = new Function("name", `return "Hello" + name`)
// The last method is unsafe and not adviced to be used except in specific conditions

//              OPTIONAL AND DEFAULT PARAMETERS
// Functions also support optional parameters via the use of "?", however, optional parameters should come last in function declaration
// Function also recieve default parameters. That is parameters whose values are passed during function declaration. They necessarily do not need tobe passed as argument during function call except when necessary. They are similar to optional parameters except that they do not need to come last during declaration
// OPTIONAL PARAMETER
function add1(a:number, b:number, c?:number) : number{
    if(c){
        return a+b+c
    }else{
        return a+b
    }
}
// Since c is an optional parameter, we are adding conditionalyy based on the presence of c

// DEFAULT PARAMETER
function add2(a: number, b:number, c: number = 3){
    return a+b+c
}
add2(3,4,5)
add2(5,7)
// In the example above, c is a default parameter. If its value is or is not passed as an argument, the function call would not be interrupted
// DEFAULT PARAMETERS ARE SAFER THAN OPTIONAL PARAMETERS

// REST PARAMETERS IN FUNCTION
// Say we have a function that takes multiple parameters and return a single value. There are two ways to go about it. We can store the parameters/arguments in an array and pass them to the function just like in example 1. But, what if we don't have the access to take the arguments and pass them into an array?, we then use rest parameters

//Defining Function signature
type opt = number|number[]
let sum1 : (a:opt) => number
// Example 1
// In this example, we pass an argument. We check if the argument is an array using Array.isArray() method then reduce the array else we just return the number or numbers
sum1 = (list:opt) => {
    if(Array.isArray(list)){
        return(
            list.reduce((total, currentVal)=>total+currentVal,0)
        )
    }
    return list
}
let result = sum1([1,2,3,4,5,6])
console.log(result) 
// Example 1 above works only if we know the number of parameters the function is execting and we can also pack the parameters into an array. But what if we don't know the number of parameters our function is expecting?. We then turn to rest operator/parameters
// Example 2 (using Rest operators)
let sum2 = (...list:number[]) => {
    if(Array.isArray(list)){
        return(
            list.reduce((total, currentVal)=>total + currentVal, 0)
        )
    }
    return list
}
sum2(1,2,3,4,5,6,7,8,9)

// CALL, APPLY AND BIND
// There are various methods of invoking functions. The regular way (function name and parenthesis) and other special methods using call, apply or bind, these methods recieve an object as their first parameter/argument. The call, apply or bind methods are most important in the context of objects (since they have their "this") because they control the "this"context within a function. To simplify it, when an object invokes a function, the "this" keyword refers to the object that invokes the function but with call, apply and bind method, it is different. With these methods, the this keyword points to the object that is passed as the first argument and these methods are beneficial when the object and the function have no relationship (function is not a method of the object) or different scope.
const person = {
    name : "Josiah",
    age : 24
}
const details : string[] = ["Mariam"]
function greet1(this:any) : void{
    console.log(`My name is ${this.name} and i am ${this.age} years old`)
}
function greet2(this:any) :void{
    console.log(`My name is ${this[0]}`)
}
greet1.call(person)
greet2.apply(details)
let greet3 = greet1.bind(person)
greet3()
// It can be seen above that greet1 and greet2 is not a method of the object person and details respectively, yet they still don't find the "this" keyword strange
// Call and apply works in the same way, except that apply works with array
// The bind keyword store the value of the function call in another variable. This new variable is then invoked


// GENERATOR FUNCTION