console.log("Number Data Type");

/************************************************************************Number() constructor******************************************/
// The Number() constructor creates a Number object.
/*
Syntax
new Number(value)
*/

const a = new Number("123");
const b = Number("123");

console.log(a);  //Number {123}
console.log(b);  //123

console.log(a == b);  //true

console.log(a instanceof Number);  //true
console.log(b instanceof Number);  //false

const c ="34";

var d = Number(c);
console.log(d + 12);  //46

const e = "35";
console.log(e + 10);  //3510

var f = "34 98";
var g = Number(f);
console.log(g);  //NaN


/************************************************************************Number.isFinite()**************************************************/
// The Number.isFinite() method determines whether the passed value is a finite number
// — that is, it checks that the type of a given value is Number , and the number is neither positive Infinity , negative Infinity , nor NaN .
/*
Syntax
Number.isFinite(value)
*/

console.log(Number.isFinite(10/5));  //true
console.log(Number.isFinite(0/0)); //false

console.log(Number.isFinite(Infinity)); // false 
console.log(Number.isFinite(NaN)); // false 
console.log(Number.isFinite(-Infinity)); // false

console.log(Number.isFinite(0));	// true 
console.log(Number.isFinite(2e64));	// true

console.log(Number.isFinite('0'));	// false, would've been true with
                        // global isFinite('0') 

console.log(Number.isFinite(null));	// false, would've been true with
                        // global isFinite(null)


/****************************************************************Number.isInteger()*********************************************/
// The Number.isInteger() method determines whether the passed value is an integer.
/*
Syntax
Number.isInteger(value)
*/

function fits(x,y){
    if(Number.isInteger(y/x)){
        return "First";
    }
    return "Do not first";
};

console.log(fits(5,10)); //First
console.log(fits(5,11)); //Do not first

console.log(Number.isInteger(0));	// true
console.log(Number.isInteger(1));	// true 
console.log(Number.isInteger(-100000));	// true 
console.log(Number.isInteger(99999999999999999999999)); // true

console.log(Number.isInteger(0.1));	// false 
console.log(Number.isInteger(Math.PI));	// false

console.log(Number.isInteger(NaN)); // false 
console.log(Number.isInteger(Infinity)); // false 
console.log(Number.isInteger(-Infinity)); // false 
console.log(Number.isInteger('10')); // false 
console.log(Number.isInteger(true)); // false 
console.log(Number.isInteger(false)); // false 
console.log(Number.isInteger([1]));      // false

console.log(Number.isInteger(5.0));	// true 
console.log(Number.isInteger(5.000000000000001)); // false 
console.log(Number.isInteger(5.0000000000000001)); // true


/*************************************************************Number.isNaN()*************************************************/
// The Number.isNaN() method determines whether the passed value is NaN and its type is
// Number . It is a more robust version of the original, global isNaN() .
/*
Syntax
Number.isNaN(value)
*/

function typeofNaN(x){
    if(Number.isNaN(x)){
        return "Number NaN";
    };
    if(isNaN(x)){
        return "NaN";
    }
};

console.log(typeofNaN("100F"));  //NaN
console.log(typeofNaN(NaN)); //Number NaN

console.log(typeofNaN(232));   //undefined

console.log(isNaN(34)); //false
console.log(isNaN("54fg"));  //true

console.log(isNaN(NaN)); // true 
console.log(Number.isNaN(Number.NaN)); // true 
console.log(Number.isNaN(0 / 0)); // true

// e.g. these would have been true with global isNaN() 
console.log(Number.isNaN('NaN'));	// false 
console.log(Number.isNaN(undefined)); // false
console.log(Number.isNaN({}));	// false 
console.log(Number.isNaN('blabla'));	// false

// These all return false 
console.log(Number.isNaN(true)); 
console.log(Number.isNaN(null)); 
console.log(Number.isNaN(37)); 
console.log(Number.isNaN('37'));
console.log(Number.isNaN('37.37'));
console.log(Number.isNaN(''));
console.log(Number.isNaN(' '));



