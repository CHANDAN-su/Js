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


/**********************************************************Date.setDate()****************************************/
// The setDate() method changes the day of the month of a given Date instance, based on local time.
/*
Syntax
setDate(dayValue)
*/
const setd = new Date('August 19, 1975 23:15:30');  
console.log(setd);  //Tue Aug 19 1975 23:15:30 GMT+0530 (India Standard Time)

setd.setDate(24);
console.log(setd);  //Sun Aug 24 1975 23:15:30 GMT+0530 (India Standard Time)

setd.setDate(32);
console.log(setd);  //Mon Sep 01 1975 23:15:30 GMT+0530 (India Standard Time)

const Bigdate = new Date();
Bigdate.setDate(25);
console.log(Bigdate);  //Mon Apr 25 2022 22:16:06 GMT+0530 (India Standard Time)


/***********************************************************Date.prototype.setFullYear()*******************************************/
// The setFullYear() method sets the full year for a specified date according to local time. Returns new timestamp.
/*
Syntax
setFullYear(yearValue) 
setFullYear(yearValue, monthValue) 
setFullYear(yearValue, monthValue, dateValue)
*/

const setd1 = new Date('August 19, 1975 23:15:30');
console.log(setd1);  //Tue Aug 19 1975 23:15:30 GMT+0530 (India Standard Time)

setd1.setFullYear(1976);
console.log(setd1);  //Thu Aug 19 1976 23:15:30 GMT+0530 (India Standard Time)

console.log(setd1.getFullYear());  //1976

const Bigdate1 = new Date();
Bigdate1.setFullYear(2025);
console.log(Bigdate1);  //Mon Apr 21 2025 22:22:08 GMT+0530 (India Standard Time)

/**********************************************************************Date.setHours()*************************************/
// The setHours() method sets the hours for a specified date according to local time, and returns the number of milliseconds 
// since January 1, 1970 00:00:00 UTC until the time represented by the updated Date instance.
/*
Syntax
setHours(hoursValue) 
setHours(hoursValue, minutesValue)
setHours(hoursValue, minutesValue, secondsValue) 
setHours(hoursValue, minutesValue, secondsValue, msValue)
*/

const setd2 = new Date('August 19, 1975 23:15:30');

setd2.setHours(20);
console.log(setd2);  //Tue Aug 19 1975 20:15:30 GMT+0530 (India Standard Time)

setd2.setHours(20,21,22);
console.log(setd2);   //Tue Aug 19 1975 20:21:22 GMT+0530 (India Standard Time)

const Bigdate2 = new Date();
Bigdate2.setHours(7);
console.log(Bigdate2);     //Thu Apr 21 2022 07:26:57 GMT+0530 (India Standard Time)


/***************************************************************************Date.setMilliseconds()************************************/
// The setMilliseconds() method sets the milliseconds for a specified date according to local time.
/*
Syntax
setMilliseconds(millisecondsValue)
*/

const setd3 = new Date('August 19, 1975 23:15:30');
console.log(setd3.getMilliseconds());  //0

setd3.setMilliseconds(456);
console.log(setd3.getMilliseconds());  //456

const Bigdate3 = new Date();
Bigdate3.setMilliseconds(100);;
console.log(Bigdate3.getMilliseconds());  //100

/*******************************************************************Date.setMinutes()**********************************/
// The setMinutes() method sets the minutes for a specified date according to local time.
/*
Syntax
setMinutes(minutesValue) 
setMinutes(minutesValue, secondsValue) 
setMinutes(minutesValue, secondsValue, msValue)
*/

const setd4 = new Date('August 19, 1975 23:15:30');

setd4.setMinutes(45);
console.log(setd4.getMinutes());  //45
console.log(setd4);  //Tue Aug 19 1975 23:45:30 GMT+0530 (India Standard Time)

const Bigdate4 = new Date();
Bigdate4.setMinutes(45);;
console.log(Bigdate4);   //Thu Apr 21 2022 22:45:58 GMT+0530 (India Standard Time)


/*****************************************************Date.setMonth()***********************************/
// The setMonth() method sets the month for a specified date according to the currently set year.
/*
Syntax
setMonth(monthValue) 
setMonth(monthValue, dayValue)
*/

const setd5 = new Date('August 19, 1975 23:15:30');

