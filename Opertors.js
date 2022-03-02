console.log("Opertors");
/*
Assignment operators 
Comparison operators 
Arithmetic operators 
Bitwise operators 
Logical operators 
String operators
Conditional (ternary) operator 
Comma operator
Unary operators 
Relational operators
*/

/********************************************Arithmetic operators***********************************/
/***********Addition*****************************/
// Numeric addition
// console.log(2+2); //4

// Boolean addition
// console.log(2 + true);  //3
// console.log(5 + false);  //5

// String concatenation
// console.log("Hello" + "Everyone");  //HelloEveryone

// Number String concatenation 
// console.log(2001 + ": A Space Odyssey");  //2001: A Space Odyssey


/**********************************Subtraction*****************/
// Subtraction with numbers
// console.log(5-3);  //2
// console.log(4.5-1.5);  //3

// Boolean  Subtraction
// console.log(5-true);  //4
// console.log(5-false);   //5

// Subtraction with non-numbers
// console.log("foo" - 5);  //NaN
// console.log("10"-6);  //4


/*********************************Multiplication********************************/
// Multiplication using numbers
// console.log(4*5); //20
// console.log(-4 * 5);  //-20

// Boolean  Multiplication
// console.log(4*true);  //4
// console.log(4*false);  //0

// Multiplication with Infinity
// console.log(Infinity*0);  //NaN
// console.log(Infinity*Infinity);  //Infinity


// Multiplication with String
// console.log("3" * 3);   //9
// console.log("foo" * 4);  //NaN


/***********************************Division*******************/
// Division by numbers
// console.log(8/4);  //2
// console.log(2/4); // 0.5

// Boolean  Division
// console.log(5/true);  //5
// console.log(5/false);  //Infinity

// Division with String
// console.log("10"/5);  //2
// console.log("foo"/5);  //NaN

// Division by zero
// console.log(2.0/0); //Infinity
// console.log(2.0/0.0); //Infinity
// console.log(2.0/-0.0); //-Infinity


/****************************************Remainder****************************/
// The remainder operator ( % ) returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.

// Remainder with positive dividend
// console.log(13%5);  //3
// console.log(1%-2);  //1
// console.log(1%2);  //1
// console.log(2%3);  //2
// console.log(5.5%2); //1.5

// Remainder with negative dividend
// console.log(-13 % 5);  //-3
// console.log(-1 % 2);  //-1
// console.log(-4 % 2);  //-0

// Remainder with NaN
// console.log(NaN%4); //NaN

// Remainder with Infinity
// console.log(Infinity%3);  //NaN
// console.log(Infinity%0);  //NaN
// console.log(Infinity%Infinity);  //NaN


/**********************************Increment (++)********************************/
// The increment operator ( ++ ) increments (adds one to) its operand and returns a value.
// If used postfix, with operator after operand (for example, x++ ), the increment operator increments and returns the value before incrementing.
// If used prefix, with operator before operand (for example, ++x ), the increment operator increments and returns the value after incrementing.
let x = 3;
let y = x++;
// console.log(y);  //Output 3
// console.log(x);  //Output 4

// console.log(`x:${x} , y:${y}`);  //x:4 , y:3

let a = 6;
let b = ++a;
// console.log(a);  //7
// console.log(b);  //7


/******************************Decrement (--)*******************************/
// The decrement operator ( -- ) decrements (subtracts one from) its operand and returns a value.
// If used postfix, with operator after operand (for example, x-- ), the decrement operator decrements and returns the value before decrementing.
// If used prefix, with operator before operand (for example, --x ), the decrement operatordecrements and returns the value after decrementing.

let c = 9;
let d = c--;
// console.log(`c:${c}  ,  d:${d}`);  //c:8  ,  d:9

let e = 9;
let f = --e;
// console.log(`e:${e} , f:${f}`);  // e:8 , f:8


/*******************************Exponentiation****************************/
// The exponentiation operator ( ** ) returns the result of raising the first operand to the power of the second operand. It is equivalent to Math.pow , except it also accepts BigInts as operands.

// console.log(2 ** 3);  //8

// console.log(10 ** -2);  //0.01

