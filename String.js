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



/*******************************************String.prototype.matchAll()****************************************/
// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
/*
Syntax
matchAll(regexp)
*/


const str15 = "test1test2";
const reg2 = /t(e)(st(\d?))/g;
const array3 = [...str15.matchAll(reg2)];

console.log(array3);  
console.log(array3[0]); //'test1', 'e', 'st1', '1', index: 0, input: 'test1test2', groups: undefined]
console.log(array3[1]); //['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', groups: undefined]

/**********************************************************String.prototype.padEnd()***********************************/
// The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length.
/*
Syntax
padEnd(targetLength) 
padEnd(targetLength, padString)
*/

const str16 = "Breaded Mushrooms";

console.log(str16.padEnd(20, '.')); //Breaded Mushrooms...
console.log(str16.padEnd(25, '.'));  //Breaded Mushrooms........

const str17 = "200";
console.log(str17.padEnd(15));  //'200            '
console.log(str17.padEnd(7));  //'200    '

// 'abc'.padEnd(10); // "abc " 
// 'abc'.padEnd(10, "foo"); // "abcfoofoof" 
// 'abc'.padEnd(6, "123456"); // "abc123"
// 'abc'.padEnd(1);	// "abc"


/**************************************String.prototype.padStart()************************************/
// The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. 
/*
Syntax
padStart(targetLength) 
padStart(targetLength, padString)
*/

const str18 = "5";
console.log(str18.padStart(6,"0")); //000005


const Phonenumber = "7073251686";
const  last4Digit = Phonenumber.slice(-4);
const MaskedNumber = last4Digit.padStart(10,"*");  //******1686
console.log(MaskedNumber);

// 'abc'.padStart(10);	// "	abc" 
// 'abc'.padStart(10, "foo"); // "foofoofabc" 
// 'abc'.padStart(6,"123465"); // "123abc" 
// 'abc'.padStart(8, "0");	// "00000abc"
// 'abc'.padStart(1);

function LeftFillNum(num,targetLength){
  return num.toString().padStart(targetLength,"*");
};

console.log(LeftFillNum(251686,10));  //****251686



/*****************************************************String.prototype.repeat()*************************************/
// The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
/*
Syntax
repeat(count)
*/

