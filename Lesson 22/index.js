"use script";

alert("Enter two numbers to see if the first is greater than the second");

let firstNumber = prompt("enter the first number", '');
let secondNumber = prompt("enter the Second number", '');


if(firstNumber > secondNumber)
{
    confirm(`${firstNumber} is greater than ${secondNumber}`);
}
else{
    confirm(`${firstNumber} is smaller than ${secondNumber}`);
}