// console.log(2 ** 3 ** 2);  //512

// console.log((2 ** 3) ** 2);  //64


/*****************************Unary plus (+)*******************************/
// The unary plus operator ( + ) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

// Usage with numbers
const h = 4;
const g = -4;
// console.log(+h);  //4
// console.log(+g);   //-4

// Usage with non-numbers
// console.log(+true); //1
// console.log(+false);  //0
// console.log(+null); //0
// console.log(+function (){  //NaN
//   return "val";
// });

/************************************Unary negation (-)************************/
// The unary negation operator ( - ) precedes its operand and negates it.

// Negating numbers
const i = 4;
const j = -i;
// console.log(i); //4
// console.log(j);  //-4

// Negating non-numbers
const k = "5";
const l = -k;
// console.log(k);  //5
// console.log(l);  //-5



/*
A binary operator requires two operands, one before the operator and one after the operator:
operand1 operator operand2
For example, 3+4 or x*y .

A unary operator requires a single operand, either before or after the operator:
operator operand 	 
or
operand operator
For example, x++ or ++x .

*/

/***************************************************************Assignment operators*( = )***************************************/
// An assignment operator assigns a value to its left operand based on the value of its right operand. 


// Assignment (=)
/*
The simple assignment operator ( = ) is used to assign a value to a variable. 
Syntax
x = y
*/

let x1 = 5,x2 = 3;
const y1 = 6, y2 = 4;
// console.log(x1);  //5
// console.log(x1=y1+1); //7
// console.log(x2=x2*y2);  //12

let a1 = 5;
let b1 = 4;
let c1 = 3;
// console.log(a1=b1);  //4
// console.log(a1=b1=c1);  //3


// Addition assignment (+=)
//Syntax
//x += y // x = x + y

// The addition assignment operator ( += ) adds the value of the right operand to a variable and assigns the result to the variable. 
let a2 = 9;
let b2 = "Hello";

// console.log(a2 += 1);  //10
// console.log(b2 += " World");  //Hello World

let foo = "foo";
let bar = 5;
let baz = true;

// Number + Number -> addition 
// console.log(bar+=2); //7

// Boolean + Number -> addition 
// console.log(baz+=2); //3

// Boolean + Boolean -> addition 
// console.log(baz+=false); //1

// Number + String -> concatenation 
// console.log(bar+=" foo");  //5 foo

// String + Boolean -> concatenation 
// console.log(foo += true);  //footrue
// console.log(foo=+false);  //0

// String + String -> concatenation 
// console.log(foo+="bar");  //foobar


// Subtraction assignment(-=) 
// Syntax
// x -= y // x = x - y

// The subtraction assignment operator ( -= ) subtracts the value of the right operand from a variable and assigns the result to the variable.
let a3 = 5;
// console.log(a3 -= 7); //-2
// console.log(a3 -= "Hello");  //NaN


// Multiplication assignment (*=)
// The multiplication assignment operator ( *= ) multiplies a variable by the value of the right operand and assigns the result to the variable.
// Syntax
// x *= y // x = x * y

let a4 = 3;
// console.log(a4 *= 2);  //6
// console.log(a4 *= "hello"); //NaN
// console.log(a4 *= true); //NaN


//Division assignment
// The division assignment operator ( /= ) divides a variable by the value of the right operand and assigns the result to the variable.
// Syntax
// x /= y // x = x / y

let a5 = 10;
// console.log(a5 /= 2);  //5
// console.log(a5 /= 0);  //Infinity
// console.log(a5 /= "hello");  //NaN


// Remainder assignment (%=)
// The remainder assignment operator ( %= ) divides a variable by the value of the right operand and assigns the remainder to the variable.
// Syntax
// x %= y // x = x % y

let a6 = 9;
// console.log(a6 %= 2);  //1
// console.log(a6 %= 0); //NaN/
// console.log(a6 %= "hello");  ///NaN



// Exponentiation assignment (**=)
// The exponentiation assignment operator ( **= ) raises the value of a variable to the power of the right operand.
// Syntax
// x **= y // x = x ** y

let a7 = 2;
// console.log(a7 ** 2);  //4
// console.log(a7 ** 0);  //1
// console.log(a7 ** "hello");  //NaN


