## Challenge

What does `expression5` evaluate to?  How could you write this in a single line of code (for exercise purposes only; you would never want to combine all this in one line)?

```javascript
const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4;

console.log(expression5);
```

## Answer

My recommendation is to walk through each line and see what it evaluates to.  You can write some comments at the end of your code to do so.

Let's start from the top.

### Expression 1

```javascript
const expression1 = 100 % 50; // 0
```

This should evaluate to `0`.  The `%` operator is the "modulus" operator, which is basically asking whether 50 goes into 100 evenly.  We know that 100 / 50 is equal to 2 with no remainder, so this will evaluate to `0` (aka no remainder).

### Expression 2

```javascript
const expression2 = 100 / 50; // 2
```

This one is easier.  100 / 50 is 2.

### Expression 3

```javascript
const expression3 = expression1 < expression2; // true
```

Now, we are combining two of our previous expressions.  The first expression evaluated to `0` while the second evaluated to `2`.  So in this case, we are really asking what `0 < 2` evaluates to, which should be `true` (because 0 is less than 2);

### Expression 4

```javascript
const expression4 = expression3 && 300 + 5 === 305;
```

Here, we are using our previous expressions value of `true` and combining it with another expression `300 + 5 === 305` using the `&&` "and" operator.

First, we need to figure out what `300 + 5` is.  This should equal `305`.

Now, we compare that result in the following expression: `305 === 305`, which evalutes to `true`.

Finally, we combine the two values: `true && true`.  Since we have `true` on both sides of `&&`, this evaluates to `true`.

### Expression 5

```javascript
const expression5 = !expression4; // false
```

Remember, `expression4` evaluated to `true`, and `!` just reverses the value of what it precedes.  So this just reverses `true` to `false`.

### Combining it in one expression

Like I said, in real-life, you would never try to combine this into one expression.  You would want to break it out into separate variables so that when you go back to read your code months later, you don't have to spend 20 minutes trying to decrypt it.

Nevertheless, let's go through this exercise and see how we can combine it into a single expression.

```javascript
const result = !(((100 % 50) < (100 / 50)) && 300 + 5 === 305);

console.log(result);
```