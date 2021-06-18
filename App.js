import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './components/home.component'
import { default as theme } from './assets/theme.json'; // <-- Import app theme
import { StartForm } from './components/startform.component'

const Stack = createStackNavigator();



export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen 
            name="StartForm" 
            component={StartForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