// Logical AND assignment (&&=)
// The logical AND assignment ( x &&= y ) operator only assigns if x is truthy.
/*
Syntax
expr1 &&= expr2
*/

let a8 = 4;
let b3 = 0;

a8 &&= 2;
// console.log(a8);  //2

b3 &&= 2;
// console.log(b3)  //0

let a9 = 0;
let b4 = 1;

a9 &&= 0;
// console.log(a9);  //0

a9 &&= 1;
// console.log(a9);  //0

b4 &&= 1;
// console.log(b4);  //1

b4 &&= 0;
// console.log(b4);  //0


// Logical OR assignment (||=)
// The logical OR assignment ( x ||= y ) operator only assigns if x is falsy.
/*
Syntax
expr1 ||= expr2
*/

const a10 = {
    diration: 50,
    tittle: ""
};

a10.diration ||= 10;
// console.log(a10.diration);  //50

a10.tittle ||= "tittle is empty";
// console.log(a10.tittle);   //tittle is empty


// Assigning to properties
const Obj = {};

Obj.x = 3;
// console.log(Obj.x);  //3
// console.log(Obj);  //{x: 3}

const key = "y";
Obj[key] = 6;
// console.log(Obj[key]);  //6
// console.log(Obj);  //{x: 3, y: 6}

// Destructuring
const foo1 = ["One","Two","Three"];

// without destructuring 
var One = foo[0];
var  Two = foo[1];
var Three = foo[2];

// with destructuring
var [One,Two,three] = foo;

/********************************************************Comparison operators*********************************************************/
// Equality (==)
// The equality operator ( == ) checks whether its two operands are equal, returning a Boolean result

/*
Syntax
x == y
*/

// console.log(1 == 1); //true
// console.log("Hello" == "Hello");  //true
// console.log("hello" == "Hello1");  //false
// console.log("1" == 1);  //true
// console.log(0 == false);  //true
// console.log(1 == true)  //true
// console.log(0 == null);	// false
// console.log(0 == undefined);	// false
// console.log(0 == !!null);	// true, look at Logical NOT operator
// console.log(0 == !!undefined);	// true, look at Logical NOT operator null == undefined;



const number1 = new Number(3);
const number2 = new Number(3); 
// console.log(number1 == 3);	// true 
// console.log(number1 == number2);	// false

// Comparison of objects
const comp = {key:"value"};
const comp1 = {key:"value"};

// console.log(comp == comp1);  //false
// console.log(comp1 == comp1);  //true

// Comparing strings and String objects
const string1 = "Hello";
const string2 = String("Hello");
const string3 = new String("Hello");
const string4 = new String("Hello");

// console.log(string1 == string2);  //true
// console.log(string1 == string3);  //true
// console.log(string2 == string3);  //true
// console.log(string3 == string4);   //false
// console.log(string4 == string4);  //true

// Comparing Dates and strings
const d1 = new Date('December 17, 1995 03:24:00');
const s = d1.toString();
// console.log(s);   //Sun Dec 17 1995 03:24:00 GMT+0530 (India Standard Time)

// console.log(d1 == s);  //true


// Inequality (!=)
// Inequality (!=)
// The inequality operator ( != ) checks whether its two operands are not equal, returning a Boolean result. 
/*
Syntax
x != y
!(x == y)
*/

// console.log(1 != 1);  //false
// console.log(1 != 2); //true
// console.log("Hello" != "Hello");  //false
// console.log("1" != 1);  //false
// console.log(0 != false);  //false


const number3 = new Number(3);
const number4 = new Number(3); 
// console.log(number3 != 3);	// false
// console.log(number3 != number4);	// true

// Comparison of objects
const comp2 = {key:"value"};
const comp3 = {key:"value"};

// console.log(comp2 != comp3);  //true
// console.log(comp3 != comp3);  //false

// // Comparing strings and String objects
const string5 = "Hello";
const string6 = String("Hello");
const string7 = new String("Hello");
const string8 = new String("Hello");

