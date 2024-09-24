import React from "react";
import { SafeAreaView, View, Text, Pressable, Image } from "react-native";
import BookingStyle from "../style/BookingStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function () {

    const data = {
        title: "Balian treehouse",
        averageStar: 5.0,
        totalReview: 262,
        price: 20,
        dates: "May 1 - 6",
        guests: 1,
        image: "https://picsum.photos/seed/picsum/536/354"
    }

    return <SafeAreaView style={BookingStyle.container}>
        <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <View style={{ borderBottomColor: "#f4f4f4", borderBottomWidth: 1, width: "100%", alignItems: "center" }}>
                <View style={{ width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", borderColor: "#f6f6f6", borderWidth: 1, borderRadius: 10, padding: 10 }}>
                    <View style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                        <View>
                            <Text style={{color: "#717274"}}><Text style={{fontWeight: 600, fontSize: 20, color: "black"}}>${data.price}</Text>/night</Text>
                        </View>
                        <View>
                            <Text style={{color: "#717274"}}>{data.title}</Text>
                        </View>
                        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                            <FontAwesome name="star" size={15} color="#f1c640" />
                            <Text style={{marginLeft: 5, color: "#717274"}}>{data.averageStar} ({data.totalReview})</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri: data.image }} width={100} height={100} borderRadius={5} />
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 25, width: "90%", backgroundColor: "#00bdd5", borderRadius: 8 }}>
                <Pressable style={{ padding: 10 }}>
                    <Text style={{ textAlign: "center", color: "white" }}>Book Now</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
}