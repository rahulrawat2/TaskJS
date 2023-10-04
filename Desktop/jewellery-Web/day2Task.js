

//solution 
//change the value of the variables without temp  variable
let a =6;
let b =10;

a=a+b; //16
b=a-b //6
a=a-b;
console.log(a,b) //a=10 b=6

//Write a single line of code using the ternary 
//operator to check if a variable value is defined (not undefined) 
//and has a truthy value. If it does, store the result in a variable 'isValid'.

//solution
let isValid;
isValid = typeof isValid !== 'undefined' && !isNaN(isValid) ? isValid : 'Not a number';
console.log(isValid);