// console.log(string5 != string6);  //false
// console.log(string5 != string7);  //false
// console.log(string6 != string7);  //false
// console.log(string7 != string4);   //true
// console.log(string8 != string8);  //false


/******************************************Strict equality (===)**********************/
// The strict equality operator ( === ) checks whether its two operands are equal, returning a Boolean result. 

/* 
Syntax
x === y
*/

// console.log(1 === 1);  //true
// console.log("Hello" === "Hello");  //true
// console.log("1" === 1);  //false
// console.log(0 === false);  //false
// console.log(null === null);  //true


// Comparing operands of different types
// console.log("2" === 2);  //false
// console.log(true === 1);  //false
// console.log(null === undefined);   //false

// Comparing objects
const Obj1 = {
  name: "Chandan"
};

const Obj2 = {
  name: "Chandan"
};
 
// console.log(Obj1 === Obj2); //false
// console.log(Obj1 === Obj1);  //true

/*********************************************Strict inequality (!==)**************************/
// The strict inequality operator ( !== ) checks whether its two operands are not equal, returning a Boolean result. 

/*
Syntax
x !== y
!(x === y)
*/

// Comparing operands of the same type
// console.log(2 !== 2); //false
// console.log(2 !== 3); //true

// console.log("Hello" !== "Hello"); //false
// console.log("Hello" !== "hola"); //true

// console.log(true !== true); //false
// console.log(true !== false);  //true

// console.log(null !== null);  //false


// Comparing operands of different types
// console.log("2" !== 2);  //true
// console.log(true !== 1);  //true
// console.log(null !== undefined);  //true

// Comparing objects
const Obj3 = {
  name: ":Chandab"
};
const Obj4 = {
  name: "Chandan"
};

// console.log(Obj3 !== Obj4);  //true
// console.log(Obj4 !== Obj4);  //false

/****************************************Greater than (>)************************************/
// The greater than operator ( > ) returns true if the left operand is greater than the right operand, and false otherwise.
/*
Syntax
x > y
*/

// String to string comparison
// console.log("a" > "b");  //false
// console.log("a" > "a");  //false
// console.log("a" > "3");  //true

// String to number comparison
// console.log("5" > 3);  //true
// console.log("3" > 3);  //false
// console.log("3" > 5);  //false
 
// console.log("Hello" > 5);  //false
// console.log(5 > "Hello");  //false

// Number to Number comparison
// console.log(5 >3);  //true
// console.log(3 > 3);  //false
// console.log(3> 5);  //false

// Comparing Boolean, null, undefined, NaN
// console.log(true >false);  //true
// console.log(false >true);  //false

// console.log(true >0); //false
// console.log(true >1);  //false

// console.log(null>0);  //false
// console.log(1>null);  //true

// console.log(undefined>3);  //false
// console.log(3>undefined); //false

// console.log(3 > NaN);  //false
// console.log(NaN > 3);  //false


/***********************************Greater than or equal (>=)***********************/
// The greater than or equal operator ( >= ) returns true if the left operand is greater than or equal to the right operand, and false otherwise.
/*
Syntax
x >= y
*/

// String to string comparison

// console.log("a" >= "b");	// false
// console.log("a" >= "a");	// true 
// console.log("a" >= "3");	// true

// String to number comparison

// console.log("5" >= 3); // true 
// console.log("3" >= 3); // true 
// console.log("3" >= 5);      // false

// console.log("hello" >= 5); // false 
// console.log(5 >= "hello");  // false

// Number to Number comparison

// console.log(5 >= 3);	// true
// console.log(3 >= 3);	// true
// console.log(3 >= 5);	// false

// Number to BigInt comparison

// console.log(5n >= 3);	// true
// console.log(3 >= 3n);	// true
// console.log(3 >= 5n);	// false

// Comparing Boolean, null, undefined, NaN

// console.log(true >= false); // true 
// console.log(true >= true); // true 
// console.log(false >= true); // false

// console.log(true >= 0);	// true 
// console.log(true >= 1);	// true

// console.log(null >= 0);	// true 
// console.log(1 >= null);	// true

// console.log(undefined >= 3); // false 
// console.log(3 >= undefined); // false

// console.log(3 >= NaN);	// false 
// console.log(NaN >= 3);  //false


