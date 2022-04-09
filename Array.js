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


/*********************************************************Array.prototype.keys()*********************************/
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array.
/*
Syntax
keys()
*/

const array13 = ["a","b","c"];
const iterator = array1.keys(); 
// console.log(array13.keys());;

for(const key of iterator){
    console.log(key);
};
/*
0
1
2
*/

// Key iterator doesn't ignore holes
var arr9 = ["a", ,"b"];

var denseKeys = [...arr9.keys()];
console.log(denseKeys);  //[0, 1, 2]

var sparseKeys  = Object.keys(arr9);
console.log(sparseKeys); //['0', '2']


/*********************************************************Array.lastIndexOf()******************************************/
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
// The array is searched backwards, starting at fromIndex .
/*
Syntax
lastIndexOf(searchElement) 
lastIndexOf(searchElement, fromIndex)
*/

const animal1 = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animal1.lastIndexOf("Dodo"));  //3

console.log(animal1.lastIndexOf("Tiger"));  //1

var numbers3 = [2, 5, 9, 2];
console.log(numbers3.lastIndexOf(2));	// 3
console.log(numbers3.lastIndexOf(7));	// -1
console.log(numbers3.lastIndexOf(2, 3)); // 3
console.log(numbers3.lastIndexOf(2, 2)); // 0
console.log(numbers3.lastIndexOf(2, -2)); // 0
console.log(numbers3.lastIndexOf(2, -1)); // 3

// Finding all the occurrences of an element
const result1 = [];
const array14 = ['a', 'b', 'a', 'c', 'a', 'd'];
const elements2 = "a";

var idx1 = array14.lastIndexOf(elements2);

while (idx1 != -1) {
    result1.push(idx1)
    idx1 = (idx1 > 0 ? array14.lastIndexOf(elements2,idx1-1):-1);
};

console.log(result1);  //[4, 2, 0]

/*************************************************************Array.push()***************************/
// The push() method adds one or more elements to the end of an array and returns the new length of the array.
/*
Syntax
push(element0) 
push(element0, element1)
push(element0, element1, ... , elementN)
*/

const animal2 = ['pigs', 'goats', 'sheep'];

const count1 = animal2.push("cow");
console.log(count1);  //4
console.log(animal2);  // ['pigs', 'goats', 'sheep', 'cow']

animal2.push('chickens', 'cats', 'dogs');
console.log(animal2);  //['pigs', 'goats', 'sheep', 'cow', 'chickens', 'cats', 'dogs']

// Merging two arrays
let vegetables = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one vegetables.push(...moreVegs);
vegetables.push(...moreVegs);
console.log(vegetables);  //['parsnip', 'potato', 'celery', 'beetroot']


// Using an object in an array-like fashion
let obj1 = {
    length: 0,
    addElem: function addElem(elem){
        // obj.length is automatically incremented
    // every time an element is added. 
    [].push.call(this, elem)
    }
}
/*
obj.addElem({})
obj.addElem({}) 
console.log(obj.length); // → 2
*/

/***************************************************Array.unshift()*****************************/
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
/*
Syntax
unshift(element0) 
unshift(element0, element1)
unshift(element0, element1, ... , elementN)
*/

const array15 = [4,5,6];

console.log(array15.unshift(1,2,3));
console.log(array15);  // [1, 2, 3, 4, 5, 6]

const array16 = [4,5,6];

array16.unshift(1);
array16.unshift(2);
array16.unshift(3);

console.log(array16);   //[3, 2, 1, 4, 5, 6]

/****************************************************Array.pop()*******************************/
// The pop() method removes the last element from an array and returns that element. 
// This method changes the length of the array.
/*
Syntax
pop()
*/

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());  //tomato

console.log(plants);  //['broccoli', 'cauliflower', 'cabbage', 'kale']

plants.pop();
console.log(plants);  //['broccoli', 'cauliflower', 'cabbage']


const collection = { 
    length: 0,
    addElements: function(...elements) {
    // obj.length will be incremented automatically
    // every time an element is added.
    
    // Returning what push returns; that is
    // the new value of length property. 
    return [].push.call(this, ...elements);
    },
    removeElement: function() {
    // obj.length will be decremented automatically
    // every time an element is removed.
    
    // Returning what pop returns; that is
    // the removed element. 
    return [].pop.call(this);
    }
    }
    
    collection.addElements(10, 20, 30);
    console.log(collection.length); // 3 
    collection.removeElement(); 
    console.log(collection.length); // 2
    
/********************************************************Array.shift()**************************/
// The shift() method removes the first element from an array and returns that removed element. 
// This method changes the length of the array.
/*
Syntax
shift()
*/

