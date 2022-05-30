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

const str15 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

const regex8 = /^\d/gm;
console.log(str15.match(regex8));  //['1', '2', '3']

// Without the flag m only the first digit is matched:

let str16 = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( str16.match(/^\d/g) ); // 1

// Searching at line end $
let str19 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str19.match(/\d$/gm));  //['1', '2', '3']

// Searching for \n instead of ^ $
let str20 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log( str20.match(/\d\n/g) ); // 1\n,2\n



// Word boundary: \b
console.log("Hello , Java!".match(/\bJava\b/).join(""));  //Java
console.log("Hello Javascript!".match(/\bJava\b/));  //null

console.log( "Hello, Java!".match(/\bHello\b/) ); // Hello
console.log( "Hello, Java!".match(/\bJava\b/) );  // Java
console.log( "Hello, Java!".match(/\bHell\b/) );  // null (no match)
console.log( "Hello, Java!".match(/\bJava!\b/) ); // null (no match)


console.log("1 23 456 78 54".match(/\b\d\d\b/g));  //['23', '78', '54']
console.log("12,34,54".match(/\b\d\d\b/g).join(","));  //12,34,54


// Escaping, special characters

// Escaping  \.
console.log("Cheaper 5.1".match(/\d\.\d/).join(""));  //5.1
// console.log("Cheapter 511".match(/\d\.\d/).join(""));  //null (looking for a real dot \.)

// The example below looks for a string "g()"
console.log("function g()".match(/\g\(\)/).join(""));  //g()

console.log("1\\2".match(/\\/).join(""));  //  \


// A slash

// Here’s what a search for a slash '/' looks like:
console.log("/".match(/\//));  //  "/"

// a regexp using new RegExp
console.log("/".match(new RegExp("/")));  //  "/

// new RegExp
let regex9 = new RegExp("\d\.\d");
console.log("Chapter 5.1".match(regex9));  //null

let regex10 = /\d\.\d/;
console.log("Chapter 5.1".match(regex10));  //5.1

// Here’s how “\d.\d” is perceived:
console.log("\d\.\d");  //d.d

let regex11 = "\\d\\.\\d";
console.log(regex11); //\d\.\d

let regex12 = new RegExp(regex11);

console.log("Chapter 5.1".match(regex12));  //5.1



// Sets and ranges [...]


// Sets
console.log("abc".match(/[abc]/g));  //['a', 'b', 'c']

// find [t or m], and then "op"
console.log("Mop top".match(/[tm]op/gi));  //['Mop', 'top']

// find "V", then [o or i], then "la"
console.log("Voila".match(/V[oi]la/));   //null\


const regex16 = /cha[^an]dan/;
console.log("chagdan".match(regex16));  //['chagdan', index: 0, input: 'chagdan', groups: undefined]


// Ranges
console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g));  //['xAF']


// Excluding ranges
const regex13 = /[^\dA-z]/gi;
console.log("alice15@gmail.com".match(regex13).join(""));  //@.


// In the example below the regexp [-().^+] looks for one of the characters -().^+:
var regex14 = /[-().^+]/g;
console.log("1+2-(".match(regex14));  //['+', '-', '(']

regex14 = /[\-\(\)\.\^\+]/g;
console.log("1+2-(".match(regex14));  //['+', '-', '(']

// Java[^script]
// We have a regexp /Java[^script]/.

const regex15 = /Java[^script]/;

console.log("Java".match(regex15));  //null

console.log("JavaScript".match(regex15));    //'JavaS'

// Find the time as hh:mm or hh-mm
// Write a regexp to find time:
var regexp17 = /your regexp/g;
regexp17 = /\d\d[:-]\d\d/g

console.log( "Breakfast at 09:00. Dinner at 21-30".match(regexp17) ); // 09:00, 21-30



// Quantifiers +, *, ? and {n}

// Quantity {n}
// The exact count: {5}
// \d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

const regex17 = /\d{5}/;

console.log("I'm 12345 years old".match(regex17).join(""));  //12345


// The range: {3,5}, match 3-5 times
console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/));  //1234

// Then a regexp \d{3,} looks for sequences of digits of length 3 or more:
console.log("I'm not 12, but 34567887655689 years old".match(/\d{3,}/));  //34567887655689

let str21 = "+7(903)-123-45-67";
let number = str21.match(/\d{1,}/g);

console.log(number.join(""));   //79031234567


// Shorthands

// + -> Means “one or more”, the same as {1,}.
let str22 = "7(903)-123-45-67 Chanda Thakur";

console.log(str22.match(/\d+/g));  //['7', '903', '123', '45', '67']
console.log(str22.match(/\D+/g)) ;  // ['(', ')-', '-', '-', ' Chanda Thakur']

