console.log("Object");

/**********************************************************JavaScript object basics*************************************/
// const person = {};  //empty object
// [object object]
// Object {}
// {}


// created your first object.
const person = {
  name: ["Chandan", "Thakur"],
  name1: {
    first: "Ravi",
    last: "Gupta"
  },
  age: 12,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`);
  },
  introduceSelf: function () {
    console.log(`Hi ! I'M ${this.name[0]}`)
  }
};

console.log(person.name);
console.log(person.name[0]);
console.log(person.bio());
console.log(person.introduceSelf());


//  The syntax always follows this pattern:
/*
const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value
};
*/

/*
Dot notation
person.age
person.bio()

Objects as object properties
An object property can itself be an object. For example, try changing the name member from

name: ['Bob', 'Smith'],
name : {
    first: 'Bob',
    last: 'Smith'
  },


To access these items you just need to chain the extra step onto the end with another dot.
person.name.first
person.name.last
*/

console.log(person.age);  //12
console.log(person.name1.first);  //Ravi

// Bracket notation
console.log(person["age"]);  //12
console.log(person["name1"]["first"]);  //Ravi


// Setting object members
person.age = 52;
console.log(person.age);  //52

person["name1"]["last"] = "Mandal";
console.log(person.name1.last);  //Mandal


// you can also create completely new members
person["eyes"] = "hazel";
console.log(person["eyes"]);  //hazel

person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person.farewell());  //Bye everybody!


/*
const myDataName = nameInput.value;
const myDataValue = nameValue.value;

person[myDataName] = myDataValue;
*/

const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;
console.log(person.height);  //1.75m


// Introducing constructors

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  }
  return obj;
}

console.log(createPerson("Chandan"));  //wrong

// a property name
// a method introduceSelf().

const salva = createPerson("Chandan");
console.log(salva.name);  //Chandan
console.log(salva.introduceSelf());  //Hi! I'm Chandan.

const frankie = createPerson("Frankie ");
console.log(frankie.name);  //Frankie 
console.log(frankie.introduceSelf());  //Hi! I'm Frankie .


function Person1(name) {
  this.name = name;
  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  }
}


const salva1 = new Person1('Salva');
console.log(salva1.name);  //Salva
console.log(salva1.introduceSelf());  //Hi! I'm Salva.


const frankie1 = new Person1('Frankie');
console.log(frankie1.name);  //Frankie
console.log(frankie1.introduceSelf());  //Hi! I'm Frankie.



/*************************************************************Object() constructor********************************************/
// The Object constructor creates an object wrapper for the given value.
/*
Syntax
new Object()
new Object(value)
*/

let o = new Object();

o.sunject = "Math";
o.Marks = "95%";

console.log(o);  //{sunject: 'Math', Marks: '95%'}
console.log(o.sunject);  //Math
console.log(o.Marks);  //95%


/******************************************************************************Object.assign()****************************************************/
// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
/*
Syntax
Object.assign(target, ...sources)
*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);
console.log(returnedTarget);  //{a: 1, b: 4, c: 5}

// Cloning an object
const Obj = { a: 1 };

const copy = Object.assign({}, Obj);
console.log(copy); //{ a:1 }

// Warning for Deep Clone

function test() {
  'use strict';

  let Obj1 = { a: 0, b: { c: 0 } };
  let Obj2 = Object.assign({}, Obj1);

  console.log(JSON.stringify(Obj2)); //{"a":0,"b":{"c":0}}

  Obj1.a = 1;
  console.log(JSON.stringify(Obj1));  //{"a":1,"b":{"c":0}}
  console.log(JSON.stringify(Obj2)); //{"a":0,"b":{"c":0}}

  Obj2.a = 2;
  console.log(JSON.stringify(Obj1)); //{"a":1,"b":{"c":0}}
  console.log(JSON.stringify(Obj2));  //{"a":2,"b":{"c":0}}

  Obj2.b.c = 3;
  console.log(JSON.stringify(Obj1)); //{"a":1,"b":{"c":3}}
  console.log(JSON.stringify(Obj2)); //{"a":2,"b":{"c":3}}

  // Deep Clone								
  Obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(Obj1)); 
  Obj1.a = 4;
  Obj1.b.c = 4;
  console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}

};

test();

// Merging objects
const o1 = {a:1};
const o2 = {b:2};
const o3 = {c:3};

const merging = Object.assign(o1,o2,o3);
console.log(merging);  //{a: 1, b: 2, c: 3}


// Merging objects with same properties
const o4 = {a:1,b:1,c:1};
const o5 = {b:2,c:2};
const o6 = {c:3};

const Merging1 = Object.assign(o4,o5,o6);  //{a: 1, b: 2, c: 3}

// Copying symbol-typed properties
const o7 = {a:1};
const o8 = { [Symbol("foo")]:2 };

const Obj3 = Object.assign({},o7,o8); 
console.log(Obj3); //{a: 1, Symbol(foo): 2}


// Primitives will be wrapped to objects
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo");

const Obj5 = Object.assign({},v1,null,v2,undefined,v3,v3);
console.log(Obj5); //{0: 'a', 1: 'b', 2: 'c'}

const Obj4 = Object.assign({},v1);
console.log(Obj4);  //{0: 'a', 1: 'b', 2: 'c'}

// Copying accessors
const obj1 = {
  foo: 1,
  get bar(){
    return 2;
  }
};

const Copy = Object.assign({},obj1);
console.log(Copy);  //{foo: 1, bar: 2}



/****************************************************************************Object.create()***************************************/
// The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
/*
Syntax
Object.create(proto)
Object.create(proto, propertiesObject)
*/


