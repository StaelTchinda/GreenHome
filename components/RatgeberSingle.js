import {View, StyleSheet, Image, Text} from "react-native";
import * as React from "react";

export function RatgeberSingle (props, {navigation}) {

    const styles = StyleSheet.create({
        container: {
            width: '100%',
            borderRadius: 8,
            marginTop: 8,
        },
        innerContainer: {
            flexDirection: 'row'
        },
        image: {
            width: '25%',
            aspectRatio: 1,
            borderRadius: 8
        },
        innerImage: {
            borderRadius: 8
        },
        descriptionContainer: {
            flex: 1,
            justifyContent: 'center',
            marginLeft: 12
        },
        headline: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 4
        },
        description: {
            fontSize: 14
        },
        linkText: {
            textAlign: 'right',
            fontWeight: 'bold',
            color: '#384256',
            fontSize: 16,
            marginTop: 16
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={{uri: props.imageUrl}} imageStyle={styles.innerImage} style={styles.image} />

                <View style={styles.descriptionContainer}>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.description}>{props.description}</Text>
                </View>
            </View>

            <Text style={styles.linkText} onPress={() => navigation.navigate(props.link)}>Mehr erfahren ></Text>
        </View>
    )
}
