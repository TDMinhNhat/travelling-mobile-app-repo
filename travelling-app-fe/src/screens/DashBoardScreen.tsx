import React, { useState } from "react";
import DashboardStyle from "../style/DashboardStyle";
import { SafeAreaView, View, Pressable, Text, TextInput, FlatList, ImageBackground } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function () {

    const dataFetch = [
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Beach"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Beach"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Beach"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Mountain"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Mountain"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Mountain"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Camping"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Camping"
        },
        {
            image: "https://picsum.photos/seed/picsum/536/354",
            title: "Apartment in Omaha",
            price: 30,
            averageStar: 5.0,
            type: "Camping"
        },
    ]
    const [travelType, setTravelType] = useState("Beach")
    const [tab, setTab] = useState("Search")

    return (<SafeAreaView style={DashboardStyle.container}>
        <View style={{ width: "100%", backgroundColor: "#ebfdff", display: "flex", alignItems: "center", borderBottomColor: "#f3f3f3", borderBottomWidth: 2 }}>
            <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", borderWidth: 2, borderRadius: 4, borderColor: "#bec5c7", width: "90%", padding: 2 }}>
                    <FontAwesome name="search" size={20} color="black" style={{ marginLeft: 5 }} />
                    <TextInput style={{ width: "90%", marginLeft: 5 }} placeholder="Where do you want to stay?" placeholderTextColor="#c2c5ca" />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "90%", marginTop: 10 }}>
                <Pressable style={[DashboardStyle.tab, travelType == "Beach" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Beach")}>
                    <FontAwesome5 name="umbrella-beach" size={24} color="black" style={[travelType == "Beach" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                    <Text style={travelType == "Beach" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Beach</Text>
                </Pressable>
                <Pressable style={[DashboardStyle.tab, travelType == "Mountain" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Mountain")}>
                    <FontAwesome6 name="mountain-sun" size={24} color="black" style={[travelType == "Mountain" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                    <Text style={travelType == "Mountain" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Mountain</Text>
                </Pressable>
                <Pressable style={[DashboardStyle.tab, travelType == "Camping" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("Camping")}>
                    <FontAwesome6 name="campground" size={24} color="black" style={[travelType == "Camping" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                    <Text style={travelType == "Camping" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Camping</Text>
                </Pressable>
            </View>
        </View>
        <FlatList
            showsVerticalScrollIndicator={false} style={{ width: "90%" }}
            data={dataFetch.filter((item) => item.type == travelType)}
            keyExtractor={(item, index) => index.toString()}
            renderItem={(target) => {
                return (
                    <View style={{ marginTop: 20 }}>
                        <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: target.item.image }} style={{ width: "100%", height: 300, position: "relative" }}>
                            <View style={{ width: 35, height: 35, backgroundColor: "white", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", borderRadius: 50, right: 0, marginTop: 10, marginRight: 10 }}>
                                <Feather name="heart" size={24} color="#EAEEF0" />
                            </View>
                        </ImageBackground>
                        <View style={{ marginTop: 20 }}>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={{ fontWeight: 700, color: "#232428" }}>{target.item.title}</Text>
                                <Text style={{ color: "#B3B4B8" }}><FontAwesome name="star" size={15} color="#E7C64C" />{target.item.averageStar}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={{ color: "#A5A6AA" }}>{target.item.type}</Text>
                                <Text style={{ color: "#5B5D5C" }}><Text style={{ color: "#2E2F31", fontWeight: 700 }}>${target.item.price}</Text>/night</Text>
                            </View>
                        </View>
                    </View>
                )
            }}
        >
        </FlatList>
        <View style={DashboardStyle.footer}>
            <Pressable onPress={() => setTab("Search")} style={DashboardStyle.tab}>
                <FontAwesome name="search" color="black" style={[tab == "Search" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                <Text style={tab == "Search" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Search</Text>
            </Pressable>
            <Pressable onPress={() => setTab("Favorites")} style={DashboardStyle.tab}>
                <MaterialIcons name="favorite-border" color="black" style={[tab == "Favorites" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                <Text style={tab == "Favorites" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Favorite</Text>
            </Pressable>
            <Pressable onPress={() => setTab("Booking")} style={DashboardStyle.tab}>
                <AntDesign name="shoppingcart" color="black" style={[tab == "Booking" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                <Text style={tab == "Booking" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Booking</Text>
            </Pressable>
            <Pressable onPress={() => setTab("Inbox")} style={DashboardStyle.tab}>
                <MaterialCommunityIcons name="message-text-outline" color="black" style={[tab == "Inbox" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                <Text style={tab == "Inbox" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Inbox</Text>
            </Pressable>
            <Pressable onPress={() => setTab("Profile")} style={DashboardStyle.tab}>
                <MaterialIcons name="account-circle" color="black" style={[tab == "Profile" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                <Text style={tab == "Profile" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Profile</Text>
            </Pressable>
        </View>
    </SafeAreaView>)
}