import {getRandom} from "./utils.js";
import {character} from "./character.js";

 const generateClass = () => {
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
     character.characterMainCharacteristics.concat(char);
   }

   generateButton.addEventListener('click', () => {
     getClass();
   });

 }

 export {generateClass}