/******************************************************Less than (<)************************************************/
// The less than operator ( < ) returns true if the left operand is less than the right operand, and false otherwise.
/*
Syntax
x < y
*/

// String to string comparison

// console.log("a" < "b");	// true
// console.log("a" < "a");	// false
// console.log("a" < "3");	// false

// String to number comparison

// console.log("5" < 3);	// false
// console.log("3" < 3);	// false
// console.log("3" < 5);	// true

// console.log("hello" < 5);	// false
//  console.log(5 < "hello");	// false

// console.log("5" < 3n);	// false
// console.log("3" < 5n);	// true

// Number to Number comparison

// console.log(5 < 3);	// false
// console.log(3 < 3);	// false
// console.log(3 < 5);	// true

// Number to BigInt comparison

// console.log(5n < 3);	// false
// console.log(3 < 5n);	// true
// Comparing Boolean, null, undefined, NaN

// console.log(true < false);	// false
//  console.log(false < true);	// true


// console.log(0 < true);	// true
// console.log(true < 1);	/// false

// console.log(null < 0);	// false
// console.log(null < 1);	// true

// console.log(undefined < 3);	// false 
// console.log(3 < undefined);	// false

// console.log(3 < NaN);	// false
// console.log(NaN < 3);	// false



/********************************************************Less than or equal (<=)***********************************/
// The less than or equal operator ( <= ) returns true if the left operand is less than or equal to the right operand, and false otherwise.
/*
Syntax
x <= y
*/

// String to string comparison

// console.log("a" <= "b"); // true c
// console.log("a" <= "a"); // true 
// console.log("a" <= "3"); // false
// String to number comparison

// console.log("5" <= 3);	// false 
// console.log("3" <= 3);	// true 
// console.log("3" <= 5);	// true

// console.log("hello" <= 5);	// false 
// console.log(5 <= "hello");	// false

// Number to Number comparison

// console.log(5 <= 3);	// false
// console.log(3 <= 3);	// true
// console.log(3 <= 5);	// true

// Number to BigInt comparison

// console.log(5n <= 3);	// false
// console.log(3 <= 3n);	// true
// console.log(3 <= 5n);	// true

// Comparing Boolean, null, undefined, NaN

// console.log(true <= false); // false 
// console.log(true <= true);	// true 
// console.log(false <= true); // true

// console.log(true <= 0);	// false 
// console.log(true <= 1);	// true

// console.log(null <= 0);	// true 
// console.log(1 <= null);	// false

// console.log(undefined <= 3); // false 
// console.log(3 <= undefined); // false

// console.log(3 <= NaN);	// false 
// console.log(NaN <= 3);  


/*************************************************************************Logical operators*********************************/
// Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. 


/*******************************************Logical AND (&&)*************************/
// The logical AND ( && ) operator (logical conjunction) for a set of Boolean operands will be
// true if and only if all the operands are true . Otherwise it will be false .
/*
Syntax
expr1 && expr2
*/

const a11 = 4;
const a12 = -3;

// console.log(a11 < 0 && a12 < 0); //false
// console.log(!(!a11 < 0 || !a12 < 0)); //true

// console.log(true	&&	true);  //true
// console.log(true	&&	false); //false
// console.log(false	&&	true); //false
// console.log(false	&&	3 == 4);  //false
// console.log('Cat'	&&	'Dog');  //Dog
// console.log(false	&&	'Cat');  //false
// console.log('Cat'	&&	false);  //false
// console.log(''	&&	false); //" "
// console.log(false	&&	'');  //false



// Converting AND to OR
// bCondition1 && bCondition2  
  //is always equal to:
// !(!bCondition1 || !bCondition2)

// Converting OR to AND
// bCondition1 || bCondition2 
  // //is always equal to:
// !(!bCondition1 && !bCondition2)

// Removing nested parentheses
  //is always equal to:
// bCondition1 || bCondition2 && bCondition3

var vr1 = "Chandan";
var vr2 = 10;

if(vr1 = "Chandan" && vr2 < 9){
  //  console.log("My name is Chandan");
}else{
  // console.log("Invaild");
};  // Output - Invaild



