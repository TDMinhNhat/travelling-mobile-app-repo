import React from "react";
import { SafeAreaView, View, Text, Pressable } from "react-native";
import BookingStyle from "../style/BookingStyle";

export default function() {
    
    return <SafeAreaView style={BookingStyle.container}>
        <View style={{width: "100%", display: "flex", alignItems: "center"}}>
            <View style={{marginTop: 25, width:"90%", backgroundColor: "#00bdd5", borderRadius: 8}}>
                <Pressable style={{padding: 10}}>
                    <Text style={{textAlign: "center", color: "white"}}>Book Now</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
}