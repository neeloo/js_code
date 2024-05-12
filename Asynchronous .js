// Functions running in parallel with other functions are called asynchronous
// use setTimeout(),setInterval()



// This is an asynchronous function********************
// async function myFunction() {
//     // This code will be executed after 2 seconds
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     // This code will be executed after the await
//     console.log('Hello, world!');
//   }

//   // This code will be executed immediately
//   console.log('Start');
//   // This code will start the asynchronous function
//   myFunction();  
//   // This code will be executed immediately
//   console.log('End');


// setTimeout()**
console.log("write afetr 3 second")

setTimeout(myFunction, 3000);
function myFunction() {
console.log("I love You !!") ;
}