/*****************************************Logical OR (||)************************/
// The logical OR ( || ) operator (logical disjunction) for a set of operands is true if and only if one or more of its operands is true. 
/*
Syntax
expr1 || expr2
*/

const a13 = 4;
const a14 = -4;

// console.log(a13 <0 || a14 < 0);  //true
// console.log(a13 <0 && a14 < 0);  //false

// console.log(true	||	true	);  //true
// console.log(false	||	true	);  //true
// console.log(true	||	false	); //true
// console.log(false	||	(3 ==	4));  //false
// console.log('Cat'	||	'Dog'	); //Cat
// console.log(false	||	'Cat'	);  //Cat
// console.log('Cat'	||	false	);  //Cat
// console.log(''	||	false	);  //false
// // console.log(false	||	''	);  //" "

var are = "Chandan";
var are1 = 4;

if(are = "Ravi" || are1 > 4){
  // console.log("My name is Ravi");  
}else{
  // console.log("My name is not found");
};   //Output - My name is Ravi



/****************************************Logical NOT (!)**************************/
// The logical NOT ( ! ) operator (logical complement, negation) takes truth to falsity and vice versa. It is typically used with Boolean (logical) values
/*
Syntax
!expr
*/

var vr3 = 3;
var vr4 = -3;

// console.log(vr3 < 0 || vr4 < 0);   //true
// console.log(!(vr3 < 0 || vr4 < 0));  //false

// Converting between NOTs
// !!bCondition  
  //is always equal to:
// bCondition 


var ar2 = "Chandan";
var ar3 = 3;

if(!(ar2 == "Ravli" || ar3 > 3)){
  // console.log("hello");
}else{
  // console.log("By");
};  //hello



/****************************************String operators**********************/
// console.log("My" + " String");  //My String

var mystring = "alpha";
mystring += "bet";

// console.log(mystring);  //alphabet



/***************************************************************Conditional (ternary) operator************************************************/
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy
/*
Syntax
condition ? exprIfTrue : exprIfFalse
*/


function geFree(isMember){
  return (isMember ? "$20.00" : "$5.00");
}

// console.log(geFree(true));  //$20.00
// console.log(geFree(false));  //$5.00
// console.log(geFree(null));   //$5.00

var age =26;
var beaverage = (age >=21) ? "Beer" : "juice";
// console.log(beaverage);  //Beer


let getting = person => {
  let name = person ? person.name : "Strange";
  return `Howdy, ${name}`;
}

// console.log(getting({name: `Chandan`})); // "Howdy, Chandan" 
// console.log(getting(null));  //Howdy, Strange


// Conditional chains

// Equivalent to:
var get = (age) => {
    if(age == 18){
      // return console.log("Your age is 18");
    }else if(age == 20){
      // return console.log("Your  age is 20");
    }else if(age == 22){
      // return console.log("Your age is 22");
    }else{
      // return console.log("your are not invaild");
    };
};
  
get(20);

// Conditional chains

var get1 = (age) => {
  return (age ==18) ? "Your age is 18" 
  : (age == 20) ? "Your age is 20" 
  : (age == 22)? "Your age is 22"
  : "Your age is not invaild";
};

// console.log(get1(26));


/******************************************************************Comma operator*********************************************************************/
// The comma operator ( , ) evaluates each of its operands (from left to right) and returns the value of the last operand. 
/*
Syntax
expr1, expr2, expr3...
*/

let x3 = 4;
x3 = (x++,x);
// console.log(x3);  //5

x3 = (17,2);
// console.log(x3);   //2

x3 = (4,3,4,6,9,16);
// console.log(x3);  //16

var x4 , x5 ,x6;
x4 = 4;
x5 = 5;
x6 = 6;
// console.log(x4); //4
// console.log(x5);  //5
// console.log(x6);  //6

function myfun(){
  var x7 = 1;
  return (x7+=1,x7);
};

// console.log(myfun());  //2

/*******************************************Unary operators**************************************** */


/**********************************************delete operator********************* */
// The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
/*
Syntax
delete expression

delete object.property 
delete object['property']
*/

const Empoler = {
  firstname: "Chandan",
  lastname:"Thakur"
};

