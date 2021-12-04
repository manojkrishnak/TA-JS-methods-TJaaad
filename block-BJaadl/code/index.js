let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

function log(item){
  console.log(item)
}

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(arr){
  return [...words].sort((a,b)=> a.length - b.length).pop()
}

log(findLongestWord(words))


// - Convert the above array "words" into an array of length of word instead of word.
let lengthOfWords = words.map(word =>  word.length);
log(lengthOfWords)

// - Create a new array that only contains word with atleast one vowel.
// function
let voweledArray = words.filter(word =>{
   if(word.includes("a") ||word.includes("e")||word.includes("i") ||word.includes("o") ||word.includes("u") ) 
      return true;
    else
      return false;
  })
log(voweledArray)
// - Find the index of the word "rhythm"
log(words.indexOf("rhythm"))

// - Create a new array that contians words not starting with vowel.
let voweleNotStartingArray = words.filter(word =>{
  if(word.startsWith("a") ||word.startsWith("e")||word.startsWith("i") ||word.startsWith("o") ||word.startsWith("u") ) 
     return false;
   else
     return true;
 })
log(voweleNotStartingArray)

// - Create a new array that contianse words not ending with vowel
let voweleNotEndingArray = words.filter(word =>{
  if(word.endsWith("a") ||word.endsWith("e")||word.endsWith("i") ||word.endsWith("o") ||word.endsWith("u") ) 
     return false;
   else
     return true;
 })
log(voweleNotEndingArray)
let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  let sumArray = 0;
  arr.forEach(function(arr){
    sumArray += arr;
  })
  return sumArray;
}

log(sumArray(numbers))

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let mutlipolyBy3 = numbers.map(number => number * 3);
log(mutlipolyBy3)

// - Create a new array that contains only even numbers
let even = numbers.filter(num => num %2 === 0);
log(even)

// - Create  a new array that contains only odd numbers.
let odd = numbers.filter(num => num %2 !== 0);
log(odd)

// - Create a new array that should have true for even number and false for odd numbers.
let evenOdd = numbers.map(num => num %2 === 0 ? true: false);
log(evenOdd)

// - Sort the above number in assending order.
let sort = numbers.sort(function(a,b){ return a-b})
log(sort)


// - Does sort mutate the original array?
//Yes it mutates the original array

// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc,num) => acc+num);
log(sum)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
let averageNumbers = numbers.reduce((acc, num) => acc + num) / numbers.length;
log(averageNumbers)

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
let averageWordLength = strings.reduce((acc, str) => acc + str.length, 0) / strings.length;
log(averageWordLength)