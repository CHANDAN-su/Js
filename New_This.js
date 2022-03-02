
console.log("This");

/*******************************************this******************************/
// AudioListener, this refers to the global object 
// console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …}


// In a regular function , this refers to the global object
function sum(){
    var add = 2+2;
    console.log("Sum two no is " +add)   //Sum two no is 4
    // console.log(this);  //Window {window: Window, self: Window, document: document, name: '', location: Location, …} 
}
// sum();  

// In method , this refers to ower object
var x = {
    name: "Chnadan",
    Marks: "89",
    sun: function (){
        var add = 2+2;
        console.log("Sum two no is " +add);
        console.log(this.name);
        console.log(this.Marks);
    }
};

// x.sun();  //Chnadan
          // 89


const test = {
    prop: 42,
    func: function (){
        return this.prop;
    },
};
// console.log(test.func());  //42


// Global context
// console.log(this === window);    //true

a =37;
// console.log(window.a);   //37

var b = "chandan";
this.b = b;
// console.log(window.b);  //chandan
// console.log(b);  //chandan



// Function context
function f1(){
    return this;
};
// In a browser:
// console.log(f1() === window);   //true


// In Node:
// console.log(f1() === globalThis); // true

// In strict mode
function f2(){
    'use strict'; 
    return this;
};
// console.log(f2());
// console.log(f2() === undefined);  //true



// this in function contexts
var Obj = {a:"custom"};
var a = "Global";
function whatsthis(){
    return this.a;
};

// console.log(whatsthis());  //Global
// console.log(whatsthis.call(Obj));  //custom




// this and object conversion  (call function)
function add(c,d){
    return this.a + this.b + c + d;
};

var o = {
    a: 1,
    b: 3
};

var o1 = {
    a: 5,
    b: 3
};

// console.log(add.call(o,4,6));  //14
// console.log(add.apply(o,[4,6]));   //14
// console.log(add.call(o1,4,6));   //18
// console.log(add.apply(o1,[4,6]));   //18



// The bind method
function f(){
    return this.a;
};

var g = f.bind({a:"chnadan"});
// console.log(g());  //chandan

// bind only works once! console.log(h()); // azerty
var h = g.bind({a: 'yoo'}); 
// console.log(h());

var o = {a: 37, f: f, g: g, h: h};
// console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty




var o = {prop: 37};
function independent() { return this.prop;
}

 o.f = independent; 
// console.log(o.f()); // 37



function C() { 
    this.a = 37;
}
var o = new C();
//  console.log(o.a); // 37


function C2() { this.a = 37;
    return {a: 38};
}  
var o = new C2();
//  console.log(o.a); // 38
    

/**********************************************************new opterater*******************************************************************/

// Syntax
// new constructor[([arguments])]

function Car(make,mode,year){
    this.make = make;
    this.mode = mode;
    this.year = year;
};

const  Car1 = new Car('Eagle', 'Talon TSi', 1993);
console.log(Car1); //Car {make: 'Eagle', mode: 'Talon TSi', year: 1993}
console.log(Car1.make);  //Eagle
console.log(Car1.mode);  //Talon TSi
console.log(Car1.year);  //1993

const  Car2 = new Car('Honda', 'T 20', 1990);
console.log(Car2);  //Car {make: 'Honda', mode: 'T 20', year: 1990}
console.log(Car2.make);  //Honda
console.log(Car2.mode);   //T 20
console.log(Car2.year);  //1990

// Creating a user-defined object requires two steps:
function Foo(bar1,bar2){
    this.bar1 = bar1;
    this.bar2 = bar2; 
};

// 2.	Create an instance of the object with new .
const myfoo = new Foo("bar 1",2021);
console.log(myfoo);  //Foo {bar1: 'bar 1', bar2: 2021}


function Car3(make, model, year, owner) { 
    this.make = make;
    this.model = model; 
    this.year = year; 
    this.owner = owner;
}
     
var car4 = new Car('Eagle', 'Talon TSi', 1993, "rand");
console.log(car4);
var car5 = new Car('Nissan', '300ZX', 1992, "ken"); 
console.log(car5);


