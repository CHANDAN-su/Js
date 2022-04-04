console.log("Array Method");

// Create an Array
var Fruits = ["Apple","Banana"];
console.log(Fruits);  //['Apple', 'Banana']
console.log(Fruits.length);  //2


// Access an Array item using the index position
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

console.log(Fruits[0]); //Apple
console.log(Fruits[1]);  //Banana
console.log(Fruits[2]); //Kiwi
console.log(Fruits[3]);  //Mango
console.log(Fruits[4]);  //Orange

let Fruits1 = Fruits[Fruits.length-1];
console.log(Fruits1);  //Orange

let Fruits2 = Fruits[Fruits.length-3];
console.log(Fruits2);  //Kiwi


// Loop over an Array
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

Fruits.forEach(function (item,index,arry){
    console.log(item,index,arry);
});
/*
Apple 0   //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange'] 
Banana 1  //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
Kiwi 2  //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
Mango 3  //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
Orange   //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']
*/

// Add an item to the end of an Array
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

let Newfruits = Fruits.push("Cherry");
console.log(Fruits);  //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange', 'Cherry']

// Remove an item from the end of an Array
let last = Fruits.pop();
console.log(last);  //Cherry
console.log(Fruits);  //['Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']


// Remove an item from the beginning of an Array
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

let first = Fruits.shift();
console.log(first);  //Apple
console.log(Fruits);  //['Banana', 'Kiwi', 'Mango', 'Orange']


// Add an item to the beginning of an Array
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

let firstadd = Fruits.unshift("Strawberry");
console.log(firstadd);  //6
console.log(Fruits);  //['Strawberry', 'Apple', 'Banana', 'Kiwi', 'Mango', 'Orange']



// Find the index of an item in the Array
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

let indexof = Fruits.indexOf("Apple");
console.log(indexof);  //0
console.log(Fruits.indexOf("Kiwi"));  //2


// Remove an item by index position
var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

let removedItem = Fruits.splice(2,1);
console.log(Fruits);  //['Apple', 'Banana', 'Mango', 'Orange']
console.log(removedItem);  //['Kiwi']



let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
// console.log(years.0)	// a syntax error 
console.log(years[0]) // works properly  1950

console.log(years['2'] != years['02'])  //true
console.log(years['2'] === years['02'])  //false


var Fruits = ["Apple","Banana","Kiwi","Mango","Orange"];

Fruits.length = 10;
console.log(Fruits[8]);  //undefined


// Copying an array
let array1 = [1,2,3]
let array1Reference = array1; 
array1[1] = 9; 
console.log(array1Reference);  //[1, 9, 3]


/****************************************************Array.from()********************************************************/
// The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.


// Syntax
// Arrow function
   // Array.from(arrayLike, (element) => { /* ... */ } ) -->
   // Array.from(arrayLike, (element, index) => { /* ... */ } )  -->

// Mapping function
   // Array.from(arrayLike, mapFn)  -->
   // Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
   // Array.from(arrayLike, function mapFn(element) { /* ... */ })  -->
   // Array.from(arrayLike, function mapFn(element, index) { /* ... */ }) --> 
  // Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
 // Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)



const str = "12345678";

const res = Array.from(str);

console.log(str); //12345678
console.log(res); // ['1', '2', '3', '4', '5', '6', '7', '8']

console.log(Array.from("foo"));  //['f', 'o', 'o']


//Long Method
  // Array.from(arrayLike, mapFn)
const str1 = "123456789";
const res1 = Array.from(str1,(mapFn));

function mapFn(x){
    return Number(x);
};
console.log(res1);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]


//Function
 // Array.from(arrayLike, function mapFn(element) { /* ... */ })
const res2  = Array.from(str1, function Mapf(x){
    return Number(x);
});
console.log(res2); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
const range1 = (start, stop, step) => 
Array.from({ length: (stop - start) / step + 1}, function (_, i){
    return start + (i * step)
});

