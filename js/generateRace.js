import {getRandom} from "./utils.js";
import {character} from "./character.js";

const randomRace = () => {
  const generateButton = document.querySelector('.generateRace');
  const inputRace = document.querySelector('.main__block_input-race');

  generateButton.addEventListener('click', () => {
    const race = getRandom(1,100);
    if (race <= 90) {
      inputRace.value = 'Человек';
      inputRace.setAttribute('data-race', '0');
    } else if (race > 90 && race <=94) {
      inputRace.value = 'Полурослик';
      inputRace.setAttribute('data-race', '2');
    } else if (race > 94 && race <= 97) {
      inputRace.value = 'Дварф';
      inputRace.setAttribute('data-race', '1');
    } else if (race > 98 && race <= 99) {
      inputRace.value = 'Высший эльф';
      inputRace.setAttribute('data-race', '3');
    } else if (race === 100) {
      inputRace.value = 'Лесной эльф';
      inputRace.setAttribute('data-race', '4');
    }
    character.characterRace = inputRace.value;
  });
}


export {randomRace}
