//Question Function which gives output remainder without using Modulus operator
function modulus(dividend,divisor){
let quotient = dividend / divisor;
let value = divisor * parseInt(quotient);
let remainder = dividend - value;
return remainder;
}
console.log(modulus(23,6))

//Create a function that takes three collections of arguments and returns the sum 
//of the product of numbers. Add the result of the first digit in each collection 
//multiplied together to the result of the second digit in each collection multiplied
// together to get the final solution.

function product(a, b) 
{
        return function (c, d) 
        {
                return function (e, f) 
                {
                        return a * c * e + b * d * f;
                };
        };
}
const result = product(1, 2)(1, 1)(2, 3);
console.log(result);

//Q3: Create a function which takes an array arr of integers as an argument. 
//This function must return another function, which takes a single integer as an 
//argument and returns a new array.
//The returned array should consist of each of the elements from the first array multiplied by the integer.

let dataArr = [1, 2, 3, 4, 5, 6, 7];
function arrProduct(arr)
 {
        let newProductArr = [];
        return function (n) 
                {
                        for (let i = 0; i < arr.length; i++)
                                {
                                newProductArr[i] = arr[i] * n;
                                }
                        return newProductArr;
                };
}
let result1 = arrProduct(dataArr)(3);
console.log(result1);

//Q4:Create a function which takes a parameter n and returns a function such that it,
// when called n times, returns the string "HelloWorld".

function lambdaDepth(n)
        {

        return function hello()
                {
                return "Hello India "
                }
                hello()
        }

        console.log(lambdaDepth(0)());
        console.log(lambdaDepth(1)());
        console.log(lambdaDepth(2)());