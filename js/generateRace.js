import {getRandom} from "./utils.js";
import {character} from "./character.js";

const randomRace = () => {
  const generateButton = document.querySelector('.generateRace');
  const inputRace = document.querySelector('.main__block_input-race');
  const freeAligment = document.querySelector('.numberOfFreeAligment');
  const aligment = document.querySelector('.numberOfFreeAligment');
  const fate = document.querySelector('.fate');
  const fortune = document.querySelector('.fortune');
  const perseverance = document.querySelector('.perseverance');
  const determination = document.querySelector('.determination');


  generateButton.addEventListener('click', () => {
    const race = getRandom(1,100);
    if (race <= 90) {
      inputRace.value = 'Человек';
      inputRace.setAttribute('data-race', '0');
      freeAligment.textContent = 3;
      fate.textContent = 2;
      fortune.textContent = fate.textContent;
      perseverance.textContent = 1;
      determination.textContent = perseverance;
    } else if (race > 90 && race <=94) {
      inputRace.value = 'Полурослик';
      inputRace.setAttribute('data-race', '2');
      freeAligment.textContent = 3;
      fate.textContent = 0;
      fortune.textContent = fate.textContent;
      perseverance.textContent = 2;
      determination.textContent = perseverance;
    } else if (race > 94 && race <= 97) {
      inputRace.value = 'Дварф';
      inputRace.setAttribute('data-race', '1');
      freeAligment.textContent = 2;
      fate.textContent = 0;
      fortune.textContent = fate.textContent;
      perseverance.textContent = 2;
      determination.textContent = perseverance;
    } else if (race > 98 && race <= 99) {
      inputRace.value = 'Высший эльф';
      inputRace.setAttribute('data-race', '3');
      freeAligment.textContent = 3;
      fate.textContent = 0;
      fortune.textContent = fate.textContent;
      perseverance.textContent = 2;
      determination.textContent = perseverance;
    } else if (race === 100) {
      inputRace.value = 'Лесной эльф';
      inputRace.setAttribute('data-race', '4');
      freeAligment.textContent = 2                                                                                                                                                            ;
      fate.textContent = 0;
      fortune.textContent = fate.textContent;
      perseverance.textContent = 0;
      determination.textContent = perseverance;
    }
    character.characterRace = inputRace.value;
  });
}


export {randomRace}
