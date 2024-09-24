import React from "react";
import TravellingDetailStyle from "../style/TravellingDetailStyle";
import { ImageBackground, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

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
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <View style={{ width: "100%", flex: 1, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#f6f6f6" }}>
                    <View style={{ width: "100%" }}>
                        <ImageBackground source={{ uri: data.image }} style={{ width: "100%", height: 200, position: "relative" }}>
                            <View style={{ position: "absolute", top: 0, marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                                <View style={{ width: "100%", flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={TravellingDetailStyle.action}>
                                        <AntDesign name="arrowleft" size={15} color="white" />
                                    </View>
                                    <View style={TravellingDetailStyle.action}>
                                        <Feather name="heart" size={15} color="white" />
                                    </View>
                                </View>
                            </View>
                            <View style={{ position: "absolute", bottom: 0, right: 0, marginRight: 10, marginBottom: 10, backgroundColor: "black", borderRadius: 9 }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 5 }}>
                                    <FontAwesome name="image" size={15} color="white" />
                                    <Text style={{ marginLeft: 10, color: "white" }}>24</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "90%", marginTop: 25 }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 800 }}>{data.title}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="location-sharp" size={15} color="#13b5c0" />
                                <Text style={{ marginLeft: 5, color: "#95969a" }}>{data.position}</Text>
                            </View>
                            <View>
                                <Pressable>
                                    <Text style={{ color: "#13b5c0", textDecorationLine: "underline" }}>View map</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fafafa", marginTop: 15, marginBottom: 15 }}>
                            <Pressable style={{ padding: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="star" size={15} color="#ecc133" />
                                    <Text style={{ marginLeft: 5 }}>{data.averageStar}/5</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text>{data.totalReview} reviews</Text>
                                    <AntDesign name="right" size={15} color="black" style={{ marginLeft: 10 }} />
                                </View>
                            </Pressable>
                        </View>
                    </View>
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
            </View>
        </ScrollView>
    </SafeAreaView>
}