let str23 = "cha@_$ dan";
console.log(str23.match(/\w/g));   //['c', 'h', 'a', '_', 'd', 'a', 'n']


//?   -> Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

let str24 = "Should I write color or colour?";
console.log(str24.match(/colou?r/g)); //['color', 'colour']


//*   -> Means “zero or more”, the same as {0,}. That is, the character may repeat any times or be absent.

console.log("100 10 1".match(/\d0*/g));  // ['100', '10', '1']

// Compare it with + (one or more):
console.log("100 10 1".match(/\d0+/g));   //['100', '10']


// More examples

// Regexp for decimal fractions (a number with a floating point): \d+\.\d+
console.log("0 1 123.345345ff6 7890".match(/\d+\.\d+/g));    //['123.345345']



// Regexp for an “opening HTML-tag without attributes”, such as <span> or <p>.
// The simplest one: /<[a-z]+>/i
console.log("<body>......</body>".match(/<[a-z]+>/gi));  //['<body>']

// Improved: /<[a-z][a-z0-9]*>/i
console.log("<h1>Hi!</h1>".match(/<[a-z][a-z0-9]>/gi)); //['<h1>']

// Regexp “opening or closing HTML-tag without attributes”: /<\/?[a-z][a-z0-9]*>/i
console.log("<h1>Hi!</h1>".match(/<\/?[a-z][a-z0-9]*/gi));  //['<h1', '</h1']


// Create a regexp to find ellipsis: 3 (or more?) dots in a row.
const regex18 = /your regexp/g;
const regex19 = /\.{3,}/g
console.log( "Hello!... How goes?.....".match(regex19) ); // ..., .....


// Create a regexp to search HTML-colors written as #ABCDEF: first # and then 6 hexadecimal characters.
let regex20 = /...your regexp.../

let regex21 = /#\d{6}/g
let str25 = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
// alert( str.match(regexp) )  // #121212,#AA00ef
console.log(str25.match(regex21));  //['#121212', '#123456']



// Greedy and lazy quantifiers

// Greedy search
const regex22 = /".+"/g;
const str26 = 'a "witch" and her "broom" is one';
console.log(str26.match(regex22).join(""));  //"witch" and her "broom"


// Lazy mode
// Laziness is only enabled for the quantifier with ?.
const regex23 = /".+?"/g;
const str27 = 'a "witch" and her "broom" is one';
console.log(str27.match(regex23).join(""));  //"witch""broom"



// Other quantifiers remain greedy.
console.log("123 456".match(/\d+ \d+?/g).join(""));  //123 4


// Alternative approach
// In our case we can find quoted strings without lazy mode using the regexp "[^"]+":

const regex24 = /"[^"]+"/g;
const str28 = 'a "witch" and her "broom" is one';
console.log(str28.match(regex24).join(" "));  //"witch" "broom"


// Let’s see an example where lazy quantifiers fail and this variant works right.

// The first idea might be: /<a href=".*" class="doc">/g.

const str29 = '...<a href="link" class="doc">...';
const regex25 = /<a href=".*" class="doc">/g;
console.log(str29.match(regex25));  //['<a href="link" class="doc">']

const str30 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
const regex26 = /<a href=".*" class="doc">/g;
console.log(str30.match(regex26));  //['<a href="link1" class="doc">... <a href="link2" class="doc">']


// Let’s modify the pattern by making the quantifier .*? lazy:

const str31 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
const regex27= /<a href=".*?" class="doc">/g;
console.log(str31.match(regex27).join(" "));   //<a href="link1" class="doc"> <a href="link2" class="doc">



let str32 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
let str33 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
let regex28 = /<a href="[^"]*" class="doc">/g;

// Works!
console.log( str32.match(regex28) ); // null, no matches, that's correct
console.log( str33.match(regex28) ); // <a href="link1" class="doc">, <a href="link2" class="doc">

// A match for /d+? d+?/
console.log("123 456".match(/\d+? \d+?/g));  //123 4


// Find HTML comments
let str34 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;
const regex29 = /<!--.*?-->/gs;
console.log(str34.match(regex29).join(" "));   //<!-- My -- comment test --> <!---->


// Find HTML tags
const str35 = '<> <a href="/"> <input type="radio" checked> <b>';
const regex30 = /<[^<>]+/g;
console.log(str35.match(regex30).join(" "));  //<a href="/" <input type="radio" checked <b




// Capturing groups
// A part of a pattern can be enclosed in parentheses (...). 

// Example: gogogo
// Without parentheses, the pattern go+ means g character, followed by o repeated one or more times. For instance, goooo or gooooooooo.

// Parentheses group characters together, so (go)+ means go, gogo, gogogo and so on.

const regex31 = /(go)+/gi;
const str36 = "Gogogo now!";
console.log(str36.match(regex31).join(""));  //Gogogo

