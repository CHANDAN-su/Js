// console.log("Promise");


// /*
// const mypromise = new Promise();

// const mypromise1 = new Promise(function(){

// });

// const mypromise2 = new Promise(function (resolve,reject){

// });


// const mypromise3 = new Promise(function (resolve,reject){
//     if(condition){
//         resolve("Here is success");
//     }
//     else{
//         reject("Here is a failur");
//     }
// });

// const onfillment = (result) => {
//     console.log(result);
// };

// const onReject = (error) => {
//     console.log(error);
// };

// mypromise.than(onfillment);
// mypromise3.catch(onReject);

// */


// const complete = true;

// const prom = new Promise(function (resolve, reject) {
//     if (complete) {
//         resolve("Here is success")
//     } else {
//         reject("Here is a failur")
//     }
// });

// console.log(prom);   //Promise {<fulfilled>: 'Here is success'}    jab complete ka value true ho
// // console.log(prom);   //Promise {<rejected>: 'Here is a failur'}    jab complete ka value false ho


// function prom1(complete) {
//     return new Promise(function (resolve, reject) {
//         if (complete) {
//             resolve("Here is success")
//         } else {
//             reject("Here is a failur")
//         }
//     });
// };

// console.log(prom1(true)); //Promise {<fulfilled>: 'Here is success'}
// // console.log(prom1(false));  //Promise {<rejected>: 'Here is a failur'}



// function prom2(complete) {
//     return new Promise(function (resolve, reject) {
//         if (complete) {
//             resolve("Here is success")
//         } else {
//             reject("Here is a failur")
//         }
//     });
// };

// let onFillment = result => console.log(result);
// let onReject = error => console.log(error);

// prom2(true).then(onFillment);  //Here is success
// prom2(false).catch(onReject);  //Here is a failur




// //setimeout use
// function prom3(complete) {
//     return new Promise(function (resolve, reject) {
//         console.log("Fetching data, Please wait");
//         setTimeout(() => {
//             if (complete) {
//                 resolve("Here is success")
//             } else {
//                 reject("Here is a failur")
//             }
//         }, 4000);
//     });
// };

// // prom3(false).then(result => console.log(result)).catch(error => console.log(error));  
// /*
// Fetching data, Please wait
// Here is a failur
// */


// //Exampole
// function prom4(a, b) {
//     return new Promise(function (resolve, reject) {
//         console.log("Fetching data, Please wait");
//         var c = a / b;
//         setTimeout(() => {
//             if (a, b) {
//                 resolve(`Your answer: ${c}`)
//             } else {
//                 reject("Failed calute")
//             }
//         }, 4000);
//     });
// };

// // prom4(5,2).then(result => console.log(result)).catch(error => console.log(error));  
// /*
// Fetching data, Please wait
// Your answer: 2.5
// */




// //Basic Example

// const students = [
//     { Name: "Chandan", Lastname: "Thakur" },
//     { Name: "Ravi", Lastname: "Gupta" }
// ]

// const enrollStudent = (student) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             students.push(student);
//             console.log("Student has been enrolled");
//             const error = false;
//             if (!error) {
//                 resolve();
//             } else {
//                 reject();
//             }
//         }, 2000);
//     })
// };


// function getstudents() {
//     setTimeout(() => {
//         let str = "";
//         students.forEach(function (student) {
//             str += `<li>${student.Name}</li>`
//         })
//         document.getElementById("spa").innerHTML = str;
//         console.log("Students have been fetched")

//     }, 5000);
// }

// let newstudent = { Name: "Kavi", Lastname: "Gupta" }

// // enrollStudent(newstudent).then(getstudents).catch(() => console.log("Some error occured"));

// //same work
// // enrollStudent(newstudent).then(getstudents, () => console.log("Some error occured"));


// /*******************************************Promise() constructor******************************** */
// /*
// Syntax
// new Promise(executor)
// */


