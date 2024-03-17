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

