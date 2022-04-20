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


/******************************************************Date.getDate()**********************************/
// The getDate() method returns the day of the month for the specified date according to local time.
/*
Syntax
getDate()
*/

const birthday = new Date('September 01, 2001 23:55:30');
const day = birthday.getDate();
console.log(day);  //1

/************************************************Date.getDay()*************************************/
// The getDay() method returns the day of the week for the specified date according to local time, where 0 represents Sunday. 
/*
Syntax
getDay()
*/

const birthday1 = new Date('September 01, 2001 23:55:30');
const day1 = birthday1.getDay();
console.log(day1);  //6

/************************************************Date.getFullYear()******************************/
// The getFullYear() method returns the year of the specified date according to local time. 
// Use this method instead of the getYear() method.
/*
Syntax
getFullYear()
*/

const birthday2 = new Date('September 01, 2001 23:55:30');
const yesr = birthday2.getFullYear();
console.log(yesr);  //2001

var today = new Date();
var year = today.getFullYear();
console.log(year); //2022

/**********************************************************Date.getHours()******************************************/
// The getHours() method returns the hour for the specified date, according to local time.
/*
Syntax
getHours()
*/

const birthday3 = new Date('September 01, 2001 23:55:30');
const hour = birthday3.getHours();
console.log(hour);  //23

/********************************************************Date.getMilliseconds()*****************************/
// The getMilliseconds() method returns the milliseconds in the specified date according to local time.
/*
Syntax
getMilliseconds()
*/

const birthday4 = new Date('September 01, 2001 23:55:330');
const Milliseconds = birthday4.getMilliseconds();
console.log(Milliseconds);  //0

console.log(birthday4.setMilliseconds(123));  //999368700123


var today1 = new Date();
var milliseconds1 = today1.getMilliseconds();
console.log(milliseconds1);  //871

/**********************************************Date.getMinutes()*********************************/
// The getMinutes() method returns the minutes in the specified date according to local time.
/*
Syntax
getMinutes()
*/

const birthday5 = new Date('September 01, 2001 23:55:330');
const Minutes = birthday5.getMinutes();
console.log(Minutes);  //55

/*******************************************************Date.getMonth()***************************************/
// The getMonth() method returns the month in the specified date according to local time, 
// as a zero-based value (where zero indicates the first month of the year).
/*
Syntax
getMonth()
*/

const moonLanding = new Date('July 20, 69 00:20:18');
console.log(moonLanding.getMonth()); // (January gives 0) // expected output: 6


/********************************************************************Date.getSeconds()************************************/
// The getSeconds() method returns the seconds in the specified date according to local time.
/*
Syntax
getSeconds()
*/

const birthday6 = new Date('September 01, 2001 23:55:30');
const Seconds = birthday6.getSeconds();
console.log(Seconds);  //30


/*********************************************************Date.getTime()***************************************************/
// The getTime() method returns the number of milliseconds* since the Unix Epoch	.
/*
Syntax
getTime()
*/


const date12 = new Date('July 20, 69 20:17:40 GMT+00:00');

console.log(date12.getTime());  //-14182940000

console.log(new Date().getTime());  //1650214598692

// Using getTime() for copying dates

// Since month is zero based, birthday will be January 10, 1995
var birthday7 = new Date(1994, 12, 10);
var copy = new Date();
console.log(copy.setTime(birthday.getTime()));  //999368730000

// Measuring execution time
var end, start1;

start1 = new Date();
for (var i = 0; i < 2000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start1.getTime()) + ' msec');  //Operation took 2 msec

var today111 = new Date();
var dayOfMonth = today111.getUTCDate();
console.log(dayOfMonth);


const date111 = new Date('April 17, 2022 23:15:30 GMT+11:00');
const date211 = new Date('April 17, 2022 13:00:30 GMT-11:00');
console.log(date111.getUTCDate());  //17
console.log(date211.getUTCDate());   //18


/************************************************Intl.DateTimeFormat**********************************************/

/*
Syntax
new Intl.DateTimeFormat()
new Intl.DateTimeFormat(locales)
new Intl.DateTimeFormat(locales, options)
*/

const date13 = new Date();
console.log(new Intl.DateTimeFormat("en-US", {
  
  // dateStyle
  // dateStyle: "full",  //Monday, April 18, 2022
  dateStyle: "long",  //April 18, 2022
  // dateStyle: "medium",  //Apr 18, 2022
  // dateStyle: "short",  //4/18/22
  
  // timeStyle
  // timeStyle: "full", //9:10:34 AM Coordinated Universal Time
  timeStyle: "long",  //9:11:05 AM UTC
  // timeStyle: "medium"  //9:11:24 AM
  // timeStyle: "short",  //9:11 AM
  
  // calendar
  // calendar: "japanese"
  // calendar: "chinese"
  // calendar: "indian"
  
  // timeZone
  // timeZone: "Asia/Shanghai"  //5:24:58 PM GMT+8
  timeZone: "Asia/Kolkata",  //2:55:31 PM GMT+5:30
  // timeZone: "America/New_York"  //5:25:55 AM EDT
  
  // hourCycle
  // hourCycle: "h11"  //2:58:11 PM GMT+5:30
  // hourCycle: "h12"  //2:58:36 PM GMT+5:30
  // hourCycle: "h23"  //14:58:59 GMT+5:30
  hourCycle: "h24", //14:59:23 GMT+5:30

}).format(date13));

