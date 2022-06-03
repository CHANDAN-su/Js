// The Map object holds key-value pairs and remembers the original insertion order of the keys. 

const map1 = new Map();

map1.set("a",1);
map1.set("b",2);
map1.set("c",3);

console.log(map1.get("a"));  //1

map1.set("a",95);
console.log(map1.get("a"));  //95

//map ka size pata karana
console.log(map1.size); //3

//map delete
map1.delete("b");
console.log(map1.size);  //2

// Setting object properties
const wrongMap = new Map();

wrongMap["bla"] = "blaa";
wrongMap["bla1"] = "blaaa2";

console.log(wrongMap);  //Map(0) {bla: 'blaa', bla1: 'blaaa2', size: 0}
// The value of 'bla' is not stored in the Map for queries. 

console.log(wrongMap.has("bla"));  //false
console.log(wrongMap.delete("bla"));   //false

console.log(wrongMap);  //Map(0) {bla: 'blaa', bla1: 'blaaa2', size: 0}

// The correct usage for storing data in the Map is through the set(key, value) method.
const contacts = new Map();

contacts.set("Jessie",{phone : "213-555-1234",address : "123 N 1st Ave"});  
console.log(contacts.get("Jessie"));  //{phone: '213-555-1234', address: '123 N 1st Ave'}
console.log(contacts.has("Jessie")); //true

console.log(contacts.get("Hilary")); //undefined

// Iterating Map with for..of
const myMap = new Map();

myMap.set(0,"zero");
myMap.set(1,"one");

for(const [key,value] of myMap){
    console.log(key + " = " + value);
} 
/*
0 = zero
1 = one
*/

for(const key of myMap.keys()){
    console.log(key);
}
/*
o
1
*/
for(const value of myMap.values()){
    console.log(value);
}
/*
zero
one
*/

for(const [key , value] of myMap.entries()){
    console.log(key + " = " + value);
}
/*
0 = zero
1 = one
*/

// Iterating Map with forEach()
myMap.forEach(function (key,value){
    console.log(key + " = " + value);
});
/*
0 = zero
1 = one
*/


// Relation with Array objects
const kvArray = [["key1","value1"],["key2","value2"]];

const mymap1 = new Map(kvArray);
console.log(mymap1);  //Map(2) {'key1' => 'value1', 'key2' => 'value2'}

console.log(mymap1.get("key1"));  //value1

console.log(Array.from(mymap1)); 
/*
0: (2) ['key1', 'value1']
1: (2) ['key2', 'value2']
*/

console.log(...mymap1);  //['key1', 'value1']  ['key2', 'value2']

console.log(Array.from(mymap1.keys()));  //['key1', 'key2']

// Cloning and merging Maps
const original = new Map([
    [1, 'one']
])
  
const clone = new Map(original)
console.log(clone.get(1))       // one
console.log(original === clone) // false (useful for shallow comparison)


// Maps can be merged, maintaining key uniqueness:
const first = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"]
]);

const second = new Map([
    [1,"uns"],
    [2,"dos"]
]);


// Merge two maps. The last repeated key wins.
// Spread operator essentially converts a Map to an Array
const merged  = new Map([...first,...second,[1, 'eins']]);
console.log(merged );  //{1 => 'eins', 2 => 'dos', 3 => 'three'}

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three

/************************************************Map() constructor***********************************************/
// The Map() constructor creates Map objects.
/*
Syntax
new Map()
new Map(iterable)
*/

let mymap2 = new Map([
    ["a",1],
    ["b",2],
    ["c",3]
]);
console.log(mymap2);  //{'a' => 1, 'b' => 2, 'c' => 3}


/**********************************************Map.prototype.clear()*************************************/
// The clear() method removes all elements from a Map object.
/*
Syntax
clear()
*/

const mymap3 = new Map();

mymap3.set("bar","bazz");
mymap3.set(1,"foo");

console.log(mymap3.size);  //2
console.log(mymap3.has("bar"));  //true

