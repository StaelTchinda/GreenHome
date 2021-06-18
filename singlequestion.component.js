import React from 'react';
import { Button, Layout, Icon, Text, CheckBox, useTheme } from '@ui-kitten/components';
import { ImageBackground, StyleSheet, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: 'transparent',
  },
  questionContainer: {
    paddingTop: 60,
    paddingLeft: 30,
    marginBottom: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  questionLabel: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 15
  },
  questionValue: {
    color: '#fff',
    fontSize: 20
  },
  interactionBoxContainer: {
    // backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems:'center',
    minHeight: '50%',
    paddingBottom: 30
  },
  answerBoxContainer: {
    backgroundColor: 'transparent',
    flexGrow: 2,
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems:'center',
  }
});

export const QuestionComponent = (props, { navigation }) => { 
  if(!checkQuestion(props.question)) {
    console.warn('Incorrect question format got from props', props);
    return (<Layout></Layout>);
  }


  var answersBlock = buildAnswersBlock(props.question);
  
  var next = () => {
    // console.warn("SelectedIndex", props.selectedIndex);
    props.setSelectedIndex(props.selectedIndex+1);
  }

  return (
      <Layout style={styles.container}>
          <Layout style={styles.questionContainer}>
            <Text style={styles.questionLabel}>Frage {props.questionIndex}/{props.questionNumber}</Text>
            <Text style={styles.questionValue}> 
              {props.question.label}
            </Text>
          </Layout>

          <Layout style={styles.interactionBoxContainer}>
            <Layout style={styles.answerBoxContainer}>
              {answersBlock}
            </Layout>
            <Layout>
              <Button style="primary" onPress={next} >Weiter</Button>
            </Layout>
          </Layout>
    </Layout>
  );
}


function buildAnswersBlock(question) {
  var possibleAnswers = question['possibleAnswers'];
  var quesionType = question['type'];
  switch (quesionType) {
    case "SingleChoice":
      return (
        <SingleChoiceAnswersBlock 
          answers = {possibleAnswers}
          question = {question}
          >
        </SingleChoiceAnswersBlock>
      )
      break;
    case "MultipleChoice":
      return (
        <MultipleChoiceAnswersBlock 
        answers = {possibleAnswers}
        question = {question}
        >
        </MultipleChoiceAnswersBlock>
      )
      break;  
    default:
      console.warn('Unknown question type', questionType);
      return (
        <Layout></Layout>
      );
      break;
  }
}




export const SingleChoiceAnswersBlock = (props) => {
  var myloop = [];

  
  if(!checkAnswers(props.answers)) {
    console.warn('Incorrect answer format got from props', props);
    return (<Layout></Layout>);
  }

  const theme = useTheme();

  var color = theme['text-hint-color'];

  var answerButtonStyle = {
    backgroundColor: theme['color-basic-transparent'],
    borderColor: theme['color-basic-default-border'],
    borderWidth: 1,
    flexBasis: (props.answers.length<=4) ? '40%' : '30%',
    marginBottom: (props.answers.length<=2) ? 0 : 30,
    maxHeight: (props.answers.length<=4) ? '40%' : '30%',
    aspectRatio: 1,    
    display: 'flex', 
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignSelf: 'center',
    alignContent: 'center',
    alignItems:'center',
  };

  var answerButtonClickedStyle = JSON.parse(JSON.stringify(answerButtonStyle)); // Copy style
  answerButtonClickedStyle.backgroundColor = theme['color-basic-default'];

  // TODO: improve the style and make it center 

  const answerStyles = StyleSheet.create({
    answerBox: {
      backgroundColor: 'transparent',
      // paddingTop: 10,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-around',
    },
    answerButton: answerButtonStyle,
    answerButtonClicked: answerButtonClickedStyle,
    icon: {
      maxHeight: '75%',
      aspectRatio: 1,
      // justifyContent: 'space-around',
      alignSelf: 'center',
      // alignContent: 'center',
      // alignItems:'center',
    }, 
    answerValue: {
      color: color,
      // justifyContent: 'space-around',
      // alignSelf: 'center',
      // alignContent: 'center',
      // alignItems:'center',
      textAlign: 'right'
    }
  });

  var [answer, setAnswer] = React.useState('');

  for (let i = 0; i < props.answers.length; i++) {
    const ans = props.answers[i];

    var icon = ('icon' in ans) ? (<Icon
      style={answerStyles.icon}
      fill={color}
      name={ans.icon}
    />) : null;

    myloop.push(
      <Button 
        onPress={ () => {
          setAnswer(ans.value); 
          // console.warn('Clicked', ans.value, answer); 
        } } 
        style={ (answer==ans.value) ? answerStyles.answerButtonClicked : answerStyles.answerButton} 
        key={ans.value}>
        {icon}

        <Text style={answerStyles.answerValue}> {ans.label} </Text>
      </Button>
    );
  }

  return (
      <Layout style={answerStyles.answerBox}>
        {myloop}
      </Layout>
  );
}

export const MultipleChoiceAnswersBlock = (props) => {
  var myloop = [];

  const theme = useTheme();

  var color = theme['text-hint-color'];

  var answerCheckBoxStyle = {
    backgroundColor: theme['color-basic-transparent'],
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: theme['color-basic-default-border'],
    flexBasis: '10%',
    marginBottom:'10%',
    width: '90%',
    // aspectRatio: 1,    
    // display: 'flex', 
    // flexWrap: 'wrap',
    // flexDirection: 'column',
    // justifyContent: 'space-around',
    alignSelf: 'center',
    // alignContent: 'center'
  }

  var answerCheckedBoxStyle = JSON.parse(JSON.stringify(answerCheckBoxStyle)); // Copy style
  answerCheckedBoxStyle.backgroundColor = theme['color-basic-default'];

  if(!checkAnswers(props.answers)) {
    console.warn('Incorrect answer format got from props', props);
    return (<Layout></Layout>);
  }

  // TODO: improve the style and make it center 

  const answerStyles = StyleSheet.create({
    answerBox: {
      backgroundColor: 'transparent',
      paddingTop: 10,
      display: 'flex',
      // flexGrow: 2,
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
      justifyContent: 'space-evenly',
      alignContent: 'center'
    },
    answerCheckBox: answerCheckBoxStyle,
    answerCheckedBox: answerCheckedBoxStyle, 
    answerValue: {
      color: color,
    }
  });
  props.question['answer'] = [];

  for (let i = 0; i < props.answers.length; i++) {
    var answer = props.answers[i];
    const [activeChecked, setActiveChecked] = React.useState(false);
    props.question['answer'].push(false);

    myloop.push(
      <CheckBox
        checked={activeChecked}
        onChange={nextChecked => {setActiveChecked(nextChecked); props.question['answer'][i]=nextChecked; } }
        style={ (activeChecked) ? answerStyles.answerCheckedBox : answerStyles.answerCheckBox} 
        key={i}
        >
          {answer.label}
      </CheckBox>
    );
  }

  return (
      <Layout style={answerStyles.answerBox}>
        {myloop}
      </Layout>
  );
}





function checkAnswer(answer) {
  if (answer && ('label' in answer) && ('value' in answer)) {
    return true;
  } else {
    return false;
  }
}
function checkQuestion(question) {
  if(question && ('label' in question) && ('type' in question) && ('possibleAnswers' in question)) {
    return checkAnswers(question['possibleAnswers']);
  } else {
    return false;
  }
}

function checkAnswers(answers) {
  if(!answers) {
    return false;
  };
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];

    if (!checkAnswer(answer)) {
      return false;
    }
  }
  return true;
}