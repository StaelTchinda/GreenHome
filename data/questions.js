
function Answer(label, value, icon=null) {
  this.label = label;
  this.value = value;
  this.icon = icon;
}

function Question(label, type, possibleAnswers, answer) {
  this.label = label;
  this.type = type;
  this.possibleAnswers = possibleAnswers;
  this.answer = answer;
}

export const startQuestions = [
  {
    label:'Wohnst du in einem Haus oder einer Wohnung?',
    type:"SingleChoice",
    possibleAnswers: [
      {
        label:'Haus',
        value:'haus',
        icon:'home-outline'
      },
      {
        label:'Wohnung',
        value:'wohnung',
        icon:'cube-outline'
      }
    ],
    answer:null
  },
  {
    label:'Was möchtest du am meisten an deinem Haushalt verbessern?',
    type:"MultipleChoice",
    possibleAnswers: [
      {
        value:'muell',
        label:'Mülltrennung & reduzierung',
      },
      {
        value:'lebensmittel',
        label:'Lebensmittelverschwendung',
      },
      {
        value:'wasser',
        label:'Wasser sparen',
      },
      {
        value:'strom',
        label:'Strom sparen',
      },
    ],
    answer:['', '', '', '']
  }
];

function muellQuestion(trash, correctBin) {
  return {
    label:`In welchem Müll würde ` + trash + ` gehen ?`,
    type:"SingleChoice",
    possibleAnswers: [
      {
        value:'bio',
        label:'Biomüll',
        icon:'home-outline'
      },
      {
        value:'rest',
        label:'Restmüll',
        icon:'cube-outline'
      },
      {
        value:'gelb',
        label:'Gelbersack',
        icon:'cube-outline'
      },
      {
        value:'glas',
        label:'Glasmüll',
        icon:'cube-outline'
      },
      {
        label:'papier',
        value:'Papiermüll',
        icon:'trash-outline'
      },
      {
        label:'unknown',
        value:'Weiß nicht',
        icon:'cube-outline'
      }
    ],
    answer:null, 
    correctAnswer: correctBin
  };
}

function frequencyQuestion(label, frequency=null) {
  var possibleAnswers = [
    {
      value:'1_2',
      label:'1-2'
    },
    {
      value:'3_4',
      label:'3-4'
    },
    {
      value:'5_6',
      label:'5-6'
    },
    {
      value:'7',
      label:'7+'
    }
  ];
  if(frequency!=null) {
    // TODO: update possible Answers
  }
  return {
    label:label,
    type:"SingleChoice",
    possibleAnswers: possibleAnswers,
    answer:null
  }
}

function yesNoQuestion(label) {
  var possibleAnswers = [
    {
      value:'ja',
      label:'Ja'
    },
    {
      value:'nein',
      label:'Nein'
    }
  ];
  return {
    label:label,
    type:"SingleChoice",
    possibleAnswers: possibleAnswers,
    answer:null
  }
}

export const muellQuestions = [
  muellQuestion('einer Bananenschal', 'bio'),
  muellQuestion('Eierschale', 'bio'),
  frequencyQuestion('Wie oft ist dein Plastikmüll pro Monat du in einem Haus oder einer Wohnung?')
];

export const lebensmittelQuestions = [
  frequencyQuestion('Wie oft verwendet du übrige Lebensmittel am nächsten Tag?'),
  frequencyQuestion('Wie oft ist deine Restmüll-/Bio-Tonne pro Woche voll?')
];

export const stromQuestions = [
  yesNoQuestion('Beziehst du Öko-Strom?'),
  frequencyQuestion('Wie viel Strom verbrauchst du ?')
];

export const wasserQuestions = [
  frequencyQuestion('Welche der folgenden Geräte besitzt du? (Waschmaschine, Spülmaschine, Trockner etc.)'),
  frequencyQuestion('Wie viel Wasser verbrauchst du ?')
];