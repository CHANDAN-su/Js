console.log("Math method");  

/*******************************************Math.abs()*********************************/
// The Math.abs() function returns the absolute value of a number. That is, it returns x if x
// is positive or zero, and the negation of x if x is negative.
/*
Syntax
Math.abs(x)
*/

function difference(a,b){
    return Math.abs(a-b);
  };
  
  console.log(difference(10,5));  //5
  console.log(difference(3,4)); //10
  console.log(difference(1.23456, 7.89012));  //6.6555599999999995
  
  console.log(Math.abs('-1'));	// 1
  console.log(Math.abs(-2));	// 2
  console.log(Math.abs(null));	// 0
  console.log(Math.abs(''));	// 0
  console.log(Math.abs([]));	// 0
  console.log(Math.abs([2]));	// 2
  console.log(Math.abs([1,2]));	// NaN
  console.log(Math.abs({})); // NaN 
  console.log(Math.abs('string')); // NaN 
  console.log(Math.abs());        // NaN
  
  /**********************************************Math.cbrt()*******************************/
  // The Math.cbrt() function returns the cube root of a number
  /*
  Syntax
  Math.cbrt(x)
  */
  console.log(Math.cbrt(-1)); //-1
  console.log(Math.cbrt(1));  //1
  console.log(Math.cbrt(Infinity)); //Infinity
  console.log(Math.cbrt(64));  //4
  
  console.log(Math.cbrt(NaN)); // NaN 
  console.log(Math.cbrt(-1)); // -1
  console.log(Math.cbrt(-0)); // -0
  console.log(Math.cbrt(-Infinity)); // -Infinity 
  console.log(Math.cbrt(0)); // 0
  console.log(Math.cbrt(1)); // 1 
  console.log(Math.cbrt(Infinity)); // Infinity 
  console.log(Math.cbrt(null)); // 0
  console.log(Math.cbrt(2)); // 1.2599210498948732
  
  /********************************************Math.ceil()***********************/
  // The Math.ceil() function always rounds a number up to the next largest integer.
  /*
  Syntax
  Math.ceil(x)
  */
  
  console.log(Math.ceil(.95)); //1
  console.log(Math.ceil(4)); //4
  console.log(Math.ceil(7.004)); //8
  console.log(Math.ceil(-7.004)); //-7
  
  // // Closure
  // (function () {
  //   /**
  //   * Decimal adjustment of a number.
  //   * @param {String}  type  The type of adjustment.
  //   * @param {Number}  value The number.
  //   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
  //   * @returns {Number} The adjusted value.
  //   */
  //   function decimalAdjust(type, value, exp) {
  //     // If the exp is undefined or zero...
  //     if (typeof exp === 'undefined' || +exp === 0) {
  //       return Math[type](value);
  //     }
  //     value = +value;
  //     exp = +exp;
  //     // If the value is not a number or the exp is not an integer...
  //     if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
  //       return NaN;
  //     }
      
  //     // Shift
  //     value = value.toString().split('e');
  //     value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      
  //     // Shift back
  //     value = value.toString().split('e');
  //     return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  //   }
  
  //   // Decimal round
  //   if (!Math.round10) {
  //     Math.round10 = function(value, exp) {
  //       return decimalAdjust('round', value, exp);
  //     };
  //   }
  //   // Decimal floor
  //   if (!Math.floor10) {
  //     Math.floor10 = function(value, exp) {
  //       return decimalAdjust('floor', value, exp);
  //     };
  //   }
  //   // Decimal ceil
  //   if (!Math.ceil10) {
  //     Math.ceil10 = function(value, exp) {
  //       return decimalAdjust('ceil', value, exp);
  //     };
  //   }
  // })();
  
  
  // // Round
  // console.log(Math.round10(55.55, -1));   // 55.6
  // console.log(Math.round10(55.549, -1));  // 55.5
  // console.log(Math.round10(55, 1));       // 60
  // console.log(Math.round10(54.9, 1));     // 50
  // console.log(Math.round10(-55.55, -1));  // -55.5
  // console.log(Math.round10(-55.551, -1)); // -55.6
  // console.log(Math.round10(-55, 1));      // -50
  // console.log(Math.round10(-55.1, 1)); 
  // console.log(Math.round10(-55.1, "abc")); // NaN
  // // Floor
  // console.log(Math.floor10(55.59, -1));   // 55.5
  // console.log(Math.floor10(59, 1));       // 50
  // console.log(Math.floor10(-55.51, -1));  // -55.6
  // console.log(Math.floor10(-51, 1));      // -60
  // // Ceil
  // console.log(Math.ceil10(55.51, -1));    // 55.6
  // console.log(Math.ceil10(51, 1));        // 60
  // console.log(Math.ceil10(-55.59, -1));   // -55.5
  // console.log(Math.ceil10(-59, 1));       // -50
  
  
  /*********************************************Math.floor()********************************/
  // The Math.floor() function returns the largest integer less than or equal to a given number.
  /*
  Syntax
  Math.floor(x)
  */
  
  console.log(Math.floor(5.95));  //5
  console.log(Math.floor(5.05)); //5
  console.log(Math.floor(5));  //5 
  console.log(Math.floor(-5.05));  //-6
  
  
  console.log(Math.floor( 45.95)); // 45
  console.log(Math.floor( 45.05)); // 45
  console.log(Math.floor( 4	)); //	4
  console.log(Math.floor(-45.05)); // -46
  console.log(Math.floor(-45.95)); // -46
  
  
  /*************************************************Math.hypot()********************/
  // The Math.hypot() function returns the square root of the sum of squares of its arguments
  /*
  Syntax
  Math.hypot() 
  Math.hypot(value0) 
  Math.hypot(value0, value1)
  Math.hypot(value0, value1, ... , valueN)
  */
  
  
  console.log(Math.hypot(3,4)); //5
  console.log(Math.hypot(5,12));  //13
  console.log(Math.hypot(3,4,5));  //7.0710678118654755
  console.log(Math.hypot(-5));  //5
  
  // Using Math.hypot()
  console.log(Math.hypot(3, 4));	// 5
  console.log(Math.hypot(3, 4, 5));	// 7.0710678118654755
  console.log(Math.hypot());	// 0
  console.log(Math.hypot(NaN));	// NaN 
  console.log(Math.hypot(NaN, Infinity)); // Infinity
  console.log(Math.hypot(3, 4, 'foo'));	// NaN, since +'foo' => NaN 
  console.log(Math.hypot(3, 4, '5'));	// 7.0710678118654755, +'5' => 5
  console.log(Math.hypot(-3));	// 3, the same as Math.abs(-3)
  
  
  
  /**************************************Math.max()*******************************/
  // The Math.max() function returns the largest of the zero or more numbers given as input parameters,
  // or NaN if any parameter isn't a number and can't be converted into one.
  /*
  Syntax
  Math.max() 
  Math.max(value0) 
  Math.max(value0, value1)
  Math.max(value0, value1,  ... , valueN)
  */
  
  console.log(Math.max(1,3,2,10)); //10
  console.log(Math.max(-1,-3,-10)); //-1
  
  const array = [1,.2,3,5,8,9,5];
  
  console.log(Math.max(array)); //NaN
  console.log(Math.max(...array)); //9 
  
  
  /************************************************Math.min()*********************************/
  // The static function Math.min() returns the lowest-valued number passed into it,
  // or NaN if any parameter isn't a number and can't be converted into one.
  /*
  Syntax
  Math.min() 
  Math.min(value0) 
  Math.min(value0, value1)
  Math.min(value0, value1, ... , valueN)
  */
  
  console.log(Math.min(3,2,1,75)); //1
  console.log(Math.min(-1,-2,-89,-100)); //100
  
  const array1 = [1,3,5,7,9,-1];
  console.log(Math.min(...array1)); //-1
  
  var x = 10, y = -20; 
  var z = Math.min(x, y);
  console.log(z);  -20
  