console.log(range1(0,4,1));  //[0, 1, 2, 3, 4]
console.log(range1(1, 10, 2));  //[1, 3, 5, 7, 9]
console.log(range1('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x))); //['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']



//Array Method
 // Array.from(arrayLike, (element) => { /* ... */ } )
const res3 = Array.from(str1, x => Number(x));
console.log(res3);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(Array.from([1,2,3], x => x*x));  //[1, 4, 9]
console.log(Array.from([1,2,3], x => x+x)); // [2, 4, 6]


// Sequence generator (range)
// Array.from(arrayLike, (element, index) => { /* ... */ } )
const range = (start, stop, step) => 
Array.from({ length: (stop - start) / step + 1}, (_, i) => 
start + (i * step));

console.log(range(0,4,1));  //[0, 1, 2, 3, 4]
console.log(range(1, 10, 2));  //[1, 3, 5, 7, 9]
console.log(range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x))); //['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
console.log(Array.from(set));  //['foo', 'bar', 'baz']

// Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]); 
console.log(Array.from(map)); //[[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]); 
console.log(Array.from(mapper.values())); //['a', 'b']

console.log(Array.from(mapper.keys()));  // ['1', '2'];


// Array from an Array-like object (arguments)
function f(name){
    return Array.from(name)
};
let obj = f("Chandan");
console.log(obj);  //['C', 'h', 'a', 'n', 'd', 'a', 'n']


// 1. Quick introduction
const somenumber = {
    "0":10,
    "1": 20,
    length:2
};

console.log(Array.from(somenumber,value => value * 2));  //[20, 40]

// 2. Transform array-like into an array
// The first useful application of Array.from() is indicated directly from its definition: transform an array-like object into an array.

function SumArgument(){
    return Array.from(arguments).reduce((sum, num) => sum + num);
};

console.log(SumArgument(1,2,3));  //6

const map1 = new Map();
map1.set("one","1");
map1.set("two","2");
console.log(Array.from(map1));



// 3. Clone an array
const numbers = [3,6,9];
const numbersCopy = Array.from(numbers);

console.log(numbers == numbersCopy);  //false

function recursiveClone(val){
    return Array.isArray(val)? Array.from(val,recursiveClone):val;
};

const numbers1 = [0,1,2,3];
const numbersClone = recursiveClone(numbers1);
console.log(numbersClone); //[0,1,2,3]

const numbers2 = 12345;
const numbersClone1 = recursiveClone(numbers2);
console.log(numbersClone1);   //12345


// 4. Unique items of an array
function unique(array){
    return Array.from(new Set(array));
};

console.log(unique([0,1,2,3,4,3,3,3,4,4,4,4,4])); //[0, 1, 2, 3, 4]



/*********************************************Array.isArray()******************************************************/
// The Array.isArray() method determines whether the passed value is an Array .
/*
Syntax
Array.isArray(value)
*/

console.log(Array.isArray([1,2,3,4]));  //true
console.log(Array.isArray({foo:123}));  //false
console.log(Array.isArray("foobar"));  //false
console.log(Array.isArray(undefined));  //false


// all following calls return true Array.isArray([]);
console.log(Array.isArray([1])); //true
console.log(Array.isArray(new Array()));  //true
console.log(Array.isArray(new Array('a', 'b', 'c', 'd')));  //true
console.log(Array.isArray(new Array(3)));  //true
// Little known fact: Array.prototype itself is an array: 
console.log(Array.isArray(Array.prototype));  //true


// all following calls return false 
console.log(Array.isArray());     //false
console.log(Array.isArray({}));    //false
console.log(Array.isArray(null));    //false
console.log(Array.isArray(undefined));    //false
console.log(Array.isArray(17));   //false
console.log(Array.isArray('Array'));   //false
console.log(Array.isArray(true));   //false
console.log(Array.isArray(false));    //false
console.log(Array.isArray(new Uint8Array(32)));   //false
console.log(Array.isArray({	proto	: Array.prototype }));   //false



/****************************************************Array.prototype.at()*******************************************/
// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
// Negative integers count back from the last item in the array.
/*
Syntax
at(index)
*/

const array = [1,34,53,56,35,43,90];
const index = 2;

console.log(`Using an index of ${index} the item returned is ${array.at(index)} `);  //Using an index of 2 the item returned is 53

const index1 = -2;

console.log(`Using an index of ${index1} the item returned is ${array.at(index1)} `);  //Using an index of -2 the item returned is 43

// Our array with items
const cart = ['apple', 'banana', 'pear'];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}

// Get the last item of our array 'cart'
const item1 = returnLast(cart);
console.log(item1); // Logs: 'pear'

