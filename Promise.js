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
        // reject("Here is a failur");
//     }
// });

// const onfillment = (result) => {
//     console.log(result);
// };

// const onReject = (error) => {
//        console.log(error);
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

// prom3(false).then(result => console.log(result)).catch(error => console.log(error));  
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


// const promise19 = new Promise((resole, reject) => {
//     setTimeout(() => {
//         resole("foo");
//     }, 500);
// });

// promise19.then((resut) => console.log(resut));  //foo

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

// const promise21 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!")
//     }, 2000);
// });

// promise21.then((result) => console.log(result));  //Success


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

// const promise31 = new Promise((resole, reject) => {
//     throw "Uh-oh!";
// });

// promise31.catch((error) => console.log(error));  //Uh-oh!

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


// // If it is resolved 
// const p6 = Promise.resolve("calling text");

// const p7 = p6.catch((reason) => {
//     //This is never called
//     console.error("catch p1!");
//     console.log(reason);
// });


// p7.then(function (value) {
//     console.log("next promise's onFulfilled"); /* next promise's onFulfilled */
//     console.log(value); /* calling next */
// }, function (reason) {
//     console.log("next promise's onRejected");
//     console.log(reason);
// });


// /**************************************Promise.prototype.finally()**********************************************/
// // The finally() method of a Promise schedules a function, the callback function, to be called when the promise is settled. Like then() and catch()
// /*
// Syntax
// promise.finally(onFinally);
// promise.finally(() => {
//    // Code that will run after promise is settled (fulfilled or rejected)
// });
// */


// function checkmail(){
//     return new Promise((resolve,reject) => {
//         if(Math.random() < 5){
//             resolve('Mail has arrived');
//         }else{
//             reject(new Error('Failed to arrive'));
//         };
//     });
// };

// checkmail().then((mail) => {
//     console.log(mail);
// }).catch((err) => {
//     console.log(err);
// }).finally(() =>{
//     setTimeout(() => {
//         console.log('Experiment completed');
//     }, 3000);

// });


// /***********************************************Promise.resolve()**********************************************/
// // The Promise.resolve() method returns a Promise object that is resolved with a given value. 
// /*
// Syntax
// Promise.resolve(value);
// */


// // Using the static Promise.resolve method
// Promise.resolve("Success!").then((value) =>{
//     console.log(value);  //Success!
// }).catch((e) => {
//     // not called
//     console.log(e);
// });


// // Resolving an array
// const promise8 = Promise.resolve([1,2,3]);
// promise8.then((v) => {
//     console.log(v[0]);  //1
// });


// // Resolving another Promise
// const original = Promise.resolve(33);
// const cast = Promise.resolve(original);
// cast.then((v) =>{
//     console.log(`Value: ${v}`);  //33
// });

// console.log('original === cast ? ' + (original === cast));  //original === cast ? true


// // Resolving thenables and throwing Errors

// // Resolving a thenable object
// const p9 = Promise.resolve({
//     then: function(onFulfill,onReject){
//         onFulfill("fulfilled");
//     }
// });

// p9.then((v) =>{
//     console.log(v);  //fulfilled
// }).catch((error) =>{
//     console.log(error);
// });

// // Thenable throws before callback
// // Promise rejects

// const thenable = {then : function(resole){
//     throw new TypeError('Throwing');
//     console.log('Resolving');
// }};

// // const promise9 = Promise.resole(thenable);
// // promise9.then(function(v) {
// //     // not called
// //   }, function(e) {
// //     console.error(e); // TypeError: Throwing
// //   });


//   // Thenable throws after callback
// // Promise resolves
// const thenable1 = { then: function(resolve) {
//     resolve('Resolving');
//     throw new TypeError('Throwing');
//   }};

//   const p10 = Promise.resolve(thenable1);
//   p10.then(function(v) {
//     console.log(v); // "Resolving"
//   }, function(e) {
//     // not called
//   });


//   let thenable2 = {
//     then: (resolve, reject) => {
//       resolve(thenable)
//     }
//   }
// //   console.log(Promise.resolve(thenable2));  // Will lead to infinite recursion.



// /*********************************************Promise.reject()****************************************************/
// // The Promise.reject() method returns a Promise object that is rejected with a given reason.
// /*
// Syntax
// Promise.reject(reason);
// */


// // Using the static Promise.reject() method
// Promise.reject(new Error("fail")).then(function () {
//     console.log("resolved");
// }, function (error) {
//     console.log(error)
// });  //Error: fail


