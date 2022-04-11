console.log("Date Object");  //Date Object

// Date
// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

/**********************************Date method*******************************************************/
/************************************************************Date() constructor*******************************************/
// Creates a JavaScript Date instance that represents a single moment in time in a platform- independent format. 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

/*
Syntax

new Date()
new Date(value)
new Date(dateString) 
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)

new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
*/

const date11 = new Date("December 17 ,1995 03:24:00");
console.log(date11);  //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)

const date21 = new Date("1995-12-17T03:24:00");
console.log(date21); //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)

console.log(date11 === date21);  //false
console.log(date11-date21); //0

// new Date()
const date = new Date();
console.log(date);   //2022-04-11T064615.246Z

//  new Date(value)
const date1 = new Date('December 17, 1995 032400');
console.log(date1);  //1995-12-17T032400.000Z

//  new Date(dateString) 
const date2 = new Date(12-17-1995);
console.log(date2);  //1995-12-17T000000.000Z

//  new Date(year, monthIndex)
const date3 = new Date(2022,5);
console.log(date3);  //2022-06-01T000000.000Z

//  new Date(year, monthIndex, day)
const date4 = new Date(2022,5,3);
console.log(date4); // 2022-06-03T000000.000Z

//  new Date(year, monthIndex, day, hours)
const date5 = new Date(2022,5,3,15);
console.log(date5);  //2022-06-03T150000.000Z

//  new Date(year, monthIndex, day, hours, minutes)
const date6 = new Date(2022,5,3,15,23);
console.log(date6); // 2022-06-03T152300.000Z

//  new Date(year, monthIndex, day, hours, minutes, seconds)
const date7 = new Date(2022,5,3,15,23,55);
console.log(date7);  //2022-06-03T152355.000Z

//  new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
const date8 = new Date(2022,5,3,15,23,55,989);
console.log(date8);  //2022-06-03T152355.989Z


/**********************************************************Date.now( )*************************************/
//  The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 000000 UTC.
/*
Syntax
Date.now()
*/

const start = Date.now();
console.log("Starting Timer");

// setTimeout( () => {
//   const milles = Date.now()  - start;
//   console.log(`seconds elapsed ${Math.floor(milles/1000)}`);
// //    seconds elapsed 2
// }, 2000); 

// UTC + 5:30 => IST 
// GMT 

/*********************************************************Date.parse( )*********************************************8*/
//  The Date.parse() method parses a string representation of a date, and returns 
//  the number of milliseconds since January 1, 1970, 000000 UTC 
/*
Syntax
Direct call
Date.parse(dateString)
 
Implicit call
new Date(dateString)
*/
const unixTimeZero = Date.parse('01 Jan 1970 00:00:00 GMT');
const javaScriptRelease  = Date.parse('04 Dec 1995 00:12:00 GMT');

console.log(unixTimeZero);  //0
console.log(javaScriptRelease); //818035920000


// Date Time String Format
// For example
// 1.   " 2011-10-10 " (date-only form)
// 2.   " 2011-10-10T14:48:00 " (date-time form)
// 3.   " 2011-10-10T14:48:00.000+09:00 " (date-time form with milliseconds and time zone) 


// Fall-back to implementation-specific date formats
// Non-ISO string with invalid date values 
console.log(new Date('23/25/2014'));  //Invalid Date


// ISO string with invalid values 
// console.log(new Date('2014-25-23').toISOString());  //// throws "RangeError: invalid date" in all ES5-compliant browsers

console.log(new Date('10 06 2014'));  //Mon Oct 06 2014 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date('foo-bar 2014').toString()); // Wed Jan 01 2014 00:00:00 GMT+0530 (India Standard Time)






