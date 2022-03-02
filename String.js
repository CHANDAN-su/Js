console.log("String");

// Creating strings
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

console.log(string1);  //A string primitive
console.log(string2);  //Also a string primitive
console.log(string3);  //Yet another string primitive
console.log(string4);  //[String: 'A String object']

// Character access
//First method - charat(index)

const string5 = "Chandan Thakur";
const string6 = string5.charAt(8);  
console.log(string6);  //T

function check(value){
  return value.charAt(value.length-1);
};

console.log(check("Chandan"));  //n
console.log(check("Chandan Thakur"));  //r


//Second Method [index]
const string7 = "Chandan Thakur";
const string8 = string7[8];
console.log(string8);  //T

function check1(name){
  // retirn name[8];
};
// console.log(check1("chandan Thakur"));  //Unexpected identifier


// Comparing strings
const value = "Apple";
const value1 = "Apple";

if(value>value1){
  console.log(value + " is great than "  + value1);
}else if(value<value1){
  console.log(value + " is less than " + value1);
}else{
  console.log(value + " is equal " + value1);
}  

function isEqual(str,str1){
  return str.toUpperCase() == str1.toUpperCase();
};

console.log(isEqual("APPlE","apple")); //ture



/******************************************************************************Mehtod**************************************************************/

/**************************************************String length****************************/
// The length property of a String object contains the length of the string, in UTF-16 code units. 

const str2 = 'Life, the universe and everything. Answer:';

console.log(`${str2} , ${str2.length}`);  //Life, the universe and everything. Answer: , 42

let x = "Mozille";
let empty = "";

console.log(x + " is " + x.length + " code units long");  //Mozille is 7 code units long
console.log('The empty string has a length of '+ empty.length); //The empty string has a length of 0

// Assigning to length
let mystring = "bluebells";

mystring.length = 4;
console.log(mystring); //bluebells

console.log(mystring.length);  //9

/************************************************************String.prototype.at()************************************************/
// The at() method takes an integer value and returns a new String consisting 

// 1. This method allows for positive and negative integers.
// 2.  Negative integers count back from the last string character.

/*
Syntax
at(index) -> start se
at(-index)  -> end se
*/

let sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
//Using an index of 5 the character returned is u

let index1 = -4;
console.log(`Using an index of ${index1} the character returned is ${sentence.at(index1)}`);
//Using an index of -4 the character returned is d

// Return the last character of a string
function ReturnLast(arr){
    return arr.at(-1);
};

let invoiceRef = 'myinvoice01'
console.log(ReturnLast(invoiceRef));  //1

invoiceRef = 'myinvoice02'; 
console.log(ReturnLast(invoiceRef));  //2


// Comparing methods
// Whilst all below methods are valid, it highlights the succinctness and readability of the at() method.

const mystring1 = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = mystring1.charAt(mystring1.length-2);
console.log(lengthWay);  //t

// Using slice() method
const sliceWay = mystring1.slice(-2,-1);
console.log(sliceWay);  //t

// Using at() method
const Atway = mystring1.at(-2);
console.log(Atway);  //t



/**********************************************************************String.prototype.charAt()*********************************/
const x1 = "The quick brown fox jumps over the lazy dog.";

const indtex = 5;
//start se
console.log(`The character at index ${index} is ${x1.charAt(index)}`);  //The character at index 5 is u

let x3 = "The quick brown fox jumps over the lazy dog.";
console.log(x3.charAt(x3.length-2));  //g



function test(string){
  if (string.charAt(0) === "C" ||string.charAt(0) === "F") {
      return console.log(`Your name is ${string}`);
  }else{
      return console.log("Your name is not valid");
  }
};

test("Chandan");
test("Ravi");
test("Fareen");
test("Manoj");