const person2 = {
  isHuman: false,
  printIntroduction: function (){
    console.log(`My name is ${this.name}. I AM Human? ${this.isHuman} `);
  }
};

const me = Object.create(person2);

me.name = "Chandan Thakur";
me.isHuman = true;

console.log(me.printIntroduction());  //My name is Chandan Thakur. I AM Human? true

var oco;
oco = Object.create({});
console.log(ocn);  //undfine

oco.p = 12;
console.log(oco);  //{p: 12}



var ocn;
ocn =Object.create(null);
console.log(ocn);  //{}

ocn.p = 13;
console.log(ocn); //{p: 13}


/***********************************************************************Object.entries()***********************************************/
// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
// This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well.
/*
Syntax
Object.entries(obj)
*/


const object1 = {
  a: "something",
  b: 42
};

console.log(Object.entries(object1)); // [['a', 'something'],['b', 42] ]

for(const [key,value] of Object.entries(object1)){
  console.log(`${key}: ${value} `);
};
/*
a: something 
b: 42 
*/


const Obj6 = {
  boo: "far",
  baz: 42
};
console.log(Object.entries(Obj6));  //[ ['foo', 'bar'], ['baz', 42] ]

// array like object
const Obj7 = {
  1: "a",
  2: "b",
  3: "c"
};

console.log(Object.entries(Obj7)); //[ ['0', 'a'], ['1', 'b'], ['2', 'c']

// array like object with random key ordering const 
const Obj8 = {
  100: "a",
  2: "b",
  7: "c"
};

console.log(Object.entries(Obj8));  //[ ['2', 'b'], ['7', 'c'], ['100', "a"] ]


const Obj9 = {
  foo: "bar",
  baz: 42
};
const map = new Map(Object.entries(Obj9));
console.log(map);  //Map(2) {'foo' => 'bar', 'baz' => 42}


// Iterating through an Object
const Obj10 = {
  foo: "bar",
  baz: 42
};

Object.entries(Obj10).forEach(([key,vale]) => console.log(`${key}: ${vale}`));
/*
foo: bar
baz: 42
*/

/*****************************************************************************Object.fromEntries()***********************************/
// The Object.fromEntries() method transforms a list of key-value pairs into an object.
/*
Syntax
Object.fromEntries(iterable);
*/

const entries = new Map([  ['foo', 'bar'],  ['baz', 42]  ]);

const Obj17 = Object.fromEntries(entries);
console.log(Obj17);  //{foo: 'bar', baz: 42}


// Converting an Array to an Object
const arr1 = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj18 = Object.fromEntries(arr1);
console.log(obj18); // { 0: "a", 1: "b", 2: "c" }


// object transformation
// all price me 10% increase karna 

const transObject = {
  a_price: 100,
  b_price: 120,
  c_price: 90,
  d_price: 220,
  e_price: 293,
  f_price: 220
}

const transA = Object.fromEntries(Object.entries(transObject).map(([a,b]) => [a,Math.floor(b+b*12/100)]));

console.log(transA);

/**********************************************************************Object.freeze()**********************************************************/
// The Object.freeze() method freezes an object. 
// A frozen object can no longer be changed; freezing an object prevents new properties from being added to it
/*
Syntax
Object.freeze(obj)
*/

const Obj11 = {
  prop: 42
};
console.log(Obj11); //{prop:42}

Object.freeze(Obj11);
Obj11.prop = 33; //// Throws an error in strict	mode

console.log(Obj11);  //{prop: 42}


