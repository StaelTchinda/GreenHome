import * as React from 'react';
import { Image, View } from 'react-native';
import {BottomNavigation, BottomNavigationTab, Button, Layout, Text} from '@ui-kitten/components';
import { StyleSheet } from "react-native";
import {DefaultHeader} from "../components/DefaultHeader";
import {RatgeberShowcase} from "../components/RatgeberShowcase";
import {RatgeberSingle} from "../components/RatgeberSingle";
import {ScrollView} from "react-native";
import global from '../data/global';
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

const userData = {
    housingType: "house", // "house" or "apartment"
    ownership: "rent", // "rent" or "owned"
    interests: [
        "trash",
        "water",
        "food",
        "electricity"
    ]
}

const muellData = {
    posts: [
        {
            title: "Kleidung gebraucht kaufen - auf vinted.de",
            titleUrl: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        },
        {
            title: "Wiederverwendbare Netze statt Plastiktüten für Gemüse im Supermarkt",
            titleUrl: "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    ]
}

const waterData = {
    posts: [
        {
            title: "Wassersparende Spülmaschinen von Bosch",
            titleUrl: "https://images.pexels.com/photos/3829549/pexels-photo-3829549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        },
        {
            title: "Wasser heizen mit Solaranlagen",
            category: "ownershipOnly",
            titleUrl: "https://images.pexels.com/photos/2850347/pexels-photo-2850347.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    ]
}

const electricityData = {
    posts: [
        {
            title: "Stand-By Modus bei elektrischen Geräten vermeiden",
            titleUrl: "https://images.pexels.com/photos/5052875/pexels-photo-5052875.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        },
        {
            title: "Intelligente Steckerleisten für einfache Abschaltung bei Abwesenheit",
            titleUrl: "https://images.pexels.com/photos/4148576/pexels-photo-4148576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
        },
        {
            title: "Kochen mit einem Gasherd - 50% sparsamer als Induktionsherd",
            category: "ownershipOnly",
            titleUrl: "https://images.pexels.com/photos/3768169/pexels-photo-3768169.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
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
    ]
}

const foodData = {
    posts: [
        {
            title: "Lebensmittel richtig lagern - und MHD kritisch sehen",
            titleUrl: "https://apps-cloud.n-tv.de/img/19521101-1484124677000/16-9/750/imago70179417h.jpg",
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
        },
        {
            title: "Der eigene Komposthaufen im Garten - die optimale Lösung für Bio-Müll",
            category: "houseOnly",
            titleUrl: "https://images.pexels.com/photos/3696170/pexels-photo-3696170.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    ]
}

const pageData = {
    muellOnly: {
        showcase: {
            title: "Kleidung gebraucht kaufen - auf vinted.de",
            titleUrl: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
    }
}

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

export function RatgeberScreen({route, navigation }) {

    return (
        <ScrollView style={styles.container}>
            <DefaultHeader name={"Valle"} description={"lebe heute nachhaltiger mit diesen Ratschlägen!"}/>

            <View style={styles.showcaseContainer}>
                <Text style={styles.h2}>
                    Für dich empfohlen
                </Text>
                <RatgeberShowcase navigation={navigation} data={contentJson} link={"SinglePost"}/>
            </View>

            {
                global.data["muell"].isSelected ?
                    <View style={styles.topicContent}>
                        <Text style={styles.h2}>
                            Müll reduzieren & trennen
                        </Text>

                        <RatgeberSingle headline={muellData.posts[0].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={muellData.posts[0].titleUrl} link={"solarDach"} />
                        <RatgeberSingle headline={muellData.posts[1].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={muellData.posts[1].titleUrl} link={"solarDach"} />

                        <Button style={styles.button}>Ich möchte mehr Tipps</Button>
                    </View>
                    :
                    <></>
            }

            {
                global.data["wasser"].isSelected ?
                    <View style={styles.topicContent}>
                        <Text style={styles.h2}>
                            Wasserverbrauch mindern
                        </Text>

                        <RatgeberSingle headline={waterData.posts[0].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={muellData.posts[0].titleUrl} link={"solarDach"} />
                        <RatgeberSingle headline={waterData.posts[1].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={waterData.posts[1].titleUrl} link={"solarDach"} />

                        <Button style={styles.button}>Ich möchte mehr Tipps</Button>
                    </View>
                    :
                    <></>
            }

            {
                global.data["lebensmittel"].isSelected ?
                    <View style={styles.topicContent}>
                        <Text style={styles.h2}>
                            Lebensmittelverschwendung reduzieren
                        </Text>

                        <RatgeberSingle headline={foodData.posts[0].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={foodData.posts[0].titleUrl} link={"solarDach"} />
                        <RatgeberSingle headline={foodData.posts[1].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={foodData.posts[1].titleUrl} link={"solarDach"} />

                        <Button style={styles.button}>Ich möchte mehr Tipps</Button>
                    </View>
                    :
                    <></>
            }

            {
                global.data["strom"].isSelected ?
                    <View style={styles.topicContent}>
                        <Text style={styles.h2}>
                            Lebensmittelverschwendung reduzieren
                        </Text>

                        <RatgeberSingle headline={electricityData.posts[0].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={electricityData.posts[0].titleUrl} link={"solarDach"} />
                        <RatgeberSingle headline={electricityData.posts[1].title} description={"Du scheinst hauptsächlich tagsüber und im Sommer viel Strom zu verbrauchen. Eine Solaranlage kann dir viele Kosten abnehmen - und ist viel nachhaltiger!"} imageUrl={electricityData.posts[1].titleUrl} link={"solarDach"} />

                        <Button style={styles.button}>Ich möchte mehr Tipps</Button>
                    </View>
                    :
                    <></>
            }
        </ScrollView>
    );
}
