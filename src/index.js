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

//CHALLENGE -- Import emojipedia and use the above as well as JS .substring() to print only the "meanings" as well as only the first 100 characters of the "meanings". Should look like:
//[""You can do that!" or "I feel strong!" Are with tense biceps. Also used in connection with doing spo", "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenm", "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The "]
import emojipedia from "./emojipedia";

// console.log(emojipedia);

var meanings = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});
console.log(meanings);