// Add an item to our 'cart' array
cart.push('orange');
const item2 = returnLast(cart);
console.log(item2); // Logs: 'orange'

// Comparing methods
const color = ["red","green","yello"];

// Using length property
const lengthway = color[color.length-2];
console.log(lengthway); //green

// Using slice() method. Note an array is returned
const sliceway = color.slice(-2,-1);
console.log(sliceway);  //[green]

// Using at() method
const atway = color.at(-2);
console.log(atway); //green


/*******************************************Array.concat()***************************************************/
// The concat() method is used to merge two or more arrays.
// This method does not change the existing arrays, but instead returns a new array.
/*
Syntax
concat() 
concat(value0) 
concat(value0, value1)
concat(value0, value1, ... , valueN)
*/


const arry2 = [1,2,3,4,5];
const arry3 = ["a","b","c","d"];

const arry4 = arry2.concat(arry3);
console.log(arry4);  //[1, 2, 3, 4, 5, 'a', 'b', 'c', 'd']

// Concatenating two arrays
const number = [1,2,3];
const letters = ["a","b","c"];

const alphaNumeric = letters.concat(number);
console.log(alphaNumeric);   //['a', 'b', 'c', 1, 2, 3]

// Concatenating three arrays
const num1 = [1,2,3];
const num2 = [4,5,6];
const num3 = [7,8,9];

const num4 = num1.concat(num2,num3);
console.log(num4);  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// Concatenating values to an array
const letters1 = ["a","b","c"];

const alphaNumeric1 = letters.concat(1,[2,3]);
console.log(alphaNumeric1);  //['a', 'b', 'c', 1, 2, 3]

// Concatenating nested arrays
const num5 = [[1]];
const num6 = [2,[3]];

const number1 = num5.concat(num6);
console.log(number1);  //[[1], 2, [3]]

// modify the first element of num5 num5[0].push(4);
num5[0].push(4);
console.log(number1);  //[[1, 4], 2, [3]]


/********************************************Array.copyWithin()******************************************/
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length
/*
Syntax
copyWithin(target) 
copyWithin(target, start) 
copyWithin(target, start, end)
*/

const array2 = ["a","b","c","d","e"];

// copy to index 0 the element at index 3
console.log(array2.copyWithin(0,3,4,)); //['d', 'b', 'c', 'd', 'e']

// copy to index 1 all elements from index 3 to the end
console.log(array2.copyWithin(1,3));    //['d', 'd', 'e', 'd', 'e']

console.log([1,2,3,4,5].copyWithin(-2));  //[1, 2, 3, 1, 2]

console.log([1,2,3,4,5].copyWithin(-2,-3,-1));  //[1, 2, 3, 3, 4]

console.log([].copyWithin.call({length: 5, 3: 1}, 0, 3)); // {0: 1, 3: 1, length: 5}

var i32a = new Int32Array([1, 2, 3, 4, 5])
console.log(i32a.copyWithin(0, 2)); // Int32Array [3, 4, 5, 4, 5]


/******************************************************************Array.entries()********************************/
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
/*
Syntax
entries()
*/

const array3 = ["a","b","c"];

const iterator1 = array3.entries();

// console.log(iterator1);  //Array Iterator {}

// console.log(iterator1.value);  //undefined
// console.log(iterator1.next().value);  //[0, 'a']
// console.log(iterator1.next().value);  // [1, 'b']
// console.log(iterator1.next().value); // [2, 'c']
// console.log(iterator1.next().value);  //undefined



// Iterating with index and element
// for (const [index, value] of iterator1){
//     console.log(index, value);
// };  
/*
0 'a'
1 'b'
2 'c'
*/


//Using a for…of loop
for (const a of iterator1){
    console.log(a);
};  
/*
[0, 'a']
[1, 'b']
[2, 'c']
*/

/*********************************************************************Array.every()*************************************/
// The every() method tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value.


// Syntax

// // Arrow function
// every((element) => { /* ... */ } )
// every((element, index) => { /* ... */ } ) 
// every((element, index, array) => { /* ... */ } )

// // Callback function 
// every(callbackFn) 
// every(callbackFn, thisArg)

// // Inline callback function 
// every(function(element) { /* ... */ }) 
// every(function(element, index) { /* ... */ }) 
// every(function(element, index, array){ /* ... */ })
// every(function(element, index, array) { /* ... */ }, thisArg)


