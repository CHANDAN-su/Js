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

