/**********************************************************************************Symbol()*******************************************************************/

// Description
// To create a new primitive Symbol, you write Symbol() with an optional string as its description:

//unqiue value hota h
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
console.log(sym2 === sym3);  //false
console.log(sym2); //


//string
let str1 = "hello";
let str2 = "hello";
console.log(str1 === str2);  //true


// const sym4 = new Symbol("foo");
// console.log(sym4);  //Symbol.js:20 Uncaught TypeError: Symbol is not a constructor

let sym = Symbol("foo");
console.log(typeof sym);  //symbol

let symObj = Object(sym);
console.log(typeof symObj);   //Object



let k1 = Symbol("identifier for k1");
let k2 = Symbol("k2");

let Obj = {};
Obj[k1] = "Tony";
Obj[k2] = "Stak";
Obj.c = "chandan";
Obj["d"] = "thakur"

console.log(Obj);  //{c: 'chandan', d: 'thakur', Symbol(identifier for k1): 'Tony', Symbol(k2): 'Stak'}
console.log(Obj[k1]);  //Tony
// console.log(Obj.k1);  //undefine   (cannot do this to get beacuse it is same as Obj["k1"])


//Symbol are ignored in for in loop
for(let ignor in Obj){
    console.log(ignor ,":", Obj[ignor]);
};  //c : chandan
    //d : thakur



/***********************************************************************Symbol() constructor******************************/
// The Symbol() constructor returns a value of type symbol, 
// but is incomplete as a constructor because it does not support the syntax " new Symbol() " and it is not intended to be subclassed. 
/*
Syntax
Symbol() 
Symbol(description)
*/


const symbo11 = Symbol();
const symbo12 = Symbol(42);
const symbo13 = Symbol("foo");

console.log(typeof symbo11);  //symbol

console.log(symbo12 === 42);  //false

console.log(symbo13.toString());   //Symbol(foo)

console.log(Symbol("foo") === Symbol("foo"));  //false


/*****************************************************************Symbol.for()***************************************************/
// The Symbol.for(key) method searches for existing symbols in a runtime-wide symbol registry with the given key and returns it if found. 
/*
Syntax
Symbol.for(key);  // global symbol
*/

console.log(Symbol("foo") === Symbol("foo"));  //false

console.log(Symbol.for("foo")  ===  Symbol.for("foo"));  //true

const symbo14 = Symbol.for("foo");
console.log(symbo14);  //Symbol(foo)


/********************************************************************************Symbol.isConcatSpreadable************************************/
// The Symbol.isConcatSpreadable well-known symbol is used to configure if an 
// object should be flattened to its array elements when using the Array.prototype.concat() method.

const alpha = ["a","b","c"];
const numeric = [1,2,3];
let alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric);  //['a', 'b', 'c', 1, 2, 3]

// numeric[Symbol.isConcatSpreadable] = false;
// alphaNumeric = alpha.concat(numeric);
// console.log(alphaNumeric);  //Array ["a", "b", "c", Array [1, 2, 3]]

alpha[Symbol.isConcatSpreadable] = false;
alphaNumeric = numeric.concat(alpha);
console.log(alphaNumeric);  // Array [1,2,3, Array ["a","b","c"]]


/****************************************************************Symbol.keyFor()**************************************************/
// The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.
/*
Syntax
Symbol.keyFor(sym);
*/


const globalSym = Symbol.for('foo'); // global symbol

console.log(Symbol.keyFor(globalSym)); // expected output: "foo"

const localSym = Symbol(); // local symbol

console.log(Symbol.keyFor(localSym)); // expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator)); // expected output: undefined



/*********************************************************************Symbol.match***************************************************/
// The Symbol.match well-known symbol specifies the matching of a regular expression against a string.
// This function is called by the String.prototype.match() method.

const regexp1 = /foo/;
// console.log("/foo/".startsWith(regexp1))  //Uncaught TypeError: First argument to String.prototype.startsWith must not be a regular expression

regexp1[Symbol.match] = false;
console.log("/foo/".startsWith(regexp1));  //true

console.log("/baz/".endsWith(regexp1));  //false

/**************************************************************************Symbol.matchAll*****************************************************/
// The Symbol.matchAll well-known symbol returns an iterator, that yields matches of the regular expression against a string.

const re = /[0-9]+/g;

const str = '2016-01-02|2019-03-07';
const reult = re[Symbol.matchAll](str);

console.log(Array.from(reult, x => x[0]));  //['2016', '01', '02', '2019', '03', '07']


/*************************************************************************Symbol.description**********************************************/
// The read-only description property is a string returning the optional description of Symbol objects.

console.log(Symbol("desc").description);  //desc

console.log(Symbol.iterator.description);  //Symbol.iterator

console.log(Symbol.for('foo').description);  //foo

console.log(`${Symbol('foo').description}bar`);  //foobar


// Using description
 	 
console.log(Symbol('desc').toString());	//	"Symbol(desc)"
console.log(Symbol('desc').description);	//	"desc"
console.log(Symbol('').description);	//	""
console.log(Symbol().description);	//	undefined


// well-known symbols		
console.log(Symbol.iterator.toString());	//	"Symbol(Symbol.iterator)"
console.log(Symbol.iterator.description);	//	"Symbol.iterator"

//  global  symbols 
console.log(Symbol.for('foo').toString()); // "Symbol(foo)" 
console.log(Symbol.for('foo').description); // "foo"


/**************************************************************************************Symbol.toString()**************************************************/
// The toString() method returns a string representing the specified Symbol object.
/*
Syntax
toString()
*/

console.log(Symbol('desc').toString()); // expected output: "Symbol(desc)"

console.log(Symbol.iterator.toString()); // expected output: "Symbol(Symbol.iterator)

console.log(Symbol.for('foo').toString()); // expected output: "Symbol(foo)"

// console.log(Symbol('foo') + 'bar');  // expected output: Error: Can't convert symbol to string


/****************************************************************Symbol.valueOf()************************************************/
// The valueOf() method returns the primitive value of a Symbol object.
/*
Syntax
valueOf()
*/

const sym21 = Symbol("example"); 
sym21 === sym21.valueOf(); 
console.log(sym21);  //Symbol(example)