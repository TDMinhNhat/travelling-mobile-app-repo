import React from "react";
import TravellingDetailStyle from "../style/TravellingDetailStyle";
import { FlatList, Image, ImageBackground, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const USER_IMAGE_DEFAULT: string = process.env.USER_IMAGE_DEFAULt;

export default function ({ navigation, route}) {

    const { userReview, setUserReview } = React.useState([])
    const { travelling, image, service, facility, review, describe, policy, userLogin } = route.params

    const solveBack = () => {
        navigation.goBack()
    }

    const solveDropHeart = () => {

    }

    const solveShowDetailFacilityAndService = () => {
        navigation.navigate("FacilitiesAndServicesScreen", {
            facility: facility,
            service: service,
            travelling: travelling
        })
    }

    const solveViewDescription = () => {
        navigation.navigate("DescriptionScreen", {
            travelling: travelling,
            description: describe,
            image: image
        });
    }

    const solveViewAllReviews = () => {
        navigation.navigate("ReviewsScreen", {
            review: review
        })
    }

    const solveBooking = () => {
        navigation.navigate("Booking", {
            travelling: travelling,
            image: image,
            service: service,
            facility: facility,
            review: review,
            describe: describe,
            policy: policy,
            userLogin: userLogin
        })
    }

    return <SafeAreaView style={TravellingDetailStyle.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                { /* Image and Travelling details */}
                <View style={{ width: "100%", flex: 1, alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#f6f6f6" }}>
                    <View style={{ width: "100%" }}>
                        <ImageBackground source={{ uri: image[0] }} style={{ width: "100%", height: 200, position: "relative" }}>
                            <View style={{ position: "absolute", top: 0, marginTop: 10, marginLeft: 10, marginRight: 10 }}>
                                <View style={{ width: "100%", flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                    <Pressable style={TravellingDetailStyle.action} onPress={() => solveBack()}>
                                        <AntDesign name="arrowleft" size={15} color="white" />
                                    </Pressable>
                                    <Pressable style={TravellingDetailStyle.action} onPress={() => solveDropHeart()}>
                                        <Feather name="heart" size={15} color="white" />
                                    </Pressable>
                                </View>
                            </View>
                            <View style={{ position: "absolute", bottom: 0, right: 0, marginRight: 10, marginBottom: 10, backgroundColor: "black", borderRadius: 9 }}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", padding: 5 }}>
                                    <FontAwesome name="image" size={15} color="white" />
                                    <Text style={{ marginLeft: 10, color: "white" }}>{image.length}</Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: "90%", marginTop: 25 }}>
                        <View>
                            <Text style={{ fontSize: 25, fontWeight: 800 }}>{travelling.name}</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Ionicons name="location-sharp" size={15} color="#13b5c0" />
                                <Text style={{ marginLeft: 5, color: "#95969a" }}>{travelling.address}</Text>
                            </View>
                            <View>
                                <Pressable>
                                    <Text style={{ color: "#13b5c0", textDecorationLine: "underline" }}>View map</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ backgroundColor: "#fafafa", marginTop: 15, marginBottom: 15 }}>
                            <Pressable style={{ padding: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} onPress={() => solveViewAllReviews()}>
                                <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                    <FontAwesome name="star" size={15} color="#ecc133" />
                                    <Text style={{ marginLeft: 5 }}>{(function() {
                                const result = review.map((item) => item.review.star).reduce((a, b) => a + b, 0) / review.length
                                return Math.round(result * 10) / 10;
                            })()}/5</Text>
                                </View>
                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                                    <Text>{review.length} reviews</Text>
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
                            {facility.map((item, index) => {
                                return <Text key={index.toString()} style={{ color: "#79797b", marginRight: 20 }}>{item.name}</Text>
                            })}
                        </View>
                        <View style={{ width: "100%", marginTop: 20, marginBottom: 20, display: "flex" }}>
                            {service.map((item, index) => {
                                if(index <= 4) {
                                    return (
                                        <View key={index.toString()} style={{ display: "flex", flexDirection: "row", alignItems: "center", marginBottom: 10 }}>
                                            <Image source={{ uri: item.imageURL }} width={20} height={20} />
                                            <Text style={{ marginLeft: 5, color: "#68696b" }}>{item.name}</Text>
                                        </View>
                                    )
                                }
                            })}
                        </View>
                        <View style={{ width: "100%", marginBottom: 25, borderWidth: 1, borderRadius: 5, borderColor: "#939498" }}>
                            <Pressable style={{ padding: 3 }} onPress={() => solveShowDetailFacilityAndService()}>
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
                            <Pressable style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onPress={() => solveViewAllReviews()}>
                                <Text style={{ color: "#78797e" }}>See all</Text>
                                <AntDesign name="right" size={15} color="#78797e" style={{ marginLeft: 5 }} />
                            </Pressable>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", marginTop: 20 }}>
                            <Text style={{ fontSize: 25, fontWeight: 800 }}>{(function() {
                                const result = review.map((item) => item.review.star).reduce((a, b) => a + b, 0) / review.length
                                return Math.round(result * 10) / 10;
                            })()}</Text>
                            <Text style={{ marginLeft: 1, color: "#78797d" }}>/5</Text>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 20 }}>
                            <FlatList
                                showsHorizontalScrollIndicator={false}
                                initialNumToRender={4}
                                horizontal={true}
                                data={review}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(target) => {
                                    return <View style={{ width: 350, borderRadius: 2, borderWidth: 1, borderColor: "grey", padding: 10, marginRight: 15 }}>
                                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                            <View style={{ display: "flex", flexDirection: "row" }}>
                                                <View>
                                                    <Image source={{ uri: target.item.user.avatar == null ? USER_IMAGE_DEFAULT : target.item.user.avatar }} style={{ width: 50, height: 50, borderRadius: 50 }} />
                                                </View>
                                                <View style={{ display: "flex", justifyContent: "space-between", marginLeft: 5 }}>
                                                    <Text style={{ fontWeight: 600 }}>{target.item.user.fullName}</Text>
                                                    <Text style={{ color: "#828e8e" }}>{target.item.review.dateCreated}</Text>
                                                </View>
                                            </View>
                                            <View>
                                                <Rating imageSize={15} startingValue={target.item.review.star} readonly={true} />
                                            </View>
                                        </View>
                                        <View style={{ marginTop: 20 }}>
                                            <Text style={{ color: "#828e8e", textAlign: "justify" }} numberOfLines={2}>{target.item.review.comment}</Text>
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
                            {policy.policies.map((item, index) => {
                                return (
                                    <View key={index.toString()} style={{ marginTop: 20, marginLeft: 20 }}>
                                        <View>
                                            <Text style={{ fontWeight: 600 }}>{item.policyName}</Text>
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft: 30 }}>
                                            {item.policyDetails.map((item, index) => {
                                                return <Text key={index.toString()} style={{ color: "#a1a2a6" }}>{item}</Text>
                                            })}
                                        </View>
                                        <View style={{ marginTop: 10, marginLeft: 30 }}>
                                            <Text style={{ color: "#a1a2a6", textAlign: "justify" }} numberOfLines={2}>{item.description}</Text>
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
                            <Image source={{ uri: image[1] }} style={{ width: "100%", height: 200 }} />
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ textAlign: "justify", color: "#a1a2a6" }} numberOfLines={3}>{describe.description}</Text>
                        </View>
                        <View style={{ borderWidth: 2, borderColor: "#a1a2a6", borderRadius: 5, marginTop: 15, marginBottom: 20 }}>
                            <TouchableOpacity style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 5 }} onPress={() => solveViewDescription()}>
                                <Text style={{ color: "#a1a2a6" }}>View more</Text>
                                <AntDesign name="right" size={15} color="#a1a2a6" style={{ marginLeft: 10 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                { /* Footer for Booking */}
                <View style={TravellingDetailStyle.footer}>
                    <Text style={{ color: "#abadb1" }}>From: <Text style={{ fontWeight: "bold", color: "black" }}>${travelling.pricePerNight}</Text>/night</Text>
                    <TouchableOpacity style={{ backgroundColor: "#00bdd5", borderRadius: 10 }} onPress={() => solveBooking()}>
                        <Text style={{ color: "white", fontWeight: "bold", paddingLeft: 30, paddingRight: 30, paddingTop: 10, paddingBottom: 10 }}>Book now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}