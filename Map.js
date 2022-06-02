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


