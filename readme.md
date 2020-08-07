Grasshopper - Summation

https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript


Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

ie - 
```
summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

```


My Answer -

```
    const array = [...Array.from(Array(n).keys()), n];
    return array.reduce((a, b) => a + b, 0);
```

I wasn't happy with the spread operator, but I sure as hell wasn't going to use a `for` loop when I knew there are better ways to handle this.

Most of the 'solutions' all used `for` loops (frown), but I did see this, which intrigued me -

```
const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);
```

I'll have to research how the `fill` method works!