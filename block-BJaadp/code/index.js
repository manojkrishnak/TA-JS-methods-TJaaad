let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

function log(item){
  console.log(item)
}

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade
let avgGrade = persons.reduce((acc, person) => acc + person.grade, 0) / persons.length;
log(avgGrade)

// Find the average grade of male

// Find the average grade of female

// Find the highest grade

// Find the highest grade in male

// Find the highest grade in female

// Find the highest grade for people whose name starts with 'J' or 'P'

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

function createObj(arr){
  let fruitsCount = {};
  for(let i=0; i<arr.length; i++){
    if(!Object.keys(fruitsCount).includes(arr[i])){
      fruitsCount[arr[i]] = 1;
    }else{
      fruitsCount[arr[i]] = fruitsCount[arr[i]] + 1;
    }
  }
  return fruitsCount
}

let fruitsObj = createObj(fruitBasket);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

// log(Object.keys(fruitsObj))

function fruitsArrayOfArray(obj){
  let arrayOfArray = [];
  let keys = Object.keys(obj);
  for(let i= 0; i< keys.length; i++){
    arrayOfArray.push(
      [
        keys[i], obj[keys[i]]
      ]
    )
  }
  return arrayOfArray;
}

// log(fruitsArrayOfArray(fruitsObj))

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
];

// Using reduce flat data array

function flatArray(arr){
  let newArray = [];
  return arr.reduce((acc, currentValue) => {currentValue
            .map( cv => newArray.push(cv));
                return newArray;}, [])}
// log(flatArray(data));

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

function doubleFlatArray(arr) {
  let newArray = [];
  return arr.reduce((acc, currentValue) => {
    currentValue.map((cv) => (typeof cv !== "object")? newArray.push(cv) : cv.map( v => newArray.push(v)));
    return newArray;
  }, []);
}
log(doubleFlatArray(dataTwo));

/*
Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/


let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

function mathOperations(funcsArr, initialValue){
  let num = initialValue;
  funcsArr.forEach(function(func){
      if(func === increment){
        num += 3;
      }else if(func === "double"){
        num = double(num)
      }else if(func === "decrement"){
        num -= 1;
      }else if(func === "triple"){
        num =  num * 3;
      }else if(func === "half"){
        num =  num / 2;
      }
    })
    return num;
}

log(mathOperations(pipeline, 3));

// let pipeline2 = [
//   increment,
//   half,
//   double,
//   decrement,
//   decrement,
//   triple,
//   double,
//   triple,
//   half,
//   increment,
//   triple,
// ];

// Find the output using pipeline2 the initial value if 8