// const promise1 = new Promise((resole, reject) => {
//     setTimeout(() => {
//         resole("foo");
//     }, 500);
// });

// promise1.then((resut) => console.log(resut));  //foo

// /******************************************************************Promise.prototype.then()*************************************/
// // The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.

// /*
// Syntax
// p.then(onFulfilled[, onRejected]);

// p.then(value => {
//   // fulfillment
// }, reason => {
//   // rejection
// });
// */

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!")
//     }, 2000);
// });

// promise2.then((result) => console.log(result));  //Success


// const resolvedProm = Promise.resolve(33);

// const thenProm = resolvedProm.then((result) => {
//     console.log("this gets called after the end of the main stack. the value received and returned is: " + result);
//     return result;
// });

// console.log(thenProm);  //this gets called after the end of the main stack. the value received and returned is: 33

// setTimeout(() => {
//     console.log(thenProm);
// }, 2000);


// // Examples

// // When a value is returned from within a then handler
// const p1 = new Promise((resole, reject) => {
//     resole(1);
// });

// p1.then(function (value) {
//     console.log(value);    //1
//     return value + 1;
// }).then(function (value) {
//     console.log(value + "- A synchronous value works")  //2- A synchronous value works
// });

// p1.then(function (value) {
//     console.log(value);  //1
// });


// // A then call will return a rejected promise if the function throws an error or returns a rejected Promise.
// // Promise.resolve().then(() => {
// //     throw new Error("Oh no!");
// // }).then(() => {
// //     console.log('Not called.');
// // },error => {
// //     console.error('onRejected function called: ' + error.message);
// // });

// Promise.reject().then(() => 99, () => 42)
//     .then(solution => console.log('Resolved with ' + solution));  //Resolved with 42

// // If onFulfilled returns a promise, the return value of then will be resolved/rejected by the promise.

// function resolveLater(resole, reject) {
//     setTimeout(() => {
//         resole(10);
//     }, 1000);
// };

// function rejectLater(resole, reject) {
//     setTimeout(() => {
//         reject(new Error("Error"));
//     }, 1000);
// };

// const p2 = Promise.resolve("foo");
// const p3 = p2.then(() => {
//     return new Promise(resolveLater);
// });

// p3.then((v) => {
//     console.log("resolved", v);  //resolved 10
// }, (e) => {
//     //not called
//     console.log('rejected', e)
// });



// // const p4 = promise.reject("bar");

// const p5 = p2.then(() => {
//     return new Promise(rejectLater);
// });

// p5.then((v) => {
//     console.log("resolved", v);   //not called
// }, (e) => {
//     console.log('rejected', e);  //rejected Error: Error
// });


// /***********************************************************************Promise.reject()********************************************/
// // The Promise.reject() method returns a Promise object that is rejected with a given reason.
// /*
// Syntax
// p.catch(onRejected);
// p.catch(function(reason) {
//    // rejection
// });
// */

// const promise3 = new Promise((resole, reject) => {
//     throw "Uh-oh!";
// });

// promise3.catch((error) => console.log(error));  //Uh-oh!

// // Using and chaining the catch method
// const promise4 = new Promise((resole, reject) => {
//     resole("Success!");
// });

// promise4.then((value) => {
//     console.log(value);  //Success!
//     throw new Error("'oh, no!'");
// }).catch((e) => {
//     console.error(e.message); //Promise.js:324 'oh, no!'
// }).then(() => console.log('after a catch the chain is restored'),  //after a catch the chain is restored
//     () => console.log('Not fired due to the catch'));


// // The following behaves the same as above
// promise4.then(function (value) {
//     console.log(value); //Success!
//     return Promise.reject('oh, no!');
// }).catch((e) => console.error(e))  //Promise.js:324 'oh, no!'
//     .then(() => console.log('after a catch the chain is restored'),  //after a catch the chain is restored
//         () => console.log('Not fired due to the catch'));



