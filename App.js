import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './home.component'
import { RatgeberScreen} from "./Screens/ratgeber.component";
import {AnalyseScreen} from "./Screens/analyse.component";
import {MainNavigator} from "./Screens/MainNavigator";
import {SinglePost} from "./Screens/SinglePost";

import { default as theme } from './assets/theme.json'; // <-- Import app theme
import { StartForm } from './startform.component'

const Stack = createStackNavigator();



export default () => (
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
        })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="MainArea" component={MainNavigator} />
          <Stack.Screen name="SinglePost" component={SinglePost} />
          <Stack.Screen
            name="StartForm"
            component={StartForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);
