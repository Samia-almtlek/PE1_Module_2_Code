import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getal1 =parseFloat(await userInput.question('Geef je een getal in : '));
let getal2 =parseFloat(await userInput.question('Geef je een andere getal in : '));
let rekenen=await userInput.question('welke rekenen wil je ? ');
if (rekenen == 'optellen'){
    console.log('Het resultaat = ' + (getal1 + getal2)); 
}else if (rekenen == 'aftrekken'){
    console.log( 'Het resultaat = ' + (getal1 - getal2));
}else if (rekenen == 'vermenigvuldigen'){
    console.log( 'Het resultaat = ' + (getal1 * getal2));
}else if (rekenen == 'delen'){
    console.log( 'Het resultaat = ' + (getal1 / getal2));
}

process.exit();
