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
 }
