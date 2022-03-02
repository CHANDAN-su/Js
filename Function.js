console.log("Function");

/*
//*****************Syntax*****************************
function name([param[, param,[..., param]]]) { 

    [statements]
}
*/


/************************************************Function is first class citizens******************************************/
// A programming language is said to have First-class function when function in that
// language are treated like any other variable

// 1.In javscript we can assign a function to a variable

const thanku = function () {
    console.log("Thanks you so much for your love and support:)")
}
// thanku();  //Thanks you so much for your love and support:)

const thanku1 = () => console.log("Thanks you so much for your love and support:)");
// thanku1();

const youtube = {
    name: "Chandan Thakur",
    qualif: function () {  //qualif is method
        console.log("I did BCA and MCA ");
    }
};
// youtube.qualif();  //I did BCA and MCA 
// youtube.name();   //Uncaught TypeError

const youtube1 = {
    name: "Chandan Thakur",
    qualif: () => console.log("I did BCA and MCA ")
};
// youtube1.qualif();  //I did BCA and MCA 
//  youtube1.name();  



//2. Pass a function as an Argumemtt

const myname = function () {
    return "Hello";
}

const getting = function (Saynmae, name) {
    console.log(Saynmae(), name);
}

// getting(myname,"Chandan Thakur");  //Hello Chandan Thakur
/* This explains how we are treating the function as a value The function tahat we
pass as an argurent to another function, is called a Callback function. myname is a Callback function.*/


// 3.Returning Function

function a() {
    return function b() {
        return console.log("Thanks you so much for your love and support:)");
    }
};
a(); //not run

//First method
// a()();   //Thanks you so much for your love and support:)
// Second method 
const s = a();
// s();   //Thanks you so much for your love and support:)




/*********************************************Callback Function**************************************/
//Any function that is passed as an argument is called a callback function
// A callback is a function that is to be executed after another function has finised 
// executing - hence the name 'call back

/*
const FunA = function (){
    console.log("FunaA");
}

const FUnB = function (){
    console.log("FunB");
}

FunA();  //FunA
FUnB();  //FunB
*/

const FunA = function () {
    setTimeout(function () {
        console.log("FunaA");
        FUnB();
    }, 3000);
};

const FUnB = function () {
    console.log("FunB");
}

// FunA();
//Agar funA me fun b nhi dalte h to to pahle funB chatah h out baad me funA
//our agar funA me funB dalne par 3 sec baad pahle funA our baad me funB chalega

const preOne = function (friend, callfrn) {
    console.log(`I am busy right Now. I am talking to ${friend}.
     I will call you back.`);
    callfrn();
}

const preTwo = function () {
    console.log(`hey what's up. I call back you dekha`);
}

// preOne("Chandan",preTwo); //I am busy right Now. I am talking to Chandan.
// I will call you back.
// hey what's up. I call back you dekha



/****************************************************Higher Order Function********************************************************/
const interviewQuestion = function (name) {
    if (name === "Chandan") {
        return function (topic) {
            console.log(`Hi ${name}. Whats is ${topic}? Please explian us`)
        }
    } if (name === "Ravi") {
        return function (topic) {
            console.log(`Hi ${name}. Whats is ${topic}? Please explian us`)
        }
    } if (name === "Kavi") {
        return function (topic) {
            console.log(`Hi ${name}. Whats is ${topic}? Please explian us`)
        }
    } else {
        return function () {
            console.log("Welcome to Interview");
        }
    }

};

// interviewQuestion("Chandan")("Math"); // Hi Chandan. Whats is Math? Please explian us
// interviewQuestion("Kavi")("BA"); //Hi Kavi. Whats is BA? Please explian us
// interviewQuestion("Ravi")("B.Com");  //Hi Ravi. Whats is B.Com? Please explian us
// interviewQuestion("Deepak")("CA");  //Welcome to Interview

const cand1 = interviewQuestion("Chandan");
// cand1("UI");  //Hi Chandan. Whats is UI? Please explian us
// cand1("UX");  //Hi Chandan. Whats is UX? Please explian us
// cand1("Javscript");  //Hi Chandan. Whats is Javscript? Please explian us
// cand1("Python");  //Hi Chandan. Whats is Python? Please explian us


/*****************copy paste method*******************/
const radius = [2, 4, 6, 8, 9];

