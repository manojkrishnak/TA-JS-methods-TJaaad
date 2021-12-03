For the given code below you have to draw the diagram of how these things are working. Make it similar to the how it was done in previous (Visualise Array Methods) exercise.

- Keep the images in the `img` folder
- using the `![](./img/imagename.png)` add images below each code snippet

```js
1
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  alert(num);
}
let doubleNum = numbers.forEach(double);//undefined
```
![](./img/main.png)


```js
2
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNum = numbers.forEach(double);//undefined
```

```js
3
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  console.log(num);
}
let doubleNum = numbers.forEach(double);//undefined
```

```js
4
let numbers = [100, 200, 33, 45, 65, 76, 51];
function double(num) {
  return num * 2;
}
let doubleNumbers = numbers.map(double);//[200, 400, 66, 90, 130, 152, 102]
```

```js
5
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  return num + 2;
}
let doubleNumbers = numbers.map(addTwo);//[102, 202, 35, 47, 67, 78, 53]
```

```js
6
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  console.log(num);
}
let doubleNumbers = numbers.map(addTwo);//[undefined,undefined,undefined,undefined,undefined,undefined,undefined]
```

```js
7
let numbers = [100, 200, 33, 45, 65, 76, 51];
function addTwo(num) {
  alert(num);
}
let doubleNumbers = numbers.map(addTwo);//undefined
```

```js
8
let numbers = [100, 200, 33, 45, 65, 76, 51];
function isOdd(num) {
  return num % 2 !== 0;
}
let oddNumbers = numbers.filter(isOdd);//[33,51]
```

```js
9
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  return num;
}
let filteredNumbers = numbers.filter(test);//[100, 200, 33, 45, 65, 76, 51];
```

```js
10
let numbers = [100, 200, 33, 45, 65, 76, 51];
function test(num) {
  console.log(num);
}
let filteredNumbers = numbers.filter(test);//[]
```

```js
11
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  return accumulator + currentValue;
}
let sum = numbers.reduce(add);//570
```

```js
12
let numbers = [100, 200, 33, 45, 65, 76, 51];
function add(accumulator, currentValue) {
  console.log(accumulator + currentValue);
}
let sum = numbers.reduce(add);//undefined
```