mymap3.clear();

console.log(mymap3.size); //0
console.log(mymap3.has("bar"));   //false


/*****************************************************Map.prototype.delete()*******************************/
// The delete() method removes the specified element from a Map object by key.
/*
Syntax
delete(key)
*/

const mymap4  = new Map();

mymap4.set("bar","bar1");
mymap4.set("foo","foo1");

mymap4.delete("foo");

console.log(mymap4);  //{'bar' => 'bar1'}

/*************************************Map.prototype.entries()******************************************/
const mymap5 = new Map();

mymap5.set(0,"bar");
mymap5.set(1,"foo");

const iterator1  = mymap5.entries();
console.log(iterator1);  //{0 => 'bar', 1 => 'foo'}

console.log(iterator1.next().value);  // [0, 'bar']
console.log(iterator1.next().value);  //[1, 'foo']
console.log(iterator1.next().value);  //undefined


/************************************************Map.prototype.forEach()***********************************************/
// The forEach() method executes a provided function once per each key/value pair in the
// Map object, in insertion order.

// Syntax
// Arrow function
// forEach(() => { /* ... */ } )
// forEach((value) => { /* ... */ } )
// forEach((value, key) => { /* ... */ } )
// forEach((value, key, map) => { /* ... */ } )

// Callback 
// function forEach(callbackFn) 
// forEach(callbackFn, thisArg)
 
// Inline callback 
// function forEach(function() { /* ... */ }) 
// forEach(function(value) { /* ... */ }) 
// forEach(function(value, key) { /* ... */ })

// forEach(function(value, key, map) { /* ... */ }) 
// forEach(function(value, key, map) { /* ... */ }, thisArg)


function logMapElements(key , value , map){
    console.log(`m[${key}] = ${value}`);
};

const foreach1 = new Map([["foo",2],["bar",{}],["baz",undefined]]).forEach(logMapElements);

console.log(foreach1);
/*
m[2] = foo
m[[object Object]] = bar
m[undefined] = baz
undefined
*/

/********************************************Map.prototype.get()***************************/
// The get() method returns a specified element from a Map object.
/*
Syntax
get(key)
*/

const mymap6 = new Map();

mymap6.set(0,"hii");

console.log(mymap6.get(0));  //hii
console.log(mymap6.get(1));  //undefined


/************************************************************Map.prototype.has()**************************************/
// The has() method returns a boolean indicating whether an element with the specified key exists or not.
/*
Syntax
has(key)
*/


const mymap7 = new Map();
mymap7.set(0,"hii");

console.log(mymap7.has(0));  //true
console.log(mymap7.has(1));  //false

/****************************************************Map.prototype.keys()************************/
// The keys() method returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
/*
Syntax
keys()
*/

const mymap8 = new Map();
mymap8.set(0,"foo");
mymap8.set(1,"bar");

const iterator2 = mymap8.keys();

console.log(iterator2); //MapIterator {0, 1}

console.log(iterator2.next().value);  //0
console.log(iterator2.next().value);  //1
console.log(iterator2.next().value);  //undefined



/********************************************************Map.prototype.set()*************************************** */
// The set() method adds or updates an element with a specified key and a value to a Map object.
/*
Syntax
set(key, value)
*/

const mymap9 = new Map();

// Add new elements to the map 
mymap9.set("bar","foo");
mymap9.set(1,"foobar");

// Update an element in the map 
mymap9.set("bar","baz");

console.log(mymap9);  //{'bar' => 'baz', 1 => 'foobar'}


// Using the set() with chaining1

// Add new elements to the map with chaining. 
mymap9.set(0,"zero")
    .set(1,"one")
    .set(2,"two");

console.log(mymap9);  //{'bar' => 'baz', 1 => 'one', 0 => 'zero', 2 => 'two'}

const mymap10 = new Map();

mymap10.set("a","alpha");
mymap10.set("b","beta");
mymap10.set("g","gamma");

console.log(mymap10.size);  //3

