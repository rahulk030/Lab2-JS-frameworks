// main.js
// Importing functions from utilities.js
import { welcomeMessage, convertCelsiusToFahrenheit, getFactorial, sumArray } from './utilities.js';

// Calling the functions to test their functionality

// 1️⃣ Calling the welcome message function
welcomeMessage("Rahul", "Kumar");

// 2️⃣ Calling the Celsius to Fahrenheit conversion function
let celsius = 25;
console.log(`${celsius}°C is equal to ${convertCelsiusToFahrenheit(celsius)}°F`);

// 3️⃣ Calling the factorial function
let number = 5;
console.log(`The factorial of ${number} is ${getFactorial(number)}`);

// 4️⃣ Calling the sum array function
let numbersArray = [10, 20, 30, 40, 50];
console.log(`The sum of the array [${numbersArray}] is ${sumArray(numbersArray)}`);
