import {character} from "./character.js";
import {getRandom} from "./utils.js";

const MIN_MEANING_DICE = 1;
const MAX_MEANING_DICE = 10;

const generateCharacteristicHandler = () => {
  const generateCharacteriscitButton = document.querySelector('.generateCharacteristic');
  const firstMeaning = document.querySelectorAll('.firstMeaning');
  generateCharacteriscitButton.addEventListener('click', () => {
    if (character.characterRace === 'Человек') {
      firstMeaning.forEach((element) => {
        element.textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
        character.characterCharacteristics.push(element.textContent);
      });
    }
    if (character.characterRace === 'Дварф') {
      firstMeaning[0].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[1].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[2].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[3].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[4].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[5].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 10);
      firstMeaning[6].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[7].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[8].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 40);
      firstMeaning[9].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 10);
    }
    if (character.characterRace === 'Полурослик') {
      firstMeaning[0].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 10);
      firstMeaning[1].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[2].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 10);
      firstMeaning[3].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[4].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[5].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[6].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[7].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[8].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[9].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
    }
    if (character.characterRace === 'Высший эльф' || character.characterRace === 'Лесной эльф') {
      firstMeaning[0].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[1].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[2].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[3].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
      firstMeaning[4].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 40);
      firstMeaning[5].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[6].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[7].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[8].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 30);
      firstMeaning[9].textContent = String(getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + getRandom(MIN_MEANING_DICE,MAX_MEANING_DICE) + 20);
    }

  });
}
export {generateCharacteristicHandler};