const array4 = [2,4,6,8,10];

let test1 = (currentvalue) => currentvalue >= 10;

let test2 = function (currentvalue1){
    return currentvalue1>=10;
}

console.log(array4.every(test1));  //false
console.log(array4.every(test2));  //false


function isBigEmough(element,index,array){
    return element>= 10;
};

console.log([12, 5, 2, 130, 44].every(isBigEmough));   //false
console.log([12, 54, 18, 130, 44].every(isBigEmough)); //true

// Check if one array is a subset of another array

// every(function(element) { /* ... */ }) 

function issubset(array1,array2){
    return array2.every(function (element){
        return array1.includes(element);
    });
};

console.log(issubset([1,2,3,4,5,6,7],[5,6,7]));  //true
console.log(issubset([1,2,3,4,5,6,7],[5,6,8]));  //false


// Using arrow functions
console.log([23,4,67,54,3].every(x => x >= 10));  //false
console.log([12,34,56,78,98,40].every(x => x >= 10));  //true

// Affecting Initial Array (modifying, appending, and deleting)

// Modifying items

let arr = [1,2,3,4,5];

arr.every( (elem, index, arr) => { 
    arr[index+1] -= 1
    console.log(`[${arr}] [${index}] -> [${elem}]`);
    return elem < 2
});
/*
[1,1,3,4,5] [0] -> [1]
[1,1,2,4,5] [1] -> [1]
[1,1,2,3,5] [2] -> [2]
*/

//// Appending items

arr = [1, 2, 3];
arr.every( (elem, index, arr) => { 
    arr.push('new') 
console.log(`[${arr}][${index}] -> ${elem}`)
return elem < 4
})
/*
[1,2,3,new][0] -> 1
[1,2,3,new,new][1] -> 2
[1,2,3,new,new,new][2] -> 3
*/

// Deleting items
arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => { 
    arr.pop()
console.log(`[${arr}][${index}] -> ${elem}`) 
return elem < 4
})
/*
[1,2,3,new,new,new][2] -> 3
[1,2,3][0] -> 1
[1,2][1] -> 2
*/


/*********************************************************Array.fill()*********************************/
// The fill() method changes all elements in an array to a static value, from a start index (default 0 ) to an end index (default array.length ). It returns the modified array.

/*
Syntax
fill(value) 
fill(value, start) 
fill(value, start, end)
*/

const array5 = [1,2,3,4,5,6,7,8,9];

console.log(array5); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(array5.fill("Number"));  //'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number']
console.log(array5); //['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number']

console.log(array5.fill(10,3));  //['Number', 'Number', 'Number', 10, 10, 10, 10, 10, 10]

const array6 = [1,2,3,4,5,6,7,8,9];
console.log(array6.fill(10,3,6));  //[1, 2, 3, 10, 10, 10, 7, 8, 9]

console.log([1,	2,	3].fill(4))		//	[4,	4,	4]
console.log([1,	2,	3].fill(4,	1))		//	[1,	4,	4]
console.log([1,	2,	3].fill(4,	1,	2))	//	[1,	4,	3]
console.log([1,	2,	3].fill(4,	1,	1))	//	[1,	2,	3]
console.log([1,	2,	3].fill(4,	3,	3))	//	[1,	2,	3]
console.log([1,	2,	3].fill(4,	-3, -2))	//	[4,	2,	3]
console.log([1,	2,	3].fill(4,	NaN, NaN))	//	[1,	2,	3]
console.log([1,	2,	3].fill(4,	3, 5))	//	[1,	2,	3]

console.log(Array(4).fill(4));  //[4, 4, 4]

console.log([].fill.call({length:3},4));

let arr1 = Array(3).fill({});
arr1[0] = "hi";
console.log(arr1);  //['hi', {…}, {…}]


let tempGirls = Array(5).fill("girl",0);
console.log(tempGirls);  //['girl', 'girl', 'girl', 'girl', 'girl']


/**********************************************************************Array.filter()************************************/
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

// Syntax

// // Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } ) 
// filter((element, index, array) => { /* ... */ } )

// // Callback function 
// filter(callbackFn) 
// filter(callbackFn, thisArg)

