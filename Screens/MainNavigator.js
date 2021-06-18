import * as React from 'react';
import { Image } from 'react-native';
import {BottomNavigation, BottomNavigationTab, Button, Icon, Layout, Text} from '@ui-kitten/components';
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {RatgeberScreen} from "./ratgeber.component";
import {AnalyseScreen} from "./analyse.component";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            <BottomNavigationTab title='Ratgeber'/>
            <BottomNavigationTab title='Analyse'/>
            <BottomNavigationTab title="Community"/>
            <BottomNavigationTab title="Settings" />
        </BottomNavigation>
        )
}

const TabNavigator = () => {
    return (
        <Navigator tabBar={props => <BottomTabBar {...props} />}>
            <Screen name="Ratgeber" component={RatgeberScreen} />
            <Screen name="Analyse" component={AnalyseScreen} />
        </Navigator>
        )
}

export function MainNavigator({ navigation }) {
    return (
        <TabNavigator />
    )
}
