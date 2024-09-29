import React from "react";
import TravellingDetailStyle from "../style/TravellingDetailStyle";
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function () {

    const data = {
        image: "https://picsum.photos/seed/picsum/536/354",
        title: "Balian treehouse",
        position: "Bali, Indonesia",
        averageStar: 4.5,
        totalReview: 44,
        facilities: [
            {
                name: "Guests",
                number: 2
            },
            {
                name: "Bedrooms",
                number: 1
            },
            {
                name: "Beds",
                number: 1
            },
            {
                name: "Bathrooms",
                number: 1
            }
        ],
        services: [
            {
                name: "Wifi",
                image: "https://picsum.photos/seed/picsum/536/354"
            },
            {
                name: "Kitchen",
                image: "https://picsum.photos/seed/picsum/536/354"
            },
            {
                name: "Pool",
                image: "https://picsum.photos/seed/picsum/536/354"
            },
            {
                name: "Garden",
                image: "https://picsum.photos/seed/picsum/536/354"
            }
        ],
        policies: [
            {
                name: "House rules",
                describe: [
                    "Earliest check-in: 2:00 PM",
                    "Latest check-out: 12:00 PM",
                ],
                type: "Checkin policies",
                description: "It's always a good idea to confirm the check-in policy directly with the owner/manager before your arrival so that you can plan accordingly and avoid any surprises. For example, some properties may have a late check-in policy, or they may require you to check in at a specific time of day. Some properties may also have a minimum age requirement for check-in. Be sure to confirm these details with the owner/manager before your arrival.",
            }
        ],
        reviews: [
            {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            },
            {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            },
            {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            },
            {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            }, {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            }, {
                avarta: "https://picsum.photos/seed/picsum/536/354",
                username: "John Doe",
                time: "2 days ago",
                review: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
                star: 4.5
            }
        ],
        description: "The Balian treehouse is only a 3 minute walk away from the beach. From the veranda you can watch the sunrise in the morning, and enjoy the view of our beautiful garden (900m2) with pool. (when fully booked also see https://www.airbnb.com/rooms/4875630 its the guesthouse in the same garden)",
        price: 80,
    }

    return <SafeAreaView style={TravellingDetailStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                { /* Image and Travelling details */}
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
                { /* Facilities and Services */}
                <View style={{ width: "100%", marginTop: 25, flex: 1, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#f6f6f6" }}>
                    <View style={{ width: "90%" }}>
                        <View>
                            <Text style={{ fontWeight: 600, fontSize: 20 }}>Facilities & Services</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
                            {data.facilities.map((item, index) => {
                                return <Text key={index.toString()} style={{ color: "#79797b", marginRight: 20 }}>{item.number} {item.name}</Text>
                            })}
                        </View>
                        <View style={{ width: "100%", marginTop: 20, marginBottom: 20, display: "flex" }}>
                            {data.services.map((item, index) => {
                                return (
                                    <View key={index.toString()} style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                        <Image source={{ uri: item.image }} width={20} height={20} />
                                        <Text style={{ marginLeft: 5, color: "#68696b" }}>{item.name}</Text>
                                    </View>
                                )
                            })}
                        </View>
                        <View style={{ width: "100%", marginBottom: 25, borderWidth: 1, borderRadius: 5, borderColor: "#939498" }}>
                            <Pressable style={{ padding: 3 }}>
                                <Text style={{ width: "100%", textAlign: "center", color: "#a4a5a8" }}>Show All</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                { /* Reviews */}
                <View style={{ width: "100%", marginTop: 25, borderBottomColor: "#f6f6f6", borderBottomWidth: 2, display: "flex", alignItems: "center" }}>
                    <View style={{ width: "90%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontWeight: 800 }}>Reviews</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ color: "#78797e" }}>See all</Text>
                                <AntDesign name="right" size={15} color="#78797e" style={{ marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: 800 }}>{data.averageStar}</Text>
                            <Text style={{ marginLeft: 1, color: "#78797d" }}>/5</Text>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                initialNumToRender={4}
                                horizontal={true}
                                data={data.reviews}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(target) => {
                                    return <View style={{ width: 300, borderRadius: 2, borderWidth: 1, borderColor: "#f7f7f7", padding: 20, marginRight: 15 }}>
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
                                            <View style={{ display: "flex", flexDirection: "row" }}>
                                                <View>
                                                    <Image source={{ uri: target.item.avarta }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                                </View>
                                                <View style={{ display: "flex", justifyContent: "space-between", marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 600 }}>{target.item.username}</Text>
                                                    <Text style={{ color: "#828e8e" }}>{target.item.time}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Rating imageSize={20} startingValue={target.item.star} readonly={true} />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            <Text style={{ color: "#828e8e", textAlign: "justify" }} numberOfLines={2}>{target.item.review}</Text>
                                        </View>
                                    </View>
                                }
                                } />
                        </View>
                    </View>
                </View>
                { /* Policies */}
                <View style={{ width: "100%", display: "flex", alignItems: "center", marginTop: 25, borderBottomWidth: 2, borderBottomColor: "#f6f6f6" }}>
                    <View style={{ width: "90%" }}>
                        <View>
                            <Text style={{ fontWeight: 600, fontSize: 20 }}>Policies</Text>
                        </View>
                        <View>
                            {data.policies.map((item, index) => {
                                return (
                                    <View key={index.toString()} style={{ marginTop: 20, marginLeft: 20 }}>
                                        <View>
                                            <Text style={{ fontWeight: 600 }}>{item.name}</Text>
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft: 30 }}>
                                            {item.describe.map((item, index) => {
                                                return <Text key={index.toString()} style={{ color: "#a1a2a6" }}>{item}</Text>
                                            })}
                                        </View>
                                        <View style={{ marginTop: 10 }}>
                                            <Text style={{ fontWeight: 600 }}>{item.type}</Text>
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft: 30 }}>
                                            <Text style={{ color: "#a1a2a6", textAlign: "justify" }} numberOfLines={2}>{item.description}</Text>
                                        </View>
                                        <View style={{ borderWidth: 2, borderColor: "#a1a2a6", borderRadius: 5, marginTop: 15, marginBottom: 20 }}>
                                            <Pressable style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5 }}>
                                                <Text style={{ color: "#a1a2a6" }}>View more</Text>
                                                <AntDesign name="right" size={15} color="#a1a2a6" style={{ marginLeft: 10 }} />
                                            </Pressable>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </View>
                </View>
                { /* Description */}
                <View style={{ width: "100%", marginTop: 25, display: "flex", alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#f6f6f6" }}>
                    <View style={{ width: "90%" }}>
                        <View>
                            <Text style={{ fontWeight: 600, fontSize: 20 }}>Description</Text>
                        </View>
                        <View style={{ marginTop: 20 }}>
                            <Image source={{ uri: "https://picsum.photos/seed/picsum/536/354" }} style={{ width: "100%", height: 200 }} />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ textAlign: "justify", color: "#a1a2a6" }} numberOfLines={3}>{data.description}</Text>
                        </View>
                        <View style={{ borderWidth: 2, borderColor: "#a1a2a6", borderRadius: 5, marginTop: 15, marginBottom: 20 }}>
                            <Pressable style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5 }}>
                                <Text style={{ color: "#a1a2a6" }}>View more</Text>
                                <AntDesign name="right" size={15} color="#a1a2a6" style={{ marginLeft: 10 }} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                { /* Footer for Booking */}
                <View style={TravellingDetailStyle.footer}>
                    <Text style={{ color: "#abadb1" }}>From: <Text style={{ fontWeight: "bold", color: "black" }}>${data.price}</Text>/night</Text>
                    <Pressable style={{ backgroundColor: "#00bdd5", borderRadius: 10 }}>
                        <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 10 }}>Book now</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}