// function resolved(result) {
//     console.log("Resoled");
// };

// function rejected(error) {
//     console.log(error);
// };

// Promise.reject(new Error("Fail")).then(resolved, rejected);  //Error: fail




// /******************************************Promise.all()"*******************************************" */
// // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's
// //  promises have resolved, or if the input iterable contains no promises. 
// /*
// Syntax
// Promise.all(iterable);
// */



// const promise18 = Promise.resolve(3);
// const Promise2 = 42;
// const Promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 100);
// });

// Promise.all([promise18, Promise2, Promise3]).then((result) =>
//     console.log(result));  //[3, 42, 'foo']




// // If the iterable contains non-promise values, they will be ignored

// // this will be counted as if the iterable passed is empty, so it gets fulfilled
// const p11 = Promise.all([1, 2, 3]);

// // this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
// const p12 = Promise.all([1, 2, 3, Promise.resolve(444)]);

// // this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
// const p13 = Promise.all([1, 2, 3, Promise.reject(555)]);


// // using setTimeout we can execute code after the stack is empty
// setTimeout(() => {
//     console.log(p11);
//     console.log(p12);
//     console.log(p13);
// });
// // logs
// // Promise { <state>: "fulfilled", <value>: Array[3] }
// // Promise { <state>: "fulfilled", <value>: Array[4] }
// // Promise { <state>: "rejected", <reason>: 555 }




// // Asynchronicity or synchronicity of Promise.all
// const resolvedPromisesArray = [Promise.resolve(33), Promise.resolve(44)];

// const p14 = Promise.all(resolvedPromisesArray);
// // immediately logging the value of p
// // console.log(p14);

// setTimeout(() => {
//     console.log('the stack is now empty');
//     console.log(p14);
// });
// // logs, in order:
// // Promise { <state>: "pending" }
// // the stack is now empty
// // Promise { <state>: "fulfilled", <value>: Array[2] }

// // The same thing happens if Promise.all rejects:
// const mixedPromisesArray = [Promise.resolve(33), Promise.reject(44)];

// const p15 = Promise.reject(mixedPromisesArray);
// setTimeout(() => {
//     console.log("the stack is now empty");
//     console.log(p15);
// });
// // logs
// // Promise { <state>: "pending" }
// // the stack is now empty
// // Promise { <state>: "rejected", <reason>: 44 }

// // But, Promise.all resolves synchronously if and only if the iterable passed is empty:
// const p16 = Promise.all([]); // will be immediately resolved
// const p17 = Promise.all([1337, "hi"]); // non-promise values will be ignored, but the evaluation will be done asynchronously
// console.log(p16);
// console.log(p17)
// setTimeout(function () {
//     console.log('the stack is now empty');
//     console.log(p16);
// });

// // logs
// // Promise { <state>: "fulfilled", <value>: Array[0] }
// // Promise { <state>: "pending" }
// // the stack is now empty
// // Promise { <state>: "fulfilled", <value>: Array[2] }



// // Promise.all fail-fast behavior
// const pr1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("one");
//     }, 1000);
// });

// const pr2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("two");
//     }, 2000);
// });

// const pr3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("three");
//     }, 3000);
// });

// const pr4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("four");
//     }, 4000);
// });

// const pr5 = new Promise((resolve, reject) => {
//     reject(new Error("reject"));
// });

// // Using .catch:
// Promise.all([pr1, pr2, pr3, pr4, pr5]).then(value => {
//     console.log(value);
// }).catch(error => {
//     console.log(error.message);
// });
// ////"reject"


// // It is possible to change this behavior by handling possible rejections:
// const p18 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('p1_delayed_resolution'), 1000);
// });

// const p19 = new Promise((resolve, reject) => {
//     reject(new Error('p2_immediate_rejection'));
// });

// Promise.all([
//     p18.catch(error => { return error }),
//     p19.catch(error => { return error }),
// ]).then(values => {
//     console.log(values[0]) // "p1_delayed_resolution"
//     console.error(values[1]) // "Error: p2_immediate_rejection"
// })



// /***************************************************************Promise.allSettled()***************************** */
// //   The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, 
// //   with an array of objects that each describes the outcome of each promise.
// /*
// Syntax
// Promise.allSettled(iterable);
// */

// const promise10 = Promise.resolve(39);
// const promise11 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("foo");
//     }, 1000);
// });

// const Promise12 = [promise10, promise11];

