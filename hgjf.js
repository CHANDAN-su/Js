console.log("resursion");

//count 1 to 10

function count(){
    let num = 0;
    for(let i = 0; i<=10;i++){
        console.log(i);
    }
};
count();


let num1 = 0;
function count1(){
    if(num1 > 9){
        return 1;
    }
    num1++;
    console.log(num1);
    count1();
}
count1();

//5*4*3*2*1  = 120
function factoral(number){
    let counter = 1;
    for(let i = number;i>0;i--){
        counter = counter*i
    }
    console.log(counter);
};
factoral(5);

function factoral1(number){
    if(number==1){
        return 1;
    }
    return number*factoral1(number-1);
}
 let x = factoral1(5);
 console.log(x);

 function iter(number){
     let arr = [0,1];
     let sum = 0;
     for(let i = 0;i<number;i++){
         sum = arr[i]+arr[i+1];
         arr.push(sum);
     }
     console.log(arr);
 };
 iter(6);  

 function add(number){
     if(number < 2){
         return 1;
     }
     return add(number-1) + add(number-2);
 }

 let  y = add(6);
 console.log(y);


 function begin(number){
     if(number<0){
         return 1;
     }
     console.log("Begain " +number);
     begin(number-1);
     console.log("end " + number);
 }
 begin(10);