// Example: domain
// mail.com
// users.mail.com
// smith.users.mail.com
// In regular expressions that’s (\w+\.)+\w+:

// We can fix it by replacing \w with [\w-] in every word except the last one: ([\w-]+\.)+\w+.

const str37 = "site.com my.site.com";
console.log(str37.match(/(\w+\.)+\w+/g).join(" "));  //site.com my.site.com


// Example: email
// The email format is: name@domain. Any word can be the name, hyphens and dots are allowed. In regular expressions that’s [-.\w]+.
// my@mail.com
// his@site.com.uk

const regex32 = /[-.\w]+@([\w-]+\.)+[\w]+/g

console.log("my@mail.com @ his@site.com.uk".match(regex32));  //['my@mail.com', 'his@site.com.uk']

// Parentheses contents in the match
const str38 = '<h1>Hello, world!</h1>';
const regex33 = str38.match(/<(.*?)>/g);

// console.log(str38.match(regex33));  //['<h1>', '']
console.log(regex33[0]);  //<h1>
console.log(regex33[1]);  //</h1>



// Nested groups

const regex34 = /<(([a-z]+)\s*([^>]*))>/
const str39 = '<span class="my">';

const regex35 = str39.match(regex34);

console.log(regex35[0]);  //<span class="my">
console.log(regex35[1]);  //span class="my"
console.log(regex35[2]);  //span
console.log(regex35[3]);  //class="my"


// Optional groups
const match = "a".match(/a(z)?(c)?/);
console.log(match.length);  //3
console.log(match[0]); //a
console.log(match[1]);  //undefined
console.log(match[2]); //undefined

// And here’s a more complex match for the string ac:
const match1 = "ac".match(/a(z)?(c)?/);
console.log(match1.length);  //3
console.log(match1[0]); //a
console.log(match1[1]);  //undefined
console.log(match1[2]); //c


// The array length is permanent: 3. But there’s nothing for the group (z)?, so the result is ["ac", undefined, "c"].

// Searching for all matches with groups: matchAll
// The method matchAll is not supported in old browsers.


var results1 = "<h1> <h2>".matchAll(/<(.*?)>/gi);

results1 = Array.from(results1);
console.log(results1.join(""));  //<h1>,h1<h2>,h2

console.log(results1[0].join(" "));  //<h1> h1
console.log(results1[1].join(" ")); //<h2> h2


for(let x of results1){
    console.log(x.join(""));
};  
/*
<h1>h1
<h2>h2
*/

// …Or using destructuring:
// let [tag1, tag2] = '<h1> <h2>'.matchAll(/<(.*?)>/gi);

const regex36 = "<h1> <h2>".matchAll(/<(.*?)>/gi);

let [tag1, tag2] = regex36;

console.log(tag1[0]);  //<h1>
console.log(tag1[1]);  //h1
console.log(tag1.index);  //0
console.log(tag1.input);  //<h1> <h2>


// Named groups
// That’s done by putting ?<name> immediately after the opening paren.


const regex37 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const str40 = "2019-04-30";

const group = str40.match(regex37).groups;

console.log(group.year);  //2019
console.log(group.month);  //04
console.log(group.day);  //30


const regex38 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
const str41 = "2019-10-30 2020-01-01";

const result8 = str41.matchAll(regex38);

for(let result  of result8){
    let {year, month, day} = result .groups;

    console.log(`${day} ${month} ${year}`);
};
/*
30 10 2019
01 01 2020
*/


// Capturing groups in replacement
const str42 = "John Bull";
const regex39 = /(\w+) (\w+)/;

console.log(str42.replace(regex39, "$1,$2"));  //John,Bull


// For example, let’s reformat dates from “year-month-day” to “day.month.year”:

let regexp40 = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
let str43 = "2019-10-30, 2020-01-01";

console.log(str43.replace(regexp40,`$<day> $<month> $<year>`));  //30 10 2019, 01 01 2020

// Non-capturing groups with ?:
let str44 = "Gogogo John!";

// ?: excludes 'go' from capturing
let regex41 = /(?:go)+ (\w+)/i;

let result9 = str44.match(regex41);

console.log( result9[0] ); // Gogogo John (full match)
console.log( result9[1] ); // John
console.log( result9.length ); // 2 (no more items in the array)


//Tast
// Check MAC-address
// For instance: '01:32:54:67:89:AB'.

//Question
// let regex42 = /your regexp/;
// console.log( regex42.test('01:32:54:67:89:AB') ); // true
// console.log( regex42.test('0132546789AB') ); // false (no colons)
// console.log( regex42.test('01:32:54:67:89') ); // false (5 numbers, must be 6)
// console.log( regex42.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)