// Freezing objects
const Obj12 = {
  prop() { return 1},
  foo : 'bar'
};

// Freeze.
Object.freeze(Obj12);

Obj12.foo = "baz";  //not mater
Obj12.lumpy  = "woof";  //not mater
delete Obj12.prop;  //not mater

console.log(Obj12);  //{foo: 'bar', prop: ƒ}

// In strict mode such attempts will throw TypeErrors 
// function fail(){
//   "use strict";

//   Obj12.foo = "'sparky'",   //// throws a TypeError 
//   delete Obj12.prop, // throws a TypeError
//   Obj12.sparky  = "arf" //// throws a TypeError
// };
// console.log(fail());



// Freezing arrays
let a = [0];
Object.freeze(a);

a[0] = 3;
// a.push("chanda");  //// throws a TypeError
console.log(a);  //[0]


/**************************************************************************Object.isFrozen()**********************************************/
// The Object.isFrozen() determines if an object is frozen.

const object2 = {
  prop : 43
};

console.log(Object.isFrozen(object2));  //false

Object.freeze(object2);
console.log(Object.isFrozen(object2));  // true



/*************************************************************************Object.keys()***********************************************/
// The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
/*
Syntax
Object.keys(obj)
*/


const object3 = {
  a: "something",
  b: 23,
  c: false
};

console.log(Object.keys(object3));  //['a', 'b', 'c']

// simple array
const arr = ["a" , "b" , "c"];
console.log(Object.keys(arr));  //['0', '1', '2']

// array-like object with random key ordering 
const Obj14 = {
  100: "a",
  2: "b",
  7: "c"
};
console.log(Object.keys(Obj14));   //['2', '7', '100']

// getFoo is a property which isn't enumerable 
const myObj = Object.create({},{
  getfoo: {
    value : function (){
      return this.foo;
    }
  }
});

myObj.foo = 2;
console.log(Object.keys(myObj));  //['foo']


/********************************************************************Object.values()**********************************************/
// The Object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. 
/*
Syntax
Object.values(obj)
*/

const object4 = {
  a: "something",
  b: 45,
  c: true
};

console.log(Object.values(object4));  // ['something', 45, true]


// array-like object with random key ordering 
const Obj15 = {
  100: "a",
  2: "b",
  7: "c"
};
console.log(Object.values(Obj15));   //['b', 'c', 'a']

// getFoo is a property which isn't enumerable 
const myObj1 = Object.create({},{
  getfoo: {
    value : function (){
      return this.foo;
    }
  }
});

myObj1.foo = "bar";
console.log(Object.values(myObj1));  //['bar']

// non-object argument will be coerced to an object 
console.log(Object.values("foo")); //['f', 'o', 'o']


/****************************************************************Object.is()****************************************************************/
// The Object.is() method determines whether two values are the same value.
/*
Syntax
Object.is(value1, value2);
*/


// Case 1: Evaluation result is the same as using ===

console.log(Object.is(25, 25));	//	true
console.log(Object.is('foo', 'foo'));	//	true
console.log(Object.is('foo', 'bar'));	//	false
console.log(Object.is(null, null));	//	true
console.log(Object.is(undefined, undefined));	//	true
console.log(Object.is(window, window));	//	true
console.log(Object.is([], [])); //	false

var foo = { a: 1 };	
var bar = { a: 1 };
console.log(Object.is(foo, foo)); //	true
console.log(Object.is(foo, bar));	//	false

// Case 2: Signed zero		
console.log(Object.is(0, -0));	//	false
console.log(Object.is(+0, -0));	//	false
console.log(Object.is(-0, -0));	//	true
console.log(Object.is(0n, -0n));	//	true


// Case 3: NaN 
console.log(Object.is(NaN, 0/0));	//	true
console.log(Object.is(NaN, Number.NaN));	//	true



/***************************************************************Object.defineProperties()**************************************************/
// The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
/*
Syntax
Object.defineProperties(obj, props)

props
configurable
enumerable
value
writable
get
set
*/

const object5 = {};

Object.defineProperties(object5,{
  property1: {
    value: 45,
    writable: false
  },
  property2: {}
});

console.log(object5.property1);  //45

var obj89 = {}; 

Object.defineProperties(obj89, {
  'property1': { value: true, writable: true
  },
  'property2': { value: 'Hello', writable: false
  }
  // etc. etc.
});
  
console.log(obj89.property1);
console.log(obj89.property2);



/*************************************************************Object.defineProperty()***********************************************/
// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
/*
Syntax
Object.defineProperty(obj, prop, descriptor)
*/

const object6 = {};

