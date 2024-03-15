// console.log("javascrit Leran");


/******************************Variable in js******************************************/
//  var , let , const

 var name1 = `ch"an'dan`;
//  agar aapko " ya ' string me rkhana ho to ` iska use karete h
//    console.log(name1)
  

var name = "chandan";
var channle;
channle = "CodewithHarry";
var marks = 567;
// console.log(name, channle, marks)

/*
   Rules for creating Javascrit varible
      1.Cannot start with numbers
      2.Can starts with letters, number, _ , $
      3.varible case senstive

  */    

var city = "Jaipur";
var city = "bihar";
// console.log(city);


const ownername = "Hari ram";
// ownername = "Chandan"; (Cannot do this [error])
const fruit = "Orange";
// console.log(ownername, fruit);


{
    let city = "Pampur";
    // city = "Kolkata";
    // console.log(city);
}
// console.log(city);

const arr1 = [23,45,64,24,3];
// arr1 = [34,23,56,12]
arr1.unshift(45);
// console.log(arr1);


/*
*************************Most cammon programming case types ***************************************

1.cAMELCASE 
2.Kabab-case 
3.Snaak_case 
4.Pascalcase

*/


// variable chect undefine 
var input ;
// input = "Chandan";

if(input === undefined ){
        // console.log("error");
}else{
    // console.log(input);
}



/****************************************var variable  (golbal and local variable)******************************/
var x = "Hello World";
// console.log(x);



/***************************************var**********************************/
var x = 8;  

function foo() {
    var y = 5;   
   
    function bar() {
        var z = 6;
        var x = 7;
   
        function test() {
            var a = 9;
            // console.log(a);  // output = 9 a is scope
            // console.log(x);   // output = 5  
            // console.log(y);  // output = 5  is scope
            // console.log(z); // output = 6 is scope
        }
        test();
        // console.log(a);   // output = Uncaught ReferenceError  
        // console.log(x);  // output = 5  
        // console.log(y);  // output = 5 a is scope
        // console.log(z);  // output = 6 is scope
    }
    bar();
    // console.log(a);   // output = Uncaught ReferenceError 
    // console.log(x);  // output = 5    
    // console.log(y);    // output = 5 a is scope
    // console.log(z);  // Uncaught ReferenceErro
}
foo();
// console.log(a);  // output =   Uncaught ReferenceError
// console.log(x);   // output = 5   
// console.log(y); // output = Uncaught ReferenceError
// console.log(z); // Uncaught ReferenceErro 
// console.log(b);  // Output  Cannot access 'b' before initialization


// let b = 8;
// console.log(b);  // Output 8

// let d = globalThis.hasOwnProperty('x'); 
// console.log(d);


/*******************************************global variable***********************************************/
var x = 6;
var y6 = 9;
function test(){
    // local variable
    var y6 = 7;   
    // console.log(x); //6
    // console.log(y6); //7
}
test();


/*********************************************variable hoisting*******************************/
var x1;
// console.log(x1);  //undefined
x1 = 9;

var y1 = 15;
// console.log(y1) //15


// js code run 
var x = "undefine";
// console.log(x); //undefined
var y1 = 15;
// console.log(y1);  //15


/*****************************************Function hositing*************************************/
function add(){
    // console.log(a); 
    var a = 111;
    // console.log(a);
}add();

function sub(){
    var b;
    // console.log(b); 
    b = 122;
    // console.log(b); 
}sub();


/****************************************Declaring and initializing two variables**************************/
var x = 9 , y = 7;
// console.log(x);
// console.log(y);

var a, b = a = "Same value";
// console.log(a);
// console.log(b);

var  c = d , d = "the";
// console.log(c+d);
// console.log(c);
// console.log(d);

var  e = f , f = 65;
// console.log(e+f);
// console.log(e);
// console.log(f);


/*******************************************************In non-strict mode:***********************************/
var x = 8;
function f(){
    var x = y = 7;
}
// f();
// console.log(x,y);
// console.log(y);
// console.log(x);


'use strict';
var a = 1;
function g(){
    var a = b = 2;
}
// g();
// console.log(a,b);
// console.log(a);
// console.log(b);


/************************************************Implicit globals and outer function scope***********************/
var x = 0;
// console.log(typeof z);  // Output - undefined


function a(){
    var y = 3;
    // console.log(x,y);  // Output - 0 3
    function b(){
        x = 1;
        y = 2;
        z = 3;
    }
    b();
    // console.log(x,y,z); // Output 1 2 3
}
a();
console.log(x,z);  // Output - 1 3
console.log(typeof y);  // Output - undefined



/**********************************************let block scoped****************************************/

/*******************************************block-scoped local variable**********************/
let x = 7;
if(x===7){
    let x = 8;
    // console.log(x); //Output  8
}
// console.log(x);  //Output 7


/************************************************Scoping rules*******************************************/
function vartest(){
    var x = 7;
    {
        var x = 8;
        // same variable  
        // console.log(x);    //output 8
    }
    // console.log(x); //outpiut 8
}
// vartest();

function lettest(){
    let y = 8;
    {
        let y = 6;
        // different variable
        // console.log(y);  //output 6 
    }
    // console.log(y);  output 8
}
// lettest();


var x = "global";
let y = "global";
// console.log(this.x);  //output global
// console.log(this.y);    //undfine


/*************************************************Redeclarationsx*******************************/
let x = "Chandan";
let x = "Ravi";  
// console.log(x);   //SyntaxError:

// let x = 1;
// switch (x) {
//     case 0:
//         let foo = "Chandan";
//         // console.log(foo);
//         break;
//     case 1:
//         let foo ="Ravi"; 
//         // console.log(foo);  // SyntaxError:
// }

var x = 6;
var y = 5;
if (x === 6) {
    var x = 7;
    let y = 9;
    // console.log(x); //output 7
    // console.log(y); //output 9
}
// console.log(x);  //output 7
// console.log(y); //output 5


let a = 8;
{
    var a = 5;
}
// console.log(a);  //SyntaxError


/***************************************const variable (block-scope)***************************************/
const x = "Chandan";
// console.log(x);  //Output Chandan
x = "Ravi";
// console.log(x);   //Output TypeError

// const MY_FAV = 7;
MY_FAV = 8;
// console.log(MY_FAV);   //Output TypeError
//console.log(MY_FAV); //Output 7


// const MY_FAV = 9;
// console.log(MY_FAV);  //Output SyntaxError

var MY_FAV = 6;
// console.log(MY_FAV);  //SyntaxError

let MY_FAV = 1;
// console.log(MY_FAV);   //SyntaxError


/***********************************************************8Block scoping***********************************/
if(MY_FAV){
    
    let MY_FAV = 20;
    // console.log(MY_FAV); //Output 20
    var MY_FAV =30;
    // console.log(MY_FAV);  //SyntaxError
}

// console.log(MY_FAV); //Output 7