/*************************************************************************Math.PI***********************************************/
// The Math.PI property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159:
/*
Syntax
Math.PI
*/

function calculateCircumference(radius){
    return 2 * Math.PI * radius;
};

console.log(Math.PI);  //3.141592653589793

console.log(calculateCircumference(10));  //62.83185307179586

let Area = (radius) => {
    return Math.PI * radius *radius;
};

console.log(Area(50));  //7853.981633974483

/******************************************************Math.pow()*************************************/
// The Math.pow() function returns the base to the exponent power, as in
// base^exponent .
/*
Syntax
Math.pow(base, exponent)
*/

console.log(Math.pow(7,3));  //343
console.log(Math.pow(4,0.5));  //2
console.log(Math.pow(7,-2));  //0.020408163265306124
console.log(Math.pow(-7,0.5)); //NaN

// simple
console.log(Math.pow(7, 2));	// 49
console.log(Math.pow(7, 3));	// 343
console.log(Math.pow(2, 10));	// 1024


// fractional exponents
console.log(Math.pow(4, 0.5)); // 2 (square root of 4) 
console.log(Math.pow(8, 1/3)); // 2 (cube root of 8)
console.log(Math.pow(2, 0.5)); // 1.4142135623730951 (square root of 2) 
console.log(Math.pow(2, 1/3)); // 1.2599210498948732 (cube root of 2)


