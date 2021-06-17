import * as React from 'react';
import { Image } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 200,
    backgroundColor: '#fff',
    padding: 30, 
    marginBottom: 10
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'center',
  }
});

export function HomeScreen({ navigation }) {
  return (
    // <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => navigation.navigate('Details')}
    //   />

    // </Layout>
    <Layout style={styles.container}>
      <Layout style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={ require('./assets/logo.png') }
        />
      </Layout>
      <Text status='success' category='h1'>Green Home</Text>
      <Button  onPress={() => navigation.navigate('StartForm')}>Let's start</Button>
    </Layout>
  );
}


// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import { Button, Divider, Image, Layout, Text, TopNavigation } from '@ui-kitten/components';
// import { StyleSheet } from "react-native";


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     borderRadius: 200,
//     backgroundColor: '#fff',
//     padding: 30, 
//     marginBottom: 10
//   },
//   logo: {
//     width: 130,
//     height: 130,
//     resizeMode: 'center',
//   }
// });

// export const HomeScreen = ({ navigation }) => {

//   const navigateStartForm = () => {
//     navigation.navigate('StartForm');
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TopNavigation title='MyApp' alignment='center'/>
//       <Divider/>
//       <Layout style={styles.container}>
//         <Layout style={styles.imageContainer}>
//           <Image
//             style={styles.logo}
//             source={ require('./assets/logo.png') }
//           />
//         </Layout>
//         <Text status='success' category='h1'>Green Home</Text>
//       </Layout>
//       <Button onPress={navigateStartForm}>Let's start</Button>
//     </SafeAreaView>
//   );
// }