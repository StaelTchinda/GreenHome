import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { Layout, ViewPager } from '@ui-kitten/components';
import { QuestionComponent } from './singlequestion.component';
import { startQuestions, muellQuestions } from './data/questions'


export const StartForm = () => {

  var questionComponents = [];
  var questions = startQuestions.concat(muellQuestions);

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index) => index === selectedIndex;

  for (let i = 0; i < questions.length; i++) {
    const question = questions[i];

    questionComponents.push(
      <Layout
      style={styles.tab}
      level='2' 
      key={i}>
        <QuestionComponent 
          questionIndex={i+1}
          questionNumber={questions.length}
          question={question}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          >
        </QuestionComponent>
      </Layout>           
    )
  }



  return (
    <Layout style={styles.container}>
      <ImageBackground source={ require('./assets/pageBg.png') } style={styles.bg}>
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
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
    flexDirection: "column",
    height: '100%'
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    height: '100%'
    // justifyContent: "center"
  }
});