// // Inline callback function 
// filter(function(element) { /* ... */ }) 
// filter(function(element, index) { /* ... */ }) 
// filter(function(element, index, array){ /* ... */ })
// filter(function(element, index, array) { /* ... */ }, thisArg)


const word = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// filter(function(element) { /* ... */ }) 
const result = word.filter(word => word.length > 6);

console.log(result);  //['exuberant', 'destruction', 'present']

// Filtering out all small values
function isBigEmough(value){
    return value >= 10;
};

let filtered = [122,3,34,22,7,90].filter(isBigEmough);
console.log(filtered);  // [122, 34, 22, 90]

let filtered1 = [172,15,184,22,7,40].filter(function isBigEmough1(value){
    return value >= 20;
});
console.log(filtered1);  // [172, 184, 22, 40]

// Find all prime numbers in an array
const array7 = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,40,41];

function isPrime(num){
    for(let i = 2 ; num > i; i++){
        if(num % i == 0){
            return false;
        }
    }
    return num > 1;
};

console.log(array7.filter(isPrime)); //[2, 3, 5, 7, 11, 13, 41]


// Filtering invalid entries from JSON
let arr4 = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];

let invalidEntries = 0;

function FilterbyID(item){
    if(Number.isFinite(item.id)&& item.id !==0){
        return true;
    }
     invalidEntries ++;
     return false;
};

let arrbuId = arr4.filter(FilterbyID);
console.log(arrbuId);  //// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);  //Number of Invalid Entries =  5


// Searching in array
let fruits = ["Apple","Mango","Orange","kiwi","Graps","Banana"];

function FilterItem(arr,quary){
    return arr.filter(function (el){
        return el.toLowerCase().indexOf(quary.toLowerCase()) !== -1
    })
};

console.log(FilterItem(fruits,"an"));  // ['Mango', 'Orange', 'Banana']


// ES2015 Implementation

let fruits1 = ["Apple","Mango","Orange","kiwi","Graps","Banana"];

const FilterItem1 = (arr,quary) => {
    return arr.filter( el => el.toLowerCase().indexOf(quary.toLowerCase()) !== -1);
};

console.log(FilterItem1(fruits,"ap"));  // ['Apple', 'Graps']


// Affecting Initial Array (modifying, appending and deleting)

// Modifying each words

let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']

// filter((element, index, array) => { /* ... */ } )
const modifiedWords = words.filter( (word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
})

console.log(modifiedWords)
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]


// Appending new words

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})

console.log(appendedWords)
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]


// Deleting words

words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})

console.log(deleteWords)
// Notice 'elite' is not even obtained as its been popped off `words` before filter can even get there
// ["spray" ,"limit"]


// Using filter() on an Array of Objects

var creatures = [
    {name: "Shark", habitat: "Ocean"},
    {name: "Whale", habitat: "Ocean"},
    {name: "Lion", habitat: "Savanna"},
    {name: "Monkey", habitat: "Jungle"}
  ];

var Applycretural = creatures.filter(function(creates){
    return creates.habitat == "Ocean";
});

console.log(Applycretural);   //[ {name: "Shark", habitat: "Ocean"}, {name: "Whale", habitat: "Ocean"} ]

/**********************************************Array.prototype.find()******************************************/
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. 
// If no values satisfy the testing function, undefined is returned.

// // Arrow function
// find((element) => { /* ... */ } )
// find((element, index) => { /* ... */ } )
// find((element, index, array) => { /* ... */ } )

// // Callback function
//  find(callbackFn) 
//  find(callbackFn, thisArg)

// // Inline callback 
// function find(function(element) { /* ... */ }) 
// find(function(element, index) { /* ... */ }) 
// find(function(element, index, array){ /* ... */ })
// find(function(element, index, array) { /* ... */ }, thisArg)


const array8 = [5,3,38,12,120,44];

const found = array8.find(function test1(element){
    return element > 40;
});

console.log(found);  //120

// Find an object in an array by one of its properties
const invertory = [
    {name: 'apples', quantity: 2},
    {name:"bananan",quantity:0},
    {name:"Cherry", quantity: 1}
];

function isCherry(fruit){
    return fruit.name == "Cherry";
};

console.log(invertory.find(isCherry));  //{name: 'Cherry', quantity: 1}

// Using arrow function and destructuring
const inventory1 = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    
    {name: 'cherries', quantity: 5}
];

