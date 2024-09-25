import React from "react";
import { SafeAreaView, Text, View } from 'react-native';
import LoginStyle from "../style/LoginStyle";

export default function () {

    return (
        <SafeAreaView style={LoginStyle.container}>
            <View style={{width: "90%"}}>
                <View style={{marginTop: 40}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>Login Account</Text>
                </View>
                <View></View>
                <View></View>
            </View>
        </SafeAreaView>
    )
}