Object.defineProperty(object6 , 'property1', {
  value: 56,  
  writable: false
});

object6.property1 = 49;  //// throws an error in strict mode
console.log(object6.property1);  //56  (writable: false h to 56 aayega out   writable: ture h to 49 aayega)


// Object creation of 3 type

// first:- var newObject = {};
// ṣecind:- var newObject = Object.create();
// third:- var newObject = new Object();

var newObject = new Object();

// first Set Property

newObject.a = 1;
console.log(newObject);  //{a:1}

//Modifiying the  value of a property
newObject.a = 0;
console.log(newObject);  //{a:0}

// Creating a new property
newObject.b = 2
console.log(newObject);  //{a: 0, b: 2}

// Deleting a property
console.log(delete newObject.b);  //true
console.log(newObject);  //{a: 0}



//second Set property
Object.defineProperty(newObject,"a", {
  value: 76,
  writable: true,
  enumerable: true,
  configurable: true
});
// console.log(newObject);  //76


// Object's enumerable property 

// enumerable
Object.defineProperty(newObject,"a",{
  value: "some value",
  enumerable: true
});
console.log(newObject);  //{a: 'some value'}

for(let key in newObject){
  console.log(key);
};  //a ye string me value return karega 

console.log(Object.keys(newObject)); //["a"] ye array me value return karega

// Non enumerable

Object.defineProperty(newObject,"a",{
  value: "some value",
  enumerable: false
});
console.log(newObject);  //{a: 'some value'}

for(let key in newObject){
  console.log(key);
};  //undefined  return value undefined

console.log(Object.keys(newObject)); //[] isme empty array return hoga 


// Object's writable property 

// writable 
Object.defineProperty(newObject,"a",{
  value: "some value",
  writable: true
});
console.log(newObject);  //{a: 'some value'}

newObject.a = "some other value";
console.log(newObject)  //{a: 'some other value'}  isme a ka value change kar sakte h

// Non-writable
Object.defineProperty(newObject,"a",{
  value: "some value",
  writable: false
});
console.log(newObject);  //{a: 'some value'}

newObject.a = "some other value";
console.log(newObject)  //{a: 'some value'}


// Object's configurable property 

// configurable
Object.defineProperty(newObject,"a",{
  value: "some value",
  configurable: true
});
console.log(newObject);  //{a: 'some value'}

console.log(delete newObject.a);  //true

console.log(newObject);  //{}

// Non-configurable
Object.defineProperty(newObject,"a",{
  value: "some value",
  configurable: false
});
console.log(newObject);  //{a: 'some value'}


console.log(delete newObject.a);  //false

console.log(newObject);  //{a: 'some value'}




// being explicit 
const Obj18 = new Object();

Object.defineProperty(Obj18,"key", {
  value:'static',
  writable: false,
  enumerable:false,
  configurable:false
}); console.log(Obj18);  //{key: 'static'}



/************************************************************************Object.seal()***********************************************/
// The Object.seal() method seals an object, 
// preventing new properties from being added to it and marking all existing properties as non-configurable.
/*
Syntax
Object.seal(obj)
*/

const object7 = {
  name: "chandan"
};

Object.seal(object7);
console.log(object7);  //{name: 'chandan'}
object7.name = "Tilak";
console.log(object7);  //{name: 'Tilak'}

delete object7.name;
console.log(object7);  //{name: 'Tilak'}


/**********************************************************************************Object.isSealed()***************************************************/
// The Object.isSealed() method determines if an object is sealed.
/*
Syntax
Object.isSealed(obj)
*/

const object8 = {
  name: "Monika"
};

console.log(Object.isSealed(object8));  //false

Object.seal(object8);

console.log(Object.isSealed(object8)); //true


/**************************************************************************************Object.prototype.toString()*******************************************/
// The toString() method returns a string representing the object.
/*
Syntax
toString()
*/


function Dog(name){
  this.name = name;
};

const Dog1 = new Dog("Cat");
// console.log(Dog1.tostring());  //Uncaught TypeError: Dog1.tostring is not a function

Dog.prototype.tostring = function dogsthing(){
  return `${this.name}`;
};
console.log(Dog1.tostring());  //Cat


/************************************************************************Object.prototype.valueOf()************************************************/
// The valueOf() method returns the primitive value of the specified object.
/*
Syntax
valueOf()
*/

function MYnumbertype(n){
    return this.n = n;
};

MYnumbertype.prototype.valueOf = function (){
  return `${this.n}`;
};


const mynumber = new MYnumbertype(456);
console.log(mynumber.valueOf());  //valueOf 
