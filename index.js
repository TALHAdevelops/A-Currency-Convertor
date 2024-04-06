#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.88,
    PKR: 220,
    GBP: 0.74,
    INR: 74.85,
};
let userAnswer = await inquirer.prompt([
    {
        name: "fromCurrency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR"],
        message: "Select your from currency :",
    },
    {
        name: "toCurrency",
        type: "list",
        choices: ["USD", "EUR", "PKR", "GBP", "INR"],
        message: "Select your currency to convert:",
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount to convert:",
    },
]);
let from = currency[userAnswer.fromCurrency];
let to = currency[userAnswer.toCurrency];
let amount = userAnswer.amount;
let result = amount * to / from;
console.log(result);
