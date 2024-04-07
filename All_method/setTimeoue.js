console.log("setTimeout method");


// setTimeout and clearTimeout

// setTimeout(functionRef,delay);
// clearTimeout(id)

// setTimeout(function (){

// }, timeout)

// setTimeout(() => {
    
// }, timeout);

// 1000 milliseconds = 1 second
// 5000 milliseconds = 5 second

// setTimeout(() => {
//     console.log("Delayed in 1 second");
// }, "5000");  //nevertheless works

// setTimeout(() => {
//     console.log("Delayed in 2 second");
// }, "2 second");  //nevertheless works

// setTimeout(function (){
//     console.log("Delayed in 5 second");
// },5000)


// code this one by executes
let a = 20;

function abc(){
    a = a + 10;
    console.log(a);
}

setTimeout(abc, 3000);


// code this repeatedly
let b = 0;

function abcd(){
    b = b + 10;
    console.log(b);

    setTimeout(abcd(), 5000);
}

// abcd();

let c = 200;

function Anim() {
    let target = document.querySelector(".setTimeout");
    target.style.width = c + "px";
    target.style.rotate = c + "deg";
    target.style.border = "1px solid black";
}

// let id = setTimeout(Anim, 5000);

// console.log(id);

// function clearout(){
//     clearTimeout(id);
// }

// let d = 50;

// function marginLeft(){
//     d = d + 10;
//         let target = document.querySelector(".setTimeout");
//         target.style.marginLeft = d + "px";
    
// }

setTimeout(marginLeft, 2000);



// setInterval and clearInterval

let d = 0;

function marginLeft(){
    d = d + 10;
        let target = document.querySelector(".setTimeout");
        target.style.marginLeft = d + "px";
    
}

// setInterval(marginLeft, 2000);

// let interval = 0;
// setInterval(function (){
//     console.log(`hii... ${interval = interval + 1}`);
// }, 3000);



// conditional (ternary) opertor

// if...else statement
// if(condition){
//     return true;
// }else{
//     return false;
// }

// ternary opertor
// (condition) ? rxprIfTrue : rexprIFFalse


// if...else statement
let age = 26;

// if(age >= 21){
//     console.log("Beer");
// }else{
//     console.log("Juice");
// }

// ternary opertor
// let f = (age >= 21) ? "beer" : "juice";
// console.log(f);


// conditional chains
let message = "123";

function message123(val){
    if(val == 1){
        return "One";
    }else if(val == 2){
        return "Two";
    }else if(val == 3){
        return "Three";
    }else{
        return "Not a number"
    }
}

// console.log(message123(message));

// ternary opertor
let example = "3";

function example123(a){
    return (a === 1) ? "one" : (a === 2) ? "Two" : (a === 3) ? "Three" : "Out of range | Not a number";
}

console.log(example123(example));