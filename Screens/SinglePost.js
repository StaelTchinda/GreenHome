import {ImageBackground, StyleSheet} from "react-native";
import * as React from 'react';
import {Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {View} from "react-native";
import {ScrollView} from "react-native";
import {ProductCTA} from "../components/ProductCTA";
import {TouchableOpacity} from "react-native";
import {Icon} from "@ui-kitten/components";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        marginTop: 8
    },
    image: {
        width: '100%',
        borderRadius: 8,
        aspectRatio: 21 / 9,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    innerImage: {
        borderRadius: 8
    },
    overlayHeadline: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
        width: '70%',
        marginLeft: 16,
        marginBottom: 16,
    },
    gradientOverlay: {
        flex: 1,
        justifyContent: 'space-between',
        borderRadius: 8
    },
    postContentContainer: {
        padding: 24
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        color: '#222',
        flexDirection: 'column'
    },
    paragraph: {
        marginTop: 16
    },
    closeIcon: {
        width: 44,
        aspectRatio: 1,
        alignSelf: 'flex-end',
        marginTop: 24,
        marginRight: 8
    }
})


export function SinglePost ({route, navigation}) {

    const postContent = route.params.data.content.map((item) => {
        if (item.type === "paragraph") {
            return <Text style={styles.paragraph}>{item.content}</Text>
        } else if (item.type === "CTA") {
            return <ProductCTA
                        data={item}
                    />
        }
    })

    return (
        <ScrollView style={styles.scrollContainer}>
            <ImageBackground source={{uri: route.params.data.titleUrl}} resizeMode='cover'  imageStyle={styles.innerImage} style={styles.image}>
                <LinearGradient colors={['#3D3E4300', '#3D3E43dd']} style={styles.gradientOverlay}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack();
                    }}>
                        <Icon style={styles.closeIcon} name="close-outline" fill="#ffffff" />
                    </TouchableOpacity>
                    <Text style={styles.overlayHeadline}>{route.params.data.title}</Text>
                </LinearGradient>
            </ImageBackground>

            <View style={styles.postContentContainer}>
                {postContent}

            </View>
        </ScrollView>
    )
}
