// we wil be modelling a chess game
// We will be creating three classes using the class keyword


// class Game{}
// class Piece{}
// class Position{}


// Each of these classes represent a part of the game (chess game)

// We will be creating subclasses of the class Piece. These subclasses are also classes of their own. They are sub class of Piece because they extend Piece...in simpler term, they inherit the properties of the class Piece


// class King extends Piece {}
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}


// After all there are six types of players in a chess game.
// So Far, we created three classes to represent the entire chess game. Game to represent the chess game and the players, Piece to represent the player type (King, Queen, Pawn and the likes) and last but not the least the Position to represent where each piece is on the chess board
// Every piece on a chess game has a color (Black or White) and a position (on the board). Positions on the board is denoted with alpha-numeric value ranging from A to H (on the x-axis called file) and from 1 to 8 (on the y-axis called rank). So a position can be represented as A7, H3 and so on.
// Since we know the range of values for our color and position (both file and rank), we would be creating types for them
// since color is either white or black
type Color = 'White'|'Black'
// We will be splitting position
type File = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"
type Rank = 1|2|3|4|5|6|7|8
// 
// Let's dive into the classes one by one
// We are starting out with Position
// Classes usually have constructors to initialize instance variables (variables declared inside a class that can be use by objects created from the class) and methods
class Position{
    constructor(
        private file:File,
        private rank:Rank
    ){}
    // The method below, distanceFrom() is used to measure the distance from a game piece current position to a specified position (a position where a game piece intends to move to). This specified position is passed as the method parameter or argument
    distanceFrom(position:Position){
        return {
            rank : Math.abs(position.rank - this.rank),
            file : Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }
}
// positions comes as file and rank. we use Math.abs() to get the absolute value. ranks are numerical values, so direct substration works. file are alphabets so we use a string method charCodeAt() to get the numeric value of the alphabets. charCodeAt(0) returns the numerical value at index 0, which means the first alphabet

// The class Position has two instance variables, file and rank of the type File and Rank respectively. These instance variables are set to private and initialized by the constructor. These variables are private in that they cannot be accessed outside their class except a getter and setter function is used (yet to be defined in the class). The getter function helps to fetch/read the value of the private variable while the setter function helps to set or write to the private variable. These functions can only be called by instances (objects created from the class) or subclass that inherits (via the extends keyword) the class properties and methods

// Now, lets talk about the class, Piece
// abstract class Piece{
//     protected position : Position
//     constructor(
//         file:File,
//         rank:Rank,
//         private readonly color:Color
//     ){
//         this.position = new Position(file, rank)
//     }
// }
// From the class Piece above, it can be seen that the class Position was instantiated inside the Piece class (yes, it is possible to instantiate a class inside another class, that is create an object of a class inside another class). First, a reference variable of type Position was declared in the class Piece (this reference variable is further used to create an object of class Position) and there passing file and rank as constructor parameter for creating the instance of Position. The protected keyword should be noticed on the the reference variable , position and this means that the variable is only accessible inside the class, Piece and sub classes of Piece
// class King extends Piece {}
// class Queen extends Piece {}
// class Bishop extends Piece {}
// class Knight extends Piece {}
// class Rook extends Piece {}
// class Pawn extends Piece {}
// TypeScript supports three access modifiers for variables and methods of a class. Public, protected and private...all these to encapsulate (hide) specific data and show the necessary ones.
// We can make a class not public by using the abstract keyword. With the abstract keyword, we cannot instantiate a class (create an object of the class), we can only inherit from such class. Abstarct classes can have normal methods and abstract method. When an abstract class, declares an abstract method, the sub classes of the abstract classes are tasked to implemment the abstract methods themselves. Class Piece above, has been modified to be abstract

// Instantiating Piece is not permitted as it is abstract, so the code below is wrong
// const obj1 = new Piece("A", 1, "white")
// With the abstract keyword, we cannot directly instantiate the class except through a sub class that vextends the abstract class but we can define methods in this abstract class that can be be used. Methods in abstract classes can also be abstract or normal methods.
// When a method is abstract, then all the sub-classes that extends the abstract class must implement the abstract method. While for normal methods it is not compulsory for the sub-classes to implement the normal methods. It should be noted that abstract methods are only declared but not defined or implemented in the abstract classes, their implementation is done in the sub-classes

// Focusing on the class Piece, every piece in a chess game moves, however movement is restricted depending on the piece and the position of the piece. Now we will be defining a method to check if a piece can move (this method returns a boolean) and another method to move the piece from one position to another. To move a piece, we will be checking the piece position and as such we will be passing position (the position of the piece) as parameter to this method
abstract class Piece{
    protected position : Position
    constructor(
        private readonly color:Color,
        file:File,
        rank:Rank
    ){
        this.position = new Position(file, rank)
    }
    abstract canMoveTo(position:Position):boolean
    moveTo(position:Position){
        this.position = position
    }
}
// From the two methods above we can that one method is abstract and the other is a normal method. The abstract method is not implemented (only function signature) in the abstract class unlike the normal method, sub-classes of this class are tasked to implement this method.

// canMoveTo method reads the position of a piece and check if that piece can move to the specified position passed as parameter/argument. This method returns a boolean which can be true or false

// moveTo method on the other hand takes in a parameter (likely an object) of type Position and move a piece to that position

// If any sub-class of Piece doesn't implement the abstract method, a compile time error will occur

// class King extends Piece {}
class Queen extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}
class Bishop extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}
class Knight extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}
class Rook extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}
class Pawn extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}



// Let's re-create, class King to also implement the abstract method, canMoveTo(). To decide if a piece can move to a specified position, we need to measure the distance between the piece current position and where it intends to move to. To do this, we use the distanceFrom method defined in the position class
class King extends Piece {
    // In chess, piece can move one step either horizontally or vertically so that means the distance between rank and/or file should not be more than one
    canMoveTo(position: Position): boolean {
        const distance = this.position.distanceFrom(position)
        if(distance.rank < 2 && distance.file < 2){
            return true
        }else{
            return false
        }
    }
}

// so far we have seen the class Piece and Position in play. The class Position so far can be used to create positions for game pieces and can also be used to calculate the distance from a piece posisition to an intended position. The class Piece so far has been used to create game pieces via sub-classes, has methods to check if a piece can move and also move a piece from one position to another

// Now, we will be focusing on the class , Game....
// The class Game is used to create a new Game which comprises of the board and pieces
class Game{
    private pieces = Game.makePieces()
    // It can be seen that we can call a method before definiton and declaration. This is initialization order
    // the makePieces() methods is static and it means we don't need to create an object to call the method
    // This class has a static method which means the method is bound to the class. No need to use an object to call the class ( obj.makePieces() ) . When an instance of the class (an object is created, the method is automatically called). This method create the different game piece by creating instances of King, Queen, Bishop and many more which are all sub-classes of the class Piece
    private static makePieces(){
        return [
            // Kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),

            // Queens
            new Queen('White', 'D', 1),
            new Queen('Black', 'D', 8),

            // Bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
        ]
    }
}