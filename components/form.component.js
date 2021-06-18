import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Layout, ViewPager, Text } from '@ui-kitten/components';
import { QuestionComponent } from './singlequestion.component';


export const FormComponent = (props) => {

  var questionComponents = [];
  var questions = props.questions;

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    questionComponents.push(
      <Layout
      style={styles.tab}
      level='2' 
      key={'Question_' + props.title + '_' +(i+1) }>
        <QuestionComponent 
          questionIndex={i+1}
          questionNumber={questions.length}
          question={question}
          selectedIndex={selectedIndex}
          callback={() => props.callback(props.questions)}
          setSelectedIndex={setSelectedIndex}
          >
        </QuestionComponent>
      </Layout>           
    )
  }

  const textStyles = StyleSheet.create({
    title: {
      color: props.titleColor,
      fontSize: 20,
      paddingTop: 30,
      paddingLeft: 30,
      marginBottom: -60, // HARDCODED
      backgroundColor: 'transparent',
      fontWeight: '800',
      // flex: 2
    }
  });

  // console.warn('props & navigation to FormComponent', props)

  return (
    <Layout style={styles.container}>
      <ImageBackground source={ require('../assets/pageBg.png') } style={styles.bg}>
        <Text style={textStyles.title}>
          {props.title}
        </Text>
        <ViewPager
          selectedIndex={selectedIndex}
          shouldLoadComponent={shouldLoadComponent}
          onSelect={index => setSelectedIndex(index)}>
            {questionComponents}
        </ViewPager>
      </ImageBackground>
      {/* <App></App> */}
    </Layout>
  );
};

const styles = StyleSheet.create({
  tab: {
    height: '100%',
    // alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    // height: '100%'
  },
  bg: {
    flex: 1,
    display: 'flex',
    resizeMode: "cover",
    // height: '100%'
    // justifyContent: "center"
  }
});