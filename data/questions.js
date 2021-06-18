
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

function frequencyQuestion(label, frequency=null, unknown=true) {
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
    },
  ];
  if(unknown) {
    possibleAnswers.push(
      {
        value: 'unknown',
        label:'Weiß nicht',
      }
    )
  }
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

function yesNoQuestion(label, unknown=true) {
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
  if(unknown) {
    possibleAnswers.push(
      {
        value: 'unknown',
        label:'Weiß nicht',
      }
    )
  }
  return {
    label:label,
    type:"SingleChoice",
    possibleAnswers: possibleAnswers,
    answer:null
  }
}

export const muellQuestions = [
  muellQuestion('ein Arzneimittelblister', 'gelb'),
  muellQuestion('das Backpapier', 'rest'),
  frequencyQuestion('Wie oft ist dein Plastikmüll pro Monat du in einem Haus oder einer Wohnung?')
];

export const lebensmittelQuestions = [
  frequencyQuestion('Wie viel Strom verbrauchst du (in kWh)?', 
    [{
      label: '0-4 Tage',
      value: 'low'
    }, 
    {
      label:'5-13 Tage',
      value: 'average'
    }, {
      label: '14-30 Tage',
      value: 'high'
    }]
  ),
  frequencyQuestion('Wie oft ist deine Restmüll-/Bio-Tonne pro Woche voll?')
];

export const stromQuestions = [
  yesNoQuestion('Beziehst du Öko-Strom?'),
  frequencyQuestion('Wie viel Strom verbrauchst du (in kWh)?', 
    [{
      label: '0-1600',
      value: 'low'
    }, 
    {
      label:'1700-2300',
      value: 'average'
    }, {
      label: '2400-2600',
      value: 'high'
    }]
  ),
  frequencyQuestion('Wie viel deiner Geräte haben einen Ökomodus?')
];

export const wasserQuestions = [
  frequencyQuestion(),
  {
    label:'Welche der folgenden Geräte besitzt du? (Waschmaschine, Spülmaschine, Trockner etc.)',
    type:"MultipleChoice",
    possibleAnswers: [
      {
        label:'Waschmaschine',
        value:'waschmaschine',
      },
      {
        label:'Spülmaschine',
        value:'spuelmaschine',
      },
      {
        label:'Badewanne',
        value:'badewanne',
      },
      {
        label:'Trockner',
        value:'trockner',
      }
    ],
    answer:['', '', '', '']
  },
  frequencyQuestion('Wie viel Wasser verbrauchst du (L)?', 
  [{
    label: '0-1600',
    value: 'low'
  }, 
  {
    label:'1700-2300',
    value: 'average'
  }, {
    label: '2400-2600',
    value: 'high'
  }]
),
];