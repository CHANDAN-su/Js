console.log("Date Object");  //Date Object

// Date
// JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


/************************************************************Date() constructor*******************************************/
// Creates a JavaScript Date instance that represents a single moment in time in a platform- independent format. 
// Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.


const date1 = new Date("December 17 ,1995 03:24:00");
console.log(date1);  //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)

const date2 = new Date("1995-12-17T03:24:00");
console.log(date2); //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)

console.log(date1 === date2);  //false
console.log(date1-date2); //0
