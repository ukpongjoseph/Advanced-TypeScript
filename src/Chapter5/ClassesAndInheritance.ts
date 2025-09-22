// we wil be modelling a chess game
// We will be creating three classes using the class keyword


class Game{}
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
// So Far, we created three classes to represent the entire chess game. Game to represent the chess game and the players, Piece to represent the player type (King, Queen, Pawn and the likes) andlast but not the least the Position to represent where each piece is on the chess board
// Every piece on a chess game has a color (Black or White) and a position (on the board). Positions on the board is denoted with alpha-numeric value ranging from A to H (on the x-axis called file) and from 1 to 8 (on the y-axis called rank). So a position can be represented as A7, H3 and so on.
// Since we know the range of values for our color and position (both file and rank), we would be creating types for them
// since color is either white or black
type Color = "white"|"black"
// We will be splitting position
type File = "A"|"B"|"C"|"D"|"E"|"F"|"G"|"H"
type Rank = 1|2|3|4|5|6|7|8
// 
// Let's dive into the classes one by one
// We are starting out with Position
// Classes usually have constructors to initialize instance variables (variables declared inside a class that can be use by objects created from the class), instance variables and methods
class Position{
    constructor(
        private file:File,
        private rank:Rank
    ){}
}
// The class Position has two instance variables, file and rank of the type File and Rank respectively. These instance variables are set to private and initialized by the constructor. These variables are private in that they cannot be accessed outside their class except a getter and setter function is used (yet to be defined in the class). The getter function helps to fetch/read the value of the private variable while the setter function helps to set or write to the private variable. These functions can only be called by instances (objects created from the class) or subclass that inherits (via the extends keyword) the class properties and methods

// Now, lets talk about the class, Piece
class Piece{
    protected position : Position
    constructor(
        file:File,
        rank:Rank,
        private readonly color:Color
    ){
        this.position = new Position(file, rank)
    }
}
// From the class Piece above, it can be seen that the class Position was instantiated inside the Piece class (yes, it is possible to instantiate a class inside another class, that is create an object of a class inside another class). First, a reference variable of type Position was initialized in the class Piece (this reference variable is further used to create an object of class Position) and there passing file and rank as constructor parameter for creating the instance of Position. The protected keyword should be noticed on the the reference variable , position and this means that the variable is only accessible inside the class, Piece and sub classes of Piece
class King extends Piece {}
class Queen extends Piece {}
class Bishop extends Piece {}
class Knight extends Piece {}
class Rook extends Piece {}
class Pawn extends Piece {}
// TypeScript supports three access modifiers for variables and methods of a class. Public, protected and private...all these to encapsulate (hide) specific data and show the necessary ones.
// We can make a class not public by using the abstract keyword