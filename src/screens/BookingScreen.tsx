import React from "react";
import { SafeAreaView, View, Text, Pressable, Image, ScrollView, Modal, TextInput, TouchableOpacity } from "react-native";
import BookingStyle from "../style/BookingStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { RadioButton } from "react-native-radio-buttons-group";
import booking from "../models/booking";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function ({ navigation, route }) {
    const { travelling, image, service, facility, review, describe, policy, userLogin } = route.params
    const [paymentOption, setPaymentOption] = React.useState("full");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [showDatePicker, setShowDatePicker] = React.useState(false)
    const [guests, setGuests] = React.useState(travelling.guest)
    const [dateTrip, setDateTrip] = React.useState(new Date())

    const solveBookNow = async () => {
        const result = await booking.setBooking(
            "B" + dateTrip.getFullYear() + "" + dateTrip.getMonth() + "" + dateTrip.getDate() + dateTrip.getHours() + dateTrip.getMinutes() + dateTrip.getSeconds() + dateTrip.getMilliseconds(),
            userLogin.userId,
            travelling.id,
            dateTrip,
            guests,
            travelling.pricePerNight,
            paymentOption,
            "CARD",
            travelling.pricePerNight + 10
        )
        if(result.code === 200) {
            navigation.navigate("PaymentSuccessScreen", {
                travelling: travelling,
                image: image,
                paymentOption: paymentOption,
            })
        } else {
            alert("Booking failed! Please contact to administrator to help.")
        }

    }

    return <SafeAreaView style={BookingStyle.container}>
        <ScrollView style={{ width: "100%" }}>
            <View style={{ display: "flex", alignItems: "center" }}>
                <View style={{ borderBottomColor: "#f4f4f4", borderBottomWidth: 1, width: "100%", alignItems: "center" }}>
                    <View style={{ width: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", borderColor: "#f6f6f6", borderWidth: 1, borderRadius: 10, padding: 10 }}>
                        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <View>
                                <Text style={{ color: "#717274" }}><Text style={{ fontWeight: 600, fontSize: 20, color: "black" }}>${travelling.pricePerNight}</Text>/night</Text>
                            </View>
                            <View>
                                <Text style={{ color: "#717274" }}>{travelling.name}</Text>
                            </View>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <FontAwesome name="star" size={15} color="#f1c640" />
                                <Text style={{ marginLeft: 5, color: "#717274" }}>{(function() {
                                const result = review.map((item) => item.review.star).reduce((a, b) => a + b, 0) / review.length
                                return Math.round(result * 10) / 10;
                            })()} ({review.length})</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: image[0] }} width={100} height={100} borderRadius={5} />
                        </View>
                    </View>
                    <View style={{ width: "90%", marginTop: 30, borderBottomColor: "#f7f7f7", borderBottomWidth: 1 }}>
                        <View>
                            <Text style={{ fontWeight: 700, fontSize: 20 }}>Your Trip</Text>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <Text style={{ color: "#262a2d", fontWeight: 600 }}>Dates</Text>
                                <Text style={{ color: "#7c7d7f" }}>{dateTrip.toISOString()}</Text>
                            </View>
                            <View>
                                <Pressable onPress={() => setShowDatePicker(true)}>
                                    <AntDesign name="edit" size={20} color="black" />
                                </Pressable>
                                <DateTimePickerModal
                                    isVisible={showDatePicker}
                                    mode="date"
                                    onConfirm={(date) => {
                                        if(date.getTime() < new Date().getTime()) {
                                            alert("Please select a date in the future")
                                        } else {
                                            setDateTrip(date);
                                        }
                                        setShowDatePicker(false);
                                    }}
                                    onCancel={() => setShowDatePicker(false)}
                                />
                            </View>
                        </View>
                        <View style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                            <View>
                                <Text style={{ color: "#262a2d", fontWeight: 600 }}>Guests</Text>
                                <Text style={{ color: "#7c7d7f" }}>{guests} guest</Text>
                            </View>
                            <View>
                                <Pressable onPress={() => setModalVisible(true)}>
                                    <AntDesign name="edit" size={20} color="black" />
                                </Pressable>
                                <Modal
                                    animationType="slide"
                                    transparent={false}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        setModalVisible(!modalVisible);
                                    }}>
                                    <View style={BookingStyle.centeredView} >
                                        <View style={BookingStyle.modalView}>
                                            <Text style={BookingStyle.modalText}>Input the number of guests</Text>
                                            <TextInput
                                                style={{ borderBottomWidth: 1, width: "80%", marginLeft: 10 }}
                                                onChangeText={text => {
                                                    if(text === "") {
                                                        setGuests(2)
                                                    } else {
                                                        setGuests(parseInt(text))
                                                    }
                                                }}
                                                keyboardType="numeric"
                                            />
                                            <Pressable
                                                style={[BookingStyle.button, BookingStyle.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Text>Accept</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </Modal>
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
                                <Text style={{color: "#8d8d8d"}}>{travelling.pricePerNight} x 1 night</Text>
                                <Text style={{fontWeight: 600}}>${travelling.pricePerNight * 1}</Text>
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
                            <Text style={{fontWeight: 600}}>${travelling.pricePerNight + 10}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 25, width: "90%", backgroundColor: "#00bdd5", borderRadius: 8, paddingBottom: 10 }}>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => solveBookNow()}>
                        <Text style={{ textAlign: "center", color: "white" }}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
}