console.log("Next")

const date14 = new Date();


console.log(new Intl.DateTimeFormat("en-US",{
  
  timeZone: "Asia/Kolkata",
  
  // weekday
  // weekday: "long"  //Monday
  // weekday: "short"  //Mon
  // weekday: "narrow"  //M
  
  // era
  // era: "long"  //4 18, 2022 Anno Domini
  // era: "short"  //4 18, 2022 AD
  // era: "narrow"  //4 18, 2022 A
  
  // year
  year: "numeric" , //2022
  // year: "2-digit"  //22
  
  // month
  // month: "numeric"  //04/2022
  // month: "2-digit"  //04/2022
  month: "long",  //April 2022
  // month: "short"  //Apr 2022
  // month: "narrow"  //A 2022
  
  
  // day
  // day: "numeric"  //April 18, 2022
  day: "2-digit",  //April 18, 2022
  
  // hour
  // hour: "numeric"  //April 18, 2022, 3 PM
  hour: "2-digit",  //April 18, 2022, 03 PM
  
  // minute
  minute: "numeric",  //April 18, 2022, 03:18 PM
  // minute: "2-digit"  //April 18, 2022, 03:18 PM
  
  
  // second
  // second: "numeric"  //April 18, 2022, 03:19:48 PM
  second: "2-digit",  //April 18, 2022, 03:20:09 PM
  
  // timeZoneName
  // timeZoneName: "long"  //April 18, 2022, 03:25:05 PM India Standard Time
  timeZoneName: "short"  //April 18, 2022, 03:25:29 PM GMT+5:30

}).format(date14));

console.log(new Intl.DateTimeFormat().format(Date.now())); 
//4/18/2022


// Using dayPeriod
let date15 = Date.UTC(2012, 11, 17, 4, 0, 42);

console.log(new Intl.DateTimeFormat('en-GB', { 
  hour: 'numeric', 
  hourCycle: 'h12', 
  dayPeriod: 'short', 
  timeZone: 'UTC' 
  
}).format(date15));   // > 4 at night"  

console.log(new Intl.DateTimeFormat('fr', {
  hour: 'numeric',
  hourCycle: 'h12',
  dayPeriod: 'narrow', 
  timeZone: 'UTC' 
  
}).format(date15));// > "4 mat."  

console.log(new Intl.DateTimeFormat('fr', { 
  hour: 'numeric', 
  hourCycle: 'h12', 
    dayPeriod: 'long', 
    timeZone: 'UTC' 
  
}).format(date15)); // > "4 du matin"


const date16 = new Date();
const arry = ['short', 'long', 'shortOffset', 'longOffset', 'shortGeneric', 'longGeneric'];

for(let Zonename of arry){
  var formatter = new Intl.DateTimeFormat("en-US",{
    timeZone: "Asia/Kolkata",
    timeZoneName: Zonename,
  })
  console.log(Zonename + ": " + formatter.format(date16))
}; 
/*
short: 4/17/2022, GMT+5:30
long: 4/17/2022, India Standard Time
shortOffset: 4/17/2022, GMT+5:30
longOffset: 4/17/2022, GMT+05:30
shortGeneric: 4/17/2022, India Time
longGeneric: 4/17/2022, India Standard Time
*/

// Using format
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const datefomate = new Intl.DateTimeFormat("en-US",options);

console.log(datefomate.format(new Date()));  //Monday, April 18, 2022

// Using format with map
var a = [new Date(2021,8) , new Date(2021,12) , new Date(2021,3)];

var options1 = { year: "numeric",   month: "long", };

var formatters = new Intl.DateTimeFormat("en-US",options1);

var mapping = a.map(formatters.format);

console.log(mapping.join(","));  //September 2021,January 2022,April 2021


// Intl.DateTimeFormat.prototype.formatToParts()
/*
Syntax
formatToParts(date)
*/

const date17 = new Date();
var formatter = new Intl.DateTimeFormat('en-us', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  fractionalSecondDigits: 3,
  hour12: true,
  timeZone: 'UTC'
});

console.log(formatter.format(date17));  //Monday, 4/18/2022, 5:57:27.251 PM