const array17 = [1,2,3];

const firstelement = array17.shift();
console.log(firstelement);  //1

console.log(array17);  //[2, 3]


// Using shift() method in while loop

var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( typeof (i = names.shift()) !== 'undefined' ) { 
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John

/*********************************************Array.toString()********************************/
// The toString() method returns a string representing the specified array and its elements.
/*
Syntax
toString()
*/

const array18 = [1,2,"a","1a"];

console.log(array18.toString());  //1,2,a,1a

/********************************************************Array.values()********************************/
// The values() method returns a new array iterator object that contains the values for each index in the array.
/*
Syntax
values()
*/

const array19 = ["a","b","c","d"];

const values = array19.values();

for(const value of values){
    console.log(value);
}

/*
a
b
c
d
*/

// Iteration using .next()
const array20 = ["a","b","c","d","e"];

var iterator2 = array20.values();

console.log(iterator2.next());  //value: 'a', done: false}
console.log(iterator2.next().value);   //b


console.log(iterator2.next()["value"]);  //c

console.log(iterator2.next());  //{value: 'd', done: false}
console.log(iterator2.next()); //{value: 'e', done: false}
console.log(iterator2.next());  //{value: undefined, done: true}
console.log(iterator2.next().value)  //undefined


// Warning: The array iterator object is one use or temporary object
const array21 = ["a","b","c","d","e"];
const iterator3 = array21.values();

for(let letters of iterator3){
    console.log(letters);
};
/*
a
b
c
d
e
*/

for(let letters of iterator3){
    console.log(letters);
};  //undefined


/******************************************************Array.slice()*****************************************/
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from 
// start to end ( end not included) where start and end represent the index of items in that array. 
// The original array will not be modified.
/*
Syntax
slice() 
slice(start) 
slice(start, end)
*/

const animal3 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animal3.slice(2)); //['camel', 'duck', 'elephant']

console.log(animal3.slice(2,4)); //['camel', 'duck']

console.log(animal3.slice(1,5)); //['bison', 'camel', 'duck', 'elephant']

console.log(animal3.slice(-2));  //['duck', 'elephant']

console.log(animal3.slice(2,-1));  //['camel', 'duck']

console.log(animal3.slice());  // ['ant', 'bison', 'camel', 'duck', 'elephant']


// Using slice, create newCar from myCar.
let myHonda = {
    color: 'red', 
    wheels: 4, 
    engine: { cylinders: 4, size: 2}
};

let myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];

let newCar = myCar.slice(0.2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays. 
console.log('myCar = ' + JSON.stringify(myCar)) ;  //myCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2}},2,"cherry condition","purchased 1997"]
console.log('newCar = ' + JSON.stringify(newCar)) ;  //newCar = [{"color":"red","wheels":4,"engine":{"cylinders":4,"size":2}},2,"cherry condition","purchased 1997"]
console.log('myCar[0].color = ' + myCar[0].color); //myCar[0].color = red
console.log('newCar[0].color = ' + newCar[0].color);//newCar[0].color = red

// Change the color of myHonda. 
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);  //The new color of my Honda is purple


/*******************************************************Array.prototype.splice()******************************/
// The splice() method changes the contents of an array by removing or replacing existing elements and/or 
// adding new elements in place	. 
// To access part of an array without modifying it
/*
Syntax
splice(start) 
splice(start, deleteCount)
splice(start, deleteCount, item1) 
splice(start, deleteCount, item1, item2, itemN)
*/

const months = ['Jan', 'March', 'April', 'June'];

months.splice(1,0,"Feb");
console.log(months); //['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4,1,"May");
console.log(months);  //['Jan', 'Feb', 'March', 'April', 'May', 'June']


// Remove 0 (zero) elements before index 2, and insert "drum"
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

let removed = myFish.splice(2,0,"drum");
console.log(myFish);  // ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']

// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
let myFish1 = ['angel', 'clown', 'mandarin', 'sturgeon'];

let removed1 = myFish1.splice(2,0,"drum","guitar");
console.log(myFish1);  //['angel', 'clown', 'drum', 'guitar', 'mandarin', 'sturgeon']


// Remove 1 element at index 3
let myFish2 = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];

let removed2 = myFish2.splice(3,1);
console.log(myFish2);  //['angel', 'clown', 'drum', 'sturgeon']

// Remove 1 element at index 2, and insert "trumpet"
let myFish3 = ['angel', 'clown', 'drum', 'sturgeon'];

let removed3 = myFish3.splice(2,1,"trumpet"); 
console.log(myFish3);  //['angel', 'clown', 'trumpet', 'sturgeon']

// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFish4 = ['angel', 'clown', 'trumpet', 'sturgeon'];

let removed4 = myFish4.splice(0,2,"parrot","anemone","blue");
console.log(myFish4);  // ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']

// Remove 2 elements, starting from index 2
let myFish5 = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'] 

let removed5 = myFish5.splice(2,2);
console.log(myFish5);  //['parrot', 'anemone', 'sturgeon']

// Remove 1 element from index -2
let myFish6 = ['angel', 'clown', 'mandarin', 'sturgeon'] ;

let removed6 = myFish6.splice(-2,1);
console.log(myFish6);  //['angel', 'clown', 'sturgeon']

// Remove all elements, starting from index 2
let myFish7 = ['angel', 'clown', 'mandarin', 'sturgeon'];

let removed7 = myFish7.splice(2);
console.log(myFish7); //['angel', 'clown']


/************************************************************Array.reverse()****************************/
// The reverse() method reverses an array in place	. 
// The first array element becomes the last, and the last array element becomes the first.
/*
Syntax
reverse()
*/

const array22 = ["one","two","three"];
console.log("array22",array22);  //array22 : ['one', 'two', 'three']

const reversed = array22.reverse();
console.log("Reversed:",reversed);  //Reversed: ['three', 'two', 'one']

console.log("array22",array22);  //array22 ['three', 'two', 'one']


/********************************************Array.sort()****************************************/
// The sort() method sorts the elements of an array in place	and returns the sorted array. 

// Syntax
// // Functionless 
// sort()
// // Arrow function
// sort((firstEl, secondEl) => { /* ... */ } )
// // Compare function 
// sort(compareFn)
// // Inline compare function
// sort(function compareFn(firstEl, secondEl) { /* ... */ })

const months1 = ['March', 'Jan', 'Feb', 'Dec']

months1.sort();
console.log(months1);  //['Dec', 'Feb', 'Jan', 'March']

const array23 = [1, 30, 4, 21, 100000];

array23.sort();
console.log(array23);  //[1, 100000, 21, 30, 4]

// The sort method can be conveniently used with function expressions:
const number2 =[4, 2, 5, 1, 3];

number2.sort(function(a,b){
    return a-b;
});
console.log(number2);  //[1, 2, 3, 4, 5]

// ES2015 provides arrow function expressions with even shorter syntax.
const number3 = [4, 2, 5, 1, 3];

number3.sort((a,b) => b-a);
console.log(number3);  //[5, 4, 3, 2, 1]

// Arrays of objects can be sorted by comparing the value of one of their properties.
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    {name: 'Zeros', value: 37 }
];

// console.log(items);
/*
0: {name: 'Edward', value: 21}
1: {name: 'Sharpe', value: 37}
2: {name: 'And', value: 45}
3: {name: 'The', value: -12}
4: {name: 'Magnetic', value: 13}
5: {name: 'Zeros', value: 37}
*/

// sort by value 
items.sort(function (a,b){
    return a.value - b.value;
});

console.log(items);
/*
0: {name: 'The', value: -12}
1: {name: 'Magnetic', value: 13}
2: {name: 'Edward', value: 21}
3: {name: 'Sharpe', value: 37}
4: {name: 'Zeros', value: 37}
5: {name: 'And', value: 45}
*/

// sort by name
items.sort(function (a,b){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if(nameA < nameB){
        return -1;
    }
    if(nameA > nameB){
        return 1;
    }
    // names must be equal 
    return 0;
});

console.log(items);
/*
0: {name: 'And', value: 45}
1: {name: 'Edward', value: 21}
2: {name: 'Magnetic', value: 13}
3: {name: 'Sharpe', value: 37}
4: {name: 'The', value: -12}
5: {name: 'Zeros', value: 37}
*/

// Sorting non-ASCII characters
// For sorting strings with non-ASCII characters, i.e. strings with accented characters (e, é, è, a, ä, etc.), 
// strings from languages other than English, use String.localeCompare . 

var items1 = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];

items1.sort(function (a,b){
    return a.localeCompare(b);
});
console.log(items1);  //['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']


/**************************************************************Array.some()********************************/
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns true if, in the array, it finds an element for which the provided function returns true; 
// otherwise it returns false. It doesn't modify the array.

// Syntax

// // Arrow function
// some((element) => { /* ... */ } )
// some((element, index) => { /* ... */ } ) 
// some((element, index, array) => { /* ... */ } )

// // Callback function 
// some(callbackFn)
// some(callbackFn, thisArg)

// // Inline callback function 
// some(function(element) { /* ... */ }) 
// some(function(element, index) { /* ... */ })

