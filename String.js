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

/*************************String.prototype.charCodeAt()*******************/
/*
Syntax
charCodeAt(index)
*/

console.log("String.prototype.charCodeAt()");

let str = 'The quick brown fox jumps over the lazy dog.';
let index2 = 10;

console.log(`The character code ${str.charCodeAt(index2)} is equal to ${str.charAt(index2)} `);  //The character code 98 is equal to b 

console.log("ABC".charCodeAt(0)); //65
console.log("ABC".charCodeAt(1)); //66
console.log("ABC".charCodeAt(2));  //67



/************************************************String.prototype.concat()******************************/
// Combines the text of two (or more) strings and returns a new string.
/*
Syntax
concat(str1) 
concat(str1, str2)
concat(str1, str2, ... , strN)
*/

let str9 = "Hello";
let str10 = "World"; 

console.log(str9.concat(" ",str10));  //Hello World
console.log(str10.concat(" ",str9)); //World Hello

let test1 = (Name) => {
  return Name.concat(" ","Thakur");
};

console.log(test1("Chandan"));  //Chandan Thakur


let hello = "Hello";
console.log(hello.concat(" Ravi" , ". Have a nice Day")); //Hello Ravi. Have a nice Day

let greetList = ['Hello', ' ', 'Venkat', '!'] 
console.log("".concat(...greetList)); // "Hello Venkat!"

console.log("".concat({}));	// [object Object]
console.log("".concat([]));	// ""
console.log("".concat(null)); // "null"
console.log("".concat(true)); // "true"
console.log("".concat(4, 5)); // "45"



/********************************************String.prototype.includes()*********************************/
// The includes() method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.
/*
Syntax
includes(searchString) 
includes(searchString, position)
*/


let str3 =  'The quick brown fox jumps over the lazy dog.';
let word = "fox";
console.log(`The word ${word} ${str3.includes(word) ? "is" : "is not"} the sentence`); //The word Fox is the sentence

// Case-sensitivity
let word1 = "Fox"
console.log(`The word ${word1} ${str3.includes(word1) ? "is" : "is not"} the sentence`);  //The word Fox is not the sentence



const str4 = 'To be, or not to be, that is the question.'

console.log(str4.includes('To be'))	// true
console.log(str4.includes('question'))	// true 
console.log(str4.includes('nonexistent')) // false 
console.log(str4.includes('To be', 1))	// false 
console.log(str4.includes('TO BE'))	// false
console.log(str4.includes(''))	// true


/*************************************************String.prototype.endsWith()**************************************/
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.
/*
Syntax
endsWith(searchString) 
endsWith(searchString, length)
*/

const str5 = "Cats is the best!";
console.log(str5.endsWith("best"));  //false
console.log(str5.endsWith("best!"));  //true

const str6 = "Is a question for you"  
console.log(str6.endsWith("for",17)); //true


let str7 = 'To be, or not to be, that is the question.'
console.log(str7.endsWith('question.')) // true 
console.log(str7.endsWith('to be'))	// false 
console.log(str7.endsWith('to be', 19)) // true


/*********************************************String.prototype.indexOf()**********************/
// Returns the index within the calling String object of the first occurrence of
// searchValue , or  -1 if not found.  case-sensitive
/*
Syntax
indexOf(searchValue) 
indexOf(searchValue, fromIndex)
*/

const paragraph = "The quick brown fox jumps over the lazy dog. If the dog the hungray and jumps";

const serach = "jumps";
const Indexfirst = paragraph.indexOf(serach);
console.log(Indexfirst);  //20
 
//first jumps access
console.log(`The index of the first ${serach} from the beginning is ${Indexfirst}`); //The index of the first jumps from the beginning is 20

//Second jumps acces  
console.log(`The index of the Second ${serach} from the beginning is ${paragraph.indexOf(serach, (Indexfirst+1))}`);//The index of the Second jumps from the beginning is 72


// 'Blue Whale'.indexOf('Blue') // returns 0 
// 'Blue Whale'.indexOf('Blute') // returns -1 
// 'Blue Whale'.indexOf('Whale', 0) // returns 5
// 'Blue Whale'.indexOf('Whale', 5) // returns 5
// 'Blue Whale'.indexOf('Whale', 7) // returns -1 
// 'Blue Whale'.indexOf('')    // returns 0 
// 'Blue Whale'.indexOf('', 9)      // returns 9
// 'Blue Whale'.indexOf('', 10)     // returns 10
// 'Blue Whale'.indexOf('', 11)     // returns 10


// Checking occurrences
console.log('Blue Whale'.indexOf('Blue') !== -1); // true 
console.log('Blue Whale'.indexOf('Bloe') !== -1);// false

const str8 = 'Brave new world new'
console.log('Index of first w from start is ' + str8.indexOf('w'));  //8
console.log('Index of "new" from start is ' + str8.indexOf('new'));  //6
console.log('Index of "new" from start is ' + str8.indexOf('new',10)); //16



