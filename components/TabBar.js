import {View, StyleSheet, Image, Text} from "react-native";
import * as React from "react";
import {BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import global from "../data/global";

export function TabBar (props, {navigation}) {

    const styles = StyleSheet.create({

    })

    return (
        <BottomNavigation selectedIndex={global.currentTab} onSelect={index => {
            props.navigation.navigate(global.tabLinks[index]);
            global.currentTab = index;
        } }>
            <BottomNavigationTab title='Ratgeber'/>
            <BottomNavigationTab title='Analyse'/>
            <BottomNavigationTab title='Community'/>
            <BottomNavigationTab title='Settings'/>

        </BottomNavigation>
    )
}
