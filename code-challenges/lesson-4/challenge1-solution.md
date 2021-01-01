## Challenge

Why doesn't this code work?  Try to make it work and guess what the result will be (hint: this is a little bit of a review from last lesson).

```javascript
const numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable);
```

## Answer

Per the hint, this was a bit of a review.  This code will not work because we are using `const`.  Remember, if the value of the variable is re-assigned in your code, you need to use the `let` keyword to declare the variable.  Once we change it to `let`, the code works and `numberVariable` will be equal to `3`.  Each time we use the expression `numberVariable++`, our variable is _incremented_ by 1, and re-assigned the new value.

```javascript
let numberVariable = 0;

numberVariable++;
numberVariable++;
numberVariable++;

console.log(numberVariable); // 3
```

We could have also written this code like so:

```javascript
let numberVariable = 0;

numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;
numberVariable = numberVariable + 1;

console.log(numberVariable); // 3
```