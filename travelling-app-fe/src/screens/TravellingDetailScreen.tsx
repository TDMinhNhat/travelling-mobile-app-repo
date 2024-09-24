import React from "react";
import TravellingDetailStyle from "../style/TravellingDetailStyle";
import { ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function () {

    const data = {
        image: "https://picsum.photos/seed/picsum/536/354",
        title: "Balian treehouse",
        position: "Bali, Indonesia",
        averageStar: 4.5,
        totalReview: 44,
        facilities: [

        ],
        services: [

        ],
        policies: [

        ],
        description: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
        price: 80,
    }

    return <SafeAreaView style={TravellingDetailStyle.container}>
        <View style={{ width: "100%" }}>
            <ImageBackground source={{ uri: data.image }} style={{ width: "100%", height: 200, position: "relative" }}>
                <View style={{ position: "absolute", top: 0, marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                    <View style={{ width: "100%", flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ backgroundColor: "rgba(0,0,0,0.10)", width: 25, height: 25, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12.5 }}>
                            <AntDesign name="arrowleft" size={15} color="white" />
                        </View>
                        <View style={{ backgroundColor: "rgba(0,0,0,0.10)", width: 25, height: 25, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12.5 }}>
                            <Feather name="heart" size={15} color="white" />
                        </View>
                    </View>
                </View>
                <View style={{ position: "absolute", bottom: 0, right: 0, marginRight: 10, marginBottom: 10, backgroundColor: "black", borderRadius: 9                                              }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 5}}>
                        <FontAwesome name="image" size={15} color="white" />
                        <Text style={{ marginLeft: 10, color: "white" }}>24</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
        <View></View>
        <View></View>
        <View></View>
        <View></View>
        <View style={TravellingDetailStyle.footer}>
            <Text>From: <Text>${data.price}</Text>/night</Text>
            <Pressable>
                <Text>Book now</Text>                                  
            </Pressable>
        </View>
    </SafeAreaView>
}