const Calculatorarea = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
};
// console.log(Calculatorarea(radius));

const Calculatorcirclefrence = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
};
// console.log(Calculatorcirclefrence(radius));

const Calculatordaimeter = function (radius) {
    const output = [];
    for (let i = 0; i < radius.length; i++) {
        output.push(2 * radius[i]);
    }
    return output;
};
// console.log(Calculatordaimeter(radius));


/**********************logical method********************/
const radius1 = [2, 4, 6, 8, 9];

const calculator = function (radius1, logic) {
    const output = [];
    for (let i = 0; i < radius1.length; i++) {
        output.push(logic(radius1[i]));
    }
    return output;
}

const area = function (radius1) {
    return Math.PI * radius1 * radius1;
};
// console.log(calculator(radius1,area));

const Circlefrence = function (radius1) {
    return 2 * Math.PI * radius1;
};
// console.log(calculator(radius1,Circlefrence));


const Daimeter = function (radius1) {
    return 2 * radius1;
}
// console.log(calculator(radius1,Daimeter));


/************************************Immediately Invoked Function Expression (IIFE)***************************/

// (function name(){
// return console.log("Run code!");
// })();

/***************And*************/
// !function name(){
// return console.log("Run Code!");
// }();


//********************function declaration*****************************

//*************Example - square :*********************
function square(num) {
    return num * num;
}
let x1 = square(6);
// console.log(x1); //36

const myobj = { make: "Honada", modal: "Accord", year: 1998 };
var x, y;
x = myobj.make;
// console.log(x);  //Honada


function myfun(myobj) {
    return myobj.make = "Toyoka";
}
myfun(myobj);
y = myobj.make;
// console.log(y); //Toyoka




function rect(weight, hegith) {
    return weight * hegith;
}
// console.log(rect(9,12));  //108



const z = 3;
if (z >= 6) {
    function dd() {
        return console.log("1");  //not run (condition false)
    }
    dd();
} else {
    // console.log("Error");  //Error (conditon true)
}



// ********************function declaration hositiong************************

// add(4);  //4

function add(num) {
    return console.log(num);
}


// hoste();  //Uncaught ReferenceError: Cannot access 'hoste' before initialization
let hoste = function () {
    console.log("Not hosie")
}

//****************Example***************************
//a , b ,c total sale

function totalsale(unit_a, unit_b, unit_c) {
    return unit_a * 25 + unit_b * 56 + unit_c * 90;

}
// console.log(totalsale(2,4,5));  //724


/*************************Function expressions************************************/