console.log(formatter.formatToParts(date17));
/*
{type: 'weekday', value: 'Monday'}
{type: 'literal', value: ', '}
{type: 'month', value: '4'}
{type: 'literal', value: '/'}
{type: 'day', value: '18'}
{type: 'literal', value: '/'}
{type: 'year', value: '2022'}
{type: 'literal', value: ', '}
{type: 'hour', value: '5'}
{type: 'literal', value: ':'}
{type: 'minute', value: '58'}
{type: 'literal', value: ':'}
{type: 'second', value: '23'}
{type: 'literal', value: '.'}
{type: 'fractionalSecond', value: '160'}
{type: 'literal', value: ' '}
{type: 'dayPeriod', value: 'PM'}
*/

var dateString = formatter.formatToParts(date17).map(({type, value}) => {
  switch (type) {
    case 'dayPeriod': 
    return `<b>${value}</b>`;

    default : return value;
  }
}).join('');

console.log(formatter.format(date));  // "Monday, 12/17/2012, 3:00:42.000 AM"

console.log(dateString);  // "Monday, 12/17/2012, 3:00:42.000 <b>AM</b>"

// Intl.DateTimeFormat.prototype.formatRange()
// The Intl.DateTimeFormat.prototype.formatRange() formats a date range in the most concise way based on 
// the locale and options provided when instantiating Intl.DateTimeFormat object.
/*
Syntax
formatRange(startDate, endDate)
*/

const options4 = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
};

const startDate = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
const endDate = new Date(Date.UTC(2008, 0, 10, 11, 0, 0));

const dateTimeFormat = new Intl.DateTimeFormat("en",options4);
console.log(dateTimeFormat.formatRange(startDate, endDate));  //Wednesday, January 10, 2007 – Thursday, January 10, 2008


const options5 = { 
  year: '2-digit', 
  month: 'numeric', 
  day: 'numeric' 
};
const dateTimeFormat1 = new Intl.DateTimeFormat("en",options5);
console.log(dateTimeFormat1.formatRange(startDate, endDate));  //1/10/07 – 1/10/08



let date18 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0)); // > 'Wed, 10 Jan 2007 10:00:00 GMT'
let date29 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0)); // > 'Wed, 10 Jan 2007 11:00:00 GMT'
let date30 = new Date(Date.UTC(2007, 0, 20, 10, 0, 0)); // > 'Sat, 20 Jan 2007 10:00:00 GMT'


let fmt1 = new Intl.DateTimeFormat("en", {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
});
console.log(fmt1.format(date1)); // > '1/10/07, 10:00 AM'
console.log(fmt1.formatRange(date18, date29)); // > '1/10/07, 10:00 – 11:00 AM'
console.log(fmt1.formatRange(date18, date30)); // > '1/10/07, 10:00 AM – 1/20/07, 10:00 AM'


let fmt2 = new Intl.DateTimeFormat("en", {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
});
console.log(fmt2.format(date1)); // > 'Jan 10, 2007'
console.log(fmt2.formatRange(date18, date29)); // > 'Jan 10, 2007'
console.log(fmt2.formatRange(date18, date30)); // > 'Jan 10 – 20, 2007'

// Intl.DateTimeFormat.prototype.formatRangeToParts()
// The Intl.DateTimeFormat.prototype.formatRangeToParts() method returns an array of locale-specific tokens representing each part of
//  the formatted date range produced by Intl.DateTimeFormat formatters.
/*
Syntax
formatRangeToParts(startDate, endDate)
*/

const startDate1 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0)); // > 'Wed, 10 Jan 2007 10:00:00 GMT'
const endDate1 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));   // > 'Wed, 10 Jan 2007 11:00:00 GMT'

const dateTimeFormat2 = new Intl.DateTimeFormat('en', {
  hour: 'numeric',
  minute: 'numeric'
});

const parts = dateTimeFormat2.formatRangeToParts(startDate1, endDate1);
for (const part of parts) {
  console.log(part);
}
/*
{type: 'hour', value: '3', source: 'startRange'}source: "startRange"type: "hour"value: "3"[[Prototype]]: Object
{type: 'literal', value: ':', source: 'startRange'}
{type: 'minute', value: '30', source: 'startRange'}
{type: 'literal', value: ' – ', source: 'shared'}
{type: 'hour', value: '4', source: 'endRange'}
{type: 'literal', value: ':', source: 'endRange'}
{type: 'minute', value: '30', source: 'endRange'}
{type: 'literal', value: ' ', source: 'shared'}
{type: 'dayPeriod', value: 'PM', source: 'shared'}
*/

let date28 = new Date(Date.UTC(2007, 0, 10, 10, 0, 0));
let date27 = new Date(Date.UTC(2007, 0, 10, 11, 0, 0));
// > 'Wed, 10 Jan 2007 10:00:00 GMT'
// > 'Wed, 10 Jan 2007 11:00:00 GMT'