const chorus = 'Because I\'m happy. '

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(5)}`); //Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy.

// 'abc'.repeat(-1)	// RangeError 
// 'abc'.repeat(0)	// ''
// 'abc'.repeat(1)	// 'abc' 
// 'abc'.repeat(2)	// 'abcabc'
// 'abc'.repeat(3.5)	// 'abcabcabc' (count will be converted to integer) 
// 'abc'.repeat(1/0)	// RangeError




/**********************************************************String.prototype.replace()**********************************************/
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement 
/*
Syntax
replace(regexp, newSubstr) 
replace(regexp, replacerFunction)
replace(substr, newSubstr) 
replace(substr, replacerFunction)
*/

const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replace("dog" ,"Monkey"));  //The quick brown fox jumps over the lazy Monkey. If the dog reacted, was it really lazy?


const reg3 = /dog/g;
console.log(p.replace(reg3,"Monkey"));   //The quick brown fox jumps over the lazy Monkey. If the Monkey reacted, was it really lazy?


// Defining the regular expression in replace()
let str19 = "Twas the night before Xmas...";
let newstr = str19.replace(/xmas/i , "Chandan");
console.log(newstr);  //Twas the night before Chandan...

// Using global and ignore with replace()
let str20 = "Apples are round, and apples are juicy.";
let reg4 = /apple/gi;

let newstr1 = str20.replace(reg4,"Orange");
console.log(newstr1);   //Oranges are round, and Oranges are juicy.

// Switching words in a string
let re = /(\w+)\s(\w+)/;
let str21 = 'John Smith';
let newstr3 = str21.replace(re, '$2, $1'); 
console.log(newstr3); // Smith, John  


/********************************************************************String.prototype.replaceAll()******************************************/
const p1 = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p1.replaceAll("dog","Monkey"));  //The quick brown fox jumps over the lazy Monkey. If the Monkey reacted, was it really lazy?

let reg5 = /Dog/ig;
console.log(p1.replaceAll(reg5,"Lion")); //The quick brown fox jumps over the lazy Lion. If the Lion reacted, was it really lazy?


console.log('aabbcc'.replaceAll('b','.'));  //aa..cc

console.log('aabbcc'.replaceAll(/b/g,'.'));  //aa..cc


/****************************************String.prototype.search()*******************************/
// The search() method executes a search for a match between a regular expression and this String object.
/*
Syntax
search(regexp)
*/


const str22 = 'The quick brown fox jumps over the lazy.';
const reg6 = /[^\w\s]/g;

console.log(str22.search(reg6));  //39
console.log(str22.search("fox")); //16

const str1 = 'The quick brown fox jumps over the lazy';
console.log(str1.search(reg));  //-1


let str23 = "hey JudE"
let reg7 = /[A-Z]/g;
let reg8 = /[.]/g;

console.log(str23.search(reg7));  //4
console.log(str23.search(reg8));  //-1


/******************************************String.prototype.slice()************************************/
// The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.
/*
Syntax
slice(beginIndex)
slice(beginIndex, endIndex)
*/

const str24 = "The quick brown fox jumps over the lazy dog.";

console.log(str24.slice(31));  //the lazy dog.

console.log(str24.slice(4,19)); //quick brown fox

console.log(str24.slice(-4));  //dog.

console.log(str24.slice(-9,-4));  //lazy 

console.log(str24);  //The quick brown fox jumps over the lazy dog.

let str25 = 'The morning is upon us.' 
console.log(str25.slice(-3)); // returns 'us.' 
console.log(str25.slice(-3, -1)); // returns 'us'
console.log(str25.slice(0, -1));  // returns 'The morning is upon us'

// This example counts backwards from the end of the string by 11 to find the start index and forwards from the start of the string by 16 to find the end index.
console.log(str25.slice(-11, 16)) // => "is u"

// Here it counts forwards from the start by 11 to find the start index and backwards from the end by 7 to find the end index.
console.log(str25.slice(11, -7)) // => " is u"

// These arguments count backwards from the end by 5 to find the start index and backwards from the end by 1 to find the end index.
console.log(str25.slice(-5, -1)) // => "n us"


/*****************************************String.prototype.split()*************************************/
// The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
/*
Syntax
split() 
split(separator) 
split(separator, limit)
*/


const str26 = "The quick brown fox jumps over the lazy dog.";

const word3 = str26.split(" ");
console.log(word3); //['The',   'quick','brown', 'fox','jumps', 'over','the',   'lazy','dog.']
console.log(word3[3]);  //fox

const chars = str26.split('');
console.log(chars);  
/*
[
  'T', 'h', 'e', ' ', 'q', 'u', 'i',
  'c', 'k', ' ', 'b', 'r', 'o', 'w',
  'n', ' ', 'f', 'o', 'x', ' ', 'j',
  'u', 'm', 'p', 's', ' ', 'o', 'v',
  'e', 'r', ' ', 't', 'h', 'e', ' ',
  'l', 'a', 'z', 'y', ' ', 'd', 'o',
  'g', '.'
]
*/
console.log(chars[4]);  //q

const strCopy = str5.split();
console.log(strCopy); //[ 'The quick brown fox jumps over the lazy dog.' ]


function splitString(stringToSplit, separator){
  
  const arrayOfStrings = stringToSplit.split(separator);
  
  console.log('The original string is: ', stringToSplit);
  console.log('The separator is: ', separator);
  
  console.log(arrayOfStrings);
};

splitString("The,morning,is,upon,us",",");  //[ 'The', 'morning', 'is', 'upon', 'us' ]
splitString("CHANDANTHKUR",""); 
/*
[
  'C', 'H', 'A', 'N',
  'D', 'A', 'N', 'T',
  'H', 'K', 'U', 'R'
]
*/


/********************************************String.prototype.startsWith()************************/
// The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
/*
Syntax
startsWith(searchString) 
startsWith(searchString, position)
*/

const str27 = 'Saturday night plans';

console.log(str27.startsWith("Sat")); //true
console.log(str27.startsWith("sat")); //false (case sensitive)

console.log(str27.startsWith("night",9)); //true

//startswith
let str28 = 'To be, or not to be, that is the question.'

console.log(str28.startsWith('To be'))	// true 
console.log(str28.startsWith('not to be'))	// false
console.log(str28.startsWith('not to be', 10)) // true