/****************************************************String.prototype.lastIndexOf()*****************************/
// The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, 
// searching backwards from fromIndex .
// Returns -1 if the value is not found. Case-sensitivity
/*
Syntax
lastIndexOf(searchValue) 
lastIndexOf(searchValue, fromIndex)
*/

const sentence1  = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchitem = "dog";

console.log(`The index of the first "${searchitem}" from the end is ${paragraph.lastIndexOf(searchitem)}`); //The index of the first "dog" from the end is 52


// 'canal'.lastIndexOf('a');     // returns 3
// 'canal'.lastIndexOf('a', 2);  // returns 1
// 'canal'.lastIndexOf('a', 0);  // returns -1
// 'canal'.lastIndexOf('x');     // returns -1
// 'canal'.lastIndexOf('c', -5); // returns 0
// 'canal'.lastIndexOf('c', 0);  // returns 0
// 'canal'.lastIndexOf('');      // returns 5
// 'canal'.lastIndexOf('', 2);   // returns 2

// Using indexOf() and lastIndexOf()
let anyString = 'Brave, Brave New World';
console.log('The index of the first "Brave" is ' + anyString.indexOf('Brave'));  //The index of the first "Brave" is 0
console.log('The index of the first "Brave" is ' + anyString.lastIndexOf('Brave'));  //The index of the first "Brave" is 7


/*************************************************************String.prototype.localeCompare()*************************************/
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.
/*
Syntax
localeCompare(compareString) 
localeCompare(compareString, locales) 
localeCompare(compareString, locales, options)
*/

const a = 'reserve';
const  b =  'RESERVE';

console.log(a.localeCompare(b));  //-1
console.log(b.localeCompare(a));  //1

console.log(a.localeCompare(b, "en",{sensitivity: "base" }));  //0

const lo = "a";
const lo1 = "B";;
console.log(lo.localeCompare(lo1));  //-1
console.log(lo1.localeCompare(lo));  //1

console.log(lo.localeCompare(lo1, "en",{sensitivity: "base" }));  //-1

const lo2 = "a";
const lo3 = "B";;
console.log(lo2.localeCompare(lo3));  //-1
console.log(lo3.localeCompare(lo2));  //1

console.log(lo3.localeCompare(lo2, "en",{sensitivity: "base" }));  //1

// "a" and "a" are equivalent yielding a neutral value of zero
console.log("a".localeCompare("a"));  //0

// The letter "a" is before "c" yielding a negative value
console.log('a'.localeCompare('c')); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a posit
console.log('check'.localeCompare('against')); // 2 or 1 (or some other positive value

// Sort an array
const array = ['reserve', 'Premier', 'Cliche', 'communique', 'cafe', 'Adieu'];

array.sort((a,b) => a.localeCompare(b,"en",{ignorePunctuation: true}));
console.log(array);  //['Adieu', 'cafe', 'Cliche', 'communique', 'Premier', 'reserve']

console.log('ä'.localeCompare('z', 'de')); // a negative value: in German 
console.log('ä'.localeCompare('z', 'sv')); // a positive value: in Swedis

// Numeric sorting
// by default, "2" > "10"
console.log("2".localeCompare("12")); // 1

// numeric using options:
console.log("2".localeCompare("10", undefined, {numeric: true})); // -1
console.log("2".localeCompare("10", "en", {numeric: false})); // 1

// numeric using locales tag: 
console.log("2".localeCompare("10", "en")); // 1

/*************************************************************String.prototype.match()******************************************* */
// The match() method retrieves the result of matching a string against a regular expression.
/*
Syntax
match(regexp)
*/
const paragraph2 = 'The quick brown fox jumps over the A lazy dog. If the dog barked, was it really lazy?';

const regex = /[A-Z]/g;
const found = paragraph2.match(regex);
// console.log(found);  //['T', 'A', 'I']

const str11 = "For more information, see Chapter 3.4.5.1";
const reg = /see (chapter \d+(\.\d)*)/i;
const found1 = str11.match(reg);
console.log(found1)

// logs [ 'see Chapter 3.4.5.1',
//	'Chapter 3.4.5.1',
//	'.1',
//	index: 22,
//	input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' is the whole match.
// 'Chapter 3.4.5.1' was captured by '(chapter \d+(\.\d)*)'.
// '.1' was the last value captured by '(\.\d)'.
// The 'index' property (22) is the zero-based index of the whole match.
// The 'input' property is the original string that was parsed.


// Using global and ignore case flags with match()
const str12 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const reg1 = /[A-E]/gi;

const match_str12 = str12.match(reg1);

console.log(match_str12); //['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

// Using match() with no parameter
const str13 = "Nothing will come of nothing."; 
console.log(str13.match());	// returns [""] 
/*                                     Learn  Reguer expression                              */
