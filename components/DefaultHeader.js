import {View} from "react-native";
import {Text} from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import * as React from "react";

const headerStyles = StyleSheet.create({
    headerBar: {
        flexDirection: 'row',
        color: '#000000',
        marginTop: 24,
        marginBottom: 48
    },
    headerGreeting: {
        width: '60%',
        alignItems: 'flex-start',
        color: '#000000'
    },
    headerLevelIcon: {
        width: '40%',
        alignItems: 'flex-end'
    },
    greetingTop: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#000000'
    },
    greetingBottom: {
        fontSize: 20,
        lineHeight: 24,
    }
})

export function DefaultHeader (props, { navigation }) {

    return (
        <View style={headerStyles.headerBar}>
            <View style={headerStyles.headerGreeting}>
                <Text style={headerStyles.greetingTop}>Hi, {props.name}!</Text>
                <Text style={headerStyles.greetingBottom}>{props.description}</Text>
            </View>
            <View style={headerStyles.headerLevelIcon}>
                <Text>Blubs</Text>
            </View>
        </View>
    )
}
