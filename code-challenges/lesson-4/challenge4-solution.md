## Challenge

What does `result` evaluate to?  You might want to review the previous lesson for this one.

```javascript
const myObj = {
  prop1: 'first value',
  prop2: 20
};

// Index         0   1   2
const myArray = [40, 50, 2];

const result = myObj.prop2 === (myArray[0] / myArray[2]);
```

## Solution

This is also a review of the previous lesson combined with the current lesson.

Remember, to access the value of an object property, we use "dot notation".  If we wanted to retrieve the value of `20`, we need to use `myObj.prop2`.

Also remember that in order to access values from an array, we have to use "bracket notation" and consider what "index" we want to retrieve.  Arrays are "zero-indexed", which means the first value has an index of 0 and that increases by 1.  If we wanted to retrieve the value of `50` from this array, we would use `myArray[1]`.

Once we remember those facts, the final `result` expression isn't so bad.

Just list out each part of the expression and what they equal:

* `myObj.prop2` equals `20`
* `myArray[0]` equals `40`
* `myArray[2]` equals `2`

So now, we can look at our expression like this:

```javascript
const result = 20 === (40 / 2); // true
```

`40 / 2` evaluates to `20`, and `20 === 20` evaluates to `true`.