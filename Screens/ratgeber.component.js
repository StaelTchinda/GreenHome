import * as React from 'react';
import { Image, View } from 'react-native';
import {BottomNavigation, BottomNavigationTab, Button, Layout, Text} from '@ui-kitten/components';
import { StyleSheet } from "react-native";
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

const contentJson = {
    title: "Plastik sparen mit biologisch abbaubaren Kapseln",
    titleUrl: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000",
    content: [
        {
            "type": "paragraph",
            "content": "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
        },
        {
            "type": "paragraph",
            "content": "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \n"
        },
        {
            "type": "CTA",
            "linkUrl": "https://amazon.com",
            "manufacturer": "Philips",
            "productName": "Bio-degradable Filterkapseln",
            "productImageUrl": "https://XXX.com/blubs.png",
            "oldPrice": 9.99,
            "newPrice": 6.99,
            "amount": "24 Stck."
        },
        {
            "type": "paragraph",
            "content": "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        },
        {
            "type": "paragraph",
            "content": "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer"
        }
    ]

}

export function RatgeberScreen({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <DefaultHeader name={"Valle"} description={"lebe heute nachhaltiger mit diesen Ratschlägen!"}/>

            <View style={styles.showcaseContainer}>
                <Text style={styles.h2}>
                    Für dich empfohlen
                </Text>
                <RatgeberShowcase navigation={navigation} data={contentJson} link={"SinglePost"}/>
            </View>

            <View style={styles.topicContent}>
                <Text style={styles.h2}>
                    Strom sparen
                </Text>

                <RatgeberSingle headline={"Solarzellen auf dem Dach"} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"} link={"solarDach"} />
                <RatgeberSingle headline={"Solarzellen auf dem Dach"} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"} link={"solarDach"} />

                <Button style={styles.button}>Ich möchte mehr Tipps</Button>
            </View>

            <View style={styles.topicContent}>
                <Text style={styles.h2}>
                    Wasser sparen
                </Text>

                <RatgeberSingle headline={"Solarzellen auf dem Dach"} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"} link={"solarDach"} />
                <RatgeberSingle headline={"Solarzellen auf dem Dach"} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={"https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1000"} link={"solarDach"} />

                <Button style={styles.button}>Ich möchte mehr Tipps</Button>
            </View>
        </ScrollView>
    );
}
