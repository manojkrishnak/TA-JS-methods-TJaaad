Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
    - Parameter: a **separator[optional]** which is used to separate the array items. If no separator is passed it takes "," as default value to spearate array items
   - Return: a string with all the array items attached. If the array is empty it returns empty string.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join(); //"1,2,3,4"
     
     let colors = ['red', 'green', 'blue'];
     colors.join("-"); // 'red-green-blue'
     ```
   - `join` method is used to join array items with the seprator passed. If no separator is passed it takes "," as default one.
   - No it does not mutate the original . 
3. `flat`
    - Parameter: a **depth** a number which specifies till what level of depth should the arrays be flattened. 
   - Return: a new array with flattened items.
   - Example:
     ```js
     let numbers = [1, 2, 3, [4,5,6,[7,8, [9,10]]]];
     numbers.flat(Infinity); //[1,2,3,4,5,6,7,8,9,10]
     ```
   - `flat` method is used to flatten multiple levels of tha array into a single array. To this flat() method we need to one param which is optional. If the value is 2, then 2 levels of arrays are flattened. If we dont know on how to many levels(depth) are there then we can use Infinity param which will faltten whole array's into one array.
   - No it does not mutate the original . 
4. `push`
    -Parameters: **value** which is one or more
    -Return: returns the new length of the array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.push(33); //7
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    colors.push("magenta", "tomato"); //7
    ```
    - `push` method when applied on an array adds the element to the end of the array and returns the total length of the array.
    - It **mutates the array**
5. `indexOf`
    -Parameters: **value** which is one or more
    -Return: returns the new length of the array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.push(33); //7
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    colors.push("magenta", "tomato"); //7
    ```
    - `push` method when applied on an array adds the element to the end of the array and returns the total length of the array.
    - It **mutates the array**
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
    -Parameters: No parameters
    -Return: returns the deleted element from the array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.pop(); //1
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    colors.pop(); //"red"
    ```
    - `shift` method when applied on an array deletes the first element of the array and returns it. If array is empty it returns undefined. 
    - It **mutates the array**
11. `splice`
12. `find`
13. `unshift`
    -Parameters: **value** which is one or more
    -Return: returns the new length of the array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.push(33); //7
    console.log(numbers) //[33,1,2, 3, 4, 5, 6]
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    colors.push("magenta", "tomato"); //7
    ```
    - `unshift` method when applied on an array adds the element to the beginning of the array and returns the total length of the array.
    - It **mutates the array**
14. `findIndex`
15. `filter`
16. `flat`
    - Parameter: a **depth** a number which specifies till what level of depth should the arrays be flattened. 
   - Return: a new array with flattened items.
   - Example:
     ```js
     let numbers = [1, 2, 3, [4,5,6,[7,8, [9,10]]]];
     numbers.flat(Infinity); //[1,2,3,4,5,6,7,8,9,10]
     ```
   - `flat` method is used to flatten multiple levels of tha array into a single array. To this flat() method we need to one param which is optional. If the value is 2, then 2 levels of arrays are flattened. If we dont know on how to many levels(depth) are there then we can use Infinity param which will faltten whole array's into one array.
   - No it does not mutate the original . 
17. `forEach`
18. `map`
19. `pop`
    -Parameters: No parameters
    -Return: returns the deleted element from the array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.pop(); //6
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    colors.pop(); //"white"
    ```
    - `pop` method when applied on an array deletes the last element of the array and returns it. If array is empty it returns undefined. 
    - It **mutates the array**
20. `reduce`
    -Parameters: It has 2 major parameters - callback function and initialValue. In Callback function we have 4 parameters - accumulator, currentValue(number), index, array. This Accumulator is the variable that is equal to Sum in the normal forEach() way of adding sum or for any other activities. CurrentValue is the present value in the array for that index iteration. index is the index value and array is the whole array which is being passed. initialValue is the "let sum = 0" 0 is the initial value and sum is the accumulator value here. 
    -Return: It returns the output of the reducer function on the entire array
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    let sumOfArray = numbers.reduce( (acc,number) => acc + number, 0); //21
    
    let colors = ["red", "yellow", "blue", "green", "white"];
    let reducedColors = colors.reduce((acc + color) => acc + color, "");//'redyellowbluegreenwhite'
    ```
    - `reduce` method takes in an array and reduces the collection of items into single value or any value of desired output. It takes in callback function and initialValue. This callback function takes accumulator and currentValue and does some job on it and returns the response.InitialValue is the value with which the currentValue gets added. 
    - It doesn't mutate the array
21. `slice`
22. `some`
    -Parameters:
    -Return
    -Examples
    ```js
    ```
    - 
    - 