/************************************************************************Number.isSafeInteger()****************************************/
// The Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.
/*
Syntax
Number.isSafeInteger(testValue)
*/

function warn(x){
    if(Number.isSafeInteger(x)){
        return 'Precision safe.';
    }
    return 'Precision may be lost!';
};

console.log(warn(Math.pow(2,53)));  //Precision may be lost!

console.log(warn(Math.pow(2,53)-1));  //Precision safe.

console.log(Number.isSafeInteger(3));	// true 
console.log(Number.isSafeInteger(Math.pow(2, 53)));	// false 
console.log(Number.isSafeInteger(Math.pow(2, 53) - 1)); // true 
console.log(Number.isSafeInteger(NaN));	// false
console.log(Number.isSafeInteger(Infinity));	// false
console.log(Number.isSafeInteger('3'));	// false
console.log(Number.isSafeInteger(3.1));	// false
console.log(Number.isSafeInteger(3.0));	// true

/*********************************************************Number.parseInt()************************************/
// The Number.parseInt() method parses a string argument and returns an integer of the specified radix or base.
/*
Syntax
Number.parseInt(string)
Number.parseInt(string, radix)
*/

let x1 = "34";
let x2 = parseInt(x1);
console.log(x2);  //34

let x3 = "34.657";
let x4 = Number.parseInt(x3);
console.log(x4);  //34

let x5 = "86 657 83";
let x6 = Number.parseInt(x5);
console.log(x6);  //86

// Number.parseInt === parseInt // trues

const x7 = "050 years";
const x8 = parseInt(x7);
console.log(x8);  //50

console.log(parseInt("he is best 56"));  //NaN

/**************************************************************Number.parseFloat()***************************************/
// The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN .
/*
Syntax
Number.parseFloat(string)
*/

const x9 = 54.450;
const x10 = parseFloat(x9);
console.log(x10);   //54.45

const x11 = "45 year";
const x12 = parseFloat(x11);
console.log(x12);  //45


/*******************************************************************Number.prototype.toFixed()****************************************/
// The toFixed() method formats a number using fixed-point notation.
/*
Syntax
toFixed() 
toFixed(digits)
*/

const x13 = 14.476;
console.log(x13.toFixed());  //14
console.log(x13.toFixed(2)); //14.48

let numObj = 12345.6789;

console.log(numObj.toFixed());	// Returns '12346': note rounding, no fractional p
console.log(numObj.toFixed(1));	// Returns '12345.7': note rounding 
console.log(numObj.toFixed(6));	// Returns '12345.678900': note added zeros 
console.log((1.23e+20).toFixed(2)); // Returns '123000000000000000000.00'
console.log((1.23e-10).toFixed(2)); // Returns '0.00' 
console.log(2.34.toFixed(1));	// Returns '2.3'
console.log(2.35.toFixed(1));	// Returns '2.4'. Note it rounds up 
console.log(2.55.toFixed(1));	// Returns '2.5'. Note it rounds down - see warnin
console.log(-2.34.toFixed(1));	// Returns -2.3 (due to operator precedence, negat
console.log((-2.34).toFixed(1));	// Returns '-2.3'

/***********************************************************Number.toPrecision()*****************************************************/
// The toPrecision() method returns a string representing the Number object to the specified precision.
/*
Syntax
toPrecision() 
toPrecision(precision)
*/

const x14 = 3.44456776543;
console.log(x14.toPrecision(3));//3.44
console.log(x14.toPrecision(4));  //3.445

let numObj1 = 5.123456;

console.log(numObj1.toPrecision())  //// logs '5.123456'
console.log(numObj1.toPrecision(5))  // logs '5.1235'
console.log(numObj1.toPrecision(2))  //// logs '5.1'
console.log(numObj1.toPrecision(1))  // logs '5'

const numObj2 = 0.000123;

console.log(numObj2.toPrecision());  // logs '0.000123'
console.log(numObj2.toPrecision(5));  // logs '0.00012300'
console.log(numObj2.toPrecision(2)) ;  // logs '0.00012'
console.log(numObj2.toPrecision(1));  // logs '0.0001'







