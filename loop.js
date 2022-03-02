console.log("Loops");

for(let test = 0 ; test<5;test++){
    // console.log("Walking east one step");  //5 time run (Walking east one step)
}

// For loop 

for(let i = 0; i<10;i++){
    // console.log(i);  // Output::- 1,2,3.....9
}

for(let i = 0; i>100;i++){
    // console.log(i);  // Output:-    not run (condition false)
}

let str = "";
for(let i = 0;i<9;i++){
    str = str + i;
}
// console.log(str);  // Output:-   0123456789



// Optional for initialization
let x = 1;
for(;x<12;x++){
    // console.log(x); // Output:-  0,1,2...11
}


// Optional for condition
for(let y = 2; ;y++){
    // console.log(y);  // Oupput:-  2,3...6
    if(y > 5) break;
    
}


// Optional for condition and final-expression
for(let z = 0; ; ){
    if(z > 10)break;
    z++;
    // console.log(z);  // Output:-  0,1,2.....11
}


// Optional for initialization , condition and final-expression
let i = 0;
for( ; ; ){
    if(i>5)break;
    i++;
    // console.log(i);  // Output:-    1,2,3....6
}

// While
let x1 = 0;
while(x1<4){
    x1++;
    // console.log(x1);  //,2,3,4
}


let i1 = 0;
while(i1<=9){
    i1++;
    // console.log(i1);  // Output:- 1,2,3,4......10
}



let c = 0;
let d = 0;
while(c<9){
    c++;
    c+=d;
    // console.log(c);  // Outpu:-  1,2,3....9
}




// do...while 
// console.log("do.while");

let y = 7;
do{
    y++;
    // console.log(y);  // Output:-  8  
}while(y<5);




let a2 = "";
let b2 = 0;
do{
    b2++;
    a2 = a2+b2;
    // console.log(a2); 
}while(b2<9);

/*
Output:-    1
            12
            123
            1234
            12345
            123456
            1234567
            12345678
            123456789
*/


let a = "";
let b = 0;
do{
    b++;
    a = a+b;
}while(b<9);
// console.log(a);  // Output:- 123456789 



// Break Statement


// break Statement with while 
let x3 = "";
let i3 = 0;
while(i3<9){
    i3++;
    x3 = x3+i3;
    if(i3===6){
        // console.log("End");
        break;
    }
    // console.log(i3); // Output:-  1,2,3  
}



// break Statement with switch
let x4 = 20;
switch (x4) {
    case 18:
        // console.log("This is 18"); 
        break

    case 20:
        // console.log("This is 20");  //this is 20 (condition true)
        break;

    case 22:
        // console.log("This is 22");
        break;

    case 24:
        // console.log("This is 24");
        break;

    default:
        // console.log("This is not number");
        break;
}


function testdesk(x8){
        let i8 = 0;
        while(i8<9){
            if(i8===4){
                break;
            }
            i8 = i8+ 1
        }
        return i8*x6
}


// continue
let a5 = "";
for(let b5 = 0;b5<9;b5++){
       if(b5===4){
           continue;
       } 
       a5 = a5+b5;
    //    console.log(b5); //0,1,2,3,5,6,7,8
}







// for...in 
// console.log("foe..in");
let x19 = {
    name: "chandan",
    Father: "Ram",
    marks:98
};

for(let y19 in x19){
    // console.log(y19 + " "+ x19[y19]);
}
/*
// Output:-
             name chandan
            Father Ram
            marks 98 
*/


let num = {a:1,b:2,c:3,d:4,e:5}

for(let num1 in num){
    // console.log(`${num1} : ${num[num1]}`);
}


for(let z in x19){
    // console.log(`${z} :${x19[z]}`);
}/*
// Output:-
             name chandan
            Father Ram
            marks 98 
*/






// for...of
console.log("for..of");
let arr = [89,56,87,86,80,65];

for(let i of arr){
    // console.log(i);  // Output:-   89 , 56 , 87 , 86 , 80, 65
}



for(let a in arr){
    // console.log(a);  // Output:-   0 , 1 , 2 , 3 , 4 , 5
}




let apl = ["A","B","C","D","E","F","G","H"];

for(let apl1 of apl){
    // console.log(apl1);
}


let str1 = "chandan";

for(let str2 of str1){
    // console.log(str2); //c,h,a,n,d,a,n
}




let add = [23,67,12,98,56];

for(let add1 of add){
    add1 = add1+1;
    console.log(add1);  //24,68,13,99,56
}

// old method 




