console.log("Iterators and generators");

/*******************************************************iterator**************************************************** */
const array = ["one","two","three","four","five","six","seven"];

//while , do-while , for , for..of , for..in , foreach , map is sab se array ke value ek sath hi print ho jata lekin me 
// array ke ek ek value ko print karte h 

//Example
// for(let i = 0 ; i < array.length  ;i++){
//     console.log(i);
// };


// for (const x of array) {
//     console.log(x);
// }

// array.forEach(element => {
//     console.log(element);
// });

// let y = 0;
// while (y<array.length) {
//     y++;
//     console.log(y)    ;
// }


// It is an object that allows us to traverse over a list or collection. Iterators' purpose is to define the sequences
// and implement the iterator protocol that returns an object by using a next() method that contains the value and done. 
// done: It is a boolean value indicating whether any more elements in the sequence could be iterated upon.
// value: It is the current element of the sequence.

/*
function myItertore(){
    let counter = 0;
    return{
        next: function(){
            if(counter<5){
                return{ value:counter , done: false };
            }else{
                return {done: true, value: undefined};
            }
        }
    }
};
*/





// There are two protocols: The iterable protocol and the iterator protocol.

// The iterable protocol
// [Symbol.iterator]  -> A zero-argument function that returns an object, conforming to the iterator protocol.

const array1 = ["apple","bananan","orage","mango"];

const y1 = array1[Symbol.iterator]();

console.log(y1.next().value);  //apple
console.log(y1.next().value); //banana
console.log(y1.next().value); //orage 
console.log(y1.next().value); //mango
console.log(y1.next().value); //undfine


let iterator = array[Symbol.iterator]();

console.log(iterator.next()); //one
console.log(iterator.next()); //two
console.log(iterator.next()); //three
console.log(iterator.next()); //four
console.log(iterator.next()); //five
console.log(iterator.next()); //six
console.log(iterator.next()); //seven
console.log(iterator.next()); //undefine

let iterator1 = array[Symbol.iterator]();

console.log(iterator1.next()); //one
console.log(iterator1.next()); //two
iterator1.next() 
console.log(iterator1.next()); //four
console.log(iterator1.next()); //five
console.log(iterator1.next()); //six
console.log(iterator1.next()); //seven
console.log(typeof array[Symbol.iterator]);  //function


let iterator2 = array[Symbol.iterator]();
console.log(iterator2.next().value);  //one
console.log(iterator2.next().done);  //false

// The iterator protocol
// The iterator protocol defines a standard way to produce a sequence of values (either finite or infinite), 
// and potentially a return value when all values have been generated.

//next() , value , done (boolean)

// Examples using the iteration protocols

// A String is an example os a built-in iterator object

const somestring = "hi";
console.log(typeof somestring[Symbol.iterator]); //function

//string default iterator return the string code points one bu one
const iterator13 = somestring[Symbol.iterator]();

console.log(iterator1 + "");  //[object String Iterator]

console.log(iterator13.next());
console.log(iterator13.next());
console.log(iterator13.next());

//some built spread syntax
console.log([...somestring]); //['h', 'i']

// //you can redefine the iterator
const somestring1 = new String("hii");

somestring1[Symbol.iterator] = function (){
    return{
        next :  function (){
            return this._first 
            ? {
                value : "bye",
                done : (this._first = false)
            }
            :
            {
                done : true
            };
        },
        _first: true
    }
}

console.log([...somestring1]); //['bye']
console.log(somestring1 + "");  //hii


// //same
const somestring2 = new String("hii");

somestring2[Symbol.iterator] = function (){
    return {
        next : function (){
             if (this._first) {
                return{
                    value: "bye",
                    done : (this._first = false)
                }
            } else {
                return{
                    done : true
                }
            }
        },
        _first : true
    }
}
console.log([...somestring2]);


// Iterable examples

// User-defined iterables
// You can make your own iterables like this:

const myItertore1 = {};

myItertore1[Symbol.iterator] = function* (){
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myItertore1]);  // [1,2,3]

// Simple iterator

function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
// console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)


// Infinite iterator
function idMaker() {
    let index = 0;
    return {
      next: function () {
        return {
          value: index++,
          done: false,
        };
      },
    };
  }
  
  const it = idMaker();
  
  console.log(it.next().value); // 0
  console.log(it.next().value); // 1
  console.log(it.next().value); // 2
  // ...
  

// Syntaxes expecting iterables
// Some statements and expressions expect iterables, for example the for...of loops, 
// the spread operator), yield* , and destructuring assignment :



//for...0f
for(let valu of ["a","b","c"]){
    console.log(valu);
};
/* 
  a
  b
  c
*/

//spread operator
console.log([..."abc"]); //[a,b,c]

//yield*
function* gen(){
    yield* ["a","b","c"];  
}

console.log(gen().next());  //{ value: "a", done: false }


// With a generator
function* makeSimpleGenerator(array){
    let index = 0;
    while (index < array.length) {
        yield array[index++];
    }
};

const make = makeSimpleGenerator(["yo","ya"]);
console.log(make.next().value);  //yo
console.log(make.next().value); //ya 
console.log(make.next().done);  //true

function* idMaker(){
    let index = 0;
    while (true) {
        yield index++;
    }
};

let make1 =  idMaker();


console.log(it.next().value);	//	0
console.log(it.next().value);	//	1
console.log(it.next().value); //	2
// ...	



/****************************************************Generators ********************************************************/
// A generator is a special kind of function that was introduced in ES6. 
//Generator functions enable us to create functions that another code can enter multiple times.
// Generator function pauses itself when it runs into a yield expression. 

// Syntax:-
/*
function* myGenerator(){
  //code
}
*/

function mygenerator(){
    console.log("First Message");
    console.log("Second Message");
};

mygenerator();
/*
First Message
second Message
*/

function* myGenerator1(){
    console.log("First Message");
    console.log("Second Message");
}

let genter =  myGenerator1();
console.log(genter);  //myGenerator1 {<suspended>}

function* myGenerator1(){
    console.log("First Message");
    console.log("Second Message");
}

let genter1 =  myGenerator1();
console.log(genter1.next());
/*
First Message
Second Message
{value: undefined, done: true}
*/

function* myGenerator2(){
    console.log("First Message");
    yield 'yield no 1';

    console.log("Second Message");
    yield 'yield no 2';
};

let g = myGenerator2();

console.log(g.next());
/*
First Message
{value: 'yield no 1', done: false}
*/

console.log(g.next());
/*
First Message
 {value: 'yield no 1', done: false}
Second Message
{value: 'yield no 2', done: false}
*/

console.log(g.next());  //{value: undefined, done: true}

function* myGenerator3(){
    yield "yield no 1";
    yield "yield no 2"
    yield "yield no 3"
};

let g1 = myGenerator3();
// console.log(g1.next().value); //yield no 1
// g1.next()
// console.log(g1.next().value); //yield no 3

for(let valus of g1){
    console.log(valus);
    /*
    yeild no 1
    yeild no 2
    yelid no 3
    */
};

/*****************************************************************function* *************************/
// The function* declaration ( function keyword followed by an asterisk) defines a generator function, which returns a Generator object.

// Syntax

// function* name([param[, param[, ... param]]]) { statements
// }

function* generated(i){
    yield i;
    yield i + 10;
};


const gen1 = generated(10);

console.log(gen1.next().value);
console.log(gen1.next().value);






