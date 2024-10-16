import React from "react";
import { SafeAreaView, View, Text, Pressable, Image, ScrollView } from "react-native";
import BookingStyle from "../style/BookingStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RadioButton } from "react-native-radio-buttons-group";

export default function () {

    const [paymentOption, setPaymentOption] = React.useState("full");

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
        <ScrollView style={{ width: "100%" }}>
            <View style={{ display: "flex", alignItems: "center" }}>
                <View style={{ borderBottomColor: "#f4f4f4", borderBottomWidth: 1, width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", borderColor: "#f6f6f6", borderWidth: 1, borderRadius: 10, padding: 10 }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ color: "#717274" }}><Text style={{ fontWeight: 600, fontSize: 20, color: "black" }}>${data.price}</Text>/night</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#717274" }}>{data.title}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name="star" size={15} color="#f1c640" />
                                <Text style={{ marginLeft: 5, color: "#717274" }}>{data.averageStar} ({data.totalReview})</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: data.image }} width={100} height={100} borderRadius={5} />
                        </View>
                    </View>
                    <View style={{ width: "90%", marginTop: 30, borderBottomColor: "#f7f7f7", borderBottomWidth: 1 }}>
                        <View>
                            <Text style={{ fontWeight: 700, fontSize: 20 }}>Your Trip</Text>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ color: "#262a2d", fontWeight: 600 }}>Dates</Text>
                                <Text style={{ color: "#7c7d7f" }}>{data.dates}</Text>
                            </View>
                            <View>
                                <Pressable>
                                    <AntDesign name="edit" size={20} color="black" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                            <View>
                                <Text style={{ color: "#262a2d", fontWeight: 600 }}>Guests</Text>
                                <Text style={{ color: "#7c7d7f" }}>{data.guests} guest</Text>
                            </View>
                            <View>
                                <Pressable>
                                    <AntDesign name="edit" size={20} color="black" />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "90%", marginTop: 30, borderBottomColor: "#f7f7f7", borderBottomWidth: 1 }}>
                        <View>
                            <Text style={{ fontWeight: 600, fontSize: 20 }}>Payment Options</Text>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                            <View style={{ width: "80%" }}>
                                <Text style={{ fontWeight: 600 }}>Pay in full</Text>
                                <Text style={{ color: "#7c7d7f" }}>Pay $30 now to finalize your booking</Text>
                            </View>
                            <View>
                                <RadioButton
                                    color="#7c7d7f"
                                    borderSize={1}
                                    borderColor="#7c7d7f"
                                    selected={paymentOption == "full"}
                                    value="full"
                                    id="1"
                                    onPress={() => setPaymentOption("full")}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 70 }}>
                            <View style={{ width: "80%" }}>
                                <Text style={{ fontWeight: 600 }}>Pay a part now</Text>
                                <Text style={{ color: "#7c7d7f" }}>You can make a paritial payment now and the remaining amount at a later time</Text>
                            </View>
                            <View>
                                <RadioButton
                                    color="#7c7d7f"
                                    borderSize={1}
                                    borderColor="#7c7d7f"
                                    selected={paymentOption == "part"}
                                    value="part"
                                    id="2"
                                    onPress={() => setPaymentOption("part")}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: "90%", marginTop: 30 }}>
                        <View>
                            <Text style={{ fontWeight: 600, fontSize: 20 }}>Price details</Text>
                        </View>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: "#f7f7f7"}}>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={{color: "#8d8d8d"}}>{data.price} x 1 night</Text>
                                <Text style={{fontWeight: 600}}>${data.price * 1}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                                <Text style={{color: "#8d8d8d"}}>Kayak fee</Text>
                                <Text style={{fontWeight: 600}}>$5</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 10 }}>
                                <Text style={{color: "#8d8d8d"}}>Street parking fee</Text>
                                <Text style={{fontWeight: 600}}>$5</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 10, marginBottom: 50 }}>
                            <Text style={{color: "#8d8d8d"}}>Total (USD)</Text>
                            <Text style={{fontWeight: 600}}>${data.price + 10}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 25, width: "90%", backgroundColor: "#00bdd5", borderRadius: 8 }}>
                    <Pressable style={{ padding: 10 }}>
                        <Text style={{ textAlign: "center", color: "white" }}>Book Now</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}