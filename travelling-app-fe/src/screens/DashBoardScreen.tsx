import React, { useEffect, useState } from "react";
import DashboardStyle from "../style/DashboardStyle";
import { SafeAreaView, View, Pressable, Text, TextInput, FlatList, ImageBackground } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import travellingModel from "../models/travelling";
import favoriteModel from "../models/favorite";

export default function ({ navigation, route }) {

    const { user } = route.params;
    const [listTravel, setListTravel] = useState([]);
    const [listFavoriteTravel, setListFavoriteTravel] = useState([]);
    const [travelType, setTravelType] = useState("BEACH");

    useEffect(() => {
        async function fetchData() {
            await travellingModel.getAll().then((response) => {
                setListTravel(response.data.data);
            }).catch(err => {
                console.log(err);
                alert("Error: " + err);
            });

            await favoriteModel.getFavorites(user.userId).then((response) => {
                setListFavoriteTravel(response.data.map((item) => item.travelling.id));
            }).catch(err => {
                console.error(err);
            });
        }

        fetchData();
    }, []);

    const solveTurnOnOffFavorite = async (item) => {
        if (listFavoriteTravel.includes(item.travelling.id)) {
            const result = await favoriteModel.removeFavorite(user.userId, item.travelling.id);
            if (result.code === 200) {
                await favoriteModel.getFavorites(user.userId).then((response) => {
                    setListFavoriteTravel(response.data.map((item) => item.travelling.id));
                }).catch(err => {
                    console.error(err);
                    alert("There is something wrong when removing your favorite travel. Please contact the administrator for help.");
                });
            }
        } else {
            const result = await favoriteModel.addFavorite(user.userId, item.travelling.id);
            if (result.code === 200) {
                await favoriteModel.getFavorites(user.userId).then((response) => {
                    setListFavoriteTravel(response.data.map((item) => item.travelling.id));
                }).catch(err => {
                    console.error(err);
                    alert("There is something wrong when adding your favorite travel. Please contact the administrator for help.");
                });
            }
        }
    };

    const solveClickDetail = (item) => {
        navigation.navigate("TravellingDetail", {
            travelling: item.travelling,
            image: item.image,
            service: item.service,
            review: item.review,
            describe: item.describe,
            facility: item.facility,
            policy: item.policy,
            userLogin: user
        });
    };

    
    const handleSearchSubmit = () => {
        navigation.navigate("DestinationSearch");
    };

    return (
        <SafeAreaView style={DashboardStyle.container}>
            <View style={{ width: "100%", backgroundColor: "#ebfdff", display: "flex", alignItems: "center", borderBottomColor: "#f3f3f3", borderBottomWidth: 2 }}>
                <View style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
                    <View style={{ display: "flex", flexDirection: "row", alignItems: "center", borderWidth: 2, borderRadius: 4, borderColor: "#bec5c7", width: "90%", padding: 2 }}>
                        <FontAwesome name="search" size={20} color="black" style={{ marginLeft: 5 }} />
                        <TextInput
                            style={{ width: "90%", marginLeft: 5 }}
                            placeholder="Where do you want to stay?"
                            placeholderTextColor="#c2c5ca"
                            onFocus={handleSearchSubmit} 
                        />
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "90%", marginTop: 10 }}>
                    <Pressable style={[DashboardStyle.tab, travelType == "BEACH" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("BEACH")}>
                        <FontAwesome5 name="umbrella-beach" size={24} color="black" style={[travelType == "BEACH" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                        <Text style={travelType == "BEACH" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Beach</Text>
                    </Pressable>
                    <Pressable style={[DashboardStyle.tab, travelType == "MOUNTAIN" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("MOUNTAIN")}>
                        <FontAwesome6 name="mountain-sun" size={24} color="black" style={[travelType == "MOUNTAIN" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                        <Text style={travelType == "MOUNTAIN" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Mountain</Text>
                    </Pressable>
                    <Pressable style={[DashboardStyle.tab, travelType == "CAMPING" ? DashboardStyle.tabActive : DashboardStyle.tabUnactive]} onPress={() => setTravelType("CAMPING")}>
                        <FontAwesome6 name="campground" size={24} color="black" style={[travelType == "CAMPING" ? DashboardStyle.fontActive : DashboardStyle.fontUnative, DashboardStyle.fontIcon]} />
                        <Text style={travelType == "CAMPING" ? DashboardStyle.fontActive : DashboardStyle.fontUnative}>Camping</Text>
                    </Pressable>
                </View>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false} style={{ width: "90%" }}
                data={listTravel.filter((item) => item.travelling.type === travelType)}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(target) => {
                    return (
                        <Pressable style={{ marginTop: 20 }} onPress={() => solveClickDetail(target.item)}>
                            <ImageBackground imageStyle={{ borderRadius: 10 }} source={{ uri: target.item.image[0] === "" ? target.item.image[target.item.image.size() - 1] : target.item.image[0] }} style={{ width: "100%", height: 300, position: "relative" }}>
                                <View style={{ width: 35, height: 35, backgroundColor: "white", flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", borderRadius: 50, right: 0, marginTop: 10, marginRight: 10 }}>
                                    <Pressable onPress={() => solveTurnOnOffFavorite(target.item)}>
                                        <Feather name="heart" size={24} color={listFavoriteTravel.includes(target.item.travelling.id) ? "red" : "#EAEEF0"} />
                                    </Pressable>
                                </View>
                            </ImageBackground>
                            <View style={{ marginTop: 20 }}>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={{ fontWeight: 700, color: "#232428", width: "85%" }}>{target.item.travelling.name}</Text>
                                    <Text style={{ color: "#B3B4B8" }}>
                                        <FontAwesome name="star" size={15} color="#E7C64C" />  
                                        {(() => {
                                            const result = target.item.review.map((item) => item.review.star).reduce((a, b) => a + b, 0) / target.item.review.length;
                                            return Math.round(result * 10) / 10;
                                        })()}
                                    </Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                    <Text style={{ color: "#A5A6AA" }}>{target.item.travelling.type}</Text>
                                    <Text style={{ color: "#5B5D5C" }}>
                                        <Text style={{ color: "#2E2F31", fontWeight: 700 }}>${target.item.travelling.pricePerNight}</Text>/night
                                    </Text>
                                </View>
                            </View>
                        </Pressable>
                    );
                }}
            />
        </SafeAreaView>
    );
}
