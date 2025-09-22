"use strict";
// we wil be modelling a chess game
// We will be creating three classes using the class keyword
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
}
// 
// Let's dive into the classes one by one
// We are starting out with Position
// Classes usually have constructors to initialize instance variables (variables declared inside a class that can be use by objects created from the class), instance variables and methods
class Position {
    file;
    rank;
    constructor(file, rank) {
        this.file = file;
        this.rank = rank;
    }
}
// The class Position has two instance variables, file and rank of the type File and Rank respectively. These instance variables are set to private and initialized by the constructor. These variables are private in that they cannot be accessed outside their class except a getter and setter function is used (yet to be defined in the class). The getter function helps to fetch/read the value of the private variable while the setter function helps to set or write to the private variable. These functions can only be called by instances (objects created from the class) or subclass that inherits (via the extends keyword) the class properties and methods
// Now, lets talk about the class, Piece
class Piece {
    color;
    position;
    constructor(file, rank, color) {
        this.color = color;
        this.position = new Position(file, rank);
    }
}
// From the class Piece above, it can be seen that the class Position was instantiated inside the Piece class (yes, it is possible to instantiate a class inside another class, that is create an object of a class inside another class). First, a reference variable of type Position was initialized in the class Piece (this reference variable is further used to create an object of class Position) and there passing file and rank as constructor parameter for creating the instance of Position. The protected keyword should be noticed on the the reference variable , position and this means that the variable is only accessible inside the class, Piece and sub classes of Piece
class King extends Piece {
}
class Queen extends Piece {
}
class Bishop extends Piece {
}
class Knight extends Piece {
}
class Rook extends Piece {
}
class Pawn extends Piece {
}
// TypeScript supports three access modifiers for variables and methods of a class. Public, protected and private...all these to encapsulate (hide) specific data and show the necessary ones.
// We can make a class not public by using the abstract keyword. With the abstract keyword, we cannot instantiate a class (create an object of the class), we can only inherit from such class. Abstarct classes can have normal methods and abstract method. When an abstract class, declares an abstract method, the sub classes of the abstract classes are tasked to implemment the abstract methods themselves. Class Piece above, has been modified to be abstract
// Instantiating Piece is not permitted as it is abstract, so the code below is wrong
// Piece obj1 = new Piece("A", 1, "white")
//# sourceMappingURL=ClassesAndInheritance.js.map