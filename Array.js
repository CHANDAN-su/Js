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

