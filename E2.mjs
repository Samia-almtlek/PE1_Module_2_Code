
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let nummer= parseFloat(await userInput.question('Voeg een getal toe: '));
let min= 1 ;
let max= 100 ;
if(nummer > min && nummer < max)
console.log(' Je getal ' + nummer + ' ligt tussen ' + min + ' en ' + max );

process.exit();