// Promise.allSettled(Promise12).then((result) => {
//     result.forEach(result => {
//         console.log(result.status)
//     });
// });
// // expected output:
// // "fulfilled"
// // "rejected"

// Promise.allSettled(Promise12).then((result) => {
//     console.log(result);
// });
// // {status: 'fulfilled', value: 39}
// // {status: 'rejected', reason: 'foo'}

// // Using Promise.allSettled
// Promise.allSettled([Promise.resolve(33), new Promise((resolv, reject) => {
//     setTimeout(() => {
//         resolv(66);
//     }, 1000);
// }), Promise.resolve(99),
// Promise.reject(new Error("an error"))
// ]).then((result) => {
//     result.forEach((result) => console.log(result.status));
// });

// // [
// //   {status: "fulfilled", value: 33},
// //   {status: "fulfilled", value: 66},
// //   {status: "fulfilled", value: 99},
// //   {status: "rejected",  reason: Error: an error}
// // ]

// /*****************************************************Promise.race()*****************************8*/
// // The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an 
// // iterable fulfills or rejects, with the value or reason from that promise.
// /*
// // Syntax
// // Promise.race(iterable);
// // */

// const promise12 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("one");
//     }, 6000);
// });

// const promise13 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("two");
//     }, 2000);
// });

// Promise.race([promise12, promise13]).then((result) => {
//     console.log(result);
// });

// // expected output: "two"

// // Using Promise.race – examples with setTimeout
// const pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("one");
//     }, 500);
// });

// const pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("two");
//     }, 100);;
// });

// Promise.race([pro1, pro2]).then((resut) => {
//     console.log(resut);  //two
// });

// const pro3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("three");
//     }, 100);
// });

// const pro4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("four"));
//     }, 500);
// });

// Promise.race([pro3, pro4]).then((resut) => {
//     console.log(resut);  //three
// }).catch((error) => {
//     console.log(error);  //not called
// });

// const pro5 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("five");
//     }, 500);
// });

// const pro6 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("six"));
//     }, 100);
// });

// Promise.race([pro5, pro6]).then((result) => {
//     console.log(result);  //Not called
// }).catch((err) => {
//     console.log(err);  // "six"
// });

// // Comparison with Promise.any
// // Promise.race takes the first settled Promise.

// const pro7 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });

// const pro8 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'two');
// });

// Promise.race([pro7, pro8]).then((value) => {
//     console.log('succeeded with value:', value);
// }).catch((reason) => {
//     // Only promise1 is fulfilled, but promise2 is faster
//     console.log('failed with reason:', reason);
// });
// // expected output: "failed with reason: two"

// //Promise.any takes the first fulfilled Promise.

// const pro9 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
// });
// const pro10 = new Promise((resolve, reject) => {
//     setTimeout(reject, 100, 'two');
// });
// Promise.any([pro9, pro10]).then((value) => {
//     // Only promise1 is fulfilled, even though promise2 settled sooner
//     console.log('succeeded with value:', value);
// }).catch((reason) => {
//     console.log('failed with reason:', reason);
// });
// // expected output: "succeeded with value: one"

// /*******************************************************Promise.any()*********************************/
// // Promise.any() takes an iterable of Promise objects. It returns a single promise that resolves as soon as 
// // any of the promises in the iterable fulfills, with the value of the fulfilled promise.
// /*
// Syntax
// Promise.any(iterable);
// */


// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise2, promise3];

// Promise.any(promises).then((value) => console.log(value));  // expected output: "quick"

// // First to fulfill
// const pErr = new Promise((resolve, reject) => {
//     reject("Always fails");
// });

// const pSlow = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "Done eventually");
// });

// const pFast = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "Done quick");
// });

// Promise.any([pErr, pSlow, pFast]).then((value) => {
//     console.log(value);
//     // pFast fulfills first
// });  // expected output: "Done quick"

// // Rejections with AggregateError
// const pErr1 = new Promise((resolve, reject) => {
//     reject('Always fails');
// });

// Promise.any([pErr1]).catch((err) => {
//     console.log(err);
// });  // expected output: "AggregateError: No Promise in Promise.any was resolved"


// /**************************************************************async function expression*******************************************************/
// // An async function is a function declared with the async keyword, and the await keyword is permitted within it. 
// // The async function keyword can be used to define async functions inside expressions.
// /*
// Syntax
// async function [name]([param1[, param2[, ..., paramN]]]) {
//   statements
// }
// */

// Return value
// A Promise which will be resolved with the value returned by the async function, or rejected with an exception thrown from, or uncaught within, the async function.