/***********************************************Map.prototype.values()*********************************************/
// The values() method returns a new Iterator object that contains the values for each element in the Map object in insertion order.
/*
Syntax
values()
*/

const mymap11 = new Map();

mymap11.set(0,"foo");
mymap11.set(1,"bar");
mymap11.set({},"baz");

const iterator3 = mymap11.values();

console.log(iterator3);  //MapIterator {'foo', 'bar', 'baz'}

console.log(iterator3.next().value);  //foo
console.log(iterator3.next().value);  //bar
console.log(iterator3.next().value);  //baz


/***********************************************************Set***************************************************/
// The Set object lets you store unique values of any type, whether primitive values or object references.

// Using the Set object
const myset = new Set();

console.log(myset.add(1));  //Set(1) {1}
console.log(myset.add(5));  //Set(2) {1, 5}
console.log(myset.add(5));  //Set(2) {1, 5}
console.log(myset.add("some text"));  //Set(3) {1, 5, 'some text'}

const o = {a:1,b:2};
console.log(myset.add(o));  //Set(4) {1, 5, 'some text', {a:1,b:2}}

console.log(myset.add({a:1,b:2}));  //Set(4) {1, 5, 'some text', {a:1,b:2},{a:1,b:2}}


console.log(myset.has(1));  //true
console.log(myset.has(3)); //false
console.log(myset.has(5));  //true
console.log(myset.has(Math.sqrt(25)));   //true
console.log(myset.has("Some Text".toLowerCase()));  //true
console.log(myset.has(o));   //true

console.log(myset.size);  //5

myset.delete(5);
console.log(myset.has(5));  //false

console.log(myset.size);  //4

// Iterating Sets
// iterate over items in set

for(let item of myset){
    console.log(item);
};
/*
1
some text
{a: 1, b: 2}
{a: 1, b: 2}
*/

for(let item of myset.keys()){
    console.log(item);
}
/*
1
some text
{a: 1, b: 2}
{a: 1, b: 2}
*/

for(let item of myset.values()){
    console.log(item);
}
/*
1
some text
{a: 1, b: 2}
{a: 1, b: 2}
*/

for(let [key,value] of myset.entries()){
    console.log(key);
};
/*
1
some text
{a: 1, b: 2}
{a: 1, b: 2}
*/

const myaryy = Array.from(myset);
console.log(myaryy);  //[1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]

// the following will also work if run in an HTML document 
console.log(myset.add(document.body));   //Set(5) {1, 'some text', {…}, {…}, body}
console.log(myset.has(document.querySelector('body'))); // true


// converting between Set and Array 
const myset1 = new Set([1,2,3,4]);
console.log(myset1.size);  //4
console.log([...myset1]);  //[1,2,3,4]

// intersect can be simulated via
const intersection = new Set([...myset].filter(x => myset1.has(x)));
console.log(intersection);  

// difference can be simulated via
const difference = new Set([...myset].filter(x => !myset1.has(x)));
console.log(difference);  //{'some text', {"a":1,"b":2}, {"a":1,"b":2}, body}


// Iterate set entries with forEach() 
myset1.forEach( function (value){
    console.log(value);
}); 
/*1
2
3
4
*/

// Relation with Array objects
const myarray = ["value1","value2","value"];

const myset2 = new Set(myarray);

console.log([...myset2]); //['value1', 'value2', 'value']


// Remove duplicate elements from the array
const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];

console.log([...new Set(numbers)]);  //[2, 3, 4, 5, 6, 7, 32]

// Relation with Strings
const string = "India";

const myset3 = new Set(string);
console.log(myset3);  //Set(5) {'I', 'n', 'd', 'i', 'a'}

//case sensitive & duplicate omission
console.log(new Set("Firefox"));  //Set(7) {'F', 'i', 'r', 'e', 'f','o','x'}
console.log(new Set("firefox"));  //Set(6) {'f', 'i', 'r', 'e', 'o','x'}
