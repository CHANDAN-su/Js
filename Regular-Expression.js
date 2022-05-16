/***********************************************************************Regular expressions************************************************/
// Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects.

// The “long” syntax:
// const regex = new RegExp("pattern", "flags")

// And the “short” one, using slashes "/":

// const regexp = /pattern/  ->  no flags
// const regex = /pattern/gmi   ->  with flags g,m and i (to be covered soon)


//Flags
//1.  i
 const text = "We will, we will rock you";
 const i = text.match(/we/).join("");
 console.log(i);  //we

const i1 = text.match(/we/gi).join(" ");
console.log(i1);  //We we


//2.   g
const g = text.match(/we/g);
console.log(g);  //['we']


//3.    m

const str2 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

//Without the flag m only the first digit is matched:
console.log(str2.match(/^\d/g)); //1


//Out the flag m only the first digit is matched:
console.log(str2.match(/^\d/gm).join(",")); //1,2,3


// Searching: str.match

let str = "We will, we will rock you";

console.log(str.match(/we/gi));

// // If there’s no such flag it returns only the first match in the form of an array, 
// // with the full match at index 0 and some additional details in properties:

let str1 = "We will, we will rock you";

let result1 = str1.match(/we/i);
console.log(result1);  //['We', index: 0, input: 'We will, we will rock you', groups: undefined]

console.log(result1[0]);  //we
console.log(result1.length);  //1



// Replacing: str.replace

let str3 = "We will, we will rock you";

// no flag g
let result2 = str3.replace(/we/i,"I");
console.log(result2);  //I will, we will rock you

// with flag g
let result3 = str3.replace(/we/gi , "I");
console.log(result3);  //I will, I will rock you


const str4 = "I love HTML";
const result4 = str4.replace(/HTML/ , "$& and JavaScript");
console.log(result4);  //I love HTML and JavaScript


const str5 = "I love HTML";
const result5 = str5.replace(/HTML/ , "$` $& and JavaScript");
console.log(result5);  //I love I love  HTML and JavaScript


const str6 = "I love HTML";
const result6 = str6.replace(/HTML/ , "$' and JavaScript");
console.log(result6);  //I love  and JavaScript


const str7 = "I love HTML ";
const result7 = str7.replace(/HTML/ , "$$ and JavaScript");
console.log(result7);  //I love $ and JavaScript 



// Character classes

const str8 = "+7(903)-123-45-67";
const regex = /\d/;
console.log(str8.match(regex).join(""));  //7

const str9 = "+7(903)-123-45-67";
const regex1 = /\d/g;
console.log(str9.match(regex1));  //['7', '9', '0', '3', '1', '2', '3', '4', '5', '6', '7']
console.log(str9.match(regex1).join(""));  //79031234567


const str10 = "Is there CSS4?";
const regex2 = /CSS\d/;
console.log(str10.match(regex2).join(""));  //CSS4


// Also we can use many character classes:
console.log("I Love  HTML5".match(/\s\w\w\w\w\d/).join(""));  //HTML5


// An alternative, shorter way is to find non-digits \D and remove them from the string:
let str11 = "+7(903)-123-45-67";

console.log( str11.replace(/\D/g, "") ); // 79031234567


// A dot is “any character”
console.log("Z".match(/./).join(""));  //Z

const regexp1 = /CS.4/;

console.log( "CSS4".match(regexp1).join("")); // CSS4
console.log( "CS-4".match(regexp1).join("")); // CS-4
console.log( "CS 4".match(regexp1).join("")); // CS 4 (space is also a character)
console.log( "CS4".match(regexp1));  //null

// Pay attention to spaces
console.log("1 - 5".match(/\d-\d/));  //null
console.log("1 - 5".match(/\d - \d/).join(""));  //1 - 5
console.log("1 - 5".match(/\d\s-\s\d/).join(""));  //1 - 5



// Unicode: flag "u" and class \p{...}

console.log('😄'.length); // 2
console.log('𝒳'.length);  //2

// Example: hexadecimal numbers

let regex3 = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log("number: xAF".match(regex3).join(""));  //xAF

// Example: Chinese hieroglyphs
// To look for characters in a given writing system we should use Script=<value>, 
// e.g. for Cyrillic letters: \p{sc=Cyrillic}, for Chinese hieroglyphs: \p{sc=Han}

let regex4 = /\p{sc=Han}/gu;

console.log(`Hello Привет 你好 123_456`.match(regex4).join(" "));   //你 好

// Example: currency

let regex5 = /\p{Sc}\d/gu;

let str12 = `Prices: $2, €1, ¥9`;
console.log(str12.match(regex5));  // ['$2', '€1', '¥9']

let regex6 = /\p{Ll}/gu;

let str13 = `prices`;
console.log(str13.match(regex6).join(""));  // prices




// Anchors: string start ^ and end $

// let’s test if the text starts with Mary:
let str14 = "Mary had a little lamb";

console.log(/^Mary/.test(str14));  //true
// ^Mary means: “string start and then Mary”.

console.log(/lamb$/.test(str14));  //true


// Testing for a full match

// In regular expressions language that’s \d\d:\d\d:

const GoodInput = "12:34";
const BadInput = "12:345";

let regex7 = /^\d\d:\d\d$/;

console.log(regex7.test(GoodInput));  //true
console.log(regex7.test(BadInput));  //false



// Multiline mode of anchors ^ $, flag "m"