// // Gotchas when throwing errors

// // Throwing an error will call the catch method most of the time
// const promise5 = new Promise(function (resole, reject) {
//     throw new Error('Uh-oh!');
// });

// promise5.catch(function (e) {
//     console.error(e);  //Promise.js:347 Error: Uh-oh!
// });


// // Errors thrown inside asynchronous functions will act like uncaught errors
// const promise6 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         throw new Error('Uncaught Exception!');
//     }, 1000);
// });

// promise6.catch(function (e) {
//     console.error(e); // This is never called  (output :- Uncaught Error: Uncaught Exception!)
// });



// // Errors thrown after resolve is called will be silenced
// const promise7 = new Promise(function (resolve, reject) {
//     resolve();
//     throw new Error('Silenced Exception!');
// });

// promise7.catch(function (e) {
//     console.error(e); // This is never called
// });


// If it is resolved 
const p6 = Promise.resolve("calling text");

const p7 = p6.catch((reason) => {
    //This is never called
    console.error("catch p1!");
    console.log(reason);
});


p7.then(function (value) {
    console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
    console.log(value); /* calling next */
}, function (reason) {
    console.log("next promise's onRejected");
    console.log(reason);
});


/**************************************Promise.prototype.finally()**********************************************/
// The finally() method of a Promise schedules a function, the callback function, to be called when the promise is settled. Like then() and catch()
/*
Syntax
promise.finally(onFinally);
promise.finally(() => {
   // Code that will run after promise is settled (fulfilled or rejected)
});
*/


function checkmail(){
    return new Promise((resolve,reject) => {
        if(Math.random() < 5){
            resolve('Mail has arrived');
        }else{
            reject(new Error('Failed to arrive'));
        };
    });
};

checkmail().then((mail) => {
    console.log(mail);
}).catch((err) => {
    console.log(err);
}).finally(() =>{
    setTimeout(() => {
        console.log('Experiment completed');
    }, 3000);
    
});


/***********************************************Promise.resolve()**********************************************/
// The Promise.resolve() method returns a Promise object that is resolved with a given value. 
/*
Syntax
Promise.resolve(value);
*/


// Using the static Promise.resolve method
Promise.resolve("Success!").then((value) =>{
    console.log(value);  //Success!
}).catch((e) => {
    // not called
    console.log(e);
});


// Resolving an array
const promise8 = Promise.resolve([1,2,3]);
promise8.then((v) => {
    console.log(v[0]);  //1
});


// Resolving another Promise
const original = Promise.resolve(33);
const cast = Promise.resolve(original);
cast.then((v) =>{
    console.log(`Value: ${v}`);  //33
});

console.log('original === cast ? ' + (original === cast));  //original === cast ? true


// Resolving thenables and throwing Errors

// Resolving a thenable object
const p9 = Promise.resolve({
    then: function(onFulfill,onReject){
        onFulfill("fulfilled");
    }
});

p9.then((v) =>{
    console.log(v);  //fulfilled
}).catch((error) =>{
    console.log(error);
});

// Thenable throws before callback
// Promise rejects

const thenable = {then : function(resole){
    throw new TypeError('Throwing');
    console.log('Resolving');
}};

const promise9 = Promise.resole(thenable);
promise9.then(function(v) {
    // not called
  }, function(e) {
    console.error(e); // TypeError: Throwing
  });


  // Thenable throws after callback
// Promise resolves
const thenable1 = { then: function(resolve) {
    resolve('Resolving');
    throw new TypeError('Throwing');
  }};
  
  const p10 = Promise.resolve(thenable1);
  p10.then(function(v) {
    console.log(v); // "Resolving"
  }, function(e) {
    // not called
  });


  let thenable2 = {
    then: (resolve, reject) => {
      resolve(thenable)
    }
  }
//   console.log(Promise.resolve(thenable2));  // Will lead to infinite recursion.