function fact(n) {
    if (n < 2) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
// console.log(fact(6));  //720


function fact1(m) {
    return m < 2 ? 1 : m * fact1(m - 1);
}
// console.log(fact1(6));  //720



/********************************the array received as a second argument:*****************************/
function map(f, a) {
    let result = []; // Create a new Array 
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
const f = function (x) {
    return x * x * x;
}
let numbers = [0, 1, 2, 5, 10];
let cube = map(f, numbers);
// console.log(cube);


/*********************Anonymous***************************/
// not function name 
// document.addEventListener('click' , function (){
// alert("Thanks you so much for 1 lakh subc : )");
// })

let sum = function (a, b) {
    let add = a + b;
    console.log(add); //11
}
// sum(5,6);


/***************Sample Example****************/
function factory(n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return n * factory(n - 1);
    }
};

var a, b, c, d, e;
a = factory(0);
// console.log(a);

b = factory(1);
// console.log(b);

c = factory(2);
// console.log(c);

d = factory(3);
// console.log(d);

e = factory(4);
// console.log(e);


/**********************Function Scope****************************************/

//global varible
var num = 20,
    num1 = 3,
    name = "Chandan";


// This function is defined in the global scope 
function mutiply() {
    return num * num1;
};
// console.log(mutiply());

// A nested function example 
function getscore() {
    var x = 30;
    var y = 20;
    function add() {
        return name + " Score " + (x * y);
    }
    return add();
};

// console.log(getscore());


/****************************************************return******************************************************************/

function getrectarea(weight1, hegith1) {
    if (weight1 > 2 && hegith1 > 0) {
        return weight1 * hegith1;
    }
    return 0;
}

// console.log(getrectarea(4,6));  //24
// console.log(getrectarea(-2,7)); //0

// return [expression];


/*
function square(x){
     x*x;
}
console.log(square(4));  //Undefined
*/

function square(x) {
    return (x * x);
}
// console.log(square(6));
var demo = square(5);
// console.log(demo);

function counter() {
    for (let i = 0; ; i++) {
        // console.log(i,"A");  //5
        if (i === 5) {
            return;
        }
        console.log(i, "B");  //4
    }
    console.log(i, "c") // never appears
};

// counter();

function magic() {
    return function calc(x) {
        return x * 42;
    }
};
let answer = magic();
// console.log(answer(1337));



/**********************************************************Recursion**************************************************/
// loop and recursion same but some differents


function inception() {
    inception();
}
// inception();  //Uncaught RangeError: Maximum call stack size exceeded


let couner1 = 0;
for (let i = 0; i < 9; i++) {
    // console.log(i); //0,1,2,3,4,5,6,7,8
}


let counter2 = 0;
function inception1() {
    if (counter2 > 9) {
        return "Done";
    }
    counter2++;
    console.log(counter2);
    return inception1();
}
// inception1();   //1,2,3,4,5,6,7,8,9,10


const iterativeFactorial = function (number) {
    let ans = 1;
    for (let i = number; i > 0; i--) {
        ans = ans * i;
    }
    console.log(ans);
}
// iterativeFactorial(5);  //5*4*3*2*1 = 120


const recursivFactorial = function (number) {
    if (number == 2) {
        return 2;
    }
    return number * recursivFactorial(number - 1);
}
let abcd = recursivFactorial(5);
//  console.log(abcd);  ////5*4*3*2*1 =  120


const iterativeFibonacci = function (number) {
    let arr = [0, 1];
    let sum = 0;
    for (let i = 0; i < number; i++) {
        sum = arr[i] + arr[i + 1];
        arr.push(sum);
    }
    //  console.log(arr);
}

//  iterativeFibonacci(6); 

const recursiveFibonacci = function (number) {
    if (number < 2) {
        return 1;
    }
    return iterativeFibonacci(number - 1) + iterativeFibonacci(number - 2);
}

let abcde = recursiveFibonacci(6);
//  console.log(abcd);




function foo(i) {
    if (i < 0)
        return;
    console.log('begin: ' + i);

    foo(i - 1);
    console.log('end: ' + i);
}
// foo(3); 
/* output 
 begin: 3
 begin: 2
 begin: 1
 begin: 0
 end: 0
 end: 1
 end: 2
 end: 3
*/


/**********************************Nested functions and closures**********************/
//add two square


function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);

}

let chan = addSquares(2, 3);
// console.log(chan);

let chan1 = addSquares(4, 5);
// console.log(chan1);

let chan2 = addSquares(6, 7);
// console.log(chan2);


function outer(x) {
    function inside(y) {
        return x + y;
    };
    return inside;
};
let chan6 = outer(10)(5);
// console.log(chan6);


var x = "Hello Friends ";

function ch() {
    var y = "My nmame is chandan thakur";
    function name1() {
        var z = " Follow now";
        console.log(x + y + z);
    }
    return name1();
}

// ch();

/************************Name conflicts**********************/
function outside1() {
    // var x = 5;
    function inside1(x) {
        return x * 2;
    }
    return inside1;
}


/******************************************************Closure************************************************************/
//Closure in action that is inner function can have access to the outer function varianle as well the global variable

const outerfun = function (a) {
    let b = 10;
    const innerfun = function () {
        let sum = a + b;
        console.log(`The sum of two no. is ${sum}`);
    }
    innerfun();
};
// outerfun(95);  //The sum of two no. is 15


const outerfun1 = function (a) {
    let b = 10;
    const innerfun = function () {
        let sum = a + b;
        console.log(`The sum of two no. is ${sum}`);
    }
    return innerfun;
};
const inner = outerfun1(25);
// console.dir(inner);

// inner();

// Exercise
function abc(name) {
    return function (topic) {
        if (name === "Chandan") {
            console.log(`Hi ${name}. Explain it ${topic}`);
        } else if (name === "Ravi") {
            console.log(`Hi ${name}. Explain it ${topic}`);
        } else if (name === "Kavi") {
            console.log(`Hi ${name}. Explain it ${topic}`)
        } else {
            console.log("Welcome IT Company");
        }
    }
};

// abc("Chandan")("UI");
// abc("Rosan")("Web");