const Isapple = inventory1.find(({name}) => name === "apples");
console.log(Isapple);  //{name: 'apples', quantity: 2}
    
// Find a prime number in an array
function isprime(element,index,arr){
    let start = 2;
    while(start <= Math.sqrt(element)){
        if(element % start++ <1){
            return false;
        }
    }
    return element >1;
};

console.log([4, 6, 8, 12].find(isprime)); // undefined, not found 
console.log([4, 5, 8, 12].find(isprime)); // 5


const array9 = [0,1,,,,5,6];

array9.find(function (value ,index){
    console.log('Visited index ', index, ' with value ', value);
});
/*
Visited index  0  with value  0
Array.js:852 Visited index  1  with value  1
Array.js:852 Visited index  2  with value  undefined
Array.js:852 Visited index  3  with value  undefined
Array.js:852 Visited index  4  with value  undefined
Array.js:852 Visited index  5  with value  5
Array.js:852 Visited index  6  with value  6
*/

// Shows all indexes, including deleted 
array9.find(function (value,index){
    //// Delete element 5 on first iteration
    if(index === 0){
        console.log('Deleting array[5] with value ', array9[5]);
        delete array9[5]
    }
    console.log('Visited index ', index, ' with value ', value)
});
/*
Deleting array[5] with value  5
Array.js:871 Visited index  0  with value  0
Array.js:871 Visited index  1  with value  1
Array.js:871 Visited index  2  with value  undefined
Array.js:871 Visited index  3  with value  undefined
Array.js:871 Visited index  4  with value  undefined
Array.js:871 Visited index  5  with value  undefined
Array.js:871 Visited index  6  with value  6
*/


/***********************************Array.prototype.findIndex()*****************************************/
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. 
// Otherwise, it returns -1 , indicating that no element passed the test.

// Syntax

// // Arrow function
// findIndex((element) => { /* ... */ } ) 
// findIndex((element, index) => { /* ... */ } ) 
// findIndex((element, index, array) => { /* ... */ } )

// // Callback function 
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// // Inline callback
// function findIndex(function(element) { /* ... */ }) 
// findIndex(function(element, index) { /* ... */ }) 
// findIndex(function(element, index, array){ /* ... */ })
// findIndex(function(element, index, array) { /* ... */ }, thisArg)

const array10 = [5,12,8,130,44];

const t1 = (element) => element > 13;

console.log(array10.findIndex(t1));  //3

function isprime1(num){
    for(let i = 2;num>i;i++){
        if(num % i == 0){
            return false;
        }
    }
    return num > 1;
};
console.log([4,4,6,9,12].findIndex(isprime1));  //-1
console.log([4,6,7,9,12].findIndex(isprime1));  //2


// Find index using arrow function
const fruits2 = ["apple", "banana", "cantaloupe", "blueberries", "grapefru"];

let index2 = fruits2.findIndex(first => first === "blueberries");

console.log(index2);  //3
console.log(fruits2[index]);  //cantaloupe

/****************************Array.prototype.flat()************************************************************/
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
/*
Syntax
flat()
flat(depth)
*/

const arr2 = [1,2,3,[4,5]];
console.log(arr2.flat());  //[1, 2, 3, 4, 5]

const arr3 = [1,2,3,[[[[3,4]]]]];
console.log(arr3.flat(2));  //[1,2,3,[3,4]]

const arr5 = [1,2,,,,3,4]
console.log(arr5.flat());  //[1,2,3,4]

/***************************************************Array.prototype.forEach()********************************/
// The forEach() method executes a provided function once for each array element.

// Syntax

// // Arrow function
// forEach((element) => { /* ... */ } ) 
// forEach((element, index) => { /* ... */ } ) 
// forEach((element, index, array) => { /* ... */ } )

// // Callback function 
// forEach(callbackFn) 
// forEach(callbackFn, thisArg)

// // Inline callback 
// function forEach(function(element) { /* ... */ })
// forEach(function(element, index) { /* ... */ }) 
// forEach(function(element, index, array){ /* ... */ }) 
// forEach(function(element, index, array) { /* ... */ }, thisArg)

// Converting a for loop to forEach
// old method
const num7 = [1,2,3,4,5];

for(let i = 1;i < num7.length; i++){
    console.log(i);
}; 
/*
1
2
3
4
5
*/

