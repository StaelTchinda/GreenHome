import * as React from 'react';
import {Image, View} from 'react-native';
import {BottomNavigation, BottomNavigationTab, Button, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from "react-native";
import {DefaultHeader} from "../components/DefaultHeader";
import {RatgeberShowcase} from "../components/RatgeberShowcase";
import {RatgeberSingle} from "../components/RatgeberSingle";
import {ScrollView} from "react-native";
import global from '../state/global';
import {TabBar} from "../components/TabBar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        color: '#222',
        padding: 24,
        flexDirection: 'column',
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
    },
    showcaseContainer: {
        width: '100%',
        marginBottom: 48
    },
    imageNew: {
        width: 150,
        height: 100
    },
    h2: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24
    },
    topicContent: {
        marginTop: 48
    },
    button: {
        width: 'auto',
        backgroundColor: '#384256',
        borderColor: '#384256',
        marginTop: 32,
        alignSelf: 'center'
    }
});

export function AnalyseScreen({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <DefaultHeader name={"Valle"} description={"Schau dir an, wie du dich weiterentwickelst"}/>

            <View style={styles.showcaseContainer}>
                <Text style={styles.h2}>
                    Müll trennen & reduzieren
                </Text>
                <RatgeberShowcase headline={"Anfänger"}
                                  imageUrl={"https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"}/>
            </View>

            <View style={styles.showcaseContainer}>
                <Text style={styles.h2}>
                    Wasser sparen
                </Text>
                <RatgeberShowcase headline={"Anfänger"}
                                  imageUrl={"https://images.pexels.com/photos/861414/pexels-photo-861414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"}/>
            </View>

            <View style={styles.showcaseContainer}>
                <Text style={styles.h2}>
                    Strom sparen
                </Text>
                <RatgeberShowcase headline={"Anfänger"}
                                  imageUrl={"https://images.pexels.com/photos/459728/pexels-photo-459728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"}/>
            </View>
        </ScrollView>
    )
}