let fmt8 = new Intl.DateTimeFormat("en", {
    hour: 'numeric',
    minute: 'numeric'
});

console.log(fmt8.formatRange(date28, date27));
// > '10:00 – 11:00 AM'

console.log(fmt8.formatRangeToParts(date28, date27));
/*
{type: 'hour', value: '3', source: 'startRange'}
{type: 'literal', value: ':', source: 'startRange'}
{type: 'minute', value: '30', source: 'startRange'}
{type: 'literal', value: ' – ', source: 'shared'}
{type: 'hour', value: '4', source: 'endRange'}
{type: 'literal', value: ':', source: 'endRange'}
{type: 'minute', value: '30', source: 'endRange'}
{type: 'literal', value: ' ', source: 'shared'}
{type: 'dayPeriod', value: 'PM', source: 'shared'}
*/

/***********************************Date.getUTCDate()*********************************/
// The getUTCDate() method returns the day of the month(from 1 to 31) in the specified date according to universal time.
/*
Syntax
getUTCDate()
*/

const udate = new Date('August 19, 1975 23:15:30 GMT+11:00');
console.log(udate.getUTCDate());  //19


const udate1 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(udate1.getUTCDate());  //20

var today = new Date();
var dayOfMonth = today.getUTCDate();
console.log(dayOfMonth);  //20


/**********************************Date.getUTCDay()************************/
// The getUTCDay() method returns the day of the week in the specified date according to universal time, where 0 represents Sunday.
/*
Syntax
getUTCDay()
*/

const udate2 = new Date('August 19, 1975 23:15:30 GMT+11:00');
console.log(udate2.getUTCDay());  //2


const udate3 = new Date('August 19, 1975 23:15:30 GMT-11:00');
console.log(udate3.getUTCDay());  //3

var today1 = new Date();
var weekday  = today1.getUTCDay();
console.log(weekday );  //3


/**************************************Date.getUTCFullYear()*****************************/
// The getUTCFullYear() method returns the year in the specified date according to universal time.

/*Syntax
getUTCFullYear()
*/

const udate4 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
console.log(udate4.getUTCFullYear());  //1975


const udate5 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(udate5.getUTCFullYear());  //1976

var today2 = new Date();
var year   = today2.getUTCFullYear();
console.log(year);  //2022

/**********************************Date.getUTCHours()********************************/
// The getUTCHours() method returns the hours in the specified date according to universal time.
/*
Syntax
getUTCHours()
*/

const udate6 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
console.log(udate6.getUTCHours());  //12


const udate7 = new Date('December 31, 1975, 23:15:30 GMT-11:00');
console.log(udate7.getUTCHours());  //10

var today3 = new Date();
var hours    = today2.getUTCHours();
console.log(hours);  //7

/***************************************Date.getUTCMilliseconds()***************************/
// The getUTCMilliseconds() method returns the milliseconds portion of the time object's value according to universal time.
/*
Syntax
getUTCMilliseconds()
*/
const exampleDate = new Date('2018-01-02T03:04:05.678Z');
console.log(exampleDate.getUTCMilliseconds());  //678

var today = new Date();
var milliseconds = today.getUTCMilliseconds();
console.log(milliseconds);  //750

/***********************************************Date.getUTCMinutes()*************************************/
// The getUTCMinutes() method returns the minutes in the specified date according to universal time.
/*
Syntax
getUTCMinutes()
*/

const udate8 = new Date('1 January 2000	03:15:30 GMT+07:00');
const udate9 = new Date('1 January 2000	03:15:30 GMT+03:30');

console.log(udate8.getUTCMinutes()); //15
console.log(udate9.getUTCMinutes());  //45

var today = new Date();
var minutes = today.getUTCMinutes();
console.log(minutes);  //41


/***********************************************************Date.getUTCMonth()*********************************************/
// The getUTCMonth() returns the month of the specified date according to universal time, as a zero-based value (where zero indicates the first month of the year).
/*
Syntax
getUTCMonth()
*/

const udate10 = new Date('December 31, 1975, 23:15:30 GMT+11:00');
const udate11 = new Date('December 31, 1975, 23:15:30 GMT-11:00');

console.log(udate10.getUTCMonth());  //11
console.log(udate11.getUTCMonth());  //0


var today = new Date();
var month = today.getUTCMonth();
console.log(month);  //3


/*******************************************************Date.getUTCSeconds()************************************/
// The getUTCSeconds() method returns the seconds in the specified date according to universal time.
/*
Syntax
getUTCSeconds()
*/

const moonLanding1 = new Date('July 20, 1969, 20:18:04 UTC');
console.log(moonLanding1.getUTCSeconds());  //4


var today = new Date();
var seconds = today.getUTCSeconds();
console.log(seconds);  //24

const today222 = new Date();
console.log(today222.getYear());  //122