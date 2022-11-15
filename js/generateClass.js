 const generateClass = () => {
  const arrayClass = [];

  arrayClass[0] = {
    className: 'Бюргеры',
    career: 'Агитатор',
    stage: {
      1: 'Памфлетист',
      2: 'Агитатор',
      3: 'Подстрекатель',
      4: 'Демагог'
    },
    status: ['copper1','copper2','copper3','cooper5'],
    inventory: ['дюжина гвоздей, молоток, писчий набор, стопка листовок','кожаная куртка','памфлетист, ручное оружие','внушительная шляпа, печатный станок, покровитель, трое памфлетистов'],
    classSkill: '',
    race: ['1','1-2','1-2','none','none']
  };
  arrayClass[1] = {
    className: 'Бюргеры',
    career: 'Городской стражник',
    stage: {
      1: 'Новобранец городской стражи',
      2: 'Городской стражник',
      3: 'Сержант городской стражи',
      4: 'Капитан городской стражи'
    },
    status: ['copper3','silver1','silver3','gold1'],
    inventory: ['кожаная куртка, мундир, ручное оружие','ламповое масло, масляная лампа на шесте, медный значок','знак служебного положения, кираса, шлем', 'верховая лошадь, отличная шляпа,\n' +
    'отличное ручное оружие, отличный знак служебного положения, седло и сбруя'],
    classSkill: '',
    race: ['2','3-5','3-4','1','none']
  };
  arrayClass[2] = {
    className: 'Бюргеры',
    career: 'Горожанин',
    stage: {
      1: 'Мелкая сошка',
      2: 'Горожанин',
      3: 'Городской старшина',
      4: 'Бургомистр'
    },
    status: ['silver1','silver2','silver5','gold1'],
    inventory: ['крепкие башмаки, съёмная комната','писчий набор, скромный городской дом, слуга','городской дом, карета с кучером', 'верховая лошадь, отличная шляпа,\n' +
    'большой городской дом с садом и слугами, камердинер, отличная одежда, цепь бургомистра'],
    classSkill: '',
    race: ['3-5','6-11','5-7','2-3','none']
  };
  arrayClass[3] = {
    className: 'Бюргеры',
    career: 'Крысолов',
    stage: {
      1: 'Крысобой',
      2: 'Крысолов',
      3: 'Городской старшина',
      4: 'Бургомистр'
    },
    status: ['copper3','silver1','silver2','silver3'],
    inventory: ['маленькая, но злобная собака, мешок, праща и 10 пуль',' ловушки на крыс, шест для мёртвых крыс','кожаная куртка, лампа Давриха, ручное\n' +
    'оружие', 'большая и злобная собака мешок с ядовитой приманкой (10 доз сердцебоя), помощник'],
    classSkill: '',
    race: ['6-7','12','8-10','none','none']
  };
  arrayClass[4] = {
    className: 'Бюргеры',
    career: 'Купец',
    stage: {
      1: 'Торговец',
      2: 'Купец',
      3: 'Негоциант',
      4: 'Патриций'
    },
    status: ['copper2','silver5','gold1','gold3'],
    inventory: ['абак, мул, парусиновый навес, повозка, 3d10 серебряных шиллингов','лицензия Гильдии Купцов, речная баржа или 2 фургона, 20 золотых крон',' городской дом с прислугой, склад, 100 золотых крон', 'городской особняк, отличная одежда, 2 речных баржи или 4 фургона, 2 склада, 1000 золотых крон'],
    classSkill: '',
    race: ['8','13-16','11-14','4-8','none']
  };
  arrayClass[5] = {
    className: 'Бюргеры',
    career: 'Попрошайка',
    stage: {
      1: 'Побирушка',
      2: 'Попрошайка',
      3: 'Старший попрошайка',
      4: 'Король попрошаек'
    },
    status: ['copper0','copper2','copper4','silver2'],
    inventory: [],
    classSkill: '',
    race: ['9-10','17','15-18','none','none']
  };
  arrayClass[6] = {
    className: 'Бюргеры',
    career: 'Ремесленник',
    stage: {
      1: 'Подмастерье ремесленника  ',
      2: 'Ремесленник',
      3: 'Мастер-ремесленник',
      4: 'Гильдмейстер'
    },
    status: ['copper2','silver1','silver3','gold1'],
    inventory: [],
    classSkill: '',
    race: ['11-12','18-23','19-23','9-11','1-5']
  };
  arrayClass[7] = {
    className: 'Бюргеры',
    career: 'Следователь',
    stage: {
      1: 'Сыщик',
      2: 'Следователь',
      3: 'Старший следователь',
      4: 'Детектив'
    },
    status: ['silver1','silver2','silver3','silver5'],
    inventory: [],
    classSkill: '',
    race: ['13','24-25','24-25','12-13','none']
  };
  arrayClass[8] = {
    className: 'Воины',
    career: 'Гладиатор',
    stage: {
      1: 'Кулачный боец',
      2: 'Гладиатор',
      3: 'Чемпион арены',
      4: 'Легенда арены'
    },
    status: ['silver1','silver2','silver3','silver5'],
    inventory: [],
    classSkill: '',
    race: ['14','26-28','26','14-15','6-7']
  };
  arrayClass[9] = {
    className: 'Воины',
    career: 'Жрец-воин',
    stage: {
      1: 'Неофит',
      2: 'Жрец-воин',
      3: 'Жрец-сержант',
      4: 'Жрец-капитан'
    },
    status: ['copper2','silver2','silver3','silver4'],
    inventory: [],
    classSkill: '',
    race: ['15','none','none','none','none']
  };
  arrayClass[10] = {
    className: 'Воины',
    career: 'Кавалерист',
    stage: {
      1: 'Всадник',
      2: 'Кавалерист',
      3: 'Сержант кавалерии',
      4: 'Офицер кавалерии'
    },
    status: ['silver2','silver4','gold1','gold2'],
    inventory: [],
    classSkill: '',
    race: ['16-17','none','none','16-19','8-12']
  };
  arrayClass[11] = {
    className: 'Воины',
    career: 'Негодяй',
    stage: {
      1: 'Задира',
      2: 'Негодяй',
      3: 'Наёмный убийца',
      4: 'Ассасин'
    },
    status: ['copper2','silver1','silver4','gold1'],
    inventory: [],
    classSkill: '',
    race: ['18','29-31','none','20','none']
  };
  arrayClass[12] = {
    className: 'Воины',
    career: 'Охранник',
    stage: {
      1: 'Часовой',
      2: 'Охранник',
      3: 'Гвардеец',
      4: 'Офице гвардии'
    },
    status: ['silver1','silver2','silver3','silver5'],
    inventory: [],
    classSkill: '',
    race: ['19-20','32-34','27-28','21-22','13-14']
  };
  arrayClass[13] = {
    className: 'Воины',
    career: 'Рыцарь',
    stage: {
      1: 'Оруженосец',
      2: 'Рыцарь',
      3: 'Первый рыцарь',
      4: 'Рыцарь Внутреннего Круга'
    },
    status: ['silver3','silver5','gold2','gold4'],
    inventory: [],
    classSkill: '',
    race: ['21','none','none','23','15-16']
  };
  arrayClass[14] = {
    className: 'Воины',
    career: 'Солдат',
    stage: {
      1: 'Новобранец',
      2: 'Солдат',
      3: 'Сержант',
      4: 'Офицер'
    },
    status: ['silver1','silver3','silver5','gold1'],
    inventory: [],
    classSkill: '',
    race: ['22-25','35–37','29–31','24–25','17–20']
  };
  arrayClass[15] = {
    className: 'Воины',
    career: 'Убийца чудовищ',
    stage: {
      1: 'Убийца троллей',
      2: 'Убийца великанов',
      3: 'Убийца драконов',
      4: 'Убийца демонов'
    },
    status: ['copper2','copper2','copper2','copper2'],
    inventory: [],
    classSkill: '',
    race: ['none','38–41','none','none','none']
  };
  arrayClass[16] = {
    className: 'Книгочеи',
    career: 'Аптекарь',
    stage: {
      1: 'Подмастерье аптекаря',
      2: 'Аптекарь',
      3: 'Мастер-аптекарь',
      4: 'Провизор'
    },
    status: ['copper3','silver1','silver3','gold1'],
    inventory: [],
    classSkill: '',
    race: ['26','42','32','26-27','none']
  };
  arrayClass[17] = {
    className: 'Книгочеи',
    career: 'Врач',
    stage: {
      1: 'Подмастерье врача',
      2: 'Врач',
      3: 'Доктор',
      4: 'Придворный врач'
    },
    status: ['copper4','silver3','silver5','gold1'],
    inventory: [],
    classSkill: '',
    race: ['27','43','33-34','28-29','none']
  };
  arrayClass[18] = {
    className: 'Книгочеи',
    career: 'Жрец',
    stage: {
      1: 'Диакон',
      2: 'Жрец',
      3: 'Верховный жрец',
      4: 'Предстоятель'
    },
    status: ['copper2','copper2','copper2','copper2'],
    inventory: [],
    classSkill: '',
    race: ['28-31','none','none','none','none']
  };
  arrayClass[19] = {
    className: 'Книгочеи',
    career: 'Законник',
    stage: {
      1: 'Студент-законник',
      2: 'Законник',
      3: 'Барристер',
      4: 'Судья'
    },
    status: ['copper4','silver3','gold1','gold2'],
    inventory: [],
    classSkill: '',
    race: ['33','44-45','35-36','30-33','none']
  };
  arrayClass[20] = {
    className: 'Книгочеи',
    career: 'Инженер',
    stage: {
      1: 'Студент-инженер',
      2: 'Инженер',
      3: 'Мастер-инженер',
      4: 'Патентованный инженер'
    },
    status: ['copper4','silver2','silver4','copper2'],
    inventory: [],
    classSkill: '',
    race: ['34','46-48','37','none','none']
  };

  arrayClass[21] = {
    className: 'Книгочеи',
    career: 'Маг',
    stage: {
      1: 'Ученик мага',
      2: 'Маг',
      3: 'Магистр',
      4: 'Верховный маг'
    },
    status: ['cooper3','silver3','gold1','gold2'],
    inventory: [],
    classSkill: '',
    race: ['35','none','none','34-37','21-24']
  };

  arrayClass[22] = {
    className: 'Книгочеи',
    career: 'Монах',
    stage: {
      1: 'Послушник',
      2: 'Монах',
      3: 'Аббат',
      4: 'Генеральный настоятель'
    },
    status: ['copper1','copper4','silver2', 'silver5'],
    classSkill: '',
    race: ['36-37', 'none', 'none', 'none' ]
  };
  arrayClass[23] = {
    className: 'Книгочеи',
    career: 'Учёный',
    stage: {
      1: 'Студент',
      2: 'Учёный',
      3: 'Академик',
      4: 'Профессор'
    },
    status: ['copper3','silver2','silver5','gold1'],
    inventory: [],
    classSkill: '',
    race: ['38-39', '49-50', '40', '38-41', '25' ]
  };
  arrayClass[24] = {
    className: 'Крестьяне',
    career: 'Бейлиф',
    stage: {
      1: 'Мытарь',
      2: 'Бейлиф',
      3: 'Шериф',
      4: 'Магистрат'
    },
    status: ['copper3','silver2','silver5','gold1'],
    inventory: [],
    classSkill: '',
    race: ['40', '51-52', '40', 'none', 'none' ]
  };
  arrayClass[25] = {
    className: 'Крестьяне',
    career: 'Знахарь',
    stage: {
      1: 'Ученик знахаря',
      2: 'Знахарь',
      3: 'Знахарь-наставник',
      4: 'Премудрый знахарь'
    },
    status: ['copper1','copper2','copper3','copper5'],
    inventory: [],
    classSkill: '',
    race: ['41', 'none', 'none', 'none', 'none' ]
  };
  arrayClass[26] = {
    className: 'Крестьяне',
    career: 'Мистик',
    stage: {
      1: 'Предсказатель',
      2: 'Мистик',
      3: 'Прорицатель',
      4: 'Провидец'
    },
    status: ['copper1','copper2','copper3','copper4'],
    inventory: [],
    classSkill: '',
    race: ['42', 'none', 'none', 'none', '26-30' ]
  };
  arrayClass[26] = {
    className: 'Крестьяне',
    career: 'Охотник',
    stage: {
      1: 'Зверолов',
      2: 'Охотник',
      3: 'Следопыт',
      4: 'Егермейстер'
    },
    status: ['copper12','copper4','silver1','silver3'],
    inventory: [],
    classSkill: '',
    race: ['43-44', '53-54', '41-42', '42-44', '31-40' ]
  };
  arrayClass[27] = {
    className: 'Крестьяне',
    career: 'Разведчик',
    stage: {
      1: 'Проводник',
      2: 'Разведчик',
      3: 'Землепроходец',
      4: 'Первооткрыватель'
    },
    status: ['copper3','copper5','silver1','silver5'],
    inventory: [],
    classSkill: '',
    race: ['45', '55', '43', '45-50', '41-51' ]
  };
  arrayClass[28] = {
    className: 'Крестьяне',
    career: 'Рудокоп',
    stage: {
      1: 'Старатель',
      2: 'Рудокоп',
      3: 'Рудознатец',
      4: 'Бригадир рудокопов'
    },
    status: ['copper2','copper4','copper5','silver4'],
    inventory: [],
    classSkill: '',
    race: ['46', '56-60', '40', '44', 'none' ]
  };
  arrayClass[29] = {
    className: 'Крестьяне',
    career: 'Селянин',
    stage: {
      1: 'Батрак',
      2: 'Селянин',
      3: 'Член схода',
      4: 'Староста'
    },
    status: ['copper2','copper3','copper4','silver2'],
    inventory: [],
    classSkill: '',
    race: ['47-51', '61', '45-47', 'none', 'neone' ]
  };
  arrayClass[30] = {
    className: 'Крестьяне',
    career: 'Травник',
    stage: {
      1: 'Сборщик трав ',
      2: 'Травник',
      3: 'Знаток трав',
      4: 'Премудрый травник'
    },
    status: ['copper2','copper4','silver1','siver3'],
    inventory: [],
    classSkill: '',
    race: ['52', 'none', '48-50', '51-52', '52-58' ]
  };
  arrayClass[31] = {
    className: 'Придворные',
    career: 'Дворянин',
    stage: {
      1: 'Дворянский отпрыск',
      2: 'Дворянин',
      3: 'Магнат',
      4: 'Аристократ'
    },
    status: ['gold1','gold3','gold5','gold7'],
    inventory: [],
    classSkill: '',
    race: ['53', '62', 'none', '53-55', '59-64' ]
  };
  arrayClass[32] = {
    className: 'Придворные',
    career: 'Дуэлянт',
    stage: {
      1: 'Фехтовальщик',
      2: 'Дуэлянт',
      3: 'Мастер-дуэлянт',
      4: 'Судебный поединщик'
    },
    status: ['silver3','silver5','gold1','gold3'],
    inventory: [],
    classSkill: '',
    race: ['54', '63', 'none', '56-57', 'none' ]
  };
  arrayClass[33] = {
    className: 'Придворные',
    career: 'Слуга',
    stage: {
      1: 'Дворня',
      2: 'Слуга',
      3: 'Камердинер',
      4: 'Домоправитель'
    },
    status: ['silver1','silver3','silver5','gold1'],
    inventory: [],
    classSkill: '',
    race: ['55–57', '64', '51–56', 'none', 'none' ]
  };
  arrayClass[34] = {
    className: 'Придворные',
    career: 'Смотритель',
    stage: {
      1: 'Сторож',
      2: 'Смотритель',
      3: 'Сенешаль',
      4: 'Губернатор'
    },
    status: ['silver1','silver3','gold1','gold3'],
    inventory: [],
    classSkill: '',
    race: ['58', '65–66', '57–58', '58–59', 'none' ]
  };
  arrayClass[35] = {
    className: 'Придворные',
    career: 'Советник',
    stage: {
      1: 'Секретарь',
      2: 'Советник',
      3: 'Сановник',
      4: 'Канцлер'
    },
    status: ['silver2','silver4','gold1','gold3'],
    inventory: [],
    classSkill: '',
    race: ['59', '67–68', '59', '60–61', '65–68' ]
  };
  arrayClass[36] = {
    className: 'Придворные',
    career: 'Художник',
    stage: {
      1: 'Ученик художника',
      2: 'Художник',
      3: 'Мэтр',
      4: 'Маэстро'
    },
    status: ['silver1','silver3','silver5','gold2'],
    inventory: [],
    classSkill: '',
    race: ['60', '69', '60–61', '62', '69–72' ]
  };
  arrayClass[37] = {
    className: 'Придворные',
    career: 'Шпион',
    stage: {
      1: 'Осведомитель',
      2: 'Шпион',
      3: 'Агент',
      4: 'Глава шпионов'
    },
    status: ['silver1','silver3','gold1','gold4'],
    inventory: [],
    classSkill: '',
    race: ['61', '70', '62', '63–65', '73–76' ]
  };
  arrayClass[38] = {
    className: 'Придворные',
    career: 'Эмиссар',
    stage: {
      1: 'Герольд',
      2: 'Эмиссар',
      3: 'Дипломат',
      4: 'Посол'
    },
    status: ['silver2','silver4','gold2','gold5'],
    inventory: [],
    classSkill: '',
    race: ['62', '71–72', '63', '66–68', '77–83' ]
  };
   arrayClass[39] = {
     className: 'Речники',
     career: 'Докер',
     stage: {
       1: 'Грузчик',
       2: 'Докер',
       3: 'Бригадир докеров',
       4: 'Докмейстер'
     },
     status: ['copper3','silver1','silver3','silver5'],
     inventory: [],
     classSkill: '',
     race: ['63-64', '73–74', '64-66', 'none', 'none' ]
   };
   arrayClass[40] = {
     className: 'Речники',
     career: 'Контрабандист',
     stage: {
       1: 'Речной скороход',
       2: 'Контрабандист',
       3: 'Лихой контрабандист',
       4: 'Король контрабандистов'
     },
     status: ['copper2','copper3','copper5','silver2'],
     inventory: [],
     classSkill: '',
     race: ['65', '75–76', '67-70', '69', 'none' ]
   };
   arrayClass[41] = {
     className: 'Речники',
     career: 'Лодочник',
     stage: {
       1: 'Гребец',
       2: 'Лодочник',
       3: 'Старшина',
       4: 'Капитан баржи'
     },
     status: ['silver1','silver2','silver3','silver5'],
     inventory: [],
     classSkill: '',
     race: ['66–67', '77–78', '70', '70', 'none' ]
   };
   arrayClass[42] = {
     className: 'Речники',
     career: 'Лоцман',
     stage: {
       1: 'Вперёдсмотрящий',
       2: 'Лоцман',
       3: 'Кормчий',
       4: 'Навигатор'
     },
     status: ['copper4','silver1','silver3','silver5'],
     inventory: [],
     classSkill: '',
     race: ['68', '79 ', '72', 'none', 'none' ]
   };
   arrayClass[43] = {
     className: 'Речники',
     career: 'Моряк',
     stage: {
       1: 'Береговик',
       2: 'Моряк',
       3: 'Боцман',
       4: 'Капитан корабля'
     },
     status: ['silver1','silver3','silver5','gold2'],
     inventory: [],
     classSkill: '',
     race: ['69–70', '80', '73', '71–85', 'none' ]
   };
   arrayClass[44] = {
     className: 'Речники',
     career: 'Побережник',
     stage: {
       1: 'Мародёр',
       2: 'Побережник',
       3: 'Речной пират',
       4: 'Капитан побережников'
     },
     status: ['copper2','copper3','copper5','silver2'],
     inventory: [],
     classSkill: '',
     race: ['71', '81', 'none', 'none', '84' ]
   };
   arrayClass[45] = {
     className: 'Речники',
     career: 'Речной житель',
     stage: {
       1: 'Малёк',
       2: 'Речной житель',
       3: 'Речной старожил',
       4: 'Речной староста'
     },
     status: ['copper2','copper3','copper5','silver2'],
     inventory: [],
     classSkill: '',
     race: ['72–74', '82–83', '74–76', 'none', 'none' ]
   };
   arrayClass[46] = {
     className: 'Речники',
     career: 'Речной стражник',
     stage: {
       1: 'Новобранец Речной стражи',
       2: 'Речной стражник',
       3: 'Корабельный меч',
       4: 'Командир корабельных мечей'
     },
     status: ['silver1','silver2','silver4','gold1'],
     inventory: [],
     classSkill: '',
     race: ['75–76', 'none', '77', 'none', 'none' ]
   };
   arrayClass[47] = {
     className: 'Странники',
     career: 'Артист',
     stage: {
       1: ' Уличный артист',
       2: 'Артист',
       3: 'Трубадур',
       4: 'Глава труппы'
     },
     status: ['copper3','copper5','silver3','gold1'],
     inventory: [],
     classSkill: '',
     race: ['77–78', '84–85', '78–80', '86–88', '85–89' ]
   };
   arrayClass[48] = {
     className: 'Странники',
     career: 'Дорожный стражник',
     stage: {
       1: 'Сборщик пошлин',
       2: 'Дорожный стражник',
       3: 'Сержант Дорожной стражи',
       4: 'Капитан Дорожной стражи'
     },
     status: ['copper5','silver2','silver4','gold1'],
     inventory: [],
     classSkill: '',
     race: ['79', 'none', '81', 'none', 'none' ]
   };
   arrayClass[49] = {
     className: 'Странники',
     career: 'Коробейник',
     stage: {
       1: ' Лоточник',
       2: 'Коробейник',
       3: 'Бывалый коробейник',
       4: 'Странствующий торговец'
     },
     status: ['copper1','copper4','silver1','silver3'],
     inventory: [],
     classSkill: '',
     race: ['80', '86–87', '82–83', 'none', 'none' ]
   };
   arrayClass[50] = {
     className: 'Странники',
     career: 'Кучер',
     stage: {
       1: 'Форейтор',
       2: 'Кучер',
       3: 'Хозяин дилижанса',
       4: 'Распорядитель маршрута'
     },
     status: ['silver1','silver2','silver3','silver5'],
     inventory: [],
     classSkill: '',
     race: ['81', '88', '84–85', 'none', 'none' ]
   };
   arrayClass[51] = {
     className: 'Странники',
     career: 'Охотник за головами',
     stage: {
       1: 'Ловец воров',
       2: 'Охотник за головами',
       3: 'Мастер-поимщик',
       4: 'Старший поимщик'
     },
     status: ['silver1','silver3','silver5','gold1'],
     inventory: [],
     classSkill: '',
     race: ['82', '89–92', '86', '89–91 ', '90–91' ]
   };
   arrayClass[52] = {
     className: 'Странники',
     career: 'Охотник на ведьм',
     stage: {
       1: 'Дознаватель',
       2: 'Охотник на ведьм',
       3: 'Инквизитор',
       4: 'Великий инквизитор'
     },
     status: ['silver1','silver3','silver5','gold1'],
     inventory: [],
     classSkill: '',
     race: ['83', 'none', 'none', 'none', 'none' ]
   };
   arrayClass[53] = {
     className: 'Странники',
     career: 'Посыльный',
     stage: {
       1: 'Гонец',
       2: 'Посыльный',
       3: 'Курьер',
       4: 'Капитан курьеров'
     },
     status: ['copper3','silver1','silver3','silver5'],
     inventory: [],
     classSkill: '',
     race: ['84', '93–94', '87–88', '92', '92–94' ]
   };
   arrayClass[54] = {
     className: 'Странники',
     career: 'Флагеллант',
     stage: {
       1: 'Фанатик',
       2: 'Флагеллант',
       3: 'Кающийся грешник',
       4: 'Пророк Судного Дня'
     },
     status: ['copper0','copper0','copper0','copper0'],
     inventory: [],
     classSkill: '',
     race: ['85–86', 'none', 'none', 'none', 'none' ]
   };

 }
