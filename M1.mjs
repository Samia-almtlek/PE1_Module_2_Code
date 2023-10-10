import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
let red=' Red Hot Chili Peppers ';
let ac=' AC/DC ';
let net=' Netsky ';
let de=' De Strangers ';

console.log('Kies een artiest: \n' + ' 1. ' + red + '\n' + ' 2. ' + ac + '\n' + ' 3. ' + net + '\n' + ' 4. ' + de );

let kies = await userInput.question('Geef je keuze in : ');
switch(kies){
    case '1':
        kies =red ;
        break;
        case '2':
        kies = ac ;
        break;
        case '3':
        kies = net;
        break;
        case '4':
        kies = de ;
        break;
}
console.log(' Je koos voor ' + '"' + kies +  '"' ); 

process.exit();