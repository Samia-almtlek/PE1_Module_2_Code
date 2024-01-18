import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

console.log('Kies een artiest: \n 1. Red Hot Chili Peppers\n 2. AC/DC\n 3. Netsky\n 4. De Strangers')
let keuze=parseFloat(await userInput.question('Geef je keuze in: '));
let resultaat;
let songTitel;
switch (keuze) {
    case 1:
        resultaat='Red Hot Chili Peppers';
        songTitel = 'Californication';
        break;
        case 2:
        resultaat='AC/DC';
        songTitel = 'Highway to Hell';
        break;
        case 3:
        resultaat='Netsky';   
        songTitel = 'Memory Lane';
        break; 
        case 4:
        resultaat='De Strangers';
        songTitel = 'Mijnen blauwe geschelpte';
        break;

    default:
console.log('Ongdeldige song')
        break;
  
}
console.log('Je koos voor "' +resultaat +'" Ze zijn de artist achter de hit: ' + songTitel)

process.exit()
