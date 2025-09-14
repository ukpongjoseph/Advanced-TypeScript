"use strict";
// Types in typeScript defines what values a container can hold and the operations that can be performed on those values. This is what typeScript typeChecker uses while compiling. It checks the types of a variable or container, check its value and its operations to determine the validity of a code . Numbers holds numeric values and mathematical operations can be performed on them. For booleans, they hold either true or false and their operations includes &&, ||, !. Strings holds multiple characters and their operations can include toUpperCase(), toLowerCase(), .concat(), "+" and may more.
Object.defineProperty(exports, "__esModule", { value: true });
// Types in typeScript can include the basics like numbers, Strings, booleans and more advanced ones like the bigint, Objects, arrays, tuples, constructors, functions, string enums, symbols e/t/c
// function that takes a number and square it
function squareOf(n) {
    console.log(n * n);
    return n * n;
}
squareOf(5); // This is valid as the parameter passed is a number
// Say in the above function, a string was passed, it would throw an error saying a string cannot be assigned to a number but js would compile and return not a number NaN
// squareOf("z")
// DELVING INTO TYPES
/*

(1) ANY
Any the godFather of all types.You only use any as programmer when you can't seem to decide what data type to assign to a variable. It is the last resort.
Any accomodates any data type and any method can be called on it and as such the typeScript typechecker is unable to work on it as any does not specify a particular type.
To use the type any, you have to explicitly tell typeScript, else the compiler will complain and throw an error
*/
// (2) UNKNOWN
// Unknown is similar to any but a more stricter type. Similar to any in that it can hold any data type ranging from number string or boolean
let age1 = 23;
age1 = true;
age1 = "Twent three";
// However, unknown is more stricter in the sense that with any, any operation or method can be called or performed on the variable but with unknown, before any operation is performed or any method is called, a type check must first occur. What does that mean?
// unknown can be compared with other data type but direct operation between an unknown and another data type is not permitted except there is a refinment
// Comparison
let value1 = 34;
if (value1 == 34) {
    console.log(true);
}
// Direct operation
// let result = value + 45
// The above operation is wrong because the types are different, an unknown and a number
// Refinment before operation
// Refinment before operation with "unknown" means checking the type before carrying out any operation
// let's pretend, we didn't use the type, unknown....the type of value would be a number...That is what refinment is all about. Refinmentt mean allowing typeScript run a check on a variable, decide what type that variable is forgetting the keyword, "unknown"...then allowing operations specific to the type denoted or annoted by typescript depending whether the type is a number, string or boolean. If typeScript concludes the type is a number, typeScript only allows operations specific to numbers. Likewise, if typeScript concludes the type is a boolean, typeScript only allows operations specific to numbers and the same is for strings.
// The operation below would return the else statement
if (typeof value1 === "string") {
    console.log("permitted");
    let result = value1 + 45;
    console.log(result);
}
else {
    console.log("forbidden");
    console.log(value1);
}
// BOOLEAN
// In typeScript, booleans can have only two values which is either true or false. The operations on a boolean includes comparisons and negation
// Comaprison involves operators like "==", "===", "||", "&&", "?"
// Negation involves operators like "!"
// We can explicitly tell typeScript that a variable is a booleans as in
let isAdult = true;
let isMarried = false;
// We can also let typeScript infer as in
let eligible = true;
let isHungry = false;
// There is a concept called type literals in terms of the boolean data type and it involves telling typeScript that a variable can be only one value and nothing else. Example is shown below
const isFit = true;
// The variable, isFit above is a type literal because it can only be true. This is because the variable is declared with the const keyword, meaning its value can never change, it can only be true and never false. Other examples includes
let isGrown = true;
let isDeaf = false;
// In the variable above their values can not be changed due to how they are declared. They can only be that value
// Type litearals ensures maximum type safety
// NUMBERS
// numbers includes all numeric values ranging from integers, floating point numbers, positive numbers, negative numbers, special value numbers like -infinity, infinity, NaN (Not a number).
// we can let typeScript infer that a value is a number
let age = 34;
// we can also explicitly tell typeScript that a variable is a number
let score = 23;
// There is also the concept of type literals with numbers
let value = 34;
// The variable value can only be 34 and nothing less or more
// There is another concept called numeric seperators and this involves seperating large numbers using an underscore just to ensure readability
let price = 2_000_000_000;
// The variable price is 2 billion and to ensure readability at one glance, a numeric seperator was used and this doesn't affect the code in any way but to just ensure readability.
// BIGINT
// Normal integers in typeScript can hold values ranging from 2^53 - 1. Anything larger than this will return a bound error. This is where bigint comes in. Bigint are used to hold values larger than what normal inetegers can hold. Numbers of type bigint are suffixed with the letter "n". Example is shown below
let bigValz = 45n;
// We can explicitly define bigint as in 
let valz = 48n;
// we can also let typeScript infer for us
let price1 = 23n;
// Mathematical operations can be performed on bigints and these operation includes +, -, *, /, %, <, >, 
// Type literals also exist with bigint. An example is shown below
let price2 = 200n;
// The variable, price2 can only be 200n and nothing less or nothing more
// A couple of rules with bigint includes, decimals are not allowed with bigint and direct operation between a bigint and numbers withouy conversion is not allowed
//  STRING
// Strings can be infered or defined explicitly
// They can be used as type literals and operations or methods like +, .concat(), .slice() can be used on them
let name1 = "Denari";
let site = "development";
let brideName = "John";
// The variable, brideName can only be "John" and nothing aside that
// SYMBOL
// symbols are new features in the js and ts world. They are not really used but they are mostly used as objects key.
// symbols are created using the Symbol() method (NB: emphasis on the capital "S" in Symbol())
let initSymbol = Symbol(3);
// symbols are unique in the sense that two symbols with the same value/ description are different
let clone1 = Symbol("id");
let clone2 = Symbol("id");
// From the example above, clone1 and clone2 are different despite having similare value or description
// Symbols can only be compared using == or === and mathematical operations or string operations cannot be performed on them
// We can let typeScript infer for us just as seen above or we can explicitly define a variable to be of type symbol as shown below
let clone3 = Symbol("gas");
// UNIQUE SYMBOLS
// Unique symbols are a subtype of symbols, they are only declared with the const keyword or declarator. so therefore any symbol declared with the const keyword is a uniques symbol
const clone4 = Symbol("cabasa");
// we can let typeScript infer for us
const clone5 = Symbol("nice");
// we can also explicitly define unique symbols
const clone6 = Symbol("wizzy");
// uniques symbols are unique and they are the type literals of symbols
// Symbols are object keys
let clone7 = Symbol("property1");
const clone8 = Symbol("property2");
const Person = {
    [clone7]: "jaggz",
    [clone8]: "jessy"
};
// it should be noticed that the symbols are placed in a square bracket and this is to tell typeScript that they are symbols. If they were used without the square brackets, thypeScript would regard them as strings and not symbols
// OBJECTS
// There are few way to describe objects in TypeScript
// we can declare objects explicitly
const obj = {
    name: "Ikram"
};
// let name1 = obj.name. This will throw the error that the property, "name" doesn't exist on obj and this is because when we explicitly define objects, typescript only knows that such variable is an object but typescript has no idea of the object structure/ shape or value
// we can declare objects using the object literal notation and this basically involves allowing typescript infer
const obj1 = {
    name: "edi"
};
let name2 = obj1.name;
const obj2 = {
    name: "ubong"
};
let name3 = obj2.name;
// using the object literal notation, typescript can read the value/properties and shape of the object. This method is the preferred methodof creating objects
// OBJECT TYPE INFERENCE WITH THE CONST KEYWORD
// When objects are created with the const keyword, typeScript infers their properties to primitive type unlike primitive data types
const a = 12;
const b = false;
const c = "rigid";
// Because a, b and c are declared with the const keyword and their values cannot chnage from what it is to something else (just like type literals), typeScript infers a, b and c to be 12, false and "rigid" respectively rather than number, boolean, string as it would be. This is not the same for objects. Using obj1 as an example, typescript would infer name to be string and not "edi" despite the const keyword and this is due to the fact that object property values are prone to change.... for example
obj1.name = "didi";
// BACK TO OBJECT LITERALS, USING CLASS/CONSTRUCTOR AND THE NEW KEYWORD TO CREATE OBJECTS
let Person1 = {
    firstname: "Badru",
    lastname: "Lekan"
};
// The Object Person1 is declared using an Object literal
// Objects can be created using a class/constructor and the new keyword
// class are blueprint for creating objects. They have constructors which actually does the job of creating the objects when they are invoked via the "new" keyword. This method of creating objects can be either using the "this" keyword or by using modifiers(especially access modifiers) 
// Using thyis keyword
class Humans {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person = new Humans('Josiah', 23);
// Using access modifiers. Access modifiers are just like encapsulation in java whereby the access to an object property is defined or declared. Access modifiers can be public (property is accessible), private (property is not accessible) or readonly (property's values cannot be changed)
class Human {
    name;
    age;
    isAdult;
    constructor(name, age, isAdult) {
        this.name = name;
        this.age = age;
        this.isAdult = isAdult;
    }
}
const persons = new Human("dayo", 23, true);
// The object person and persons is created by invoking the class Humans and Human, constructor
// ANOTHER METHOD OF CREATING OBJECTS IS BY DECLARING AN OBJECT WITHOUT INITIALIZING THE OBJECT BUT ALSO DEFINING THE STRUCTURE OF THE OBJECT
let obj3;
// This method of creating objects allows typeScript know the structure of the object such that if there is a missing property or an extra property, the compiler would complain and throw an error. This method of creating objects is called definite assignment where one declares an object or variable and later assign it or initialize it with a value/values
obj3 = {
    name: "yeenix",
    age: 34
};
// OPTIONAL PARAMETERS IN OBJECTS AND KEY-INDEX SIGNATURE IN AN OBJECT
// In cases where a programmer is unsure if an object would have a parameter, an optional parameter is used and this is usually denoted using the question mark ("?"). 
// There are certain instances where the name of an object property is not known but the key type and its value type is known, this is when key-index signature comes in. Every key-value pair in the object must match the key-index signatutre. Key index signature are usually enclosed in square brackets. Key-index signature permits extra properties, it allows object have extra properties beyond the ones explicitly listed, as long as their keys and values match the index signature.
// The examples below demonstrates optional parameters and key-index signature
let obj5;
obj5 = { name: "shola" };
obj5 = {
    name: "jay",
    age: 45
};
// The example above demonstrates optional parameters where obj5 can decide to have the property age or not
let obj6;
obj6 = {
    name: "Burna",
    gender: "male",
    Fav: "Gbona"
};
// The above example demonstrates keiy-index signature, where the values of the keys are strings and it accepts extra key-value pairs. If the keys were set to only numbers, all values should be numbers and the same goes for boolean. If they signature were to accept unions, the specified tpes must be followed
let obj4 = {
    name: "Basit",
    age: 25,
    isAdult: true,
    school: "Vetland"
};
// In the example above, optional parameters and key-index signature was used in the same object. The optional property, "age" is of type number if defined but if it is not defined, its type is undefined and that is why our key-index signature covers string (for name), number or undefined (for age) and boolean (for isAdult). Our key-index signature also permits extra properties (isAdult : true) that were not declared during the object declaration
// ANOTHER WAY TO DECLARE OBJECTS IN TYPESCRIPT IS TO DECLARE AND INITIALIZE AN EMPTY OBJECTBUT THIS METHOD SHOULD BE AVOIDED AS MUCH AS POSSIBLE
let obj7 = {};
obj7 = { name: "Gbenga" };
obj7 = { age: 23, name: "Tar1Q" };
const age12 = 45;
// type maleAndFemale must contain properties such as name, age, menses, wig, soccer, gym while type femaleOrMale can contain only properties of Male or only properties of female or properties of both Male and female
const girl = {
    name: "Basirat",
    menses: true,
    age: 34,
    wig: true
};
const boy = {
    name: "Adam",
    gym: true,
    soccer: true,
    age: 45
};
const persons1 = {
    name: "Success",
    menses: false,
    age: 34,
    wig: true,
    gym: true,
    soccer: false,
};
const persons2 = {
    name: "Unknown",
    age: 34,
    menses: false,
    wig: true
};
const persons3 = {
    name: "Unknown",
    gym: true,
    soccer: true,
    age: 56
};
const persons4 = {
    name: "Unknown",
    gym: true,
    soccer: false,
    age: 21,
    wig: false
};
// From the examples above boy fulfils type Male, girl fulfils type female, persons1 contains all properties of Male and female as it is an intersection, persons2 and persons3 is of type femaleOrMale as it fulfils either of Male or female or even both as seen in persons4
// It is worth noting that unions come up more naturally than intersections
// ARRAYS
// Arrays in ts are similar to those of js. They are a special kind of object that support searching, pushing, concatenation, searching and slicing
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr = [];
let arr4 = [];
arr4.push(7);
arr4.push("down");
// It is a general rule of thumb to keep arrays homogenoeous, do not mix different types in one array. Each array should be for each type just like arr1, arr2, arr3.
// TUPLES
// Tuples are a subtype of arrays. They must be explicitly defined and this is because they also use square brackets. This explicit declaration allows typeScript to identify a tuple. They also have fixed lenghts except when used with rest operators. Tuples can have optional elements just like in Objects
// An heterogenous tuple
let tup = [3, "love", true];
// tuple with optional element
let tup1 = [2, 3, "hatred"];
tup1 = [23, 45, "shiba", 45];
// tuples with rest operator
// Rest operators allows tuples hold flexible numbers of elements just like key-index signature of objects
let tup2 = ["tate", false, 3, 4, 5, 6, 7, 8];
// READ-ONLY ARRAYS AND TUPLES
// Arrays and tuples are changeable. To make them unchangeable, we use the readonly keyword on them
let arr5 = [1, 2, 3, 4, 5];
let tup3 = [7, "trouser", true];
// To update a readonly array , one needs to copy the elements of the array or tuple into a new one and concatenate the new values into the new one (usually an array) while keeping the old array or tuple. Mind you when using the concat method, the type of the new element (an array) and the previous array or tuple must match
let tup4 = tup3.concat("Rhemy");
let arr6 = arr5.concat(7);
// When using the concat method on a prev tuple it results in an array not a tuple. To create a new tuple from an old tuple, typeScript programmers have to be explicit. Example is shown below
let tup5 = [...tup3, "fola", 6];
// Now, tup5 is a tuple
// NUL, UNDEFINED, VOID AND NEVER
// When there is an absence of value, typescript represents it as null or undefined. To be more specific, udefined means a value has not been given yet while null means the absolute absence of a value
// In addition to null and undefined, there is void and never. These are special types where void is mostly used in functions that doesn't expliciitly return a value while never on the other hand entails an operation that runs forever, one that throws an error or a function that never returns anything. Null is the intentional absence of a value. Both null and undefined are actaul values while never and void are basically function return types. All of these will be used in an example below
// Null
function check(a) {
    if (a > 0)
        return a;
    else
        return null;
}
// Undefined
let test1;
// Void
function report(a) {
    console.log(a);
}
// Never
function catchError(a) {
    while (a) {
        console.log(a);
    }
    throw TypeError("a is not reachable");
}
// ENUMS
// Enums are list of possible values for a type. They are unordered data that map keys to values. There are two types of enums, string to string or string to number. 
// Enums are not variables, hence they are not declared with variable declarator 
var Languages;
(function (Languages) {
    Languages[Languages["English"] = 0] = "English";
    Languages[Languages["Spanish"] = 1] = "Spanish";
    Languages[Languages["French"] = 2] = "French";
    Languages[Languages["Russian"] = 3] = "Russian";
})(Languages || (Languages = {}));
// By convention, enums keys and names are uppercase and typescript do infer values to enums members if not explicitly defined. For example, English is 1, Spanish is 2, French is 3 while Russian is 4. Values can also be explicitly mapped to each key
var boys;
(function (boys) {
    boys[boys["Dayo"] = 1] = "Dayo";
    boys[boys["Daniel"] = 2] = "Daniel";
    boys[boys["Jide"] = 3] = "Jide";
    boys[boys["Stephen"] = 4] = "Stephen";
})(boys || (boys = {}));
// Members of an enum can be retreived using the dot or bracket notation just like with objects. With the dot notation, the member name is used but with the bracket notation, the index is used just like array index
const firstBoy = boys.Dayo;
const lastBoy = boys[4];
//# sourceMappingURL=Types.js.map