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


// const map1 = new Map();
// map.set('one', 1)
// map.set('two', 2);
// Array.from(map1); // => [['one', 1], ['two', 2]]


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