//Answer
let regex42 = /^[0-9a-f]{2}(:[0-9a-f]{2}){5}$/gi;
console.log( regex42.test('01:32:54:67:89:AB') ); // true
console.log( regex42.test('0132546789AB') ); // false (no colons)
console.log( regex42.test('01:32:54:67:89') ); // false (5 numbers, must be 6)
console.log( regex42.test('01:32:54:67:89:ZZ') ) // false (ZZ at the end)


// Find color in the format #abc or #abcdef
//Question
// let regex43 = /your regexp/g;
// let str45 = "color: #3f3; background-color: #AA00ef; and: #abcd";
// alert( str45.match(regex43) ); // #3f3 #AA00ef

//Answer
const regex43 = /#([a-f0-9]{3}){1,2}/gi;
const str45 = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(str45.match(regex43));  // #3f3 #AA00ef #abc

const regex44 = /#([a-f0-9]{3}){1,2}\b/gi;
const str46 = "color: #3f3; background-color: #AA00ef; and: #abcd";

console.log(str46.match(regex44));  //#3f3 #AA00ef


// Find all numbers
// let regexp = /your regexp/g
// let str = "-1.5 0 2 -123.4.";
// alert( str.match(regexp) ); // -1.5, 0, 2, -123.4
 const regex45 = /-?\d+(\.\d+)?/g;
 const str47 = "-1.5 0 2 -123.4";

 console.log(str47.match(regex45));


//  Parse an expression
/*
let [a, op, b] = parse("1.2 * 3.4");
alert(a); // 1.2
alert(op); // *
alert(b); // 3.4
*/

const regex46 = /(-?\d+(\.\d+)?)\s*([-+*\/])\s*(-?\d+(\.\d+)?)/g;
// let regex47 = /(-?\d+(\.\d+)?)\s*(([-+*\/]))\s*(-?\d+(\.\d+)?)/;
const result10 = "1.2 + 12".match(regex46);
console.log(result10);

// The result includes:

// result[0] == "1.2 + 12" (full match)
// result[1] == "1.2" (first group (-?\d+(\.\d+)?) – the first number, including the decimal part)
// result[2] == ".2" (second group(\.\d+)? – the first decimal part)
// result[3] == "+" (third group ([-+*\/]) – the operator)
// result[4] == "12" (forth group (-?\d+(\.\d+)?) – the second number)
// result[5] == undefined (fifth group (\.\d+)? – the last decimal part is absent, so it’s undefined)

function parse(expr) {
    let regexp = /(-?\d+(?:\.\d+)?)\s*([-+*\/])\s*(-?\d+(?:\.\d+)?)/;
  
    let result = expr.match(regexp);
  
    if (!result) return [];
    result.shift();
  
    return result;
  }
  
console.log( parse("-1.23 * 3.45") );  // -1.23, *, 3.45


// Backreferences in pattern: \N and \k<name>

