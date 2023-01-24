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

  generateButton.addEventListener('click', () => {
    const race = getRandom(1,100);
    if (race <= 90) {
      inputRace.value = 'Человек';
      inputRace.setAttribute('data-race', '0');
      freeAlignment.textContent = HUMAN_ALIGNMENT[2];
      fate.textContent = HUMAN_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = HUMAN_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      speed.textContent = HUMAN_ALIGNMENT[3];
      step.textContent = HUMAN_ALIGNMENT[3] * 2;
      run.textContent = HUMAN_ALIGNMENT[3] * 4;
    } else if (race > 90 && race <=94) {
      inputRace.value = 'Полурослик';
      inputRace.setAttribute('data-race', '2');
      freeAlignment.textContent = HALFLING_ALIGNMENT[2];
      fate.textContent = HALFLING_ALIGNMENT[1];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = HALFLING_ALIGNMENT[2];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      speed.textContent = HALFLING_ALIGNMENT[3];
      step.textContent = HALFLING_ALIGNMENT[3] * 2;
      run.textContent = HALFLING_ALIGNMENT[3] * 4;
    } else if (race > 94 && race <= 97) {
      inputRace.value = 'Дварф';
      inputRace.setAttribute('data-race', '1');
      freeAlignment.textContent = DWARF_ALIGNMENT[2];
      fate.textContent = DWARF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = DWARF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      speed.textContent = DWARF_ALIGNMENT[3];
      step.textContent = DWARF_ALIGNMENT[3] * 2;
      run.textContent = DWARF_ALIGNMENT[3] * 4;
    } else if (race > 98 && race <= 99) {
      inputRace.value = 'Высший эльф';
      inputRace.setAttribute('data-race', '3');
      freeAlignment.textContent = ELF_ALIGNMENT[2];
      fate.textContent = ELF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent.textContent;
      perseverance.textContent = ELF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      speed.textContent = ELF_ALIGNMENT[3];
      step.textContent = ELF_ALIGNMENT[3] * 2;
      run.textContent = ELF_ALIGNMENT[3] * 4;
    } else if (race === 100) {
      inputRace.value = 'Лесной эльф';
      inputRace.setAttribute('data-race', '4');
      freeAlignment.textContent = ELF_ALIGNMENT[2];
      fate.textContent = ELF_ALIGNMENT[0];
      fate.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      fortune.textContent = fate.textContent;
      perseverance.textContent = ELF_ALIGNMENT[1];
      perseverance.parentElement.setAttribute('style', 'background: #81e581; cursor: pointer');
      determination.textContent = perseverance.textContent;
      speed.textContent = ELF_ALIGNMENT[3];
      step.textContent = ELF_ALIGNMENT[3] * 2;
      run.textContent = ELF_ALIGNMENT[3] * 4;
    }
    character.characterRace = inputRace.value;
  });
}


export {randomRaceHandler}
