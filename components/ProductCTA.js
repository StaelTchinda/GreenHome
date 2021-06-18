import {ImageBackground, Linking, StyleSheet} from "react-native";
import * as React from 'react';
import {Text, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {ScrollView} from "react-native";
import {Icon} from "@ui-kitten/components";
import {Image} from "react-native";
import {Button} from "react-native";
import {TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 24,
        backgroundColor: '#384256',
        borderRadius: 8,
        marginTop: 32,
        marginBottom: 32
    },
    titleRow: {
    },
    icon: {
        width: 16,
        color: '#fff'
    },
    title: {
        color: '#84DF71',
        fontWeight: 'bold'
    },
    productImage: {
        width: '25%',
        aspectRatio: 1,
        backgroundColor: '#fff',
        borderRadius: 8
    },
    innerImage: {
        borderRadius: 8
    },
    productRow: {
        flexDirection: 'row',
        marginTop: 24,
        marginBottom: 24,
    },
    productInfoColumn: {
        marginLeft: 16,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 16,
        flex: 1
    },
    manufacturer: {
        opacity: 0.5,
        color: '#fff'
    },
    productName: {
        color: '#fff',
        fontWeight: 'bold'
    },
    priceRow: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    priceElementContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    amount: {
        color: '#fff'
    },
    oldPrice: {
        color: '#EB8A6E',
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    newPrice: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 8
    },
    button: {
        backgroundColor: '#fff',
        color: '#384256',
        padding: 16,
        borderRadius: 8,
        alignSelf: 'center',
    },
    buttonText: {
        fontWeight: 'bold'
    }
})

export function ProductCTA (props) {

    return (
        <View style={styles.container}>
            <View>
                <Icon name={"flash"} style={styles.icon} status={"danger"} />
                <Text style={styles.title}>GreenHome Flash Sale</Text>
            </View>

            <View style={styles.productRow}>
                <Image source={props.data.productImageUrl} style={styles.productImage} imageStyle={styles.innerImage}/>

                <View style={styles.productInfoColumn}>
                    <Text style={styles.manufacturer}>{props.data.manufacturer}</Text>
                    <Text style={styles.productName}>{props.data.productName}</Text>

                    <View style={styles.priceRow}>
                        <Text style={styles.amount}>{props.data.amount}</Text>

                        <View style={styles.priceElementContainer}>
                            <Text style={styles.oldPrice}>{props.data.oldPrice}</Text>
                            <Text style={styles.newPrice}>{props.data.newPrice}</Text>
                        </View>
                    </View>
                </View>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => Linking.canOpenURL(props.data.linkUrl).then(supported => {
                    if (supported) {
                        Linking.openURL(props.data.linkUrl);
                    } else {
                        console.log("Don't know how to open URI: " + props.data.linkUrl);
                    }
                })}
            >
                <Text style={styles.buttonText}> Jetzt zuschlagen! </Text>
            </TouchableOpacity>
        </View>
    )
}