var pet = function (name) {
    var getname = function () {
        return name;
    }
    return getname();

}
var x = pet("Ravi");
// console.log(x);  //Ravi


/***************************************************Function parameters*****************************************/

/******************************************************Default parameters****************************************/
function multiply1(a, b) {
    return a * b;
}
// console.log(multiply1(4));  //NaN

// function fnName(param1 = defaultValue1, ..., paramN = defaultValueN) 
// Demo 
function multiply(a, b = 2) {  //ES2015 Abow
    return a * b;
}
// console.log(multiply(3,5));  //15
// console.log(multiply(5))  //5


function multiply2(a, b) {  //ES2015 aane se pahle
    b = (typeof b !== "undefined") ? b : 1;
    return a * b;
}

// console.log(multiply2(3,5));
// console.log(multiply2(3));


function test(num = 1) {
    console.log(typeof num);
}


// console.log(test());  //number
// console.log(test(undefined); //number
// console.log(test(""));    //String
// console.log(test(null));   //Object



// Evaluated at call time
function append(value, arr = []) {
    arr.push(value);
    return arr;
}

// console.log(append(1));  //1
// console.log(append(2));  //2


// This even applies to functions and variables:
function callsomething(thing = something()) {
    return thing;
}
// console.log(callsomething());  //something is not defined

let numbercallTime = 0;
function something() {
    numbercallTime += 1;
    return numbercallTime;
};

// console.log(callsomething());  //1
// console.log(callsomething());  //2
// console.log(callsomething());  //3
// console.log(callsomething());   //4


// Earlier parameters are available to later default parameters
function geet(name, gretting, message = gretting + " " + name) {
    return [name, gretting, message];
};

// console.log(geet("Chandan", "Hi"));
// console.log(geet("Chandan","Hi","Happy Birthday"));


function f1(x = 1, y) {
    return [x, y];
};

// console.log(f1());  //[1,undefined]
// console.log(f1(2));   //[2,undefined]


/***********************************************Rest parameters*************************************/

function sum1(...args) {
    return args.reduce((previous, current) => {
        return previous + current;
    })
};
// console.log(sum1(1,2,3));  //6

/*
function f(a, b, ...theArgs) {
    // ...
    }
*/

function myfun1(a, b, ...manymoreargs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manymoreargs", manymoreargs);
}

// console.log(myfun1("one","two","three","four","five","six","seven"));  //['one', 'two', 'three', 'four', 'five', 'six', 'seven']
// console.log(myfun1("one","two","three"));  //['one', 'two', 'three']
// console.log(myfun1("one","two"));   //['one', 'two']


function myfun1(...manymoreargs) {
    console.log("manymoreargs", manymoreargs);
}
// console.log(myfun1("one","two","three","four","five","six","seven"));   // ['one', 'two', 'three', 'four', 'five', 'six', 'seven']


// Argument length
function length(...manymoreargs) {
    console.log(manymoreargs.length);
};

// console.log(length("one","two","three","four","five","six","seven"));  //7
// console.log(length("one","two","three","four","five","six"));  //6
// console.log(length("one","two","three","four","five"));  //5
// console.log(length("one","two","three","four"));  //4
// console.log(length("one","two","three"));  //3
// console.log(length("one","two"));   //2
// console.log(length("one"));   //1


/********************************************Using the arguments object******************************************/
// arguments[i]
function func(a, b, c, d) {
    console.log(arguments[0]);  //1

    arguments[1] = "New value";   //Each argument can also be set or reassigned:
    console.log(arguments[1]);  //2

    console.log(arguments[2]);  //3

    arguments[3] = "New value 1"  ////Each argument can also be set or reassigned:
    console.log(arguments[3]);  //4
};
// func(1,2,3,4);


// arguments[0] // first argument
//  arguments[1] // second argument
//   arguments[2] // third argument


/*
let args = Array.from(arguments);
// or
let args = [...arguments];  //same works
*/


/***************************************************************Arrow function*********************************************/
// One param. With simple expression return is not needed:
// param => expression
// Multiple params require parentheses. With simple expression return is not needed:
// (param1, paramN) => expression
// Multiline statements require body braces and return:
// param => {
//  let a = 1;
// return a + param;
// }
// Multiple params require parentheses. Multiline statements require body braces and return:
// (param1, paramN) => { let a = 1;
// return a + param1 + paramN;
// }

