import React from 'react';
// import { StyleSheet, ImageBackground } from 'react-native';
import { useTheme } from '@ui-kitten/components';
// import { QuestionComponent } from './singlequestion.component';
import { FormComponent } from '../components/form.component';
import { startQuestions, muellQuestions, lebensmittelQuestions, stromQuestions, wasserQuestions } from '../data/questions'
import { createStackNavigator } from '@react-navigation/stack';
import global from '../data/global';

const Stack = createStackNavigator();


const initWorkflow = {
  'start' : {
    title: 'Start',
    questions: startQuestions,
    isDone: false,
    isSelected: true
  },
  'muell' : {
    title: 'Müll',
    questions: muellQuestions,
    isDone: false,
    isSelected: false
  },
  'lebensmittel' : {
    title: 'Lebensmittel',
    questions: lebensmittelQuestions,
    isDone: false,
    isSelected: false
  },
  'strom' : {
    title: 'Strom',
    questions: stromQuestions,
    isDone: false,
    isSelected: false
  },
  'wasser' : {
    title: 'Wasser',
    questions: wasserQuestions,
    isDone: false,
    isSelected: false
  } 
};

var workflow = initWorkflow;
const keywords = ['start', 'muell', 'lebensmittel', 'strom', 'wasser'];

export const StartForm = () => {

  workflow = initWorkflow;

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
      })}
      >
      <Stack.Screen name="Start" component={StartFormComponent}></Stack.Screen>
      <Stack.Screen name="Müll" component={MuellFormComponent}></Stack.Screen>
      <Stack.Screen name="Lebensmittel" component={LebensmittelFormComponent} />
      <Stack.Screen name="Strom" component={StromFormComponent} />
      <Stack.Screen name="Wasser" component={WasserFormComponent} />
    </Stack.Navigator>
  );
};

 
function StartFormComponent({route, navigation }) {
  const theme = useTheme();

  var color = theme['text-hint-color'];

  return customFormComponent('start', color, {route, navigation });
}

function MuellFormComponent({route, navigation }) {
  const theme = useTheme();

  var color = theme['text-success-color'];
  return customFormComponent('muell', color, {route, navigation });
}

function LebensmittelFormComponent({route, navigation }) {
  const theme = useTheme();

  var color = theme['text-danger-color'];
  return customFormComponent('lebensmittel', color, {route, navigation });
}
function StromFormComponent({route, navigation }) {
  const theme = useTheme();

  var color = theme['text-warning-color'];
  return customFormComponent('strom', color, {route, navigation });
}

function WasserFormComponent({route, navigation }) {
  const theme = useTheme();

  var color = theme['text-info-color'];
  return customFormComponent('wasser', color, {route, navigation });
}


function customFormComponent(keyword, color, {route, navigation }) {
  // console.warn('workflow', workflow, keyword);
    return (
        <FormComponent
          questions={workflow[keyword].questions}
          title={workflow[keyword].title}
          titleColor={color}
          callback= { (result) => { 
            // console.warn(result);
            if (keyword=='start' && !workflow[keyword].isDone) {
              const selectedAreas = workflow[keyword].questions[1].answer;

              for (let i = 0; i < selectedAreas.length; i++) {
                const area = selectedAreas[i];
                if(area in workflow) {
                  workflow[area].isSelected = true;
                }
              }
            }
            workflow[keyword].isDone = true;
            var nextPath = getNextPath();
            if (nextPath) {
              navigation.push(nextPath);
            } else {
              navigation.navigate('MainArea');
              global.data = workflow;
            }
          } }
        >
        </FormComponent>
    );
}

function getNextPath() {
  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i];

    if(workflow[keyword].isSelected && !workflow[keyword].isDone) {
      return workflow[keyword].title;
    }
  }
  return null;
}
