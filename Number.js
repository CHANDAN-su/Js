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

