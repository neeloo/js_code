/** JavaScript Promises_>
 * "Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is an Object that links Producing code and Consuming code
*Promise is the simplest and better approach for handling asynchronous operations efficiently.
 */








let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );


    
// const mypromis = new Promise(function (myval, myerr) {
//     let x = 0;
//     if (x == 0) {
//         myval("ok")
//     }
//     else {
//         myerr("error")
//     }
// });
// mypromis.then(
//     function (value) { console.log(value); },
//     function (error) { console.log(error); }
// );




// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//     resolve("I love You !!");
//   });
//   console.log(await myPromise);
// }

// myDisplay();


/**
 * async makes a function return a Promise
await makes a function wait for a Promise
The await keyword can only be used inside an async function.
 */


async function myDisplay() {
    let myPromise = new Promise(function (resolve) {
        resolve("I love You !!");
    });
    console.log(await myPromise);
}

myDisplay();
