console.log("Conversion in Javascrit");



// Type Conversion 
let marks;
marks = String(90);
console.log(marks, (typeof marks));


let boolean = String(true);
console.log(boolean, (typeof boolean));


let date = String(new Date());
console.log(date, (typeof date));


let arr = String([23,45,67,09,874,76]);
console.log(arr.length, (typeof arr));

let i = 98;
console.log(i,(typeof i.toString()));



let str1 = Number("8776");
console.log(str1, (typeof str1));

let str2 = Number("8gh6576");
console.log(str2, (typeof str2));

let str3= Number(true);
console.log(str3, (typeof str3));

let str4 = Number(false);
console.log(str4, (typeof str4));

let str5 = Number([76,09,67,564]);
console.log(str5, (typeof str5));



let number = parseFloat("90.787874");
console.log(number.toFixed(2), (typeof str5));


// Type Coercion 

let myvar = Number("789");
let strvar = 11;
console.log(myvar + strvar);

