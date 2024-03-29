import {getRandom} from "./utils.js";
import {character} from "./character.js";

const randomRaceHandler = () => {
  const generateButton = document.querySelector('.generateRace');
  const inputRace = document.querySelector('.main__block_input-race');
  const freeAlignment = document.querySelector('.numberOfFreeAlignment');
  const fate = document.querySelector('.fate');
  const fortune = document.querySelector('.fortune');
  const perseverance = document.querySelector('.perseverance');
  const determination = document.querySelector('.determination');
  const speed = document.querySelector('.speed');
  const step = document.querySelector('.step');
  const run = document.querySelector('.run');
  const HUMAN_ALIGNMENT = [2,1,3,4];
  const HALFLING_ALIGNMENT = [0,2,3,3];
  const DWARF_ALIGNMENT = [0,2,2,3];
  const ELF_ALIGNMENT = [0,0,2,5];
  const humanSkill = ['знание (Рейкланд)', 'лидерство', 'обращение с животными', 'обаяние', 'оценка', 'рукопашный бой (основное)', 'сплетничество',
    'стрельба (луки)', 'торговля', 'хладнокровие', 'язык (бретонский)', 'язык (вестерландский)'];
  const dwarfSkill = ['артистизм (сказительство)', 'запугивание', 'знание (геология)', 'знание (гномы)', 'знание (металлургия)', 'кутёж', 'оценка', 'ремесло (любое)', 'рукопашный бой (основное)', 'стойкость', 'хладнокровие', 'язык (кхазалид)'];
  const halflingSkill = ['азартные игры', 'знание (Рейкланд)', 'интуиция', 'кутёж', 'ловкость рук', 'наблюдательность', 'обаяние', 'ремесло (повар)', 'скрытность (любая)', 'торговля', 'уклонение', 'язык (мутландский)'];
  const highElfSkill = ['артистизм (пение)', 'лидерство', 'музицирование (любое)', 'наблюдательность', 'ориентирование', 'оценка', 'плавание', 'рукопашный бой (основное)', 'стрельба (луки)', 'хладнокровие', 'хождение под парусом', 'язык (эльтарин)'];
  const woodElfSkill = ['атлетика', 'артистизм (пение)', 'выживание', 'выслеживание', 'запугивание', 'лазание', 'наблюдательность', 'рукопашный бой (основное)', 'скрытность (дикая природа)', 'стойкость', 'стрельба (луки)', 'язык (эльтарин)'];

  const getSkill = (nameRace) => {
    const nameSkill = document.querySelectorAll('.nameSkill');
    const uniqSkill = document.querySelectorAll('.uniqSkill');
    const arraySkill = [];
    nameSkill.forEach((el) => {
      arraySkill.push(el.textContent.toLowerCase());
    });
    const resetSkill = () => {
      nameSkill.forEach((element) => {
        if (element.classList.contains('race')) {
          element.classList.remove('race');
        }
      });
      uniqSkill.forEach((element) => {
        element.classList.remove('race');
      });
    };
    resetSkill();
    for (let i = 0; i <=nameSkill.length - 1; i++) {
      for (let j = 0; j <= nameRace.length; j++) {
        if (nameSkill[i].textContent.toLowerCase() === nameRace[j]) {
          nameSkill[i].classList.add('race');
        }
      }
    }
    let arrUniq = nameRace.filter(i => !arraySkill.includes(i));
    console.log(arrUniq);
    uniqSkill.forEach((elem, index) => {
      if (arrUniq[index]) {
        elem.textContent = arrUniq[index];
        elem.classList.add('race');
      }
    });
  }

  generateButton.addEventListener('click', () => {
    const restart = document.querySelectorAll('.main__block_input');
    restart.forEach((element) => {
      element.value = '';
    });
    const char = document.querySelectorAll('.char');
    char.forEach((element) => {
      if (element.classList.contains('mainClass')) {
        element.classList.remove('mainClass');
        element.removeAttribute('style');
      }
    });
    const race = getRandom(1,100);
    if (race <= 90) {
      character.characterRace = 'Человек';
      inputRace.setAttribute('data-race', '0');
      freeAlignment.textContent = HUMAN_ALIGNMENT[2];
      fate.textContent = HUMAN_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = HUMAN_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      character.characterMovement.movement = HUMAN_ALIGNMENT[3];
      character.characterMovement.walk = HUMAN_ALIGNMENT[3] * 2;
      character.characterMovement.run= HUMAN_ALIGNMENT[3] * 4;
      getSkill(humanSkill);
    } else if (race > 90 && race <=94) {
      character.characterRace = 'Полурослик';
      inputRace.setAttribute('data-race', '2');
      freeAlignment.textContent = HALFLING_ALIGNMENT[2];
      fate.textContent = HALFLING_ALIGNMENT[1];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = HALFLING_ALIGNMENT[2];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      character.characterMovement.movement = HALFLING_ALIGNMENT[3];
      character.characterMovement.walk = HALFLING_ALIGNMENT[3] * 2;
      character.characterMovement.run = HALFLING_ALIGNMENT[3] * 4;
      getSkill(halflingSkill);
    } else if (race > 94 && race <= 97) {
      character.characterRace = 'Дварф';
      inputRace.setAttribute('data-race', '1');
      freeAlignment.textContent = DWARF_ALIGNMENT[2];
      fate.textContent = DWARF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = DWARF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      character.characterMovement.movement = DWARF_ALIGNMENT[3];
      character.characterMovement.walk = DWARF_ALIGNMENT[3] * 2;
      character.characterMovement.run = DWARF_ALIGNMENT[3] * 4;
      getSkill(dwarfSkill);
    } else if (race > 98 && race <= 99) {
      character.characterRace = 'Высший эльф';
      inputRace.setAttribute('data-race', '3');
      freeAlignment.textContent = ELF_ALIGNMENT[2];
      fate.textContent = ELF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent.textContent;
      perseverance.textContent = ELF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      character.characterMovement.movement = ELF_ALIGNMENT[3];
      character.characterMovement.walk = ELF_ALIGNMENT[3] * 2;
      character.characterMovement.run = ELF_ALIGNMENT[3] * 4;
      getSkill(highElfSkill);
    } else if (race === 100) {
      character.characterRace = 'Лесной эльф';
      inputRace.setAttribute('data-race', '4');
      freeAlignment.textContent = ELF_ALIGNMENT[2];
      fate.textContent = ELF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = ELF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      character.characterMovement.movement = ELF_ALIGNMENT[3];
      character.characterMovement.walk = ELF_ALIGNMENT[3] * 2;
      character.characterMovement.run = ELF_ALIGNMENT[3] * 4;
      getSkill(woodElfSkill);
    }

    inputRace.value = character.characterRace;
    speed.textContent = character.characterMovement.movement;
    step.textContent = character.characterMovement.walk;
    run.textContent = character.characterMovement.run;

  });
}


export {randomRaceHandler}
