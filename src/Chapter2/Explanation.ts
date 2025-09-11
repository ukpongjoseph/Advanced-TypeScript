// COMPILER

// To run most high level programming, it is first parsed/transformed into an AST (Abstrat Syntax tree) by the compiler. This AST is then converted into a bytecode. This bytecode is then fed into a runtime environment which then run the code and produce results

// CODE => AST => BYTECODE => RESULT

// But with typeScript, it is quite different. TypeScript is first converted into javaScript which then follows the normal step (CODE => AST => BYTECODE => RESULT) which is carried out by the browser or by NodeJS. A crucial part of TypeScript compilations is that when TypeScript is compiled into AST, a program called the typeChecker checks the code for type safety before converting to javaScript source.

// The full steps with typeScript code includes
// TYPESCRIPT CODE => TYPESCRIPT AST => TYPECHECKER (CHECKS THE TYPESCRIPT AST) => TYPESCRIPT AST IS CONVERTED TO JAVASCRIPT SOURCE => JAVASCRIPT => JAVASCRIPT AST => JAVASCRIPT BYTECODE => RESULT

// The V8 Engine which powers browsers is a combination of the javaScript compiler and runtime environment. This makes JavaScript an interpreted language which runs on all browsers
console.log("TypeScript")