console.log(Empoler.firstname);   //Chandan

delete Empoler.firstname;
console.log(Empoler.firstname);  //undefined

Empoler.firstname = "Ravi";
console.log(Empoler.firstname);  //Ravi

console.log(delete Empoler.lastname);  //true

// Cross-browser notes
adminname = "XYZ";
console.log(delete adminname);  //true
// console.log(adminname); //adminname is not defined

var emcount = 34;
console.log(delete emcount);  //false
console.log(emcount);  //34


var EmpolerDetails = {
  Name: "Tilak",
  Age: 23,
  designation: 'Developer'
};

console.log(delete EmpolerDetails.Name);  // true
console.log(EmpolerDetails.Name); //undefined

console.log(delete Math.PI);  //false

// delete function
function f1(){
  var z = 7;
  delete z;  // delete doesn't affect local variable names 
};


// Deleting array elements
var trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
delete trees[3];
console.log(trees);  //['redwood', 'bay', 'cedar', empty, 'maple']


var trees1 = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
trees[3] = undefined;
console.log(trees1); //['redwood', 'bay', 'cedar', 'oak', 'maple']

var trees2 = ['redwood', 'bay', 'cedar', 'oak', 'maple']; 
trees.splice(3,1);
console.log(trees2); // ["redwood", "bay", "cedar", "maple"]

/***************Grouping operator ( )***************************/
// The grouping operator ( ) controls the precedence of evaluation in expressions.
/*
Syntax
( )
*/


console.log(1 + 2 * 3);// expected output: 7 
console.log(1 + (2 * 3)); // expected output: 7 
console.log((1 + 2) * 3); // expected output: 9
console.log(1 * 3 + 2 * 3); // expected output: 9


/***************************************************typeof*******************************************/
// The typeof operator returns a string indicating the type of the unevaluated operand.
/*
Syntax
typeof operand typeof(operand)
*/

// Numbers
// console.log(typeof 37 === 'number'); 
// console.log(typeof 3.14 === 'number'); 
// console.log(typeof(42) === 'number'); 
// console.log(typeof Math.LN2 === 'number');
// console.log(typeof Infinity === 'number');
// console.log(typeof NaN === 'number'); // Despite being "Not-A-Number"
// console.log(typeof Number('1') === 'number');	// Number tries to parse things int 
// console.log(typeof Number('shoe') === 'number');	// including values that cannot be
// console.log(typeof 42n === 'bigint');

// // Strings
// console.log(typeof '' === 'string'); 
// console.log(typeof 'bla' === 'string');
// console.log(typeof `template literal` === 'string');
// console.log(typeof '1' === 'string'); // note that a number within a string is still t 
// console.log(typeof (typeof 1) === 'string'); // typeof always returns a string
// console.log(typeof String(1) === 'string'); // String converts anything into a string,

// // Booleans
// console.log(typeof true === 'boolean'); 
// console.log(typeof false === 'boolean');
// console.log(typeof Boolean(1) === 'boolean'); // Boolean() will convert values based o 
// console.log(typeof !!(1) === 'boolean'); // two calls of the ! (logical NOT) operator

// // Symbols
// console.log(typeof Symbol() === 'symbol' )
// console.log(typeof Symbol('foo') === 'symbol' )
// console.log(typeof Symbol.iterator === 'symbol')

// // Undefined
// console.log(typeof undefined === 'undefined');
// console.log(typeof declaredButUndefinedVariable === 'undefined'); 
// console.log(typeof undeclaredVariable === 'undefined');

// // Objects
// console.log(typeof {a: 1} === 'object');

// // use Array.isArray or Object.prototype.toString.call
// // to differentiate regular objects from arrays typeof [1, 2, 4] === 'object';

// console.log(typeof new Date() === 'object');
// console.log(typeof /regex/ === 'object'); // See Regular expressions section for histo

// // The following are confusing, dangerous, and wasteful. Avoid them. typeof new Boolean(true) === 'object';
// console.log(typeof new Number(1) === 'object'); 
// console.log(typeof new String('abc') === 'object');
 

// // typeof null
// console.log(typeof null === 'object');








 