function resolveAfter2Second(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("resolved")
        }, 2000);
    })
};

/*
resolveAfter2Seconds().then((result) =>{
    console.log(result)
});
*/

// async function asyncCall(){
//     console.log("calling");

//     const result = await resolveAfter2Seconds();
//     console.log(result);
// };

// asyncCall();
// /*
// calling
// resolved
// */


// //Note
// const p20 = new Promise((res,rej) =>{
//     res(1);
// });

// async function asyncReturn(){
//     return p20;
// };

// function basicReturn(){
//     return Promise.resolve(p20);
// };

// console.log(p20 === asyncReturn());  //false
// console.log(p20=== basicReturn());  //true



// Async functions and execution order

function resolveAfter2Seconds(){
    console.log("starting slow promise");
    return new Promise((res,rej) => {
        setTimeout(() => {
            console.log("slow promise is done");
            res("slow"); 
        }, 2000);
    });
};

function resolveAfter1Second(){
    console.log("starting fast promise");
    return new Promise((res,rej) => {
        setTimeout(() => {
        console.log("fast promise is done")
        res("fast");
        }, 1000);
    });
};

async function sequentialStart(){
    console.log('==SEQUENTIAL START==');

      // 1. Execution gets here almost instantly
    const slow = await resolveAfter2Seconds();
    console.log(slow); // 2. this runs 2 seconds after 1

    const fast = await resolveAfter1Second();
    console.log(fast);  // 3. this runs 3 seconds after 1.
}

// sequentialStart();

async function concurrentStart(){
    console.log("'==CONCURRENT START with await=='")

    const slow = resolveAfter2Seconds();
    const fast = resolveAfter1Second();

      // 1. Execution gets here almost instantly
        console.log(await slow); // 2. this runs 2 seconds after 1.
        console.log(await fast);  // 3. this runs 2 seconds after 1., immediately after 2., since fast is already resolved
};

// concurrentStart();

function concurrentPromise(){
    console.log("==CONCURRENT START with Promise.all==");
    return Promise.all([resolveAfter2Seconds(),resolveAfter1Second()]).then((message) => {
        console.log(message[0]);  //slow
        console.log(message[1]);  //fast
    })
};

concurrentPromise();

/*
async function parallel(){
    console.log("==PARALLEL with await Promise.all==");
  // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
         (async () => console.log(await resolveAfter1Second()))()       
    ])
};
*/


function resolveAfter2Seconds1(x){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(x)
        }, 2000);
    })
};

const add = async function(x){  // async function expression assigned to a variable
    let a = await resolveAfter2Seconds1(20);
    let b = await resolveAfter2Seconds1(30);
    return x+a+b;
};

add(10).then((v) => {
    console.log(v);  //// prints 60 after 4 seconds.
});

(async function(x) { // async function expression used as an IIFE
    let p_a = resolveAfter2Seconds1(20);
    let p_b = resolveAfter2Seconds1(30);
    return x + await p_a + await p_b;
  })(10).then(v => {
    console.log(v);  // prints 60 after 2 seconds.
  });



/*************************************************************await*********************************************/
// The await operator is used to wait for a Promise. It can only be used inside an async function within regular JavaScript code; 
// however it can be used on its own with JavaScript modules.
/*
Syntax
[rv] = await expression
*/

// Awaiting a promise to be fulfilled
function resolveAfter2Seconds2(x){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(x)
        }, 2000);
    })
};

async function f1(){
    let a = await resolveAfter2Seconds2(90);
    console.log(a);
};

f1();  //90

async function f2(){
    const thenable = {
        then: function (reslove,reject){
            reslove("resloved 404");
        }
    }
    console.log(await thenable);  //resloved 404
};

f2();

// Conversion to promise
// If the value is not a Promise, it converts the value to a resolved Promise, and waits for it.
async function f3() {
    var y = await 20;
    console.log(y); // 20
}
f3();

// Promise rejection
// If the Promise is rejected, the rejected value is thrown.
async function f4(){
    try {
        var z1 = await Promise.reject(110);
    } catch (e) {
        console.log(e);  //110
    } 
}

f4();

// Handling rejected promises
// Handle rejected Promise without try block.
// var response = await promisedFunction().catch((err) => { console.error(err); });
// response will be undefined if the promise is rejected

// Top level await
// fetch request
/*
const colors = fetch('../data/colors.json')
  .then(response => response.json());

export default await colors;
*/