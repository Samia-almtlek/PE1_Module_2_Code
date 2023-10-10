import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let nummer = parseFloat(await userInput.question('voer een nummer in:'));

if (nummer %2 == 0 ){
    console.log('Even!'); 
}else if( nummer %2 == 1){
    console.log('Oneven!')
}

process.exit();
