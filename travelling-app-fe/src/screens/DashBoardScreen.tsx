import React, { useState } from "react";
import DashboardStyle from "../style/DashboardStyle";
import { SafeAreaView, View, Pressable, Text, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function () {

    const [travelType, setTravelType] = useState("Beach")
    const [tab, setTab] = useState("Search")

    return (<SafeAreaView style={DashboardStyle.container}>
                <View style={{backgroundColor: "#ebfdff", display: "flex", alignItems: "center", borderBottomColor: "#f3f3f3", borderBottomWidth: 2}}>
            <View style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <View style={{display: "flex", flexDirection: "row", alignItems: "center", borderWidth: 2, borderRadius: 4, borderColor: "#bec5c7", width: "90%", padding: 2}}>
                    <FontAwesome name="search" size={20} color="black" style={{marginLeft: 5}}/>
                    <TextInput style={{width: "90%", marginLeft: 5}} placeholder="Where do you want to stay?" placeholderTextColor="#c2c5ca"/>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "90%", marginTop: 10 }}>
                <Pressable style={[DashboardStyle.tab, travelType == "Beach" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Beach")}>
                    <FontAwesome5 name="umbrella-beach" size={24} color="black" style={travelType == "Beach" ? DashboardStyle.fontActive : DashboardStyle.fontUnative} />
                    <Text style={travelType == "Beach" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Beach</Text>
                </Pressable>
                <Pressable style={[DashboardStyle.tab, travelType == "Mountain" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Mountain")}>
                    <FontAwesome6 name="mountain-sun" size={24} color="black" style={travelType == "Mountain" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}/>
                    <Text style={travelType == "Mountain" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Mountain</Text>
                </Pressable>
                <Pressable style={[DashboardStyle.tab, travelType == "Camping" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Camping")}>
                    <FontAwesome6 name="campground" size={24} color="black" style={travelType == "Camping" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}/>
                    <Text style={travelType == "Camping" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Camping</Text>
                </Pressable>
            </View>
        </View>
        <View></View>
        <View></View>
    </SafeAreaView>)
}