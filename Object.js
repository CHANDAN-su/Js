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