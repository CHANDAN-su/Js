
console.log("Conditional Statements");  //Conditional Statements



// IF statements
const age = 22;

if(age>22){
    console.log("Age is Above")  //not run (consition false)
}
if(age<=22){
    console.log("Age is blowe");  //Age is blowe (condition true)
}

if(age==25){
    console.log("Age is Perfect")  //not reun (condition false)
}


// else satement 
let salary = 800;

if(salary>800){
    console.log("My Salary is greater than 800"); //not run (condition false)
}

else{
    console.log("My Salary is less than 800");  //My Salary is less than 800 (condition true)
}


// else..if Satement 
let salary1 = 1000;

if(salary1>1000){
    console.log("My salary is greater than 1000"); //not run (condition false)
}

else if(salary1<1000){
    console.log("My Salary is less than 1000")  //not run (condition false)
}

else if(salary1===1000){
    console.log("My Salary is equal")  //My Salary is equal (condition true)
}

else{
    console.log("Salary is not found"); //not run (condition false)
}




// Check undefine value 
const vari = 34;
if(typeof vari !== "undefined"){
    console.log("Vari is defined");  //Vari is defined (condition true)
}
else{
    console.log("Vari is not undefined")  //mot run (condition false)
}




const age1 = 16;
const doesdrive = true;


if(doesdrive && age1>18){
    console.log("your are drive a car"); //not run (condition false)
}
else{
    console.log("Your are not drive a car") //Your are not drive a car (condition true)
}



const age2 = 20;
const doesdrive1 = false;


if(doesdrive1 || age2>18){
    console.log("your are drive a car"); //your are drive a car (condition true)
}
else{
    console.log("Your are not drive a car") //not run (condition false)
}




const Hindi_marks = 75;
const English_marks = 53;
const Math_marks = 90;

if(Hindi_marks>60 && English_marks>55  &&  Math_marks>85){
    console.log("Your are Pass");  //not run (condition true)
}
else{
    console.log("Your are not Pass"); //Your are not Pass(condition false)
}




const Hindi_marks1 = 65;
const English_marks1 = 50;
const Math_marks1 = 80;

if(Hindi_marks1>60 || English_marks1>55  ||  Math_marks1>85){
    console.log("Your are Pass"); //Your are Pass (condition true)
}
else{
    console.log("Your are not Pass"); //mot run (condition false)
}

/*
// Shortuect
let x = 26; 
console.log(x>=20? 'Age is 20' : 'Age is not 20');  //Age is 20 (condition true)
*/


let e = 6;
let f = 9;

if(e==f){
    console.log("THis is true"); //not run (condition false)
}else{
    console.log("This is false");  //This is false (condition true)
}


let checkdat = 59;

if(checkdat===56){
    console.log("This is age of 56"); 
}
else{
    // alert("This is wrong");
}




// Switch Satement
let x = 22;
switch (x) {
    case 18:
        // console.log("This is 18"); //not run (condition false)
        break;

    case 20:
        // console.log("This is 20");  //not run (condition false)
        break;

    case 22:
        // console.log("This is 22");  //This is 22 (condition true)
        break;

    case 24:
        // console.log("This is 24");  //not run (condition false)
        break;

    default:
        // console.log("This is not number");  //not run (condition false)
        break;
}



// switch Example
// Methods for multi-criteria case

let animal = "Bee";

switch(animal){
    case "cow":
    case "Dog":
    case "Elephant":
    case "Bee":
        // console.log("Rhis is best Animal");  //Rhis is best Animal (condition true)
        break;

        case 'Dinosaur':
            default:
            // console.log('This animal is extinct.'); //not run (condition false)
      
}


let action = "Say Hi";

switch(action){
    case "Say hello":
        let message = "Hello";
        console.log(message);  //not run (condition false)
    break;

    case "Say Hi":
        let message1 = "Hi";
        console.log(message1); //Hi (condition false)
    break;

    default:
        console.log("Empty action recvide"); //not run (condoition false)
    break;
}

//Block Statement

var x = 6;
let y = 6;

if(true){
    var x =7;   //block statement
    let y = 9;   //block statement
    console.log(y); //9 
}

console.log(x);  //7
console.log(y);  //6

var a = 2;
{
    var a = 9;
}
console.log(a); //Output 9 

let b = 8;
{
    let b = 6; //(block scope)
}
console.log(b);  //8

const c = 2;
{
    const c = 4;  //(block scope)
}
console.log(c);



let d = 0;
while( d < 5 ){
    d++;  
    console.log(d); // 0 1 2 3 4 5
}


// Error handle 

// throw  
console.log("Throw");

var check = "Chandan";

check = undefined
if(check === undefined){

    console.log("Data is not undefined"); //not run (condition false)
}else{
    throw new ("This is undefined");  //Control flow and error handling.js:288 Uncaught TypeError: "This is undefined" is not a constructor (condition true)
}


// try...catch
/*
try{
    // console.log("Try");
    functiomf();
    // gdfvbegb
}catch(){
    console.log("Catch");
   
}
*/

// jo error tha ban dikhayega
try{
    // console.log("Try");
    functiomf();
    // gdfvbegb
}catch(error){
    console.log("Are you sure");
    console.log(error); //ReferenceError: functiomf is not defined
    console.log(error.name);  //ReferenceError
    console.log(error.message);  //functiomf is not defined
}finally{
    console.log("Finally we will run this");
}