const str48 = `He said: "She's the one!".`;
const regex47 = /['"](.*?)['"]/g;
console.log(str48.match(regex47)); //[`"She'`]

const regex48 = /(['"])(.*?)\1/g;
console.log(str48.match(regex48));  //[`"She's the one!"`]



const str49 = `He said: "She's the one!".`;
const regex49 = /(?<quote>['"])(.*?)\k<quote>/g;

console.log(str49.match(regex49));  //[`"She's the one!"`]



// Alternation (OR) |
// In a regular expression it is denoted with a vertical line character |.

const str50 = "First HTML appeared, then CSS, then JavaScript";
const regex50 = /html|css|php|java(script)?/gi;

console.log(str50.match(regex50));  //['HTML', 'CSS', 'JavaScript']

// Example: regexp for time
let regex51 = /([01]\d|2[0-3]):[0-5]\d/g;

console.log("00:00 10:10 23:59 25:99 1:2".match(regex51)); // 00:00,10:10,23:59

// Find programming languages
// let regexp = /your regexp/g;
// alert("Java JavaScript PHP C++ C".match(regexp)); // Java JavaScript PHP C++ C

const regex52 = /java|Javascript|PHP|C|C\+\+/gi;
console.log("Java JavaScript PHP C++ C".match(regex52));   // Java JavaScript PHP C++ C

// There are two solutions for that problem:
// Change the order to check the longer match first: JavaScript|Java|C\+\+|C|PHP.
// Merge variants with the same start: Java(Script)?|C(\+\+)?|PHP.

const regex53 = /Java(Script)?|C(\+\+)?|PHP/g;
console.log("Java, JavaScript, PHP, C, C++".match(regex53));  //['Java', 'JavaScript', 'PHP', 'C', 'C++']


// Find bbtag pairs
// Create a regexp to find all BB-tags with their contents.
// The full pattern: \[(b|url|quote)\].*?\[/\1].

const str51 = `[b]hello![/b][quote]  [url]http://google.com[/url] [/quote]`;
const regex54 = /\[(b|url|quote).*?\[\/\1]/gs;
// /\[(b|url|quote)].*?\[\/\1]/gs;
console.log(str51.match(regex54));  // ['[b]hello![/b]', '[quote]  [url]http://google.com[/url] [/quote]']

//Question

// Find quoted strings
// Create a regexp to find strings in double quotes "...".

let str52 = "Just like \"here\".";


// Examples of strings to match:
// .. "test me" ..
// .. "Say \"Hello\"!" ... (escaped quotes inside)
// .. "\\" ..  (double slash inside)
// .. "\\ \"" ..  (double slash and an escaped quote inside)


// In JavaScript we need to double the slashes to pass them right into the string, like this:

let str53 = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

// the in-memory string
console.log(str53); //  .. "test me" .. "Say \"Hello\"!" .. "\\ \"" ..


// The solution: /"(\\.|[^"\\])*"/g.

const regexp = /"(\\.|[^"\\])*"/g;
const str54 = ' .. "test me" .. "Say \\"Hello\\"!" .. "\\\\ \\"" .. ';

console.log(str54.match(regexp).join(""));  //"test me""Say \"Hello\"!""\\ \""

// Find the full tag

// let regexp1 = /your regexp/g;
const regexp18 = /<style(>|\s.*>)/g;

console.log( '<style> <styler> <style test="...">'.match(regexp18) ); // <style>, <style test="...">




// Lookahead and lookbehind
// There’s a special syntax for that, called “lookahead” and “lookbehind”, together referred to as “lookaround”.

// Lookahead
// The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". 
// There may be any pattern instead of X and Y.


// For an integer number followed by €, the regexp will be \d+(?=€):

const str55 = "1 turkey costs 30€";
const regexp2 = /\d+(?=€)/g;

console.log(str55.match(regexp2)); //30


// For example, \d+(?=\s)(?=.*30) 
// looks for \d+ that is followed by a space (?=\s), and there’s 30 somewhere after it (?=.*30):


const regexp3 = /\d+(?=\s)(?=.*30)/g;
console.log(str3.match(regexp3));  //1


// Negative lookahead
// The syntax is: X(?!Y), it means "search X, but only if not followed by Y".

const str56 =  "2 turkeys cost 60€";
const regexp4 = /\d+\b(?!€)/g;

console.log(str56.match(regexp4));   //2



// Lookbehind
/*
The syntax is:
Positive lookbehind: (?<=Y)X, matches X, but only if there’s Y before it.
Negative lookbehind: (?<!Y)X, matches X, but only if there’s no Y before it.
*/

const str57 = "1 turkey costs $30";
const regexp5 = /(?<=\$)\d+/;

console.log(str57.match(regexp5));  //30


// And, if we need the quantity – a number, not preceded by $,
// then we can use a negative lookbehind (?<!\$)\d+:

const str58 = "2 turkeys cost $60";
const regexp6 = /(?<!\$)\b\d+/g;

console.log(str58.match(regexp6));  //2


// In the example below the currency sign (€|kr) is captured, 
// along with the amount:

let str59 = "1 turkey costs 30€";
let regexp7 = /\d+(?=(€|kr))/; // extra parentheses around €|kr

console.log( str59.match(regexp7) ); // 30, €

// And here’s the same for lookbehind:
let str60 = "1 turkey costs $30";
let regexp8 = /(?<=(\$|£))\d+/;

console.log( str60.match(regexp8) ); // 30, $



// Find non-negative integers

// let regexp = /your regexp/g;
// let str = "0 12 -5 123 -18";
// alert( str.match(regexp) ); // 0, 12, 123

const str61 = "0 12 -5 123 -18";
const regexp9 = /(?<!-)\d+/g;

console.log(str61.match(regexp9));  // ['0', '12', '123', '8']
// As you can see, it matches 8, from -18. 

const regexp10 = /(?<![-\d])\d+/g;
console.log(str9.match(regexp10));  // ['0', '12', '123']


// Insert After Head
// let regexp11 = /your regular expression/;

const regexp12 = /<body .*?>/g;

const regexp13 = /(?<=<body .*?)>/g;

let str62 = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;

console.log(str62.replace(regexp12, `$&<h1>Hello</h1>`)); 

console.log(str62.replace(regexp13, `<h1>Hello</h1>`));


// output
/*
<html>
  <body style="height: 200px"> <h1>Hello</h1>
  ...
  </body>
</html>*/



// Catastrophic backtracking
// Some regular expressions are looking simple, 
// but can execute a veeeeeery long time, and even “hang” the JavaScript engine.


let regexp14 = /^(\w+\s?)*$/;

console.log("A good string".match(regexp14).join(" ")); //A good string string
console.log("Bad characters: $@#".match(regexp14));  //null

// will take a very long time
// console.log("An input string that takes a long time or even makes this regexp hang!".match(regexp14));


// Sticky flag "y", searching at position
// The flag y allows to perform the search at the given position in the source string.

// Here’s an example of such calls:
const str63 = 'let varName';
const  regexp15 = /\w+/g;

console.log(regexp15.lastIndex);  // 0 (initially lastIndex=0)

const word1 = regexp15.exec(str63);  
console.log(word1[0]);  //let 
console.log(regexp15.lastIndex); //3

const word2 = regexp15.exec(str63);
console.log(word2[0]);  //varName
console.log(regexp15.lastIndex);  //11

const word3 = regexp.exec(str63);
console.log(word3);  //null
console.log(regexp15.lastIndex); //11

// We can get all matches in the loop:
let str64 = 'let varName';
let regexp16 = /\w+/g;

let result12;

while (result12 = regexp16.exec(str64)) {
    console.log(`Found ${result12[0]} at position ${result12.index} `);

    // Found let at position 0, then
   // Found varName at position 4

}


// We can manually set lastIndex to 4, to start the search from the given position!
const str65 = 'let varName = "value"';
const regexp19 = /\w+/g;

regexp19.lastIndex = 4;
const word4 = regexp19.exec(str65); 
console.log(word4.join(""));  //varName


/*
let str = 'let varName = "value"';

let regexp = /\w+/g;

// start the search from position 3
regexp.lastIndex = 3;

let word = regexp.exec(str);
// found the match at position 4
alert(word[0]); // varName
alert(word.index); // 4
*/


// The flag y makes regexp.exec to search exactly at position lastIndex, not “starting from” it.

const str66 = 'let varName = "value"';
const regexp20 = /\w+/y;

regexp20.lastIndex = 3;
console.log(regexp20.exec(str66));  // null (there's a space at position 3, not a word)

regexp20.lastIndex = 4;
console.log(regexp20.exec(str66).join(""));  //varName


// Looking for a series of digits

var randomData =  "015 354 8787 687351 3512 8735";
var regexpFourDigits = /\b\d{4}\b/g;

console.table(randomData.match(regexpFourDigits));   // ['8787', '3512', '8735']

// Looking for a word (from the latin alphabet) starting with A

var aliceExcerpt = "I'm sure I'm not Ada,' she said, 'for her hair goes in such long ringlets, and mine doesn't go in ringlets at all.";
var regexpWordStartingWithA  = /\b[aA]\w+/g;

console.table(aliceExcerpt.match(regexpWordStartingWithA));   // ['Ada', 'and', 'at', 'all']


var lookahead1 = /Jack(?=Sprat)/g;
var str67 = "hi I am JackSprat";

console.log(str67.match(lookahead1));  //['Jack']

var lookahead2 = /Jack(?=Sprat|Frost)/g;
var str68 = "hi I am JackFrost";

console.log(str68.match(lookahead2));  //['Jack']

console.log(/\d+(?!\.)/g.exec(3.141).join(""));  //141

const aliceExcerpt1 = 'The Caterpillar and Alice looked at each other';
const regexpWithoutE1 = /\b[a-df-z]+\b/gi;
console.log(aliceExcerpt1.match(regexpWithoutE1));  // ['and', 'at']

const imageDescription = 'This image has a resolution of 1440×900 pixels.';
const regexpSize =  /([0-9]+)×([0-9]+)/gi;
const match2= imageDescription.match(regexpSize);
console.log(match2);  //['1440×900']


// Counting vowels
var aliceExcerpt2 = "There was a long silence after this, and Alice could only hear whispers now and then.";
var regexpVowels  = /[AEIOUYaeiouy]/g;

console.table("Number of vowels:",aliceExcerpt2.match(regexpVowels).length);  //Number of vowels: 26


// Using groups
let personList = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;

let match3 = regexpNames.exec(personList);

do {

  console.log(`Hello ${match3[1]} ${match3[2]}`);

} while((match3 = regexpNames.exec(personList)) !== null);  
/*
Hello John Doe
Hello Jane Smith
*/

// Using named groups
let personList1 = `First_Name: John, Last_Name: Doe
First_Name: Jane, Last_Name: Smith`;

let regexpNames1 =  /First_Name: (?<firstname>\w+), Last_Name: (?<lastname>\w+)/mg;

let match4 = regexpNames1.exec(personList1);
do {

  console.log(`Hello ${match4.groups.firstname} ${match4.groups.lastname}`);

} while((match4 = regexpNames1.exec(personList1)) !== null);
/*
Hello John Doe
Hello Jane Smith
*/


const ghostSpeak = 'booh boooooooh';
const regexpSpooky = /bo{3,}h/g;
console.log(ghostSpeak.match(regexpSpooky));   //['boooooooh']


const modifiedQuote = '[He] ha[s] to go read this novel [Alice in Wonderland].';
const regexpModifications = /\[.*?\]/g;
console.log(modifiedQuote.match(regexpModifications));  //['[He]', '[s]', '[Alice in Wonderland]']


// Repeated pattern
var wordEndingWithAs = /\w+a+\b/;
var delicateMessage = "This is Spartaaaaaaa";
console.table(delicateMessage.match(wordEndingWithAs));  

// Counting characters
var sentence = "Why do I have to learn multiplication table?";

var singleLetterWord  = /\b\w\b/g;
console.log(sentence.match(singleLetterWord));  "I"

var notSoLongWord = /\b\w{1,6}\b/g;
console.log(sentence.match(notSoLongWord));  //['Why', 'do', 'I', 'have', 'to', 'learn', 'table']

var loooongWord = /\b\w{13,}\b/g;
console.log(sentence.match(loooongWord));  //['multiplication']


// Optional character
var regexpEnding = /\w+ou?r/g;

var britishText =  "He asked his neighbour a favour.";
console.log(britishText.match(regexpEnding));  //['neighbour', 'favour']

var americanText = "He asked his neighbor a favor.";
console.log(americanText.match(regexpEnding));  // ['neighbor', 'favor']

// Greedy versus non-greedy
var text1 = "I must be getting somewhere near the center of the earth.";
var greedyRegexp = /[\w ]+/;
console.log(text1.match(greedyRegexp)[0]);  //I must be getting somewhere near the center of the earth

var nonGreedyRegexp = /[\w ]+?/; // Notice the question mark
console.log(text1.match(nonGreedyRegexp));  //"[I]"


/******************************************************regular expressions in method *******************************************************/

/***********************RegExp.exec()*************************/
// The exec() method executes a search for a match in a specified string. Returns a result array, or null.
/*
Syntax
exec(str)
*/

const regexp21 = /foo*/g;
const str69 = 'table football, foosball';

let array3;

while ((array3 = regexp21.exec(str69)) !== null ) {
  console.log(`Found ${array3[0]} . Next starts at ${regexp21.lastIndex}.`);
   // expected output: "Found foo. Next starts at 9."
  // expected output: "Found foo. Next starts at 19."
};

console.log(regexp21.exec(str69));  //['foo', index: 6, input: 'table football, foosball', groups: undefined]


const re = /quick\s(brown).+?(jumps)/igd;

const result11  = re.exec("'The Quick Brown Fox Jumps Over The Lazy Dog'");

console.log(result11[0]);  //Quick Brown Fox Jumps

console.log(result11[1]);  //Brown

console.log(result11[2]);  //Jumps

console.log(result11.index);  //5

console.log(result11.indices[0]);  //[5, 26]

console.log(result11.indices[1]); // [11, 16]

console.log(result11.indices[2]); //[21, 26]

console.log(result11.indices.groups); //undefine

console.log(result11.indices.length);  //2 

console.log(result11.input);  //'The Quick Brown Fox Jumps Over The Lazy Dog'

// console.log(result11.source);  //quick\s(brown).+?(jumps)

const re1 = /ab*/g;
const str70 = 'abbcdefabh';

let myarray;

while ((myarray = re1.exec(str70)) !== null) {
  let msg = "Found " + myarray[0] + " .";
  msg += " Next Starts at " + re1.lastIndex + " ."

  console.log(msg);
  // Found abb . Next Starts at 3 .
  // Found ab . Next Starts at 9 .

};

// Using exec() with RegExp literals
let matches = /(hello \S+)/.exec('This is a hello world!');
console.log(matches[1]);  //hello world!

/******************************RegExp.test()********************************* */
// The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.
/*
Syntax
test(str)
*/
const str71 = 'table football';

const regexp22 = new RegExp("foo*");
const globalRegex = new RegExp("foo*","g");

console.log(regexp22.test(str71));  //true
console.log(globalRegex.lastIndex);  //0
console.log(globalRegex.test(str71));  //true
console.log(globalRegex.lastIndex);  //9
console.log(globalRegex.test(str71)); //false

// Using test()
const str72 = 'hello world!';
const regexp23 = /^hello/g;

console.log(regexp23.test(str72));  //trur

// The following example logs a message which depends on the success of the test:

function testInput(re,str){
  let midstring;
  if(re.test(str)){
    midstring = "contains"
  }else{
    midstring = "Do not contains"
  }
  console.log(`${str} ${midstring} ${re.source}`);
};

testInput(/^Hello/g,"Hello World"); //Hello World contains ^Hello

testInput(/^Hello/g,"Sello World"); //Hello World contains ^Hello



/*******************************String.prototype.match()*****************/
// The match() method retrieves the result of matching a string against a regular expression.
/*
Syntax
match(regexp)
*/


const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regexp24 = /[A-Z]/g;
const found1 = paragraph.match(regexp24);  

console.log(found1);  //['T', 'I']


const str73 =  'For more information, see Chapter 3.4.5.1';
const re2 = /see (chapter \d+(\.\d)*)/i;
const found2 = str73.match(re2); 

console.log(found2);  //['see Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1', index: 22, input: 'For more information, see Chapter 3.4.5.1', groups: undefined]


// Using global and ignore case flags with match()
const str75 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const re3 = /[A-E]/gi;
const found3 = str75.match(re3); 

console.log(found3);  //['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

const paragraph1 = 'The quick brown fox jumps over the lazy dog. It barked.';

const capturingRegex = /(?<animal>fox|cat) jumps over/;
const found = paragraph1.match(capturingRegex);
console.log(found.groups); // {animal: "fox"}


/***************************************String.matchAll()*******************************/
// The matchAll() method returns an iterator of all results matching a string against a regular expression, including capturing groups.
/*
Syntax
matchAll(regexp)
*/


const str76 = 'test1test2';
const re4 = /t(e)(st(\d?))/g;

const array4 = [...str76.matchAll(re4)];  

console.log(array4); 
console.log(array4[0]); //['test1', 'e', 'st1', '1', index: 0, input: 'test1test2', groups: undefined]
console.log(array4[1]); //['test2', 'e', 'st2', '2', index: 5, input: 'test1test2', groups: undefined]


// Regexp.exec() and matchAll()


const regexp25 = /foo*/g;
const str77 = 'table football, foosball';

let array5;

while ((array5 = regexp25.exec(str77)) !== null ) {
  console.log(`Found ${array5[0]}  starts = ${array5.index}  end = ${regexp25.lastIndex}.`);
  //Found foo  starts = 6  end = 9.
  //Found foo  starts = 16  end = 19.
};

// With matchAll available, you can avoid the while loop and exec with g.
// by using matchAll, you get an iterator to use with the more convenient for...of, array spread, or Array.from() constructs:

const regexp26 = /foo[a-z]*/g;
const str78 = 'table football, foosball';
const matchall = str78.matchAll(regexp26);

for(let match of matchall){
  console.log(`Found ${match[0]} start=${match.index} end=${match.index + match[0].length}.`);
  // expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."
};


// Call matchAll again to create a new iterator
console.log(Array.from(str78.matchAll(regexp26), m => m[0]));  //['football', 'foosball']


const regexp27 = /[a-c]/g;
regexp27.lastIndex = 1;

const str79 = "abc";

console.log(Array.from(str79.matchAll(regexp27), m => `${regexp27.lastIndex} ${m[0]}`)); //['1 b', '1 c']

/*************************************String.search()****************************/
// The search() method executes a search for a match between a regular expression and this String object.
/*
Syntax
search(regexp)
*/

const paragraph2 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regexp28 = /[^\w\s]/g;

console.log(paragraph2.search(regexp28));  //43

console.log(paragraph2[paragraph2.search(regexp28)]); // .

// Using search()
const str80 = "hey JudE";
const re5 = /[A-Z]/g;
const re6 = /[.]/g;

console.log(str80.search(re5));   //4
console.log(str80.search(re6));  //-1


/***************************String.replace()************************/
// The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
/*
Syntax
replace(regexp, newSubstr)
replace(regexp, replacerFunction)
replace(substr, newSubstr)
replace(substr, replacerFunction)
*/

const str81 =  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const re7 = /Dog/gi;

console.log(str81.replace(re7,"Monky"));  //The quick brown fox jumps over the lazy Monky. If the Monky barked, was it really lazy?

// The following example will set newString to 'abc - 12345 - #$*%':

function replacer(match,p1,p2,p3,offset,string){
  return [p1,p2,p3].join(" - ")
};

const str82 = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/g,replacer);

console.log(str82);  //abc - 12345 - #$*% -  - 

// Switching words in a string

const str83 =  'John Smith';
const re8 = /(\w+)\s(\w+)/;

const newstr = str83.replace(re8, "$2 $1");
console.log(newstr);  //Smith John

/*****************************************String.replaceAll()***************************************/
// The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
/*
Syntax
replaceAll(regexp, newSubstr)
replaceAll(regexp, replacerFunction)
replaceAll(substr, newSubstr)
replaceAll(substr, replacerFunction)
*/

const str84 =  'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const re9 = /Dog/ig;

console.log(str84.replaceAll(re9, "monky"));  //The quick brown fox jumps over the lazy monky. If the monky barked, was it really lazy?