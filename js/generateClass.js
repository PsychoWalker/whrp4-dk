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
 }
