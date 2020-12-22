```javascript
const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + variable2;

console.log(resultVariable);
```

The `resultVariable` will print "2040", and it is a string.
  
  You can verify this by executing the following code in the console:

```javascript
// This will return "string", which tells us that the variable is a string data type
typeof resultVariable
```

The reason for this is because JavaScript is a "weakly typed" language.  In this case, we are trying to 
add a number and a string together.  In some programming languages like Python which are "strongly typed",
you would get an error trying to do this.  But since JavaScript is "weakly typed", it allows you to do 
operations with multiple variable types at once.
  
This leads us to the second part of this solution.  Since JavaScript allows you to add a number and a string
together, you might ask–why does it end up as a string rather than a number?

This is where the concept of "implicit type coercion" comes in.  Since we are not explicitly declaring each 
variable's type (static typing), JavaScript has to figure it out when the code runs.  In this case, when you add
a string and a number together, it automatically becomes a string, and that is just a rule of JavaScript.

Imagine what would happen with this code:

```javascript
const stringVariable = 'some value here';
const numberVariable = 20;

console.log(stringVariable + numberVariable);
```


Here, it wouldn't make much sense to convert the result to a number because
you can't add these two values!  In our first example, you could have converted
variable2 into a number and then added them together, but here, you can't  convert
'some value here' into a number.

Here's how we could have turned the original result into a number:

```javascript
const variable1 = 20;
const variable2 = '40';

const resultVariable = variable1 + Number(variable2);

console.log(resultVariable); // Prints 60, and is a number
```

By using JavaScript's built-in Number() function, we can convert a string to a number
