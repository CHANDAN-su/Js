console.log("Prototype in javascript");


// console.log(this);
// console.log(window);
function abc(){
    // console.log(this);

    // this problem slove this code

    'use strict' //yha ya function se bahar
    // console.log(this);  //undefine
}
abc();

// koi bhi function create karte h to bh window object me jake save jo jata h
function save(){
    console.log("Hello World");
}
// save();  //Hello World


const person = {
    firstName: "chandan",
    age: 22,
    about: function(){
        // console.log("Person firstName is chandan and person age is 22");  //hard code
        // console.log(`Person name is ${firstName}  and person age is ${age}`);  //Uncaught ReferenceError: firstName is not defined
        console.log(`Person name is ${this.firstName} and person age is ${this.age}`); //Person name is chandan and person age is 22

    }
}

// console.log(person);  //{firstName: 'chandan', age:22, about:f}
// console.log(person.about());

function details(playlist){
    // console.log(`Person name is ${firstName} and person age is ${age}`); //firstName and age is not undefine 
    
    // slove this problem this keyword
    console.log(`Person name is ${this.firstName} and person age is ${this.age} and you learn in ${playlist}`);
}

const person1 = {
    firstName: "Ravi",
    age: 20,
    about: details
}

const person2 = {
    firstName: "Kavi",
    age: 24,
    about: details
}

const person3 = {
    firstName: "Vijay",
    age: 28,
    about: details
}

// person1.about("Javascript"); //Person name is Ravi and person age is 20
// person2.about("pyton");
// person3.about("Java");

function func(hobby,rating){
    console.log(`Person name is ${this.firstName}, person age is ${this.age}, hobby is ${hobby} and rating ${rating}`);
}

const person4 = {
    firstName: "Monika",
    age: 10,
    // fun: function (){
    //     console.log(`Person name is ${this.firstName} and person age is ${this.age}`);
    // }
    // fun: func
}

const person5 = {
    firstName: "meenu",
    age: 12
}


// person4.fun();

// person4.fun.call(person4) //person4 la data show
// person4.fun.call(person5); //person5 ka data show

// func.call(person4); //Person name is Monika and person age is 10
// func.call(person5); 


// func.apply(person4,["cricket","9"]);
// func.apply(person5,["hoky",5])

let a = func.bind(person4,"cricket", 9);
console.log(a());



// ye code bahut memory khata h agar 1 lac obje ho to jada memory khach hoga
// function objectCreate(firstName, age, gmail,rating){

//     const obj = {}

//     obj.firstName = firstName;
//     obj.age = age;
//     obj.gmail = gmail;
//     obj.rating = rating;
//     obj.func1 = function (){
//         console.log(`Person name is ${this.firstName}, your age is ${this.age} and your rating ${this.rating}`);
//     }
//     obj.func2 = function (){
//         console.log(`Your gamil id ${this.gmail}`)
//     }
    
//     return obj;

// }

// const person6 = objectCreate("chandan",23,"abc@gmail.com",5);
// const person7 = objectCreate("Rahul",22,"abcd@gmail.com",4);
// const person8 = objectCreate("Ravi",18,"klmn@gmail.com",8);

// console.log(person6);
// console.log(person7);
// console.log(person8);

// console.log(person6.func1());
// console.log(person6.func2());
// console.log(person7.func2());



// iame uh error h ki itna object methid hoga itna hi function me referenece dena parega 

// imporve your code
// const allfunc = {
//     a: function (){
//         return `Person name is ${this.firstName}, your age is ${this.age} and your rating ${this.rating}`;
//     },
//     b: function (){
//         return `Your gamil id ${this.gmail}`;
//     }
// }


// ye code memory kam khata h object reference dene se
// function objectCreate(firstName, age, gmail,rating){

//     const obj = {}

//     obj.firstName = firstName;
//     obj.age = age;
//     obj.gmail = gmail;
//     obj.rating = rating;
//     // reference for allfunc object
//     obj.func1 = allfunc.a;
//     obj.func2 = allfunc.b;

//     return obj;

// }

// const person6 = objectCreate("chandan",23,"abc@gmail.com",5);
// const person7 = objectCreate("Rahul",22,"abcd@gmail.com",4);
// const person8 = objectCreate("Ravi",18,"klmn@gmail.com",8);

// console.log(person7.func1());
// console.log(person8.func2());



 
// is error ko slove karene ke liye hame -----Object.create()-------  method use kar sakete h

// const allfunc = {
//     a: function (){
//         return `Person name is ${this.firstName}, your age is ${this.age} and your rating ${this.rating}`;
//     },
//     b: function (){
//         return `Your gamil id ${this.gmail}`;
//     }
// }

// function objectCreate(firstName, age, gmail,rating){

//     const obj = Object.create(allfunc);

//     obj.firstName = firstName;
//     obj.age = age;
//     obj.gmail = gmail;
//     obj.rating = rating;

//     return obj;

// }

// const person6 = objectCreate("chandan",23,"abc@gmail.com",5);
// const person7 = objectCreate("Rahul",22,"abcd@gmail.com",4);
// const person8 = objectCreate("Ravi",18,"klmn@gmail.com",8);

// console.log(person6.b());






// isme ek object ka dusare object me access nhi kar sakate h
// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 ={
//     key3: "value3"
// }

// console.log(obj2.key2);  //undefine


// slove this error Object.creat() method se hota h
// lekin Object.creat() se ek object ka dusale object me key value acess ka sakte h

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// console.log(obj1);

// const obj2 = Object.create(obj1);   //return empty object and dusara object ka access

// console.log(obj2.__proto__)

// obj2.key3 = "value3";

// console.log(obj2);
// console.log(obj2.key3);
// console.log(obj2.key2);



// function bhi ek object hota h
function hello(){
    console.log("Hello world");
}

hello();

console.log(hello.prototype);

hello.myNewFunction = "Hii, I am fine today"
// console.log(hello.myNewFunction);

console.log(hello.prototype);

const pro = {
    key1: "value1",
    key2: "value2"
}

hello.prototype.abc = function (){
    console.log(`First key: ${this.key1} and Second key: ${this.key2}`)
}

// pro.abc();