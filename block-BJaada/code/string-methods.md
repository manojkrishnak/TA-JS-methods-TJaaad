Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
    - Parameter: no parameters required
    - Return: a string in uppercase 
    - Example: 
        ```js
        let str = "hello world";
        str.toUpperCase(); //"HELLO WORLD"
        ```
    - `toUpperCase` applies on a string and returns the string in uppercase.
3. `toLowerCase`
    - Parameter: no parameters required
    - Return: a string in lowercase 
    - Example: 
        ```js
        let str = "HELLO WORLD";
        str.toUpperCase(); //"hello world"
        ```
    - `toLowerCase` applies on a string and returns the string in lowercase.
4. `trim`
    - Parameter: no parameters required
    - Return: a string with whitespaces removed from both the end of the string without modifying the original string.Whitespaces include space, tab and all termianting characters(LF, CR etc)
    - Example: 
        ```js
        let str = "    HELLO WORLD    ";
        str.trim(); //"HELLO WORLD"
        ```
    - `trim` applies on a string and removes the whitespaces on both the ends of the string.
5. `trimStart`
    - Parameter: no parameters required
    - Return: a string with whitespaces removed from beginning of the string without modifying the original string.Whitespaces include space, tab and all termianting characters(LF, CR etc)
    - Example: 
        ```js
        let str = "    HELLO WORLD";
        str.trimStart(); //"HELLO WORLD"
        ```
    - `trimStart` applies on a string and removes the whitespaces from the beginning  of the string
6. `trimEnd`
    - Parameter: no parameters required
    - Return: a string with whitespaces removed from the end of the string without modifying the original string.Whitespaces include space, tab and all termianting characters(LF, CR etc)
    - Example: 
        ```js
        let str = "HELLO WORLD    ";
        str.trimEnd(); //"HELLO WORLD"
        ```
    - `trimEnd` applies on a string and removes the whitespaces from the end of the string
7. `concat`
    - Parameter: Takes one or more string as input
    - Return: a new string with all combined values
    - Example: 
        ```js
        let str = "HELLO WORLD";
        str.concat(",", " welcome to js", " tutorial"); //'HELLO WORLD, welcome to js tutorial'
        ```
    - `concat` applies on a string and adds one or more string passed to the concat method. **IT IS HIGHLY RECOMMENDED TO USE "+" OR "+=" TO COMBINE STRINGS THAN `concat` METHOD.**
8. `endsWith`
    - Parameter: searchString - the string or char that has to be matched, length [optional] - till what length the searchString has to be executed
    - Return: **true** if the given characters are found at the end of the string; otherwise, **false**.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.endsWith("e", 20) // true
        ```
    - `endsWith` applies on a string and checks if the string passed matches/endswith with in the length mentioned or not. Here length is optional. If matches, it returns true else false.
9. `includes`
    - Parameter: **searchString** - the string or char that has to be matched, **position** [optional] - position within the string from which the search has to be started for searchString
    - Return: **true** if the given characters/String is found in the string; otherwise, **false**.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.includes("are") // true
        ```
    - `includes` applies on a string and checks if the searchString passed is there in the string or not. Here position is optional. If matches, it returns true else false.
10. `indexOf`
    - Parameter: **searchString** - the string or char that has to be matched, **fromIndex** [optional] - Index from which the searching in the string for searchString has to be done.
    - Return: Index of the first occurance of searchString from the string. If no occurance is found, it return -1.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.indexOf("are") // 16
        ```
    - `indexOf` applies on a string and it returns the index of the first occurance of the searchString in the string.
11. `lastIndexOf`
    - Parameter: **searchString** - the string or char that has to be matched, **fromIndex** [optional] - Index from which the searching in the string for searchString has to be done.
    - Return: Index of the last occurance of searchString from the string. If no occurance is found, it return -1.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.lastIndexOf("are") // 16
        ```
    - `lastIindexOf` applies on a string and it returns the index of the first occurance of the searchString in the string.Generally indexOf() returns the first occurance but lastIndexOf() returns the lastIndexOf() value from the string.
12. `padEnd`
    - Parameter: **targetLength** - the total length of the string once the string is padded, **padString** [optional] - Index from which the searching in the string for searchString has to be done.
    - Return: Index of the last occurance of searchString from the string. If no occurance is found, it return -1.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.padEnd(50,"are") // 'HELLO WORLD, we are learning JavaScriptarearearear'
        ```
    - `padEnd` applies on a string and it adds the padded string to the end of the string. Here we give the length of the string it has to be and teh padded string which has to be added. 
13. `padStart`
    - Parameter: **targetLength** - the total length of the string once the string is padded, **padString** [optional] - Index from which the searching in the string for searchString has to be done.
    - Return: Index of the last occurance of searchString from the string. If no occurance is found, it return -1.
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.padStart(50,"are") // 'arearearearHELLO WORLD, we are learning JavaScript'
        ```
    - `padStart` applies on a string and it adds the padded string to the end of the string. Here we give the length of the string it has to be and teh padded string which has to be added. 
14. `repeat`
    - Parameter: **count** - the number of times the string has to be repeated. It accepts any value between 0 to +Infintiy.
    - Return: Repeeated string which is concatenated.
    - Example: 
        ```js
        let str = "HELLO WORLD";
        str.repeat(3) // 'HELLO WORLDHELLO WORLDHELLO WORLD'
        ```
    - `repeat` applies on a string, it takes the count of the reptition it has to be done as concatenates the string and returns that string.
15. `replace`
    - Parameter: **regex** - a regex to match the pattern with the word to be replaced, **subStr** - a literal string which is used to match, **newSubStr(replacement)** - a new string which has to be replaced on the pattern or the literal string, **replacementFunction** - a replacementFunction which gets executed when the regex or literal string matches with the string on which the replace is applied. 
    - Return: a new string with some or all the matches of the pattern replaced by replacement. 
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.replace("we", "you") // 'HELLO WORLD, you are learning JavaScript'
        ```
    - `replace` applies on a string, it takes the pattern or string literal by which it is matched with the string and whatever the replacement is passed will be replaced on the matched pattern/string.
16. `slice`
    - Parameter: **startIndex** - the index from which the slicing has to start. **endIndex[optional]** - the index at which the slicing has to end
    - Return: a new string with the extracted portion of the string
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.slice(0,3) // 'HELL'
        ```
    - `slice` applies on a string, it takes the startIndex and the endIndex. Here endIndex is optional . If startIndex and endIndex are provided, it slices only in that limit, whereas, if the endIndex is not provided, it slices from startIndex and ends at the last char. 
17. `split`
    - Parameter: **separator[optional]** - the pattern describing where each split should occur. **limit[optional]** - no of substrings to be included in the array
    - Return: a new array with all the words separated by the pattern
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.split(" ") // ['HELLO', 'WORLD,', 'we', 'are', 'learning', 'JavaScript']
        ```
    - `slice` applies on a string, it takes the separator pattern to be able to split the string into sub strings and put them in an array. 
18. `substring`
    - Parameter: **startIndex** - the index from which the slicing has to start. **endIndex[optional]** - the index at which the slicing has to end
    - Return: a new string with the extracted portion of the string
    - Example: 
        ```js
        let str = "HELLO WORLD, we are learning JavaScript";
        str.subString(3,0) // 'HELL'
        ```
    - `slice` applies on a string, it returns the part of the string between the start and end indexes, or to the end of the string.