// some(function(element, index, array){ /* ... */ }) 
// some(function(element, index, array) { /* ... */ }, thisArg)

const array27 = [1,2,3,4,5,6];

const even = element => element%2 === 0;
console.log(array27.some(even));  //true


// Testing value of array elements

function isBiggerThan10(element,index,arr){
    return element > 10;
};

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));  //false
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));  //true

// Testing array elements using arrow functions
console.log([2, 5, 8, 1, 4].some(x => x>10)); //false
console.log([12, 5, 8, 1, 4].some(x => x>10));  //true

// Checking whether a value exists in an array
const fruits4 = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr,val){
    return arr.some(function (valu1){
        return val === valu1
    });
};

console.log(checkAvailability(fruits4, 'kela'));  //false
console.log(checkAvailability(fruits4, 'mango'));  //true

/**************************************************************Array.prototype.map()**************************/
// The map() method creates a new array populated with the results of calling a provided function
// on every element in the calling array.

// Syntax
// // Arrow function 
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ }) 
// map((element, index, array) => { /* ... */ })

// // Callback function 
// map(callbackFn) 
// map(callbackFn, thisArg)

// // Inline callback function
// map(function(element) { /* ... */ }) 
// map(function(element, index) { /* ... */ }) 
// map(function(element, index, array){ /* ... */ })
// map(function(element, index, array) { /* ... */ }, thisArg)


const array28 = [1,4,9,16];

const map2 = array28.map(x => x*2);
console.log(map2);   //[2, 8, 18, 32]


// Mapping an array of numbers to an array of square roots
const number4 = [1,4,9];

const square1 = number4.map(function (num){
    return Math.sqrt(num);
});

console.log(square1);  //[1, 2, 3]

// Using map to reformat objects in an array
let KvArray = [{key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
    ];


let reformattedArray = KvArray.map(Obj =>{
    var rObj = {};
    rObj[Obj.key] = Obj.value;
    return rObj;
});

console.log(reformattedArray); 
/*
0: {1: 10}
1: {2: 20}
2: {3: 30}
*/

// Mapped array contains undefined
let number5 = [1, 2, 3, 4];

let filteredNumbers = number5.map(function (num,index){
    if(index < 3){
        return num; 
    };
});
console.log(filteredNumbers);  //[1, 2, 3, undefined]
 
/******************************************************Array.flatMap()**************************************/
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, 
// and then flattening the result by one level. 

// Syntax

// // Arrow function
// flatMap((currentValue) => { /* ... */ } ) 
// flatMap((currentValue, index) => { /* ... */ } ) 
// flatMap((currentValue, index, array) => { /* ... */ } )

// // Callback function 
// flatMap(callbackFn) 
// flatMap(callbackFn, thisArg)

// // Inline callback function 
// flatMap(function(currentValue) { /* ... */ }) 
// flatMap(function(currentValue, index) { /* ... */ }) 
// flatMap(function(currentValue, index, array){ /* ... */ })
// flatMap(function(currentValue, index, array) { /* ... */ }, thisArg)


var arr10 = [1,2,3,4];

let fl = arr10.map(x => [x,x*2]);
console.log(fl); 
/*
0: (2) [1, 2]
1: (2) [2, 4]
2: (2) [3, 6]
3: (2) [4, 8]
*/

let fl1 = arr10.flatMap(x => [x,x*2]);
console.log(fl1);  //[1, 2, 2, 4, 3, 6, 4, 8]


// is equivalent to 
var n = arr10.length;
var acc = new Array(n * 2); 

for (let i = 0; i < n; i++){
var x = arr10[i]; 
acc [i * 2] = x;
acc [i * 2 + 1] = x * 2;
};

console.log(acc);  //[1, 2, 2, 4, 3, 6, 4, 8]

// Let's generate a list of words from a list of sentences.
const arr11 = ["it's Sunny in", "", "California"] ;

let arr12 = arr11.map(x => x.split(" "));
console.log(arr12);  
/*
0: (3) ["it's", 'Sunny', 'in']
1: ['']
2: ['California']
*/

let arr13 = arr11.flatMap(x => x.split(" "));
console.log(arr13); // ["it's", 'Sunny', 'in', '', 'California']

// For adding and removing items during a map()
// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1 

let a = [5, 4, -3, 20, 17, -33, -4, 18];

let b = a.flatMap( (n) =>
    (n < 0) ? [] : (n % 2 == 0) ? [n] :[n-1,n]
);
console.log(b); //[4, 5, 4, 20, 16, 17, 18]


/***************************************************Array.reduce()***************************/
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, 
// in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value.

// Syntax
// // Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } ) 
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } ) 
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValu

