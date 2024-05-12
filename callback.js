// callback ->A callback is a function passed as an argument to another function.

// function cal(sumOfnum){
//     console.log("cal:"+sumOfnum);

// }
// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }

//   myCalculator(5, 5, cal);\\\



const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const num = removeNeg(myNumbers, (x) => x <= 0);

// Display Result
console.log(num)

// Keep only positive numbers
function removeNeg(numbers, callback) {
    const myArray = [];
    for (const x of numbers) {
        if (callback(x)) {
            myArray.push(x);

        }
    }
    return myArray;
}