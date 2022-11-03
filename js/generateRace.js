import {getRandom} from "./utils.js";

const randomRace = () => {
  const generateButton = document.querySelector('.generateRace');
  const inputRace = document.querySelector('.main__block_input-race');

  generateButton.addEventListener('click', () => {
    const race = getRandom(1,100);
    if (race <= 90) {
      inputRace.value = 'Человек';
    } else if (race > 90 && race <=94) {
      inputRace.value = 'Полурослик';
    } else if (race > 94 && race <= 97) {
      inputRace.value = 'Дварф';
    } else if (race > 98 && race <= 99) {
      inputRace.value = 'Высший эльф';
    } else if (race === 100) {
      inputRace.value = 'Лесной эльф';
    }
  });
}


export {randomRace}
