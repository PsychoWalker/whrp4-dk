'use strict';

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const character = {
  characterName: '',
  characterRace: '',
  characterClass: '',
  characterCareer: '',
  characterCareerStage: '',
  characterCareerPath: '',
  characterStatus: '',
  characterAge: '',
  characterHeight: '',
  characterHair: '',
  characterEyes: '',
  characterCharacteristics: [],
  characterMainCharacteristics: [],
  characterStepCharacteristics: [],
  characterFate: {
    fate: '',
    fortune: ''
  },
  characterResilience: {
    resilience: '',
    resolve: '',
    motivation: ''
  },
  characterExperience: {
    current: '',
    spent: '',
    total: ''
  },
  characterMovement: {
    movement:'',
    walk:'',
    run:''
  }
};

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
  };

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
};

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
};

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
};

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
};

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
    character.characterEyes = inputEye.value;
  });
};

const generateClassHandler = () => {
  const arrayClass = [];

  const MIN_CLASS_NUMBER = 1;
  const MAX_CLASS_NUMBER = 100;

  arrayClass[0] = {
    className: 'Бюргеры',
    career: 'Агитатор',
    stage: {
      Первая: 'Памфлетист',
      Вторая: 'Агитатор',
      Третья: 'Подстрекатель',
      Четвёртая: 'Демагог'
    },
    status: ['Медный-1','Медный-2','Медный-3','cooper5'],
    inventory: ['дюжина гвоздей, молоток, писчий набор, стопка листовок','кожаная куртка','памфлетист, ручное оружие','внушительная шляпа, печатный станок, покровитель, трое памфлетистов'],
    classCharacteristic: [1,7,9,5,1,4],
    classSkill: '',
    race: ['1','1-2','1-2','none','none']
  };
  arrayClass[1] = {
    className: 'Бюргеры',
    career: 'Городской стражник',
    stage: {
      Первая: 'Новобранец городской стражи',
      Вторая: 'Городской стражник',
      Третья: 'Сержант городской стражи',
      Четвёртая: 'Капитан городской стражи'
    },
    status: ['Медный-3','Серебряный-1','Серебряный-3','Золотой-1'],
    inventory: ['кожаная куртка, мундир, ручное оружие','ламповое масло, масляная лампа на шесте, медный значок','знак служебного положения, кираса, шлем', 'верховая лошадь, отличная шляпа,\n' +
    'отличное ручное оружие, отличный знак служебного положения, седло и сбруя'],
    classCharacteristic: [0,2,9,8,4,7],
    classSkill: '',
    race: ['2','3-5','3-4','1','none']
  };
  arrayClass[2] = {
    className: 'Бюргеры',
    career: 'Горожанин',
    stage: {
      Первая: 'Мелкая сошка',
      Вторая: 'Горожанин',
      Третья: 'Городской старшина',
      Четвёртая: 'Бургомистр'
    },
    status: ['Серебряный-1','Серебряный-2','Серебряный-5','Золотой-1'],
    inventory: ['крепкие башмаки, съёмная комната','писчий набор, скромный городской дом, слуга','городской дом, карета с кучером', 'верховая лошадь, отличная шляпа,\n' +
    'большой городской дом с садом и слугами, камердинер, отличная одежда, цепь бургомистра'],
    classCharacteristic: [5,7,9,4,6,8],
    classSkill: '',
    race: ['3-5','6-11','5-7','2-3','none']
  };
  arrayClass[3] = {
    className: 'Бюргеры',
    career: 'Крысолов',
    stage: {
      Первая: 'Крысобой',
      Вторая: 'Крысолов',
      Третья: 'Городской старшина',
      Четвёртая: 'Бургомистр'
    },
    status: ['Медный-3','Серебряный-1','Серебряный-2','Серебряный-3'],
    inventory: ['маленькая, но злобная собака, мешок, праща и 10 пуль',' ловушки на крыс, шест для мёртвых крыс','кожаная куртка, лампа Давриха, ручное\n' +
    'оружие', 'большая и злобная собака мешок с ядовитой приманкой (10 доз сердцебоя), помощник'],
    classCharacteristic: [0,1,8,3,4,2],
    classSkill: '',
    race: ['6-7','12','8-10','none','none']
  };
  arrayClass[4] = {
    className: 'Бюргеры',
    career: 'Купец',
    stage: {
      Первая: 'Торговец',
      Вторая: 'Купец',
      Третья: 'Негоциант',
      Четвёртая: 'Патриций'
    },
    status: ['Медный-2','Серебряный-5','Золотой-1','Золотой-3'],
    inventory: ['абак, мул, парусиновый навес, повозка, 3d10 серебряных шиллингов','лицензия Гильдии Купцов, речная баржа или 2 фургона, 20 золотых крон',' городской дом с прислугой, склад, 100 золотых крон', 'городской особняк, отличная одежда, 2 речных баржи или 4 фургона, 2 склада, 1000 золотых крон'],
    classCharacteristic: [5,8,9,7,4,0],
    classSkill: '',
    race: ['8','13-16','11-14','4-8','none']
  };
  arrayClass[5] = {
    className: 'Бюргеры',
    career: 'Попрошайка',
    stage: {
      Первая: 'Побирушка',
      Вторая: 'Попрошайка',
      Третья: 'Старший попрошайка',
      Четвёртая: 'Король попрошаек'
    },
    status: ['Медный-0','Медный-2','Медный-4','Серебряный-2'],
    inventory: [],
    classCharacteristic: [3,4,9,8,0,4],
    classSkill: '',
    race: ['9-10','17','15-18','none','none']
  };
  arrayClass[6] = {
    className: 'Бюргеры',
    career: 'Ремесленник',
    stage: {
      Первая: 'Подмастерье ремесленника  ',
      Вторая: 'Ремесленник',
      Третья: 'Мастер-ремесленник',
      Четвёртая: 'Гильдмейстер'
    },
    status: ['Медный-2','Серебряный-1','Серебряный-3','Золотой-1'],
    inventory: [],
    classCharacteristic: [2,3,6,9,8,7],
    classSkill: '',
    race: ['11-12','18-23','19-23','9-11','1-5']
  };
  arrayClass[7] = {
    className: 'Бюргеры',
    career: 'Следователь',
    stage: {
      Первая: 'Сыщик',
      Вторая: 'Следователь',
      Третья: 'Старший следователь',
      Четвёртая: 'Детектив'
    },
    status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-5'],
    inventory: [],
    classCharacteristic: [4,5,7,9,6,8],
    classSkill: '',
    race: ['13','24-25','24-25','12-13','none']
  };
  arrayClass[8] = {
    className: 'Воины',
    career: 'Гладиатор',
    stage: {
      Первая: 'Кулачный боец',
      Вторая: 'Гладиатор',
      Третья: 'Чемпион арены',
      Четвёртая: 'Легенда арены'
    },
    status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-5'],
    inventory: [],
    classCharacteristic: [0,2,3,4,5,9],
    classSkill: '',
    race: ['14','26-28','26','14-15','6-7']
  };
  arrayClass[9] = {
    className: 'Воины',
    career: 'Жрец-воин',
    stage: {
      Первая: 'Неофит',
      Вторая: 'Жрец-воин',
      Третья: 'Жрец-сержант',
      Четвёртая: 'Жрец-капитан'
    },
    status: ['Медный-2','Серебряный-2','Серебряный-3','Серебряный-4'],
    inventory: [],
    classCharacteristic: [0,3,8,2,4,9],
    classSkill: '',
    race: ['15','none','none','none','none']
  };
  arrayClass[10] = {
    className: 'Воины',
    career: 'Кавалерист',
    stage: {
      Первая: 'Всадник',
      Вторая: 'Кавалерист',
      Третья: 'Сержант кавалерии',
      Четвёртая: 'Офицер кавалерии'
    },
    status: ['Серебряный-2','Серебряный-4','Золотой-1','Золотой-2'],
    inventory: [],
    classCharacteristic: [0,2,5,1,4,9],
    classSkill: '',
    race: ['16-17','none','none','16-19','8-12']
  };
  arrayClass[11] = {
    className: 'Воины',
    career: 'Негодяй',
    stage: {
      Первая: 'Задира',
      Вторая: 'Негодяй',
      Третья: 'Наёмный убийца',
      Четвёртая: 'Ассасин'
    },
    status: ['Медный-2','Серебряный-1','Серебряный-4','Золотой-1'],
    inventory: [],
    classCharacteristic: [0,3,5,4,1,9],
    classSkill: '',
    race: ['18','29-31','none','20','none']
  };
  arrayClass[12] = {
    className: 'Воины',
    career: 'Охранник',
    stage: {
      Первая: 'Часовой',
      Вторая: 'Охранник',
      Третья: 'Гвардеец',
      Четвёртая: 'Офице гвардии'
    },
    status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-5'],
    inventory: [],
    classCharacteristic: [0,3,5,4,2,7],
    classSkill: '',
    race: ['19-20','32-34','27-28','21-22','13-14']
  };
  arrayClass[13] = {
    className: 'Воины',
    career: 'Рыцарь',
    stage: {
      Первая: 'Оруженосец',
      Вторая: 'Рыцарь',
      Третья: 'Первый рыцарь',
      Четвёртая: 'Рыцарь Внутреннего Круга'
    },
    status: ['Серебряный-3','Серебряный-5','Золотой-2','gold4'],
    inventory: [],
    classCharacteristic: [2,4,5,0,8,9],
    classSkill: '',
    race: ['21','none','none','23','15-16']
  };
  arrayClass[14] = {
    className: 'Воины',
    career: 'Солдат',
    stage: {
      Первая: 'Новобранец',
      Вторая: 'Солдат',
      Третья: 'Сержант',
      Четвёртая: 'Офицер'
    },
    status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-1'],
    inventory: [],
    classCharacteristic: [0,3,8,1,4,9],
    classSkill: '',
    race: ['22-25','35-37','29-31','24-25','17-20']
  };
  arrayClass[15] = {
    className: 'Воины',
    career: 'Убийца чудовищ',
    stage: {
      Первая: 'Убийца троллей',
      Вторая: 'Убийца великанов',
      Третья: 'Убийца драконов',
      Четвёртая: 'Убийца демонов'
    },
    status: ['Медный-2','Медный-2','Медный-2','Медный-2'],
    inventory: [],
    classCharacteristic: [0,2,8,3,5,4],
    classSkill: '',
    race: ['none','38-41','none','none','none']
  };
  arrayClass[16] = {
    className: 'Книгочеи',
    career: 'Аптекарь',
    stage: {
      Первая: 'Подмастерье аптекаря',
      Вторая: 'Аптекарь',
      Третья: 'Мастер-аптекарь',
      Четвёртая: 'Провизор'
    },
    status: ['Медный-3','Серебряный-1','Серебряный-3','Золотой-1'],
    inventory: [],
    classCharacteristic: [3,6,7,9,4,8],
    classSkill: '',
    race: ['26','42','32','26-27','none']
  };
  arrayClass[17] = {
    className: 'Книгочеи',
    career: 'Врач',
    stage: {
      Первая: 'Подмастерье врача',
      Вторая: 'Врач',
      Третья: 'Доктор',
      Четвёртая: 'Придворный врач'
    },
    status: ['Медный-4','Серебряный-3','Серебряный-5','Золотой-1'],
    inventory: [],
    classCharacteristic: [6,7,8,9,4,5],
    classSkill: '',
    race: ['27','43','33-34','28-29','none']
  };
  arrayClass[18] = {
    className: 'Книгочеи',
    career: 'Жрец',
    stage: {
      Первая: 'Диакон',
      Вторая: 'Жрец',
      Третья: 'Верховный жрец',
      Четвёртая: 'Предстоятель'
    },
    status: ['Медный-2','Медный-2','Медный-2','Медный-2'],
    inventory: [],
    classCharacteristic: [3,4,8,9,7,4],
    classSkill: '',
    race: ['28-31','none','none','none','none']
  };
  arrayClass[19] = {
    className: 'Книгочеи',
    career: 'Законник',
    stage: {
      Первая: 'Студент-законник',
      Вторая: 'Законник',
      Третья: 'Барристер',
      Четвёртая: 'Судья'
    },
    status: ['Медный-4','Серебряный-3','Золотой-1','Золотой-2'],
    inventory: [],
    classCharacteristic: [4,6,7,9,8,4],
    classSkill: '',
    race: ['33','44-45','35-36','30-33','none']
  };
  arrayClass[20] = {
    className: 'Книгочеи',
    career: 'Инженер',
    stage: {
      Первая: 'Студент-инженер',
      Вторая: 'Инженер',
      Третья: 'Мастер-инженер',
      Четвёртая: 'Патентованный инженер'
    },
    status: ['Медный-4','Серебряный-2','Серебряный-4','Медный-2'],
    inventory: [],
    classCharacteristic: [1,6,7,4,3,8],
    classSkill: '',
    race: ['34','46-48','37','none','none']
  };

  arrayClass[21] = {
    className: 'Книгочеи',
    career: 'Маг',
    stage: {
      Первая: 'Ученик мага',
      Вторая: 'Маг',
      Третья: 'Магистр',
      Четвёртая: 'Верховный маг'
    },
    status: ['cooper3','Серебряный-3','Золотой-1','Золотой-2'],
    inventory: [],
    classCharacteristic: [0,7,8,5,4,9],
    classSkill: '',
    race: ['35','none','none','34-37','21-24']
  };

  arrayClass[22] = {
    className: 'Книгочеи',
    career: 'Монах',
    stage: {
      Первая: 'Послушник',
      Вторая: 'Монах',
      Третья: 'Аббат',
      Четвёртая: 'Генеральный настоятель'
    },
    status: ['Медный-1','Медный-4','Серебряный-2', 'Серебряный-5'],
    inventory: [],
    classCharacteristic: [6,7,9,8,4,3],
    classSkill: '',
    race: ['36-37', 'none', 'none', 'none' ]
  };
  arrayClass[23] = {
    className: 'Книгочеи',
    career: 'Учёный',
    stage: {
      Первая: 'Студент',
      Вторая: 'Учёный',
      Третья: 'Академик',
      Четвёртая: 'Профессор'
    },
    status: ['Медный-3','Серебряный-2','Серебряный-5','Золотой-1'],
    inventory: [],
    classCharacteristic: [3,7,8,4,9,6],
    classSkill: '',
    race: ['38-39', '49-50', '40', '38-41', '25' ]
  };
  arrayClass[24] = {
    className: 'Крестьяне',
    career: 'Бейлиф',
    stage: {
      Первая: 'Мытарь',
      Вторая: 'Бейлиф',
      Третья: 'Шериф',
      Четвёртая: 'Магистрат'
    },
    status: ['Медный-3','Серебряный-2','Серебряный-5','Золотой-1'],
    inventory: [],
    classCharacteristic: [0,4,8,9,5,7],
    classSkill: '',
    race: ['40', '51-52', '40', 'none', 'none' ]
  };
  arrayClass[25] = {
    className: 'Крестьяне',
    career: 'Знахарь',
    stage: {
      Первая: 'Ученик знахаря',
      Вторая: 'Знахарь',
      Третья: 'Знахарь-наставник',
      Четвёртая: 'Премудрый знахарь'
    },
    status: ['Медный-1','Медный-2','Медный-3','Медный-5'],
    inventory: [],
    classCharacteristic: [3,4,6,7,9,8],
    classSkill: '',
    race: ['41', 'none', 'none', 'none', 'none' ]
  };
  arrayClass[26] = {
    className: 'Крестьяне',
    career: 'Мистик',
    stage: {
      Первая: 'Предсказатель',
      Вторая: 'Мистик',
      Третья: 'Прорицатель',
      Четвёртая: 'Провидец'
    },
    status: ['Медный-1','Медный-2','Медный-3','Медный-4'],
    inventory: [],
    classCharacteristic: [4,6,9,8,5,7],
    classSkill: '',
    race: ['42', 'none', 'none', 'none', '26-30' ]
  };
  arrayClass[26] = {
    className: 'Крестьяне',
    career: 'Охотник',
    stage: {
      Первая: 'Зверолов',
      Вторая: 'Охотник',
      Третья: 'Следопыт',
      Четвёртая: 'Егермейстер'
    },
    status: ['Медный-12','Медный-4','Серебряный-1','Серебряный-3'],
    inventory: [],
    classCharacteristic: [2,3,6,1,4,7],
    classSkill: '',
    race: ['43-44', '53-54', '41-42', '42-44', '31-40' ]
  };
  arrayClass[27] = {
    className: 'Крестьяне',
    career: 'Разведчик',
    stage: {
      Первая: 'Проводник',
      Вторая: 'Разведчик',
      Третья: 'Землепроходец',
      Четвёртая: 'Первооткрыватель'
    },
    status: ['Медный-3','Медный-5','Серебряный-1','Серебряный-5'],
    inventory: [],
    classCharacteristic: [3,4,5,1,7,6],
    classSkill: '',
    race: ['45', '55', '43', '45-50', '41-51' ]
  };
  arrayClass[28] = {
    className: 'Крестьяне',
    career: 'Рудокоп',
    stage: {
      Первая: 'Старатель',
      Вторая: 'Рудокоп',
      Третья: 'Рудознатец',
      Четвёртая: 'Бригадир рудокопов'
    },
    status: ['Медный-2','Медный-4','Медный-5','Серебряный-4'],
    inventory: [],
    classCharacteristic: [2,3,8,1,4,9],
    classSkill: '',
    race: ['46', '56-60', '40', '44', 'none' ]
  };
  arrayClass[29] = {
    className: 'Крестьяне',
    career: 'Селянин',
    stage: {
      Первая: 'Батрак',
      Вторая: 'Селянин',
      Третья: 'Член схода',
      Четвёртая: 'Староста'
    },
    status: ['Медный-2','Медный-3','Медный-4','Серебряный-2'],
    inventory: [],
    classCharacteristic: [2,3,5,0,9,7],
    classSkill: '',
    race: ['47-51', '61', '45-47', 'none', 'neone' ]
  };
  arrayClass[30] = {
    className: 'Крестьяне',
    career: 'Травник',
    stage: {
      Первая: 'Сборщик трав ',
      Вторая: 'Травник',
      Третья: 'Знаток трав',
      Четвёртая: 'Премудрый травник'
    },
    status: ['Медный-2','Медный-4','Серебряный-1','siver3'],
    inventory: [],
    classCharacteristic: [3,4,5,6,9,7],
    classSkill: '',
    race: ['52', 'none', '48-50', '51-52', '52-58' ]
  };
  arrayClass[31] = {
    className: 'Придворные',
    career: 'Дворянин',
    stage: {
      Первая: 'Дворянский отпрыск',
      Вторая: 'Дворянин',
      Третья: 'Магнат',
      Четвёртая: 'Аристократ'
    },
    status: ['Золотой-1','Золотой-3','gold5','gold7'],
    inventory: [],
    classCharacteristic: [0,4,6,9,7,8],
    classSkill: '',
    race: ['53', '62', 'none', '53-55', '59-64' ]
  };
  arrayClass[32] = {
    className: 'Придворные',
    career: 'Дуэлянт',
    stage: {
      Первая: 'Фехтовальщик',
      Вторая: 'Дуэлянт',
      Третья: 'Мастер-дуэлянт',
      Четвёртая: 'Судебный поединщик'
    },
    status: ['Серебряный-3','Серебряный-5','Золотой-1','Золотой-3'],
    inventory: [],
    classCharacteristic: [0,4,5,2,3,8],
    classSkill: '',
    race: ['54', '63', 'none', '56-57', 'none' ]
  };
  arrayClass[33] = {
    className: 'Придворные',
    career: 'Слуга',
    stage: {
      Первая: 'Дворня',
      Вторая: 'Слуга',
      Третья: 'Камердинер',
      Четвёртая: 'Домоправитель'
    },
    status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-1'],
    inventory: [],
    classCharacteristic: [2,3,5,4,7,9],
    classSkill: '',
    race: ['55-57', '64', '51-56', 'none', 'none' ]
  };
  arrayClass[34] = {
    className: 'Придворные',
    career: 'Смотритель',
    stage: {
      Первая: 'Сторож',
      Вторая: 'Смотритель',
      Третья: 'Сенешаль',
      Четвёртая: 'Губернатор'
    },
    status: ['Серебряный-1','Серебряный-3','Золотой-1','Золотой-3'],
    inventory: [],
    classCharacteristic: [2,3,8,0,9,7],
    classSkill: '',
    race: ['58', '65-66', '57-58', '58-59', 'none' ]
  };
  arrayClass[35] = {
    className: 'Придворные',
    career: 'Советник',
    stage: {
      Первая: 'Секретарь',
      Вторая: 'Советник',
      Третья: 'Сановник',
      Четвёртая: 'Канцлер'
    },
    status: ['Серебряный-2','Серебряный-4','Золотой-1','Золотой-3'],
    inventory: [],
    classCharacteristic: [3,4,5,9,7,8],
    classSkill: '',
    race: ['59', '67-68', '59', '60-61', '65-68' ]
  };
  arrayClass[36] = {
    className: 'Придворные',
    career: 'Художник',
    stage: {
      Первая: 'Ученик художника',
      Вторая: 'Художник',
      Третья: 'Мэтр',
      Четвёртая: 'Маэстро'
    },
    status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-2'],
    inventory: [],
    classCharacteristic: [2,4,6,9,8,7],
    classSkill: '',
    race: ['60', '69', '60-61', '62', '69-72' ]
  };
  arrayClass[37] = {
    className: 'Придворные',
    career: 'Шпион',
    stage: {
      Первая: 'Осведомитель',
      Вторая: 'Шпион',
      Третья: 'Агент',
      Четвёртая: 'Глава шпионов'
    },
    status: ['Серебряный-1','Серебряный-3','Золотой-1','gold4'],
    inventory: [],
    classCharacteristic: [5,8,9,0,4,7],
    classSkill: '',
    race: ['61', '70', '62', '63-65', '73-76' ]
  };
  arrayClass[38] = {
    className: 'Придворные',
    career: 'Эмиссар',
    stage: {
      Первая: 'Герольд',
      Вторая: 'Эмиссар',
      Третья: 'Дипломат',
      Четвёртая: 'Посол'
    },
    status: ['Серебряный-2','Серебряный-4','Золотой-2','gold5'],
    inventory: [],
    classCharacteristic: [3,5,9,7,4,8],
    classSkill: '',
    race: ['62', '71-72', '63', '66-68', '77-83' ]
  };
   arrayClass[39] = {
     className: 'Речники',
     career: 'Докер',
     stage: {
       Первая: 'Грузчик',
       Вторая: 'Докер',
       Третья: 'Бригадир докеров',
       Четвёртая: 'Докмейстер'
     },
     status: ['Медный-3','Серебряный-1','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [0,3,4,2,8,7],
     classSkill: '',
     race: ['63-64', '73-74', '64-66', 'none', 'none' ]
   };
   arrayClass[40] = {
     className: 'Речники',
     career: 'Контрабандист',
     stage: {
       Первая: 'Речной скороход',
       Вторая: 'Контрабандист',
       Третья: 'Лихой контрабандист',
       Четвёртая: 'Король контрабандистов'
     },
     status: ['Медный-2','Медный-3','Медный-5','Серебряный-2'],
     inventory: [],
     classCharacteristic: [5,6,8,4,7,9],
     classSkill: '',
     race: ['65', '75-76', '67-70', '69', 'none' ]
   };
   arrayClass[41] = {
     className: 'Речники',
     career: 'Лодочник',
     stage: {
       Первая: 'Гребец',
       Вторая: 'Лодочник',
       Третья: 'Старшина',
       Четвёртая: 'Капитан баржи'
     },
     status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [2,3,5,4,6,7],
     classSkill: '',
     race: ['66-67', '77-78', '70', '70', 'none' ]
   };
   arrayClass[42] = {
     className: 'Речники',
     career: 'Лоцман',
     stage: {
       Первая: 'Вперёдсмотрящий',
       Вторая: 'Лоцман',
       Третья: 'Кормчий',
       Четвёртая: 'Навигатор'
     },
     status: ['Медный-4','Серебряный-1','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [0,3,4,8,7,9],
     classSkill: '',
     race: ['68', '79 ', '72', 'none', 'none' ]
   };
   arrayClass[43] = {
     className: 'Речники',
     career: 'Моряк',
     stage: {
       Первая: 'Береговик',
       Вторая: 'Моряк',
       Третья: 'Боцман',
       Четвёртая: 'Капитан корабля'
     },
     status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-2'],
     inventory: [],
     classCharacteristic: [5,6,9,0,4,7],
     classSkill: '',
     race: ['69-70', '80', '73', '71-85', 'none' ]
   };
   arrayClass[44] = {
     className: 'Речники',
     career: 'Побережник',
     stage: {
       Первая: 'Мародёр',
       Вторая: 'Побережник',
       Третья: 'Речной пират',
       Четвёртая: 'Капитан побережников'
     },
     status: ['Медный-2','Медный-3','Медный-5','Серебряный-2'],
     inventory: [],
     classCharacteristic: [0,2,4,8,1,9],
     classSkill: '',
     race: ['71', '81', 'none', 'none', '84' ]
   };
   arrayClass[45] = {
     className: 'Речники',
     career: 'Речной житель',
     stage: {
       Первая: 'Малёк',
       Вторая: 'Речной житель',
       Третья: 'Речной старожил',
       Четвёртая: 'Речной староста'
     },
     status: ['Медный-2','Медный-3','Медный-5','Серебряный-2'],
     inventory: [],
     classCharacteristic: [3,4,5,0,4,9],
     classSkill: '',
     race: ['72-74', '82-83', '74-76', 'none', 'none' ]
   };
   arrayClass[46] = {
     className: 'Речники',
     career: 'Речной стражник',
     stage: {
       Первая: 'Новобранец Речной стражи',
       Вторая: 'Речной стражник',
       Третья: 'Корабельный меч',
       Четвёртая: 'Командир корабельных мечей'
     },
     status: ['Серебряный-1','Серебряный-2','Серебряный-4','Золотой-1'],
     inventory: [],
     classCharacteristic: [1,2,9,0,4,7],
     classSkill: '',
     race: ['75-76', 'none', '77', 'none', 'none' ]
   };
   arrayClass[47] = {
     className: 'Странники',
     career: 'Артист',
     stage: {
       Первая: ' Уличный артист',
       Вторая: 'Артист',
       Третья: 'Трубадур',
       Четвёртая: 'Глава труппы'
     },
     status: ['Медный-3','Медный-5','Серебряный-3','Золотой-1'],
     inventory: [],
     classCharacteristic: [5,6,9,0,1,3],
     classSkill: '',
     race: ['77-78', '84-85', '78-80', '86-88', '85-89' ]
   };
   arrayClass[48] = {
     className: 'Странники',
     career: 'Дорожный стражник',
     stage: {
       Первая: 'Сборщик пошлин',
       Вторая: 'Дорожный стражник',
       Третья: 'Сержант Дорожной стражи',
       Четвёртая: 'Капитан Дорожной стражи'
     },
     status: ['Медный-5','Серебряный-2','Серебряный-4','Золотой-1'],
     inventory: [],
     classCharacteristic: [1,3,4,0,9,7],
     classSkill: '',
     race: ['79', 'none', '81', 'none', 'none' ]
   };
   arrayClass[49] = {
     className: 'Странники',
     career: 'Коробейник',
     stage: {
       Первая: ' Лоточник',
       Вторая: 'Коробейник',
       Третья: 'Бывалый коробейник',
       Четвёртая: 'Странствующий торговец'
     },
     status: ['Медный-1','Медный-4','Серебряный-1','Серебряный-3'],
     inventory: [],
     classCharacteristic: [3,6,8,9,4,7],
     classSkill: '',
     race: ['80', '86-87', '82-83', 'none', 'none' ]
   };
   arrayClass[50] = {
     className: 'Странники',
     career: 'Кучер',
     stage: {
       Первая: 'Форейтор',
       Вторая: 'Кучер',
       Третья: 'Хозяин дилижанса',
       Четвёртая: 'Распорядитель маршрута'
     },
     status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [1,3,8,5,0,4],
     classSkill: '',
     race: ['81', '88', '84-85', 'none', 'none' ]
   };
   arrayClass[51] = {
     className: 'Странники',
     career: 'Охотник за головами',
     stage: {
       Первая: 'Ловец воров',
       Вторая: 'Охотник за головами',
       Третья: 'Мастер-поимщик',
       Четвёртая: 'Старший поимщик'
     },
     status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-1'],
     inventory: [],
     classCharacteristic: [0,3,5,1,2,7],
     classSkill: '',
     race: ['82', '89-92', '86', '89-91 ', '90-91' ]
   };
   arrayClass[52] = {
     className: 'Странники',
     career: 'Охотник на ведьм',
     stage: {
       Первая: 'Дознаватель',
       Вторая: 'Охотник на ведьм',
       Третья: 'Инквизитор',
       Четвёртая: 'Великий инквизитор'
     },
     status: ['Серебряный-1','Серебряный-3','Серебряный-5','Золотой-1'],
     inventory: [],
     classCharacteristic: [0,3,8,1,9,7],
     classSkill: '',
     race: ['83', 'none', 'none', 'none', 'none' ]
   };
   arrayClass[53] = {
     className: 'Странники',
     career: 'Посыльный',
     stage: {
       Первая: 'Гонец',
       Вторая: 'Посыльный',
       Третья: 'Курьер',
       Четвёртая: 'Капитан курьеров'
     },
     status: ['Медный-3','Серебряный-1','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [3,4,5,0,8,9],
     classSkill: '',
     race: ['84', '93-94', '87-88', '92', '92-94' ]
   };
   arrayClass[54] = {
     className: 'Странники',
     career: 'Флагеллант',
     stage: {
       Первая: 'Фанатик',
       Вторая: 'Флагеллант',
       Третья: 'Кающийся грешник',
       Четвёртая: 'Пророк Судного Дня'
     },
     status: ['Медный-0','Медный-0','Медный-0','Медный-0'],
     inventory: [],
     classCharacteristic: [0,2,3,8,4,9],
     classSkill: '',
     race: ['85-86', 'none', 'none', 'none', 'none' ]
   };
   arrayClass[55] = {
     className: 'Шельмы',
     career: 'Бандит',
     stage: {
       Первая: 'Громила',
       Вторая: 'Бандит',
       Третья: 'Главарь банды',
       Четвёртая: ' Король преступного мира'
     },
     status: ['Медный-3','Медный-5','Серебряный-3','Серебряный-5'],
     inventory: [],
     classCharacteristic: [0,2,3,9,8,7],
     classSkill: '',
     race: ['87', '95', '89', 'none', 'none' ]
   };
   arrayClass[56] = {
     className: 'Шельмы',
     career: 'Ведьма',
     stage: {
       Первая: 'Ворожея',
       Вторая: 'Ведьма',
       Третья: 'Ведунья',
       Четвёртая: 'Колдунья'
     },
     status: ['Медный-1','Медный-2','Медный-3','Медный-5'],
     inventory: [],
     classCharacteristic: [0,3,8,4,9,7],
     classSkill: '',
     race: ['88', 'none', 'none', 'none', 'none' ]
   };
   arrayClass[57] = {
     className: 'Шельмы',
     career: 'Вор',
     stage: {
       Первая: 'Проныра',
       Вторая: 'Вор',
       Третья: 'Искусный вор',
       Четвёртая: 'Взломщик'
     },
     status: ['Медный-1','Медный-3','Медный-5','Серебряный-3'],
     inventory: [],
     classCharacteristic: [4,5,8,6,2,9],
     classSkill: '',
     race: ['89-91', '96', '90-93', 'none', 'none' ]
   };
   arrayClass[58] = {
     className: 'Шельмы',
     career: 'Гробокопатель',
     stage: {
       Первая: 'Поставщик трупов',
       Вторая: 'Гробокопатель',
       Третья: 'Расхититель гробниц',
       Четвёртая: 'Охотник за сокровищами'
     },
     status: ['Медный-2','Медный-3','Серебряный-1','Серебряный-5'],
     inventory: [],
     classCharacteristic: [2,4,8,0,6,7],
     classSkill: '',
     race: ['92', 'none', '94', 'none', 'none' ]
   };
   arrayClass[59] = {
     className: 'Шельмы',
     career: 'Пройдоха',
     stage: {
       Первая: 'Прохиндей',
       Вторая: 'Пройдоха',
       Третья: 'Посредник',
       Четвёртая: 'Делец'
     },
     status: ['Медный-1','Медный-3','Серебряный-1','Серебряный-3'],
     inventory: [],
     classCharacteristic: [5,6,9,4,8,7],
     classSkill: '',
     race: ['93-94', 'none', '95-97', '93-94', 'none' ]
   };
   arrayClass[60] = {
     className: 'Шельмы',
     career: 'Разбойник',
     stage: {
       Первая: 'Грабитель',
       Вторая: 'Разбойник',
       Третья: 'Атаман разбойников ',
       Четвёртая: 'Король разбойников'
     },
     status: ['Медный-1','Медный-2','Медный-4','Серебряный-2'],
     inventory: [],
     classCharacteristic: [0,2,3,1,4,9],
     classSkill: '',
     race: ['95-98', '97-99', '98', '95-97 ', '95-100' ]
   };
   arrayClass[61] = {
     className: 'Шельмы',
     career: 'Скупщик краденого',
     stage: {
       Первая: 'Барышник',
       Вторая: 'Скупщик краденого',
       Третья: 'Ломбардщик',
       Четвёртая: ' Теневой воротила'
     },
     status: ['Серебряный-1','Серебряный-2','Серебряный-3','Серебряный-4'],
     inventory: [],
     classCharacteristic: [4,5,9,6,7,8],
     classSkill: '',
     race: ['99', '100', '99', 'none', 'none' ]
   };
   arrayClass[62] = {
     className: 'Шельмы',
     career: 'Шарлатан',
     stage: {
       Первая: 'Мошенник',
       Вторая: 'Шарлатан',
       Третья: 'Аферист',
       Четвёртая: 'Махинатор'
     },
     status: ['Медный-3','Медный-5','Серебряный-2','Серебряный-4'],
     inventory: [],
     classCharacteristic: [4,6,9,8,5,7],
     classSkill: '',
     race: ['100', 'none', '100', '98-100', 'none' ]
   };

   const generateButton = document.querySelector('.generateClass');

   const getClass = () => {
     const getRace = document.querySelector('.main__block_input-race').getAttribute('data-race');
     const classNumber = getRandom(MIN_CLASS_NUMBER,MAX_CLASS_NUMBER);
     const classEnter = document.querySelector('.main__block_input-class');
     const careerEnter = document.querySelector('.main__block_input-career');
     const rangEnter = document.querySelector('.main__block_input-rang');
     const rangNameEnter = document.querySelector('.main__block_input-rangName');
     const status = document.querySelector('.main__block_input-status');
     const baseCharacteristic = document.querySelectorAll('.char');
     const freeCharacteristic = document.querySelector('.freeCharacteristic');
     let char = [];

     arrayClass.forEach((element) => {
       let rangeClassNumber = element.race[getRace].split('-')[0];

       if (classNumber === Number(rangeClassNumber) || (classNumber >= element.race[getRace].split('-')[0] && classNumber <= element.race[getRace].split('-')[1])) {
         classEnter.value = element.className;
         careerEnter.value = element.career;
         rangEnter.value = Object.keys(element.stage)[0];
         rangNameEnter.value = element.stage.Первая;
         status.value = element.status[0];
         char = element.classCharacteristic.slice();
         freeCharacteristic.setAttribute('style', 'display:block');
         baseCharacteristic.forEach((e) => {
           e.removeAttribute('style');
         });
         char.forEach((elem, index) => {
          if (index < 3) {
            baseCharacteristic[elem].setAttribute('style', 'background: #81e581; cursor: pointer');
            baseCharacteristic[elem].classList.add('mainClass');
          }
         });
       }
     });
     character.characterClass = classEnter.value;
     character.characterCareer = careerEnter.value;
     character.characterCareerStage = rangEnter.value;
     character.characterCareerPath = rangNameEnter.value;
     character.characterStatus = status.value;
   };

   generateButton.addEventListener('click', () => {
     getClass();
   });

 };

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
};

const upMainCharacteristic = () => {
  const mainCharacteristic = document.querySelectorAll('.char');
  const baseCharacteristic = document.querySelectorAll('.firstMeaning');
  const numberOfFreeCharacteristics = document.querySelector('.numberOfFreeCharacteristics');

  let numberOfFreeCharacteristic = 5;

  mainCharacteristic.forEach((element, index) => {
    element.addEventListener('click', () => {
      if (numberOfFreeCharacteristic != 0 && baseCharacteristic[index].textContent !== '') {
        if (element.classList.contains('mainClass')) {
          baseCharacteristic[index].textContent = Number(baseCharacteristic[index].textContent) + 1;
          numberOfFreeCharacteristic--;
          numberOfFreeCharacteristics.textContent = numberOfFreeCharacteristic;
          character.characterCharacteristics[index] = baseCharacteristic[index].textContent;
        }
      }
    });
  });
};

const upMainAlignment = () => {

  const fate = document.querySelector('.fate');
  const fortune = document.querySelector('.fortune');
  const perseverance = document.querySelector('.perseverance');
  const determination = document.querySelector('.determination');
  const numberOfFreeAlignment = document.querySelector('.numberOfFreeAlignment');

  fate.addEventListener('click', () => {
    if (numberOfFreeAlignment.textContent != 0) {
      fate.textContent = Number(fate.textContent) + 1;
      fortune.textContent = fate.textContent;
      numberOfFreeAlignment.textContent = Number(numberOfFreeAlignment.textContent) - 1;
      character.characterFate.fate = fate.textContent;
      character.characterFate.fortune = fate.textContent;
    }
  });

  perseverance.addEventListener('click', () => {
    if (numberOfFreeAlignment.textContent != 0) {
      perseverance.textContent = Number(perseverance.textContent) + 1;
      determination.textContent = perseverance.textContent;
      numberOfFreeAlignment.textContent = Number(numberOfFreeAlignment.textContent) - 1;
      character.characterResilience.resilience = perseverance.textContent;
      character.characterResilience.resolve = perseverance.textContent;
    }
  });
};

ageCharacterCreate();
riseCharacterCreateHandler();
hairCharacterCreate();
eyeCharacterCreate();
randomRaceHandler();
generateClassHandler();
generateCharacteristicHandler();
upMainCharacteristic();
upMainAlignment();

document.querySelector('.uniq').addEventListener('click', () => {
  console.log(character);
});
