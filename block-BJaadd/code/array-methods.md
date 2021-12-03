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
    - Parameters: **searchValue** in the array, **fromIndex[optional]**
    - Return: true is the element if found in array else it returns false
    - Example
        ```js
        let arr = [1,2,3];
        arr.includes(3);//true
        arr.includes(5);//false
        ```
    - `includes` is used to find if the value passed is in the array or not. If the values in array it returns true else false.
    - It doesn't mutate the array
8. `reverse`
    - Parameter: no parameters
    - Returns: returns reversed array
    - Example
        ```js
        let arr = [1,2,3];
        arr.reverse();//3,2,1
        ```
    - `reverse` is used to reverse array items. It doesnt require any params
    - It mutates the original arary
9. `every`
    -Parameters: It takes 2 parameters of which **callback** is important. This callback has 3 params - element -> which is the number from array, index[optional] - is the index value of the element from array, array[optional] which is being passed to it. 
    -Return: **Boolean** |  Returns true when all the values in the array satisfies the condition and returns true. If any of the value returns false then the array returns false else it returns true
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.some(number => number%2 === 0);//false
    
    let numbers = [2, 4, 6];
    numbers.some(number => number%2 === 0); //true
    ```
    - `every` method applies on array, it takes an array and applies the condition which is passed to the callback and this callback has to return true for all the items in the array only then the every() method returns true else it returns false
    - It doesn't mutate the original array
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
     -Parameters: It takes 2 parameters - **startIndex[optional]** and **endIndex[optional]**. If none of the params are passed then it returns the whole array without splicing.
    -Return: It returns a shallow copy of the array which is obtained by passing the startIndex and endIndex values. If none of the values are passed then it returns whole array.
    -Examples
    ```js
    let numbers = [1,2,3,4,5,6];
    numbers.splice(); //[1,2,3,4,5,6]
    numbers.splice(3); //[4,5,6]
    numbers.splice(1,4); //[2,3,4];excluding the 4th index
    ```
    -`splice` method applies on an array and when the startIndex and endIndex are passed it returns the resultant new array. If the startIndex is only provided then slice returns array from that index to last index and if no params is passed to slice() it returns whole array. We can also pass negative index value so that it returns those values from the end of the array
    -It **mutate** the orginial array
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
    - Parameter: It takes in a callback function which takes 3 params - element, index and array
    - Return: Index of the first element that passes the test. Otherwise it returns -1
    - Example
        ```js
        ```
    -`findIndex` is an array method which gives the index of the first identified item in the array if it passes the test. 
15. `filter`
    - Parameter: It takes in a callback function which takes 3 params - element, index and array
    - Return: It returns a new array with the elements that pass the test. If no elements pass the test then it returns an empty array.
    - Example
        ```js
        let numbers = [1,2, 3, 4, 5, 6];
        numbers.filter(number => number %2 === 0);//[2,4,6];
        ```
    -`filter` is an array mehtod which filters the value and based on the condition which is given in the callback method.This callback method has to return true or false based on that filter understands whether the value has to be stored or not. Filter only stores those values for which the callback has returned **true**. If the callback doesnt return anything then we get undefined which is tried to convert into Boolean -> Boolean(undefined)//false and teh value doesnt get stored in teh new array. The new array returned may be lesser or equal length of the original arary.
    -It doesnt mutate the original arary
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
    - Parameter: It takes in a callback function which takes 3 params - element, index and array
    - Return: It doesn't return anything. **undefined**
    - Example
        ```js
        let numbers = [1,2, 3, 4, 5, 6];
        numbers.forEach(function(number,index,array){
         console.log(number * 2);
        });//2,4,6,8,10
        ```
    -`forEach` is an array method. It takes a callback function and applies that callback function on every item in the array and doesnt return anything. 
    -It doesn't mutate the original array
18. `map`
    - Parameter: It takes in **callback** function and in that callback we have 3 params - element -> which is the current value, index[optional] - index of the current value from the array and array[optional]
    - Return: New array after being applied on all the array items
    - Example
        ```js
        let numbers = [1,2, 3, 4, 5, 6];
        numbers.map(number => number * 2);//[2, 4, 6, 8, 10, 12]
        ```
    -`map` is an array method which is applied on all the array items. To this map method we pass the callback function which excutes on all the array items and returns an array with resultant array values.
    -It doesn't mutate the original array
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
    -Parameters: It takes 2 parameters - **startIndex[optional]** and **endIndex[optional]**. If none of the params are passed then it returns the whole array without slicing.
    -Return: It returns a shallow copy of the array which is obtained by passing the startIndex and endIndex values. If none of the values are passed then it returns whole array.
    -Examples
    ```js
    let numbers = [1,2,3,4,5,6];
    numbers.slice(); //[1,2,3,4,5,6]
    numbers.slice(3); //[4,5,6]
    numbers.slice(1,4); //[2,3,4];excluding the 4th index
    ```
    -`slice` method applies on an array and when the startIndex and endIndex are passed it returns the resultant new array. If the startIndex is only provided then slice returns array from that index to last index and if no params is passed to slice() it returns whole array. We can also pass negative index value so that it returns those values from the end of the array
    -It doesn't mutate the orginial array
22. `some`
    -Parameters: It takes 2 parameters of which **callback** is important. This callback takes 3 params - element -> which is the number from array, index - is the index value of the element from array and array which is being passed to it. 
    -Return: **Boolean** |  Returns true when atleast one value in the array satisfies the condition and returns true. If none of the value returns true then the array returns false
    -Examples
    ```js
    let numbers = [1,2, 3, 4, 5, 6];
    numbers.some(number => number%2 === 0);//true
    
    let numbers = [1, 3, 5];
    numbers.some(number => number%2 === 0); //false
    ```
    - `some` method applies on array, it takes an array and applies the condition which is passed to the callback and this callback has to return true atleast once in the whole array only then the some() method returns true else it returns false
    - It doesn't mutate the original array