// Arrow functions cannot be used as constructors and will throw an error when used with
// new .
// Arrow functions do not have a prototype property. 



var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

// console.log(materials.map(material => material.length));  //[8, 6, 7, 9]


// Traditional Anonymous Function
var arro = function (a) {
    return a + 100;
};
// console.log(arro(5));  //105

// Arrow Function Break Down
// Remove function
var arro1 = (a) => {
    return a + 100;
};
// console.log(arro1(5));  //105

//Remove return and braces
var arro2 = (a) => a + 100;
// console.log(arro2(5));  //105

//Remove parentheses
var arro3 = a => a + 100;
// console.log(arro3(5));  //105

// Traditional Anonymous Function 
var arro4 = function (a, b) {
    return a + b + 100;
};
// console.log(arro4(5,6));  //111

//Arrow Function 
var arro5 = (a, b) => a + b + 100;
// console.log(arro5(5,6)); //111

// Traditional Anonymous Function 
let ar = 5;
let ar1 = 6;

var arro6 = function () {
    return ar + ar1 + 100;
};
// console.log(arro6()); //111

//Arrow Function
let ar2 = 5;
let ar4 = 6;
var arro7 = () => ar2 + ar4 + 100;
// console.log(arro7());  //111


// the body requires additional lines of processing
// Traditional Anonymous Function 
var arro8 = function (a, b) {
    let chuck = 50;
    return a + b + chuck;
};
// console.log(arro8(5,6));   //53

// Arrow Function 
var arro9 = (a, b) => {
    let chuck1 = 50;
    return a + b + chuck1;
};
// console.log(arro9(5,6));  //61

// named functions 
function bob(a) {
    return a + 100;
};
// console.log(bob(6));  //106

let bob1 = a => a + 100;
// console.log(bob1(6));  //106

// call, apply and bind
// Traditional Example
var Obj2 = {
    num4: 89
};
window.num4 = 2020;

function Add(a, b, c) {
    return this.num4 + a + b + c;
};

// console.log(Add.call(Obj2, 2, 3, 4));   //98

// console.log(Add.apply(Obj2, [2, 3, 4]));   //98

var bin = Add.bind(Obj2);
// console.log(bin(2, 3, 4));   //98

// Arrow Example
var Obj3 = {
    num5: 89
};
window.num5 = 2020;

const add1 = (a, b, c) => this.num5 + a + b + c;

// console.log(add1.call(Obj3, 2, 3, 4));  //2029 

// console.log(add1.apply(Obj3, [2, 3, 4]));   ///2029

var bin = add1.bind(Obj3);
// console.log(bin(2, 3, 4)); //2029


// Arrow functions is with DOM-level methods (setTimeout, setInterval, addEventListener)
// that usually required some kind of closure, call, apply or bind to ensure the function executed in the proper scope.

// Traditional Example:
var obj4 = {
    count: 10,
    dosometinglate: function () {
        setTimeout(function () {
            this.count++
            console.log(this.count);
        }, 3000);
    }
};
// obj4.dosometinglate();  //console prints "NaN", because the property "co


// Arrow Example
var obj5 = {
    count: 10,
    dosometinglate: function () {
        setTimeout(() => {
            this.count++
            console.log(this.count);
        }, 3000);
    }
};
// obj5.dosometinglate();  //11

var obj6 = {
    count: 10,
    dosometinglate: () => {
        setTimeout(() => {
            this.count++
            console.log(this.count);
        }, 3000);
    }
};
// obj6.dosometinglate();  //NaN

// No binding of arguments
var arguments1 = [2, 3, 4, 5];
var arr1 = () => arguments1[0];
// console.log(arr1());  //2

function foo1(n) {
    var f2 = () => arguments1[1] + n;
    return f2();
};
// console.log(foo1(5));  //8


// params => {object:literal} will not work as expected.
var func = () => { foo: 1 };
// Calling func() returns undefined!

// var func = () => { foo: function() {} };
// SyntaxError: function statement requires a name

// Line breaks
// var func1 = (a,b,c)
// => 1;
// func1();  //SyntaxError: Unexpected token '=>'

var func2 = (a, b, c) =>
    1;
// console.log(func2());  //1

var func3 = (a, b, c) => (
    1
);
// console.log(func3());  //1

var func4 = (a, b, c) => {
    return 1;
};
//  console.log(func4());  //1