//  foreach method
let test3 = num7.forEach(element => console.log(element));
console.log(test3);
/*
1
2
3
4
5
*/



// Optional Parameters
// Index

let index3 = num7.forEach(function (number,index){
    console.log("index "+ index + "  number " + number);
})
/*
index 0  number 1
index 1  number 2
index 2  number 3
index 3  number 4
index 4  number 5
*/


// Array
let arr6 = num7.forEach(function (number,index,arr){
    console.log("index "+ index + "  number " + number + "  arr " + arr);
});
/*
index 0  number 1  arr 1,2,3,4,5
index 1  number 2  arr 1,2,3,4,5
index 2  number 3  arr 1,2,3,4,5
index 3  number 4  arr 1,2,3,4,5
index 4  number 5  arr 1,2,3,4,5
*/


// No operation for uninitialized values (sparse arrays)
const arrauspares = [1,3,5];

let numCallbackRuns = 0;

arrauspares.forEach(function (element){
    console.log(element);
    numCallbackRuns++
});

console.log("numCallbackRuns: " ,numCallbackRuns )

/*
1
3
5
numCallbackRuns:  3
*/

// Modifying the array during iteration
let word1 = ["one","two","three","four"];

word1.forEach(function (element){
    console.log(element);
    if(element == "two"){
        word1.shift();
    }
});

console.log(word1);  //['two', 'three', 'four']


// Flatten an array

function flatten(arr) { 
    const result = []

    arr.forEach(function(i) {
     if (Array.isArray(i)) {
          result.push(...flatten(i))
    } else { 
         result.push(i)
    }
    })
    
    return result;
    };

    const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]]

console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]



/*********************************************Array.prototype.includes()******************************************/
// The includes() method determines whether an array includes a certain 
// value among its entries, returning true or false as appropriate

/*
Syntax
includes(searchElement) 
includes(searchElement, fromIndex)
*/

const array11 = [1,2,3,4];
console.log(array11.includes(3));  //true

const animal = ["cat","dog","bat"];
console.log(animal.includes("cat")); //true

console.log(animal.includes("at"));  //false

// fromIndex is greater than or equal to the array length
let arr7 = [1,2,3];

console.log(arr7.includes(3,3));  //false
console.log(arr7.includes(3,100));  //false

// Computed index is less than 0
let arr8 = ['a', 'b', 'c']

console.log(arr8.includes('a', -100)) // true 
console.log(arr8.includes('b', -100)) // true 
console.log(arr8.includes('c', -100)) // true 
console.log(arr8.includes('a', -2)) // false



/*********************************Array.indexOf()****************************************************/
// The indexOf() method returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.
/*
Syntax
indexOf(searchElement) 
indexOf(searchElement, fromIndex)
*/

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf("bison"));  //1

console.log(beasts.indexOf("bison",2));  //4

console.log(beasts.indexOf("Hii"));  //-1

console.log(beasts.indexOf("bison",beasts.length-1)) //4


// Finding all the occurrences of an element

var includes = [];
var array12 = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = "a";

var idx = array12.indexOf(element);
// console.log(idx);  //0

while (idx != -1) {
    includes.push(idx);
    idx = array12.indexOf(element,idx+1);
};

console.log(includes);  //[0, 2, 4]
 
// Finding if an element exists in the array or not and updating the array

function updatevegetablecollection(veggies,veggie){
    if(veggies.indexOf(veggie) === -1) {
        veggies.unshift(veggie);
        console.log("New veggies collection is :"+ veggies )
    }else if(veggies.indexOf(veggie) > -1){
        console.log(veggie + "' already exists in the veggies collection.'")
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updatevegetablecollection(veggies,"tomato"); //tomato' already exists in the veggies collection.

updatevegetablecollection(veggies,"Apple"); //New veggies collection is :potato,tomato,chillies,green-pepper,Apple


/*******************************************Array.join()******************************************/
// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
// separated by commas or a specified separator string. 
/*
Syntax
join() 
join(separator)
*/

const elements1 = ["Fire","Air","Water"];

console.log(elements1.join());  //Fire,Air,Water
console.log(elements1.join(" "))  //Fire Air Water
console.log(elements1.join("-"))  //Fire-Air-Water
console.log(elements1.join(" + "));  //Fire + Air + Water
