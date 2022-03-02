console.log("DataType");

/* Data Type in js     
1. Primitive datatype
     a. String
     b. Numbe 
     c. Bollean
     d. Null
     e. Symbol
     f. Undefine
2. Reference datatype
     a. Array
     b. Object liteals 
     c. Function
     d. Dates
*/

// String
let name = "Chandan thakur";
// console.log("My string is" + name);  //My String is Chandan Thakur
// console.log("Data type is " + (typeof name)); //Data type is  Chandan Thakur String

// number
let marks = 90;
// console.log("Data type " + (typeof marks)); //Data type 90 Number

// bollean
let isdrive = true;
// console.log("Data type is  " +(typeof isdrive));  //Data type is true Bollean

// null 
let nullvar = null;
// console.log("Data type "+ (typeof nullvar));  //Data type is null  null

// undfine 
let undf = undefined;
console.log("Data type "+ (typeof undf));

// Array
let myarr = [1,2,3,false, "string"]
console.log("Data type " + (typeof myarr));


// Object Literals
let stMarks = {
     Chandan: 98,
     Ravi: 67,
     Deepak: 89
} 
console.log(typeof stMarks)


// Function
function first() {
     
}
console.log(typeof first)


// Date 
let today = new Date();
console.log(today)



console.log("Literals");

// Array literals ([])
let coffees = ["French Roast","Colombian","Kona"];
console.log(coffees); //['French Roast', 'Colombian', 'Kona']


// Extra commas in array literals
let animal = ["Lion", ,"Monkay"];
console.log(animal[0]);//Lion 
console.log(animal[1]);//Undefined
console.log(animal[2]);//Monkay


// Object literals ({})
var car = {
    getcar: "satuen",
    mycar: "Honda",
    Speicel: "BMW"
}

console.log(car.getcar); //satuen
console.log(car.mycar);//Honda
console.log(car.Speicel); //BMW


var car1 = {
    mycar1: {
        a:"BMW",
        b:"Honda"
    },
    7:"Safari"
}
console.log(car1.mycar1.b);  //Honda
console.log(car1[7]); //Safari


var unusualPropertyNames  = {
    "": "empty string",
    "!": "BMW"
}

//console.log(unusualPropertyNames." ")  //SyntaxError
console.log(unusualPropertyNames[""]); //empty string
 //console.log(unusualPropertyNames.!);//SyntaxError
 console.log(unusualPropertyNames["!"]);//BMW


//  String literals ("")
let x = "12345";
let y = "One line /n Another line";

console.log(x); //1234
console.log(y); //One line /n Another line
console.log("Chandan Thakur".length) //14

// Escaping characters
var quote = "He read \"The Cremation of Sam McGee by R.W.\" Service";
console.log(quote);  //He read "The Cremation of Sam McGee by R.W." Service


var home = "C:\\\\\Temp";
console.log(home); //C:\\Temp

var home1 = "He read The \ Cremation of Sam \McGee by R.W.\ Service";
console.log(home1); //He read The  Cremation of Sam McGee by R.W. Service


// Template literals (`)
let a = `Chandan Thakur`;
let b = `String Text`;
console.log(a); //Chandan Thakur
console.log(b);  //String Text


let exp = "345";
console.log(`Sring Text ${exp} String Text`);


/*
// normal 
let c = 5;
let d = 10;
console.log("Fifteen is "+ (c+d) + " and\n not" + (2*c+d) + " .");
*/

let c = 5;
let d = 10;
console.log(`Fifteen is ${c+d} and \n not ${2*c+d} .`); //Fifteen is 15 and 
                                                        //not 20 .