var func5 = (
    a,
    b,
    c
) => 1;
// console.log(func5);  //// no SyntaxError thrown

// Basic usage
// An empty arrow function returns undefined 
let empty = () => { };
// console.log(empty());  //undefined

// (this is an Immediately Invoked Function Expression)
// (() => console.log("this"))();  //This


/********************************************************CALL METHOD*******************************************/
/*
Syntax
call()
call(thisArg)
call(thisArg, arg1)
call(thisArg, arg1, arg2)
call(thisArg, arg1, ... , argN)
*/

const youtube2 = {
    Name: "Chandan Thakur",
    Content: "Math Formula",
    feature: function (rating) {
        console.log(`Very friendly way of teaching. ${this.Name} 
        is my fav ${this.Content} channel . I will love to give ${rating} star. `)
    }
};
// console.log(youtube2.feature());  //Very friendly way of teaching. Chandan Thakur is my fav Math Formula channel .


const youtube3 = {
    Name: "Ravi",
    Content: "Gaming"
};

// youtube2.feature.call(youtube3);  //Very friendly way of teaching. Ravi is my fav Gaming channel . 
// youtube2.feature.call(youtube3,5);  //Very friendly way of teaching. Ravi is my fav Gaming channel . I will love to give 5 star. 

/*
let ght = youtube2.feature.call(youtube3,5);  
console.log(ght); //undefined
*/

function Product(name, price) {
    this.name = name;
    this.price = price;
};

// console.log(new Food("Apple","50.00")); //Food {name: 'Apple', price: '50.00'}

function Food(name, price) {
    Product.call(this, name, price);
};
// console.log(new Food("Apple","50.00").name);  //Apple
// console.log(new Food("Apple","50.00").price);  //50.00


function toy(name, price) {
    Product.call(this, name, price);
};
// console.log(new toy("Banana","$15"));  //toy {name: 'Banana', price: '$15'}
// console.log(new toy("Apple","50.00").name);  //Apple
// console.log(new toy("Apple","50.00").price);  //50.00


// Using call to invoke a function and specifying the context for ' this '
function greet() {
    const relpy = [this.animal, 'typically sleep between', this.sleepDuration];
    console.log(relpy);
};

const Obj = {
    animal: "Lion",
    sleepDuration: "12 and 16 hours"
};

const Obj1 = {
    animal: "Monky",
    sleepDuration: "8 and 10 hours"
};

// greet.call(Obj);  //['Lion', 'typically sleep between', '12 and 16 hours']
// greet.call(Obj1); //['Monky', 'typically sleep between', '8 and 10 hours']


// Using call to invoke a function and without specifying the first argument
var sData = "Wisen";
function display() {
    console.log('sData value is %s ', this.sData)
};
// display.call();  //sData value is Wisen 

// Note: In strict mode, the value of this will be undefined 

var sData1 = "Wisen";
function display1() {
    'use strict';
    console.log('sData value is %s ', this.sData1)
};
// display1.call();   //Cannot read properties of undefined 


/*******************************************APPLY METHOD******************************************/
// Syntax
// apply(thisArg) 
//apply(thisArg, argsArray)

// The apply() method is similar to the call() method
/*
  the call() method takes aruments separately
  The appy() method takes arguments as an array
*/

const youtube4 = {
    Name: "Chandan Thakur",
    Content: "Math Formula",
    feature: function (rating) {
        console.log(`Very friendly way of teaching. ${this.Name} is my fav ${this.Content} channel . I will love to give ${rating} star. `)
    }
};

const youtube5 = {
    Name: "Ravi",
    Content: "Gaming"
};

// youtube4.feature.apply(youtube5,[5,"Subscribe"]);  //Very friendly way of teaching. Ravi is my fav Gaming channel . I will love to give 5 star. 

let max = Math.max(3, 5, 6, 7, 9, 0, 1, 2);
// console.log(max);  //9

let max1 = Math.max([3, 5, 6, 7, 9, 0, 1, 2]);
// console.log(max1);  //NaN


let max2 = Math.max.apply(null, [4, 6, 12, 45, 65, 3, 6, 8, 9,]);
// console.log(max2);  //65


const max3 = [12, 3, 56, 7, 9, 6, 7, 355, 88];
const max4 = Math.max.apply(null, max3);
// console.log(max4);  //355