// // Callback function 
// reduce(callbackFn) reduce(callbackFn, initialValue)

// // Inline callback function
// reduce(function(previousValue, currentValue) { /* ... */ }) 
// reduce(function(previousValue, currentValue, currentIndex) { /* ... */ }) 
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }) 
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initia

const array29 = [1,2,3,4];

let reducer = (previousValue, currentValue) => previousValue+currentValue;

console.log(array29.reduce(reducer));  //10
console.log(array29.reduce(reducer,5));   //15

const getMax = (a,b) => Math.max(a,b);

// callback is invoked for each element in the array starting at index 0 
console.log([1, 100].reduce(getMax, 50)); // 100
console.log([	50].reduce(getMax, 10)); // 50

// callback is invoked once for element at index 1 
console.log([1, 100].reduce(getMax));	// 100

// callback is not invoked
console.log([	50].reduce(getMax));	// 50 
console.log([		].reduce(getMax, 1)); // 1
// console.log([	].reduce(getMax));	// TypeError

const array30 = [15, 16, 17, 18, 19];

function reducer1(previous, current, index, array){
    const returns = previous+current;
    console.log(`previous: ${previous}, current: ${current}, index: ${index}, array: ${array} `);
    return returns;
};

console.log(array30.reduce(reducer1));
/*
previous: 15, current: 16, index: 1, array: 15,16,17,18,19 
previous: 31, current: 17, index: 2, array: 15,16,17,18,19 
previous: 48, current: 18, index: 3, array: 15,16,17,18,19 
previous: 66, current: 19, index: 4, array: 15,16,17,18,19 
85
*/

// Examples

// Sum all the values of an array
let sum1 = [0,1,2,3,4].reduce(function (previousValue, currentValue){
    return previousValue+currentValue;
});
console.log(sum1);  //10

let sum2 = [0,1,2,3,4].reduce(function (previousValue, currentValue){
    return previousValue+currentValue;
},0);
console.log(sum2);  //10

// Alternatively written with an arrow function:

// let total = [ 0, 1, 2, 3 ].reduce(
// ( previousValue, currentValue ) => previousValue + currentValue, 0
// );

// Sum of values in an object array
let initialValue = 0;
let sum3 =  [{x: 1}, {x: 2}, {x: 3}].reduce(function (previousValue, currentValue){
    return previousValue + currentValue.x;
},initialValue);

console.log(sum3); //6

// Alternatively written with an arrow function:

// let initialValue = 0
// let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
// (previousValue, currentValue) => previousValue + currentValue.x
// , initialValue
// )

// console.log(sum) // logs 6


// Flatten an array of arrays
let flattened = [[0,1],[2,3],[4,5]].reduce(function (previousValue, currentValue){
    return previousValue.concat(currentValue);
},[]);

console.log(flattened);  //[0, 1, 2, 3, 4, 5]

// Alternatively written with an arrow function:

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
// ( previousValue, currentValue ) => previousValue.concat(currentValue), []
// )

// Counting instances of values in an object
let names1 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let countedNames = names1.reduce(function (allNames, name){
    if(name in allNames){
        allNames[name]++
    }else{
        allNames[name] = 1;
    }
    return allNames
},{});

console.log(countedNames); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}


// Grouping objects by a property
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function group(ObjectArray, property){
    return ObjectArray.reduce(function (acc,obj){
        let key = obj[property];
        if(!acc[key]){
            acc[key] = []
        }
        acc[key].push(obj)
        return acc;
    },{})   
};

let grouppeople = group(people,"age");
console.log(grouppeople);
    //	20: [
     
    //	{ name: 'Max', age: 20 },
    //	{ name: 'Jane', age: 20 }
    //	],
    //	21: [{ name: 'Alice', age: 21 }]
    // }
    
// Bonding arrays contained in an array of objects using the spread operator and initialValue
let friend = 
[
    {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'], 
        age: 21
    }, 
    {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'], age: 26
    }, 
    {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'], age: 18
    }
];

let allbook = friend.reduce(function (previousValue,currentValue){
    return [...previousValue,...currentValue.books];
},['Alphabet']);

console.log(allbook);  //['Alphabet', 'Bible', 'Harry Potter', 'War and peace', 'Romeo and Juliet', 'The Lord of the Rings', 'The Shining']

// Remove duplicate items in an array
let myarray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

let myArrayWithNoDuplicates = myarray.reduce(function (previousValue,currentvalue){
    if(previousValue.indexOf(currentvalue) === -1){
        previousValue.push(currentvalue);
    }
    return previousValue;
}, []);

console.log(myArrayWithNoDuplicates);  //['a', 'b', 'c', 'e', 'd']