// signed exponents
console.log(Math.pow(7, -2));	// 0.02040816326530612 (1/49)
console.log(Math.pow(8, -1/3)); // 0.5


// signed bases
console.log(Math.pow(-7, 2));	// 49 (squares are positive) 
console.log(Math.pow(-7, 3));	// -343 (cubes can be negative)
console.log(Math.pow(-7, 0.5)); // NaN (negative numbers don't have a real square root

// due to "even" and "odd" roots laying close to each other,
// and limits in the floating number precision,
// negative bases with fractional exponents always return NaN 
console.log(Math.pow(-7, 1/3)); // NaN

/**********************************************************************Math.random()*******************************************/
// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
// with approximately uniform distribution over that range — which you can then scale to your desired range. 
/*
Syntax
Math.random()
*/

console.log(Math.floor(Math.random()*3)); //2

function getRandomInt(x){
    return Math.floor(Math.random() * 3);
};

console.log(getRandomInt(3));  //1
console.log(getRandomInt(1));  //0

console.log(Math.random());  //0.8810003253723588

// Getting a random number between two values
function getRandomInt(max,min){
    return Math.floor(Math.random() * (max-min) + min); 
};

console.log(getRandomInt(10,5));  //7


// Getting a random integer between two values
function getRandomInt(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is
};


console.log(getRandomInt(12.5,20.6));  //15
    
/********************************************************Math.round()****************************************************/
// The Math.round() function returns the value of a number rounded to the nearest integer.
/*
Syntax
Math.round(x)
*/

console.log(Math.round(0.9));  //1

console.log(Math.round(5.95));  //6
console.log(Math.round(5.5));  //6
console.log(Math.round(5.05));  //5

console.log(Math.round(-5.05));  //-5
console.log(Math.round(-5.5))   //-5
console.log(Math.round(-5.95)); //-6


console.log(Math.round( 20.49)); // 20
console.log(Math.round(	20.5));	//	21
console.log(Math.round(	42));	//	42
console.log(Math.round(-20.5 )); // -20 Math.round(-20.51); // -21

/*********************************************************************************Math.sqrt()***********************************/
// The Math.sqrt() function returns the square root of a number.
/*
Syntax
Math.sqrt(x)
*/

function calcHypotenuse(a,b){
    return Math.sqrt((a*a) + (b*b));
};

console.log(calcHypotenuse(3,4));  //5
console.log(calcHypotenuse(5,12));  //13
console.log(calcHypotenuse(0,0));  //0

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.414213562373095
console.log(Math.sqrt(1));	//	1
console.log(Math.sqrt(0));	//	0
console.log(Math.sqrt(-1));	//	NaN
console.log(Math.sqrt(-0));	//	-0

/******************************************************************************Math.trunc()***********************************************/
// The Math.trunc() function returns the integer part of a number by removing any fractional digits.
/*
Syntax
Math.trunc(x)
*/

console.log(Math.trunc(13.37)); // expected output: 13
console.log(Math.trunc(42.84)); // expected output: 42
console.log(Math.trunc(0.123)); // expected output: 0
console.log(Math.trunc(-0.123));  // expected output: -0


console.log(Math.trunc(13.37));	// 13
console.log(Math.trunc(42.84));	// 42
console.log(Math.trunc(0.123));	// 0
console.log(Math.trunc(-0.123));	// -0
console.log(Math.trunc('-1.123')); // -1 
console.log(Math.trunc(NaN));	// NaN 
console.log(Math.trunc('foo'));	// NaN 
console.log(Math.trunc());	// NaN