const max5 = [12, 3, 56, 7, 9, 6, 7, 355, 88];
const max6 = Math.min.apply(null, max5);
// console.log(max6);  //3


/*****************************************************************BIND METHOD*****************************************/

// By this method, we can bind an object to a common function, so that the function gives different result when its need
/*
Syntax
bind(thisArg) 
bind(thisArg, arg1)
 bind(thisArg, arg1, arg2)
bind(thisArg, arg1, ... , argN)
*/

const youtube8 = {
    Name: "Chandan Thakur",
    Content: "Math Formula",
    feature: function (rating) {
        console.log(`Very friendly way of teaching. ${this.Name} is my fav ${this.Content} channel . I will love to give ${rating} star. `)
    }
};

// youtube8.feature(); 
let youtuberFun = youtube8.feature;
// youtuberFun(); //Very friendly way of teaching. undefined is my fav undefined channel . I will love to give undefined star.
// error se bachle ke liye

let youtuberFun1 = youtube8.feature.bind(youtube8);
// youtuberFun1();  //Very friendly way of teaching. Chandan Thakur is my fav Math Formula channel . I will love to give undefined star. 






function feature1() {
    console.log(` My fav youtuber name is ${this.name1}. He made video on ${this.Content} topics`)
}
// feature1();  // My fav youtuber name is undefined. He made video on undefined topics

var Data = {
    name1: "Chandan Thalur",
    Content: "Video"
};
var you = feature1.bind(Data);
// you(); //My fav youtuber name is Chandan Thalur. He made video on Video topics

var Data1 = {
    name1: "Ravi gupta",
    Content: "Gamning"
};
var you1 = feature1.bind(Data1);
// you1();  // My fav youtuber name is Ravi gupta. He made video on Gamning topics

var Data2 = {
    name1: "Kavi gupta",
    Content: "Photoshope"
};
var you2 = feature1.bind(Data2);
// you2();  // My fav youtuber name is Kavi gupta. He made video on Photoshope topics



function feature2(rating) {
    console.log(` My fav youtuber name is ${this.name2}. He made video on ${this.Content2} topics. I will love to give ${rating} star`);
};
var Data3 = {
    name2: "Chandan Thalur",
    Content2: "Video"
};

var you3 = feature2.bind(Data3);
// you3(5);  // My fav youtuber name is Chandan Thalur. He made video on Video topics. I will love to give 5 star

// Creating a bound function
// Creating a bound function from the function, using the original object, neatly solves this problem
this.x2 = 9;
const module = {
    x2: 81,
    getx: function () {
        return this.x2;
    }
};
// console.log(module.getx());  //81

const retrieveX = module.getx;
// console.log(retrieveX());  //9
// returns 9; the function gets invoked at the global scope
// Create a new function with 'this' bound to module
// New programmers might confuse the
// global variable 'x' with module's property 'x'

// const boundX = retrieveX.bind(module);
// console.log(boundX);  //81

// Partially applied functions
function list() {
    return Array.prototype.slice.call(arguments);
};

function Addarguments(arg1, arg2) {
    return arg1 + arg2;
};

const list1 = list(1, 2, 3);
// console.log(list1);  //[1, 2, 3]  new array made

const result1 = Addarguments(1, 2, 7);
// console.log(result1);  //3  sum of array

// Create a function with a preset leading argument
// const leadingThirtysevenList = list.bind(null,37);
// console.log(leadingThirtysevenList);

// Create a function with a preset first argument.
// const AddThirtysevenList = Addarguments.bind(null,37);
// console.log(AddThirtysevenList);

// const list2 = leadingThirtysevenList();
// console.log(list2); //[37]

// const list3 = leadingThirtysevenList(1,2,3);
// console.log(list3); //[37, 1, 2, 3]

// const result2 = AddThirtysevenList(5);
// console.log(result2); //37 + 5 = 42

// const result3 = AddThirtysevenList(5,10);
// console.log(result3); //37 + 5 = 42



/***************************************************Getter*******************************************************/
// Syntax
// {get prop() { /* ... */ } }
// {get [expression]() { /* ... */ } }

var getter = {
    Name: "chandan thakur",
    upper: function (){
       return this.Name; 
    //    return this.Name.toUpperCase(); 
    }

};

// console.log(getter.upper().toUpperCase()); //CHANDAN THAKUR
// console.log(getter.upper())  //CHANDAN THAKUR (return this.Name.toUpperCase(); )