setd5.setMonth(3);
console.log(setd5.getMonth());  //3
console.log(setd5);  //Sat Apr 19 1975 23:15:30 GMT+0530 (India Standard Time)

const Bigdate5 = new Date();
Bigdate5.setMonth(7);;
console.log(Bigdate5);   //Sun Aug 21 2022 22:41:41 GMT+0530 (India Standard Time)


/******************************************************************************Date.setYear()*************************************/
// The legacy  setYear() method sets the year for a specified date according to local time.
/*
Syntax
setYear(yearValue)
*/


var theBigDay = new Date();

theBigDay.setYear(96);
console.log(theBigDay); //Sun Apr 21 1996 22:46:34 GMT+0530 (India Standard Time)

theBigDay.setYear(1996);  
console.log(theBigDay);  //Sun Apr 21 1996 22:47:29 GMT+0530 (India Standard Time)

theBigDay.setYear(2000);  
console.log(theBigDay);  //Fri Apr 21 2000 22:47:56 GMT+0530 (India Standard Time)


/***************************************************************Date.setTime()********************************************/
// The setTime() method sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.
/*
Syntax
setTime(timeValue)
*/

const event1 = new Date('July 1, 1999');
const event2 = new Date();
event2.setTime(event1.getTime());

console.log(event1);  //Thu Jul 01 1999 00:00:00 GMT+0530 (India Standard Time)

console.log(event2);  //Thu Jul 01 1999 00:00:00 GMT+0530 (India Standard Time)




/*******************************************************************Date.setUTCDate()************************************/
// The setUTCDate() method changes the day of the month of a given  Date instance, based on UTC time.
/*
Syntax
setUTCDate(dayValue)
*/





/***************************************************Date.toDateString()*******************************************/
/*
The toDateString() method returns the date portion of a Date object in English in the following format separated by spaces:

1.	First three letters of the week day name
2.	First three letters of the month name
3.	Two digit day of the month, padded on the left a zero if necessary
4.	Four digit year (at least), padded on the left with zeros if necessary

E.g. "Thu Jan 01 1970".
*/
/*
Syntax
toDateString()
*/

const DataString = new Date(1993, 6, 28, 14, 39, 7);

console.log(DataString.toString());  //Wed Jul 28 1993 14:39:07 GMT+0530 (India Standard Time)

console.log(DataString.toDateString());  //Wed Jul 28 1993

const today4 = new Date();
console.log(today4.toDateString());  //Mon Apr 25 2022


/************************************************Date.toGMTString()**********************************************/
// The toGMTString() method converts a date to a string, using Internet Greenwich Mean Time (GMT) conventions. The exact format of the value returned by toGMTString() 
// varies according to the platform and browser, in general it should represent a human readable date string.
/*
Syntax
toGMTString()
*/

let today5 = new Date();
console.log(today5.toGMTString());  //Mon, 25 Apr 2022 17:24:16 GMT


/*********************************************************************Date.toISOString()**********************************/
// The toISOString() method returns a string in simplified extended ISO format (
  // ISO 8601	), which is always 24 or 27 characters long ( YYYY-MM-DDTHH:mm:ss.sssZ or
  // ±YYYYYY-MM-DDTHH:mm:ss.sssZ , respectively). The timezone is always zero UTC offset, as denoted by the suffix " Z ".
/*
Syntax
toISOString()
*/

const iso = new Date("'05 October 2011 14:48 UTC'");

console.log(iso.toString());  //Wed Oct 05 2011 20:18:00 GMT+0530 (India Standard Time)

console.log(iso.toISOString());  //2011-10-05T14:48:00.000Z
  

/*************************************************************Date.toString()**************************************/
// The toString() method returns a string representing the specified Date object.
/*
Syntax
toString()
*/

const string = new Date("August 19, 1975 23:15:30");

console.log(string.toString());  //Tue Aug 19 1975 23:15:30 GMT+0530 (India Standard Time)

const x = new Date();
console.log(x.toString());  //Mon Apr 25 2022 23:05:56 GMT+0530 (India Standard Time)


/*******************************************************Date.toTimeString()**************************************************/
// The toTimeString() method returns the time portion of a Date object in human readable form in English.
/*
Syntax
toTimeString()
*/


const timestring = new Date('August 19, 1975 23:15:30');

