// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

function log(item){
  console.log(item);
}

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
log(numbers.indexOf(101))

// - Find the last index of `9` in numbers
log(numbers.lastIndexOf(9))

// - Convert value of strings array into a sentance like "This is a collection of words"
log(strings.join(" "))

// - Add two new words in the strings array "called" and "sentance"
strings.push("called", "sentence")
log(strings)

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
log(strings.join(" "))

// - Remove the first word in the array (strings)
strings.shift();
log(strings)

// - Find all the words that contain 'is' use string method 'includes'
log(strings.filter(string => string.includes("is")))

// - Find all the words that contain 'is' use string method 'indexOf'
log(strings.filter(string => string.indexOf("is") !== -1))


// - Check if all the numbers in numbers array are divisible by three use array method (every)
log(strings.every(string => string % 3 === 0))

// -  Sort Array from smallest to largest
log([...numbers].sort(function(a,b){
  // return  b - a;
  return a - b;
}))

// - Remove the last word in strings
log(strings.pop())
// - Find largest number in numbers
// log(numbers.sort(function(a, b) {
//   return a - b;
// })[numbers.length - 1]);
let largest=0;
for(let i=0; i<numbers.length; i++){
  if(numbers[i] > largest){
    largest = numbers[i];
  }
}
log("-------"+largest)
// - Find longest string in strings
function longestString(str){
  let longestStr = "";
  for(let i=0; i<str.length; i++){
    if(str[i].length > longestStr.length){
      longestStr = str[i];
    }
  }
  return longestStr;
}
log(longestString(strings))
// - Find all the even numbers
log(numbers.filter(number => number%2 === 0))

// - Find all the odd numbers
log(numbers.filter(number => number%2 !== 0))

// - Place a new word at the start of the array use (unshift)
strings.unshift("xjndns")
log(strings)

// - Make a subset of numbers array [18,9,7,11]
numbers.push([18,9,7,11])
log(numbers)

// - Make a subset of strings array ['a','collection']
strings.push(['a','collection'])
log(strings)
// - Replace 12 & 18 with 1221 and 1881

// - Replace words in strings array with the length of the word
strings = strings.map( string => string.length)
log(strings)
// - Find the sum of the length of words using above question
let sum  = strings.reduce( (acc,string) => {
  return acc + string
})
log(sum)
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
  { firstname: 'Jckd', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
customers.forEach(function(cust, index){
  if(cust.firstname.startsWith("J")){
    log(cust.firstname)
  }
})
// - Create new array with only first name
let firstName = customers.map(cust => cust.firstname);
log(firstName)
// - Create new array with all the full names (ex: "Joe Blogs")
// - Create new array with only first name
let fullName = customers.map(cust => cust.firstname + " "+cust.lastname);
log(fullName)
// - Sort the array created above alphabetically

log(customers.sort())


let vowelArray = [];
for(let i=0; i<customers.length; i++){
  log(">>"+customers[i].firstname, customers[i].firstname.length)
  for(let j=0; j<customers[i].firstname.length - 1; j++){
    if(customers[i].firstname[j].includes("a")|| customers[i].firstname[j].includes("e")|| customers[i].firstname[j].includes("i")|| customers[i].firstname[j].includes("o")|| customers[i].firstname[j].includes("u")){
      vowelArray.push(customers[i])
    }
  }
}
log(vowelArray)