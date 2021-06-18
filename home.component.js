import * as React from 'react';
import { Image } from 'react-native';
import { Button, Layout, Text, useTheme } from '@ui-kitten/components';
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  const theme = useTheme();

  return (
    <Layout style={[styles.container, { backgroundColor: theme['color-primary-default'] }]}>
      <Layout style={styles.imageContainer}>
        <Image
          style={styles.logo}
          source={ require('./assets/logo.png') }
        />
      </Layout>
      <Text status='success' category='h1' style={{marginBottom: 80}}>Green Home</Text>
      <Button
        status="info"
        size="large"
        onPress={() => navigation.navigate('StartForm')}>
          Let's start
      </Button>
    </Layout>
  );
}
