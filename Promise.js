console.log("Promise");


/*
const mypromise = new Promise();

const mypromise1 = new Promise(function(){

});

const mypromise2 = new Promise(function (resolve,reject){

});


const mypromise3 = new Promise(function (resolve,reject){
    if(condition){
        resolve("Here is success");
    }
    else{
        reject("Here is a failur");
    }
});

const onfillment = (result) => {
    console.log(result);
};

const onReject = (error) => {
    console.log(error);
};

mypromise.than(onfillment);
mypromise3.catch(onReject);

*/


const complete = true;

const prom = new Promise(function (resolve,reject){
    if(complete){
        resolve("Here is success")
    }else{
        reject("Here is a failur")
    }
});

console.log(prom);   //Promise {<fulfilled>: 'Here is success'}    jab complete ka value true ho
// console.log(prom);   //Promise {<rejected>: 'Here is a failur'}    jab complete ka value false ho


function prom1(complete){
    return new Promise(function (resolve,reject){
        if(complete){
            resolve("Here is success")
        }else{
            reject("Here is a failur")
        }
    });
};

console.log(prom1(true)); //Promise {<fulfilled>: 'Here is success'}
// console.log(prom1(false));  //Promise {<rejected>: 'Here is a failur'}



function prom2(complete){
    return new Promise(function (resolve,reject){
        if(complete){
            resolve("Here is success")
        }else{
            reject("Here is a failur")
        }
    });
};

let onFillment = result => console.log(result);
let onReject = error => console.log(error);

prom2(true).then(onFillment);  //Here is success
prom2(false).catch(onReject);  //Here is a failur




//setimeout use
function prom3(complete){
    return new Promise(function (resolve,reject){
        console.log("Fetching data, Please wait");
        setTimeout( () => {
            if(complete){
                resolve("Here is success")
            }else{
                reject("Here is a failur")
            }
        },4000);
    });
};

prom3(false).then(result => console.log(result)).catch(error => console.log(error));  
/*
Fetching data, Please wait
Here is a failur
*/


//Exampole
function prom4(a,b){
    return new Promise(function (resolve,reject){
        console.log("Fetching data, Please wait");
        var c = a/b;
        setTimeout( () => {
            if(a,b){
                resolve(`Your answer: ${c}`)
            }else{
                reject("Failed calute")
            }
        },4000);
    });
};

prom4(5,2).then(result => console.log(result)).catch(error => console.log(error));  
/*
Fetching data, Please wait
Your answer: 2.5
*/


