import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let score=0;
let vraag1=await userInput.question('Wat is de hoofdstad van Frankrijk?');
if (vraag1 == 'Parijs') {
    console.log('Jouw antwoord: Parijs \nGoed antwoord!')
    score ++;
}else{
    console.log('Jouw antwoord: '+vraag1 + ' \nFout antwoord. Het juiste antwoord is: Parijs')
}
let vraag2=parseFloat(await userInput.question('Hoeveel planeten zijn er in ons zonnestelsel?'));
if (vraag2 == 8) {
    console.log('Jouw antwoord: 8 \nGoed antwoord!')
    score ++;
}else{
    console.log('Jouw antwoord: '+vraag2 + ' \nFout antwoord. Het juiste antwoord is: 8')
}
let vraag3=await userInput.question('Wat is het grootste zoogdier ter wereld?');
if (vraag3 == 'Blauwe vinvis') {
    console.log('Jouw antwoord: Blauwe vinvis \nGoed antwoord!')
    score ++;
}else{
    console.log('Jouw antwoord: '+vraag3 + ' \nFout antwoord. Het juiste antwoord is: Blauwe vinvis')
}
let vraag4=await userInput.question('Wie schreef het toneelstuk "Romeo en Julia"?');
if (vraag4 == 'Shakespeare') {
    console.log('Jouw antwoord: Shakespeare \nGoed antwoord!')
    score ++;
}else{
    console.log('Jouw antwoord: '+vraag4 + ' \nFout antwoord. Het juiste antwoord is: Romeo en Julia')
}
let vraag5=parseFloat(await userInput.question('Hoeveel poten heeft een spin?'));
if (vraag5 == 8) {
    console.log('Jouw antwoord: 8 \nGoed antwoord!')
    score ++;
}else{
    console.log('Jouw antwoord: '+vraag5 + ' \nFout antwoord. Het juiste antwoord is: 8')
}
console.log('Je hebt ' +score+ ' van de 5 vragen juist beantwoord.')
process.exit()
