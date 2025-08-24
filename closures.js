console.log('hii');

// closure: 

// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// A closure gives you access to an outer function's scope from an inner function.

function init(){
    var name = "Mozilla";

    function displayName(){
        console.log(name);
    }

    displayName();
}

init();


function outer(){
    let name  = "Chandan";

    function inner(){
        let Last_Name = "thakur";
        console.log(`My name is ${name} ${Last_Name}`);
        // console.log(`My name is ${name} and ${age}`);
    }

    function innerTwo(){
        let age = 22;
        // console.log(`Your name is ${name} ${Last_Name}.`); 
        console.log(`Your name is ${name} and ${age}.`);
    }

    inner();
    innerTwo();
}

outer();

let number = 0.5;

if(Math.random() > number){
    var a = 1;
}else{
    var a  = 2;
}

console.log(a);


// sum two number create function

function Add(a){
    return function(b){
         const sum = a + b;
         return sum;
    }
}

let value = Add(2);

console.log(value(3));


// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n){
    return function(){
        return n++;
    }
}

const counter = createCounter(10);

console.log(counter());