console.log(timestring.toTimeString());  //23:15:30 GMT+0530 (India Standard Time)

const d = new Date();

console.log(d.toString());   //Mon Apr 25 2022 23:10:59 GMT+0530 (India Standard Time)

console.log(d.toTimeString());  //23:13:03 GMT+0530 (India Standard Time)


/************************************************************Date.toUTCString()***************************************/
// The toUTCString() method converts a date to a string, using the UTC time zone.
//Www, dd Mmm yyyy hh:mm:ss GMT 
/*
Syntax
toUTCString()
*/

const stringUTC = new Date('14 Jun 2017 00:00:00 PDT');
console.log(stringUTC.toUTCString());  //Wed, 14 Jun 2017 07:00:00 GMT

const today6 = new Date();
console.log(today6.toUTCString());  //Mon, 25 Apr 2022 17:47:20 GMT

/****************************************************************Date.valueOf()**********************************/
// The valueOf() method returns the primitive value of a Date object.
/*
Syntax
valueOf()
*/

const value = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
console.log(value.valueOf());  //823230245000

const value1 = new Date('02 Feb 1996 03:04:05 GMT');
console.log(value1.valueOf());  //823230245000

const y = new Date();
console.log(y.valueOf());  //1650909386628


/************************************************************Date.UTC()*****************************************************/
// The Date.UTC() method accepts parameters similar to the Date constructor, but treats them as UTC. It returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
/*
Date.UTC(year) Date.UTC(year, month) Date.UTC(year, month, day)
Date.UTC(year, month, day, hour) Date.UTC(year, month, day, hour, minute)
Date.UTC(year, month, day, hour, minute, second) Date.UTC(year, month, day, hour, minute, second, millisecond)
*/

const utcDate1 = new Date(Date.UTC(96, 1, 2, 3, 4, 5));
const utcDate2 = new Date(Date.UTC(0, 0, 0, 0, 0, 0));

console.log(utcDate1.toUTCString());
// expected output: Fri, 02 Feb 1996 03:04:05 GMT

console.log(utcDate2.toUTCString());
// expected output: Sun, 31 Dec 1899 00:00:00 GMT



/************************************************Date.toLocaleDateString()***************************************/
/*
Syntax
toLocaleDateString() 
toLocaleDateString(locales) 
toLocaleDateString(locales, options)
*/

// var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// formats below assume the local time zone of the locale;
// America/Los_Angeles for the US

// US English uses month-day-year order console.log(date.toLocaleDateString('en-US'));
// → "12/20/2012"

// British English uses day-month-year order console.log(date.toLocaleDateString('en-GB'));
// → "20/12/2012"

// Korean uses year-month-day order console.log(date.toLocaleDateString('ko-KR'));
// → "2012. 12. 20."

// Event for Persian, It's hard to manually convert date to Solar Hijri console.log(date.toLocaleDateString('fa-IR'));
// "٠٣/٩/١٩٣١" → //

// Arabic in most Arabic speaking countries uses real Arabic digits console.log(date.toLocaleDateString('ar-EG'));
// "٠٢/٢١/٢١٠٢" → //

// for Japanese, applications may want to use the Japanese calendar,
// where 2012 was the year 24 of the Heisei era

// console.log(date.toLocaleDateString('ja-JP-u-ca-japanese'));
// → "24/12/20"

// when requesting a language that may not be supported, such as

// Balinese, include a fallback language, in this case Indonesian console.log(date.toLocaleDateString(['ban', 'id']));
// → "20/12/2012"


// var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
// request a weekday along with a long date
// var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'nu console.log(date.toLocaleDateString('de-DE', options));
// → "Donnerstag, 20. Dezember 2012"

// an application may want to use UTC and make that visible
// options.timeZone = 'UTC'; options.timeZoneName = 'short';
// console.log(date.toLocaleDateString('en-US', options));
// → "Thursday, December 20, 2012, UTC"


/*****************************************************************Date.toLocaleString()******************************************/
// The toLocaleString() method returns a string with a language sensitive representation of this date.
/*
Syntax
toLocaleString() 
toLocaleString(locales) 
toLocaleString(locales, options)
*/



/**********************************************************************Date.toLocaleTimeString()**************************************/
/*
Syntax
toLocaleTimeString() 
toLocaleTimeString(locales) 
toLocaleTimeString(locales, options)
*/
