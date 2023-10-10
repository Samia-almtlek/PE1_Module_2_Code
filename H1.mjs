import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output}); 

let num1 =parseFloat(await userInput.question('Geef een nummer in :'));
let num2 =parseFloat(await userInput.question('Geef een tweede nummer in :'));
let num3 =parseFloat(await userInput.question('Geef een derde nummer in :'));
let num4 =parseFloat(await userInput.question('Geef een vierde nummer in :'));
let num5 =parseFloat(await userInput.question('Geef een fijvde nummer in :'));

let numbers=[num1, num2, num3, num4, num5];
let maxNum = Math.max(...numbers);
console.log('Het grootste :' + maxNum);
let minNum = Math.min(...numbers);
console.log('Het kleinste :' +minNum);
let avrage =(num1 +  num2 + num3 +  num4 +  num5);
console.log('Het gemiddelde :' + avrage / 2);
process.exit();


