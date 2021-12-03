let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

function log(item){
    console.log(item)
}
// Add a new element ('Papaya') into fruits array at end
fruits.push("Papaya");

// Remove the last element from fruits array
fruits.pop();

// Log the current length of fruits array
log(fruits.length)//4
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0];
log(fruits)


// Log the element on index 0 and 1
log(fruits[0])
log(fruits[1])


// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift();

// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava")

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit')

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
log(fruits[0] === 'Dragon Fruit');
log(fruits[1] === 'Guava');

// Update the value of index 1 to `Pears`
fruits[1] = "Pears"
log(fruits)

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,1, "Kiwi")
fruits.splice(2,1, "Lemon")
log(fruits);

// Remove (slice) all the element from index 5
log(fruits.slice(5))

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
fruits = fruits.concat(moreFruits);

// Log the name of all fruit in console
log(fruits)

// Convert each fruit name to lowercase and log it
fruits.forEach(function(fruit){
    // log(fruit.toLowerCase())
})

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
let lowercaseFruits = fruits.map(fruit => fruit.toLowerCase());
log(lowercaseFruits)

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
log(uppercaseFruits)


let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
log(numbers.flat(1))

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
log(numbersTwo.flat(2))


// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
numbersThree = numbersThree.flat(4)

// Use forEach to log all the elements of numberThree array
numbersThree.forEach(function(number){
    // log(number)
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let doubleNumbers = numbersThree.map(number => number * 2);
log(doubleNumbers)

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
let tripleNumbers = numbersThree.map(number => number * 3);
log(tripleNumbers)
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
let halfNumbers = numbersThree.map(number => number / 2);
log(halfNumbers)
// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.filter(number => (number % 2 !== 0));
log(oddNumbers)

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
let evenNumbers = numbersThree.filter(number => (number % 2 === 0));
log(evenNumbers)

// Find the index of 10 in numbersThree array
log(numbersThree[10])

// Reverse the values of numbersThree array
log(numbersThree.reverse())

// Reverse the values of numbersTwo array
log(numbersTwo.reverse())


// Join all fruits with '-', convert to uppercase and log it
log(fruits.join("-").toUpperCase())

// Join all fruits with '&', convert to lowercase and log it
log(fruits.join("&").toLowerCase())

