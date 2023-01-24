import {getRandom} from "./utils.js";
import {character} from "./character.js";

const ageCharacterCreate = () => {

  const generateAge = document.querySelector('.generateAge');
  const inputAge = document.querySelector('.main__block_input-age');

  generateAge.addEventListener('click', () => {
    const race = document.querySelector('.main__block_input-race').value;

    switch (race) {
      case 'Человек':
        inputAge.value = getRandom(1, 10) + 15;
        break;
      case 'Полурослик':
        inputAge.value = getRandom(5, 50) + 15;
        break;
      case 'Дварф':
        inputAge.value = getRandom(10, 100) + 15;
        break;
      case 'Высший эльф':
        inputAge.value = getRandom(10, 100) + 30;
        break;
      case 'Лесной эльф':
        inputAge.value = getRandom(10, 100) + 30;
        break;
      case '':
        inputAge.value = 'Выберите расу';
        break;
    }
    character.characterAge = inputAge.value;
  });
}

const riseCharacterCreateHandler = () => {

  const generateRise = document.querySelector('.generateRise');
  const inputHeight = document.querySelector('.main__block_input-rise');

  generateRise.addEventListener('click', () => {
    const race = document.querySelector('.main__block_input-race').value;

    switch (race) {
      case 'Человек':
        inputHeight.value = getRandom(150, 210);
        break;
      case 'Полурослик':
        inputHeight.value = getRandom(93, 124);
        break;
      case 'Дварф':
        inputHeight.value = getRandom(140, 165);
        break;
      case 'Высший эльф':
        inputHeight.value = getRandom(190, 210);
        break;
      case 'Лесной эльф':
        inputHeight.value = getRandom(190, 210);
        break;
      case '':
        inputHeight.value = 'Выберите расу';
        break;
    }
    character.characterHeight = inputHeight.value;
  });
}

const hairCharacterCreate = () => {

  const generateHair = document.querySelector('.generateHair');
  const inputHair = document.querySelector('.main__block_input-hair');
  const arrayHairHuman = ['Белый блонд','Золотистый блонд','Рыжий блонд','Золотисто-русые','Золотисто-русые','Золотисто-русые','Светло-русые','Светло-русые','Светло-русые','Светло-русые','Тёмно-русые','Тёмно-русые','Тёмно-русые','Чёрные','Чёрные','Чёрные','Медно-рыжие','Серые'];
  const arrayHairHalfling = ['Серые','Соломенные','Кирпичный','Медовые','Медовые','Медовые','Каштановые','Каштановые','Каштановые','Каштановые','Имбирные','Имбирные','Имбирные','Горчичные','Горчичные','Горчичные','Шоколадные','Лакричные'];
  const arrayHairDwarf = ['Белые','Серый','Жемчужный блонд','Золотистые','Золотистые','Золотистые','Медные','Медные','Медные','Медные','Бронзовые','Бронзовые','Бронзовые','Русые','Русые','Русые','Рыжевато-русые','Чёрные'];
  const arrayHairHighElf = ['Серебристые','Белые','Жемчужный блонд','Блонд','Блонд','Блонд','Блонд','Медный блонд','Медный блонд','Медный блонд','Рыжий блонд','Рыжий блонд','Рыжий блонд','Медно-рыжий','Медно-рыжий','Медно-рыжий','Рыжий','Чёрный'];
  const arrayHairForestElf = ['Серебристо-белые','Пепельный блонд','Розово-золотистые','Медовый блонд','Медовый блонд','Медовый блонд','Медные','Русые','Русые','Русые','Красное дерево','Красное дерево','Красное дерево','Сиена','Сиена','Сиена','Эбеновые','Иссиня-чёрные'];

  generateHair.addEventListener('click', () => {
    const race = document.querySelector('.main__block_input-race').value;
    const randomNumber = getRandom(0, 18);
    switch (race) {
      case 'Человек':
        inputHair.value = arrayHairHuman[randomNumber];
        break;
      case 'Полурослик':
        inputHair.value = arrayHairHalfling[randomNumber];
        break;
      case 'Дварф':
        inputHair.value = arrayHairDwarf[randomNumber];
        break;
      case 'Высший эльф':
        inputHair.value = arrayHairHighElf[randomNumber];
        break;
      case 'Лесной эльф':
        inputHair.value = arrayHairForestElf[randomNumber];
        break;
      case '':
        inputHair.value = 'Выберите расу';
        break;
    }
    character.characterHair = inputHair.value;
  });
}

const eyeCharacterCreate = () => {

  const generateEye = document.querySelector('.generateEye');
  const inputEye = document.querySelector('.main__block_input-eye');
  const arrayEyeHuman = ['По выбору','Зелёные','Водянисто-голубые','Голубые','Голубые','Голубые','Светло-серые','Светло-серые','Светло-серые','Светло-серые','Серые','Серые','Серые','Карие','Карие','Карие','Ореховые','Тёмно-карие','Чёрные'];
  const arrayEyeHalfling = ['Светло-серые','Серые','Бледно-голубые','Голубые','Голубые','Голубые','Зелёные','Зелёные','Зелёные','Зелёные','Ореховые','Ореховые','Ореховые','Карие','Карие','Карие','Медные','Тёмно-карие','Тёмно-карие'];
  const arrayEyeDwarf = ['Антрацитовые','Свинцово-серые','Серо-стальные','Голубые','Голубые','Голубые','Землисто-карие','Землисто-карие','Землисто-карие','Тёмно-карие','Тёмно-карие','Тёмно-карие','Тёмно-карие','Ореховые','Ореховые','Ореховые','Зелёные','Медные','Золотые'];
  const arrayEyeHighElf = ['Гагатовые','Аметистовые','Аквамариновые','Сапфировые','Сапфировые','Сапфировые','Сапфировые','Бирюзовые','Бирюзовые','Бирюзовые','Изумрудные','Изумрудные','Изумрудные','Янтарные','Янтарные','Янтарные','Медные','Топазовые','Золотые'];
  const arrayEyeForestElf = ['Бежевые','Угольно-чёрные','Оливковые','Мшисто-зелёные','Мшисто-зелёные','Мшисто-зелёные','Ореховые','Ореховые','Ореховые','Ореховые','Ореховые','Ореховые','Ореховые','Тёмно-карие','Тёмно-карие','Тёмно-карие','Бурые','Песочные','Фиалковые'];

  generateEye.addEventListener('click', () => {
    const race = document.querySelector('.main__block_input-race').value;
    const randomNumber = getRandom(0, 18);
    switch (race) {
      case 'Человек':
        inputEye.value = arrayEyeHuman[randomNumber];
        break;
      case 'Полурослик':
        inputEye.value = arrayEyeHalfling[randomNumber];
        break;
      case 'Дварф':
        inputEye.value = arrayEyeDwarf[randomNumber];
        break;
      case 'Высший эльф':
        inputEye.value = arrayEyeHighElf[randomNumber];
        break;
      case 'Лесной эльф':
        inputEye.value = arrayEyeForestElf[randomNumber];
        break;
      case '':
        inputEye.value = 'Выберите расу';
        break;
    }
    character.characterEyes = inputEye.value
  });
}

export {ageCharacterCreate,riseCharacterCreateHandler, hairCharacterCreate,eyeCharacterCreate};
