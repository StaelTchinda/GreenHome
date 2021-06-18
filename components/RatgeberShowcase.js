import {View, StyleSheet, Image, Text} from "react-native";
import * as React from "react";
import {ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {TouchableOpacity} from "react-native";

export function RatgeberShowcase (props, {navigation}) {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            borderRadius: 8,
            marginTop: 8
        },
        image: {
            width: '100%',
            borderRadius: 8,
            aspectRatio: 16 / 9,
            resizeMode: 'cover',
            justifyContent: 'flex-end',
        },
        innerImage: {
            borderRadius: 8
        },
        overlayHeadline: {
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 18,
            lineHeight: 24,
            textAlign: 'left',
            width: '70%',
            marginLeft: 16,
            marginBottom: 16
        },
        gradientOverlay: {
            flex: 1,
            justifyContent: 'flex-end',
            borderRadius: 8
        }
    })

    return (
        <TouchableOpacity style={styles.container} onPress={() => {
            props.navigation.navigate(props.link, {data: props.data})
        }}>
            <ImageBackground source={{uri: props.data.titleUrl}} imageStyle={styles.innerImage} style={styles.image} resizeMode='cover' >
                <LinearGradient colors={['#3D3E4300', '#3D3E43dd']} style={styles.gradientOverlay}>
                    <Text style={styles.overlayHeadline}>{props.data.title}</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}
