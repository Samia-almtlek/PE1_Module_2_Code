import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let maand = await userInput.question('voeg een maand toe:');
let dag = 0; 
switch(maand){
        case 'januari':
        case 'maart':
        case 'mei':
        case 'juli':
        case 'augustus':
        case 'oktober':
        case 'december':
            dag=31;
            break;
        case 'april':
        case 'juni':
        case 'september':
        case 'november':
            dag=30;
            break;
        case 'februari':
            dag= 28;
            break;
        default:
console.log('Niet gekend');
}
console.log('In ' + maand + ' Er is ' + dag + ' dagen ');

process.exit();
