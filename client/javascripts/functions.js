// jshint eversion: 7

//fill an array with the numbers from start to stop, in steps of step
let fillArray = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

//create an array of the numbers 1 - 100
let arrOf1To100 = fillArray(1, 100, 1);

//log the array for inspection
console.log(arrOf1To100);

//req. 4b
let bitBatBotOrNot = (n) => {
   let result = "";
   if(n % 3 ==0) {
     result = `${result}Bit`;
   }
   if(n % 5 ==0) {
     result = `${result}Bat`;
   }
   if(n % 7 ==0) {
     result = `${result}Bot`;
   }
   else if(n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
     result = `${result}Not`;
 }
   return result;
};

//req. 4c
let findAllBitBatBotOrNots1 = (arr) => {
  let resultArr = [];
  resultArr = arr.map(n => {
    return `${n}: ${bitBatBotOrNot(n)}`;
  });
  console.log(resultArr);
}

//req 4d
let findAllBitBatBotOrNots2 = (arr) => {
  let result = "";
  var newArr =[];
  for (var i = 0; i < arr.length; i++) {
    result = `${bitBatBotOrNot(arr[i])}`;
  newArr.push(`${arr[i]}: ${result}`);
 };
   console.log(newArr);
}

//req 4e
let findAllBitBatBotOrNots3 = (arr) => {
  let result = "";
  var newArr =[];
  for (n of arr) {
    result = `${bitBatBotOrNot(n)}`;
  newArr.push(`${n}: ${result}`);
 };
   console.log(newArr);
}

//req 4f
let findAllBitBatBotOrNots4 = (arr) => {
  let result = "";
  var newArr =[];
  arr.forEach((n) => {
    result = `${bitBatBotOrNot(n)}`;
newArr.push(`${n}: ${result}`);
})
console.log(newArr);
 };

//test the functions

findAllBitBatBotOrNots1(arrOf1To100)

findAllBitBatBotOrNots2(arrOf1To100)

findAllBitBatBotOrNots3(arrOf1To100)

findAllBitBatBotOrNots4(arrOf1To100)
