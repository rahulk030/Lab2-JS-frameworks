// utilities.js
// Exporting functions using ES Modules

// 1️⃣ Function that takes a text input (e.g., name) and prints a welcome message
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to Georgian College!`);
}

// 2️⃣ Function to convert Celsius to Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// 3️⃣ Function to calculate the factorial of a number
export function getFactorial(number) {
    if (number < 0) return "Factorial is not defined for negative numbers.";
    let factorial = 1;
    for (let i = number; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}

// 4️⃣ Advanced function: Calculate the sum of an array of numbers
export function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
