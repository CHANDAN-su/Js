/*************************************************************************Boolean**********************************************/
// The Boolean object is an object wrapper for a boolean value.

var x = new Boolean(false);

console.log(x);  //Boolean {false}

if (x) {
    console.log("False");  //False
};

var y = false;
if (y) {
    console.log("False");  //False
};


// var x = Boolean(expression);	// use this... 
// var x = !!(expression);	// ...or this
// var x = new Boolean(expression); // don't use this!

var myFalse = new Boolean(false);	// initial value of false  
console.log(myFalse);

var g = Boolean(myFalse);	// initial value of true
console.log(g);

var myString = new String('Hello'); // string object
console.log(myString);

var s = Boolean(myString);	// initial value of true
console.log(s);


/******************************************************************Boolean() constructor****************************************/
// The Boolean() constructor is used to create Boolean objects.
/*
Syntax
new Boolean()
new Boolean(value)
*/


const flag = new Boolean();
console.log(flag);  //Boolean {false}

// Creating Boolean objects with an initial value of false
var bNoParam = new Boolean();
var bZero = new Boolean(0);
var bNull = new Boolean(null);
var bEmptyString = new Boolean('');
var bfalse = new Boolean(false);

// Creating Boolean objects with an initial value of true
var btrue = new Boolean(true);
var btrueString = new Boolean('true');
var bfalseString = new Boolean('false');
var bSuLin = new Boolean('Su Lin');
var bArrayProto = new Boolean([]);
var bObjProto = new Boolean({});

/********************************************************************Boolean.toString()******************************************/
// The toString() method returns a string representing the specified Boolean object.
/*
Syntax
toString()
*/

const flag1 = new Boolean("true");
console.log(flag1.toString()); // String true

const flag2 = new Boolean(1);
console.log(flag2.toString());  //String true


/********************************************************************************Boolean.prototype.valueOf()**************************************/
// The valueOf() method returns the primitive value of a  Boolean object.
/*
Syntax
valueOf()
*/

const x1 = new Boolean();
console.log(x1.valueOf());  //// expected output: false


const y1 = new Boolean('Mozilla');
console.log(y1.valueOf());  // expected output: true




/**********************************************************************null*****************************************************/
// The value null represents the intentional absence of any object value. 
// It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
/*
Syntax
null
*/

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels('sky'));     // expected output: 0

console.log(getVowels("aeio")); //4

// Difference between null and undefined
console.log(typeof null);	// "object" (not "null" for legacy reasons) 
console.log(typeof undefined);	// "undefined"
console.log(null === undefined);	// false 
console.log(null == undefined);	// true 
console.log(null === null);	// true
console.log(null == null);	// true
console.log(!null);	// true
console.log(isNaN(1 + null));	// false 
console.log(isNaN(1 + undefined)); // true



/***************************************************************undefined**************************************************/
// The global undefined property represents the primitive value undefined . It is one of JavaScript's primitive types.
/*
Syntax
undefined
*/

function test(t) {
    if (t === undefined) {
        return 'Undefined value!';
    }
    return t;
}

let x2;
console.log(test(x2));     // expected output: "Undefined value!"

let y2 = "Chandan Thakur";
console.log(test(y2));  //Chandan Thakur

// // DON'T DO THIS

// // logs "foo string" (function() {
//     var undefined = 'foo'; console.log(undefined, typeof undefined);
// })();

// // logs "foo string" (function(undefined) {
// console.log(undefined, typeof undefined);
// })('foo');

