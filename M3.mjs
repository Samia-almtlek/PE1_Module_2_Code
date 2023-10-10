import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output}); 
let score = 0 ;
let vraag1 =await userInput.question('Welkom bij de quiz! Beantwoord de volgende 5 vragen: \n Vraag 1: Wat is de hoofdstad van Frankrijk?');
if (vraag1 == 'parijs'){
    console.log('Jouw antwoord: Parijs \n Goed antwoord!');
    score++;
}else{
    console.log('Fout antwoord. Het juiste antwoord is: parijs ')
}
let vraag2 =await userInput.question('Vraag 2: Hoeveel planeten zijn er in ons zonnestelsel?');
if (vraag2 == 8 ){
    console.log('Jouw antwoord: 8 \n Goed antwoord!');
    score++;
}else {
    console.log('Jouw antwoord : ' + vraag2 + '\n Fout antwoord. \n Het juiste antwoord is: 8');
}
let vraag3 = await userInput.question('Vraag 3: Wat is het grootste zoogdier ter wereld?');
if (vraag3 == 'Blauwe vinvis'){
    console.log('Jouw antwoord: Blauwe vinvis \n Goed antwoord!'); 
    score++;
}else{
    console.log('Fout antwoord. \n Het juiste antwoord Blauwe vinvis ')
}
let vraag4 =await userInput.question('Vraag 4: Wie schreef het toneelstuk (Romeo en Julia)?');
if (vraag4 == 'Shakespeare'){
    console.log('Jouw antwoord: Shakespeare \n Goed antwoord!'); 
    score++;
}else{
    console.log('Fout antwoord. \n Het juiste antwoord Shakespeare ')
}
let vraag5 =await userInput.question('Vraag 5: Hoeveel poten heeft een spin?');
if (vraag5 += 8 ){
    console.log('Jouw antwoord: 8 \n Goed antwoord!'); 
    score++;
}else{vraag5 != 8 
    console.log('Jouw antwoord : ' + vraag5 + '\n Fout antwoord. Het juiste antwoord is: 8'); 
}
console.log(' Je hebt ' + score + ' van de 5 vragen juist beantwoord.');

process.exit();