var getter1 = {
    Name: "chandan thakur",

     get upper(){
       return this.Name.toUpperCase();  
    }
};
// console.log(getter1.upper)  //CHANDAN THAKUR

var obj7 = {
    log: ["a","b","c"],

    get laste(){
        if(this.log.length === 0){
            return undefined;
        }else{
            return this.log[this.log.length-1]
        }
    }
};

// console.log(obj7.laste);  //c
/*
It must not appear in an object literal with another get e.g. the following is forbidden
{
get x() { }, get x() { }
}
It must not appear with a data entry for the same property e.g. the following is forbidden
{
x: ..., get x() { }
}
*/

var obj8 = {
    log: ["Chandan","test"],

    get lastest(){
        if(this.log.length === 0){
            return undefined;
        }else{
            return this.log[this.log.length-1];
        }
    }
};

// console.log(obj8.lastest)  //test


/************************************************************Setter******************************************************************/
/*
Syntax

{set prop(val) { . . . }}
{set [expression](val) { . . . }}
*/


// It must not appear in an object literal with another set or with a data entry for the same property. ( { set x(v) { }, set x(v) { } } and
// { x: ..., set x(v) { } } are forbidden )


//tendition method
var persone = {
    name: "chandan thakur",
    get last(){
        return this.name.toUpperCase();
    }
};
console.log(persone.last);  //CHANDAN THAKUR

// new name assign karan h to yese karete the
persone.name = "Ravi Gupta";
console.log(persone.last);  //RAVI GUPTA

//setter method
var person = {
    name: "tilak thakur",
    age: 25,

    set setname(n){
        return this.name = n.toLowerCase();
    }
};


person.setname = "raju kumar";
console.log(person);  //{name: 'raju kumar', age: 25}


const language = {
    set current(name){
        this.log.push(name);
    },

    log: []
};

language.current = "EN";
console.log(language.log);  //['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
console.log(language);  //{log: Array(2)}

var expr = 'foo';

var obj9 = {
    baz: "bar",
    set [expr](v){
        this.baz = v;
    }
};

console.log(obj9.baz);  //bar

obj9.foo = "baz";
console.log(obj9.baz);  //baz

/*******************************************************Method and Properties*************************************/

/*************************************Function.length******************/
function funct() {};
console.log(funct.length);  //0

function funct1(a,b,c) {};
console.log(funct1.length);  //3


console.log((function (...rest1){}).length);  //// 0, rest parameter is not counted

console.log((function(a, b = 1, c) {}).length);
// 1, only parameters before the first one with
// a default value is counted


/***********************************Function.name**************************/
const funct2 = function () {};
console.log(funct2.name);  //funct2

const test1 ={
    funct3: function (){}
};
console.log(test1.funct3.name);  //funct3

console.log((new Function).name); // "anonymous"

(function() {}).name; // ""
(() => {}).name; // ""


/****************Function.prototype.toString()****************/
function sum2(a,b){
    return a+b;
};
// console.log(sum2,toString());  //ƒ sum2(a,b){  //return a+b; // } 



/****************************************Predefine****************************************************/                        
/*
Syntax
decodeURI(encodedURI)
*/

// decodeURI()
// The decodeURI() function decodes a Uniform Resource Identifier (URI) previously created by encodeURI() or by a similar routine.

const uri = "https://mozilla.org/?x=шеллы";
const encode = encodeURI(uri);
console.log(encode);

try{
    console.log(decodeURI(encode)); //// expected output: "https://mozilla.org/?x=шеллы"
}catch (e){
    console.error(e);
};


//encodeURI()
const uri1 = 'https://mozilla.org/?x=шеллы';
const encoded1 = encodeURI(uri);
console.log(encoded1);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8

try {
console.log(decodeURI(encoded1));
// expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
    console.error(e);
}

/************************************************eval()********************************/
// The eval() function evaluates JavaScript code represented as a string.
/*
Syntax
eval(string)
*/
console.log(eval("2 + 2"));  //4

console.log(eval(new String("2 + 2"))); //String {'2 + 2'}

console.log(eval("2+2")=== eval("4"));  //true

console.log(eval("2+2") === eval(new String("2+2")));  //false

function test3(){
    var x90 = 10 
   var y90 = 15;
};
console.log(eval("x90+y90"));

