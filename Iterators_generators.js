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

console.log(gen1.next().value); ///10
console.log(gen1.next().value); //20



function* idMaker() { var index = 0;
    while (true)
    yield index++;
}
    
    
var gen = idMaker();
    
    
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// ...	
    
// Example with yield*
function* anotherGenerator(i){
    yield i + 1;
    yield i + 2;
    yield i + 3;
};

function* generator5(i){
    yield i;
    yield* anotherGenerator(i);
    yield i + 10;
};

let gen2 = generator5(10);

console.log(gen2.next().value); //10
console.log(gen2.next().value); //11
console.log(gen2.next().value); //12
console.log(gen2.next().value); //13
console.log(gen2.next().value);  //20

// Passing arguments into Generators
function* logGenerator(){
    console.log(0);
    console.log(1,yield);
    console.log(2 , yield);
};

let gen3 = logGenerator();
gen3.next();
gen3.next("chandan");
gen3.next("ravi");

// Return statement in a generator
function* yieldAndReturn(){
    yield "Y";
    return "R";
    yield "unreachable";
}

let gen4 = yieldAndReturn();

console.log(gen4.next()); // { value: "Y", done: false } 
console.log(gen4.next()); // { value: "R", done: true }
console.log(gen4.next());  // { value: undefined, done: true }

// Generator as an object property
const someobj = {
    *generate(){
        yield "a",
        yield "b";
    }
}

let gen5 = someobj.generate();

console.log(gen5.next()); // { value: 'a', done: false } 
console.log(gen5.next()); // { value: 'b', done: false }
console.log(gen5.next()); // { value: undefined, done: true }


// Generator as an object method
class foo{
    *generate(){
        yield 1;
        yield 2;
        yield 3;
    }
}

const f = new foo();
const gen10 = f.generate();

console.log(gen10.next()); // { value: 1, done: false } 
console.log(gen10.next()); // { value: 2, done: false } 
console.log(gen10.next()); // { value: 3, done: false }
console.log(gen10.next());  // { value: undefined, done: true }

// Generator as a computed property
class foo1 {
    *[Symbol.iterator] (){
        yield 1;
        yield 2;
    }
};

const SomeObj1 = {
    *[Symbol.iterator] () { yield 'a';
    yield 'b';
    }
}

console.log(Array.from(new foo1));
console.log(Array.from(SomeObj1))
    

// Generator defined in an expression
const foo2 = function* () {
    yield 10;
    yield 20;
};

const bar = foo2();
console.log(bar.next());  // {value: 10, done: false}


// // Generator example
// function* powers(n){
//     //endless loop to generate
//     for(let current =n;; current *= n){ yield current;
//     }
//     }
    
//     for(let power of powers(2)){
//     //controlling generator if(power > 32) break;
//     console.log(power)
//     //2
//     //4
//     //8
//     //16
//     //32
//     }
    

/******************************************************yield***********************************************/
// The yield keyword is used to pause and resume a generator function.
/*
Syntax
[rv] = yield [expression]
*/

function* foo3(n){
    while (n < 2 ) {
        yield n;
        n++;
    }
};

const yeild = foo3(0);
console.log(yeild.next().value);  //0
console.log(yeild.next().value); //1


function* countAppleSales (){
    let salelist = [3,5,7];

    for (let index = 0; index < salelist.length; index++) {
        yield salelist[index];
    }
};

const apple = countAppleSales();

console.log(apple.next());  // { value: 3, done: false } 
console.log(apple.next()); // { value: 7, done: false } 
console.log(apple.next()); // { value: 5, done: false }
console.log(apple.next());  // { value: undefined, done: true }


function* counter(value){
    let step;

    while (true) {
        step = yield  value++;
        if (step) {
            value += step;
        }
    }
}

let generatorFunc = counter(0);
console.log(generatorFunc.next().value);  //0
console.log(generatorFunc.next().value); //1
console.log(generatorFunc.next().value); //2
console.log(generatorFunc.next().value); //3
console.log(generatorFunc.next(10).value);   //14
console.log(generatorFunc.next().value);  //15
console.log(generatorFunc.next(10).value);  //26



/***************************************************************yield*****************************************/
// The yield* expression is used to delegate to another generator or iterable object.
/*
Syntax
yield* expression
*/

function* fun1(){
    yield 42;
};

function* fun2(){
    yield* fun1();
}

const iterables1 = fun2();

console.log(iterables1.next());  //value: 42, done: false}

// Other Iterable objects
function* g3() { 
    yield* [1, 2];
    yield* '34';
    yield* Array.from(arguments);
}
    
    
const iterables2 = g3(5, 6);

console.log(iterables2.next());  // {value: 1, done: false} 
console.log(iterables2.next()); // {value: 2, done: false}
console.log(iterables2.next());  // {value: "3", done: false} 
console.log(iterables2.next()); // {value: "4", done: false} 
console.log(iterables2.next()); // {value: 5, done: false}
console.log(iterables2.next());  // {value: 6, done: false}
console.log(iterables2.next());  // {value: undefined, done: true}


// The value of yield* expression itself
function* g4(){
    yield* [1,2,3];
    return "foo";
};


function* g5(){
    const g4ReturnValue = yield* g4();
    console.log(g4ReturnValue);
    return g4ReturnValue;
};


const iterables3 = g5();

console.log(iterables3.next());
console.log(iterables3.next());
console.log(iterables3.next());
console.log(iterables3.next());

