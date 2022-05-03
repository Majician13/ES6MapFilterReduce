var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
//USING MAP FUNCTION:
// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//SIMPLIFIED MAP FUNCTION:
//const newNumbers = numbers.map(function(x) {
//   return x*2;
// });
// console.log(newNumbers);

//USING FOREACH FUNCTION:
// var newNumbers = [];

// numbers.forEach(function (x){
//   newNumbers.push(x*2);
//   });
// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
//USING FILTER:
// const newNumbers = numbers.filter(function (num) {
//   return num > 10;
// });
// console.log(newNumbers);

//USING FOREACH:
// var newNumbers = [];
// numbers.forEach(function (num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// });
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
//USING FOREACH TO REDUCE:
// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber;
// });
// console.log(newNumber);

//USING REDUCE:
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// });
// console.log(newNumber);

//Find - find the first item that matches from an array.
//USING FIND:
// var newNumber = numbers.find(function(num){
//   return num > 10;
// })
// console.log(newNumber);

//FindIndex - find the index of the first item that matches.
//USING FINDINDEX:
// var newNumber = numbers.findIndex(function(num){
//   return num > 10;
// })
// console.log(newNumber);
