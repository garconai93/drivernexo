// Cele 14 manevre oficiale DRPCIV categoria B (proba practica)
// Fiecare cu: nume, descriere scurta, 4-5 criterii de evaluare
window.DRIVER_NEXO_MANEVRES = [
  {
    id: 'paralela',
    name: 'Parcare laterala (paralela)',
    desc: 'Intri perpendicular, apoi paralel cu bordura. Testeaza coordonarea maini-volan + oglinzi + viteza redusa.',
    icon: '🅿️',
    criteria: [
      'Verifica oglinzile si unghiul mort inainte de a incepe',
      'Nu merge peste bordura sau linia de demarcatie',
      'Masina ajunge paralela fara a intra peste 30 cm',
      'Ajustari fine cu marsarier fara greseli majore',
      'Termina manevra intr-o singura incercare sau cu minim de corectii'
    ]
  },
  {
    id: 'intoarcere3',
    name: 'Intoarcere in 3 miscari',
    desc: 'Intri intr-un spatiu mic si te intorci 180° cu maxim 3 manevre (inainte + marsarier).',
    icon: '🔄',
    criteria: [
      'Pozitionare corecta la intrare (la unghi potrivit)',
      'Marsarier lent, cu control al directiei',
      'Nu depaseste limitele spatiului',
      'Termina in maxim 3 miscari',
      'Finalizeaza in pozitie paralela cu bordura'
    ]
  },
  {
    id: 'perpendiculara',
    name: 'Parcare perpendiculara (intrare in loc)',
    desc: 'Intri cu spatele intr-un loc de parcare marcat intre 2 linii, la 90°.',
    icon: '🅿️',
    criteria: [
      'Pozitionare initiala corecta (aliniere cu locul)',
      'Unghi corect la intrare',
      'Nu loveste stalpii sau alte masini',
      'Masina centrata in loc la final',
      'Iesire usoara fara manevre suplimentare'
    ]
  },
  {
    id: 'autostrada',
    name: 'Intrarea + iesirea pe autostrada',
    desc: 'Acceerare pe banda de intrare, integrare in trafic, mers pe autostrada, iesire pe banda de decelerare.',
    icon: '🛣️',
    criteria: [
      'Viteza corecta pe banda de accelerare (min 80 km/h)',
      'Verificare oglinzi + unghi mort la integrare',
      'Pastrare distanta de siguranta 2+ secunde',
      'Semnalizare la iesire cu minim 200 m inainte',
      'Reducere progresiva a vitezei pe banda de decelerare'
    ]
  },
  {
    id: 'sens_giratoriu',
    name: 'Sens giratoriu (cu si fara semafor)',
    desc: 'Intrare, mers in cerc, iesire cu semnalizare.',
    icon: '⭕',
    criteria: [
      'Cedeaza trecerea celor din cerc (prioritate)',
      'Semnalizare stanga in cerc, dreapta la iesire',
      'Pastrare banda (nu taia cercul)',
      'Viteza moderata, fara franari bruste',
      'Iesire fluenta, fara a taia alte vehicule'
    ]
  },
  {
    id: 'deal_panta',
    name: 'Plecarea in rampa (pantă / deal)',
    desc: 'Pleci de pe loc pe o panta fara a aluneca inapoi.',
    icon: '⛰️',
    criteria: [
      'Frana de mana actionata inainte de plecare',
      'Ambreiaj la punctul de cuplare (masina "tresare")',
      'Eliberare treptata a franei de mana',
      'Fara alunecare inapoi mai mult de 30 cm',
      'Acceleratie moderata, controlata'
    ]
  },
  {
    id: 'intersectii',
    name: 'Intersectii nedirijate (cedeaza trecerea)',
    desc: 'Intri intr-o intersectie fara semafor / indicatoare, cedezi corect.',
    icon: '✳️',
    criteria: [
      'Verificare oglinzi inainte de a intra',
      'Reduce viteza si se asigura vizual',
      'Cedeaza trecerea celor din dreapta',
      'Nu blocheaza intersectia',
      'Reporneste fluent cand e liber'
    ]
  },
  {
    id: 'trecere_pietoni',
    name: 'Trecere de pietoni',
    desc: 'Apropiere, reducere viteza, oprire daca e nevoie, cedare prioritate.',
    icon: '🚶',
    criteria: [
      'Reduce viteza cu minim 50% la 50 m de trecere',
      'Opreste complet daca pietonul intentioneaza sa traverseze',
      'Nu stationeaza pe trecere',
      'Nu claxonul agresiv pentru a forta pietonul',
      'Reporneste fluent cand trecerea e libera'
    ]
  },
  {
    id: 'trecere_cf',
    name: 'Trecere la nivel cu calea ferata',
    desc: 'Apropiere, oprire daca e cazul, traversare.',
    icon: '🚂',
    criteria: [
      'Reduce viteza cu 50+ m inainte',
      'Opreste complet la lumina alba intermitenta',
      'Asculta + priveste in ambele directii',
      'Nu schimba viteza pe trecere',
      'Nu stationeaza pe trecere'
    ]
  },
  {
    id: 'marsarier',
    name: 'Marsarierul (liniar + in curba)',
    desc: 'Verificare oglinzi, marsarier liniar sau in curba, cu control.',
    icon: '↩️',
    criteria: [
      'Verifica oglinzile laterale + centrala',
      'Privire directa peste umar pentru unghi mort',
      'Viteza foarte redusa (mers pe jos)',
      'Directie corecta, fara oscilatii',
      'Opreste daca apare obstacol sau pieton'
    ]
  },
  {
    id: 'frana_urgenta',
    name: 'Frana de urgenta',
    desc: 'Opresti masina in distanta minima pe o suprafata uscata.',
    icon: '🛑',
    criteria: [
      'Detecteaza pericolul din timp',
      'Franeaza maxim fara a bloca rotile (fara ABS: pompari)',
      'Volan drept, fara deviere',
      'Opreste complet in marcaj',
      'Verifica traficul din spate inainte de a opri'
    ]
  },
  {
    id: 'condus_noapte',
    name: 'Condus pe timp de noapte',
    desc: 'Faza lunga/scurta, vizibilitate redusa, lumini obligatorii.',
    icon: '🌙',
    criteria: [
      'Faza scurta obligatorie in localitate',
      'Comuta pe faza scurta la 200 m in fata vehicul din sens opus',
      'Comuta imediat la 100 m in spatele celui depasit',
      'Fara a orbi pe alti soferi cu faza lunga',
      'Aprinde luminile de pozitie la ceata sau tunel'
    ]
  },
  {
    id: 'condus_ploaie',
    name: 'Condus pe ploaie / carosabil ud',
    desc: 'Viteza adaptata, distanta marita, acvaplanare evitata.',
    icon: '🌧️',
    criteria: [
      'Viteza redusa cu 20 km/h fata de limita uscata',
      'Distanta de siguranta dublata (4 secunde in loc de 2)',
      'Fara franari bruste sau viraje bruste',
      'Faruri aprinse si dezaburire',
      'Evita baltile adanci si marcajele lucioase'
    ]
  },
  {
    id: 'oprire_urgenta',
    name: 'Oprire de urgenta pe banda de urgenta',
    desc: 'Pana, accident minor, oprire pe autostrada - procedura completa.',
    icon: '🚨',
    criteria: [
      'Opreste pe banda de urgenta, nu pe carosabil',
      'Triunghi reflectorizant la 30+ m in spatele masinii',
      'Iese din masina si se indeparteaza de trafic',
      'Asteapta ajutor in spatele balizelor, nu in masina',
      'Cheama tractare, nu incearca reparatii pe loc'
    ]
  }
];
