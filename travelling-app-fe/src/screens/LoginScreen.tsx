import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, View, Pressable } from 'react-native';
import LoginStyle from "../style/LoginStyle";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from "axios";
import authenticateModel from "../models/authenticate";

export default function ({ navigation }) {

    // const API_URI: string = "http://192.168.100.9:8080/authenticate/api/v1"
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function solveLogin() {
        const result = await authenticateModel.login(email, password)    
        if(result.code == 200) {
            navigation.navigate("Dashboard");
        } else {
            alert("Something when logged in into your account. Please contact to administrator to help")
            console.log("Login failed")
        }
    }

    function solveCreateAccount() {
        navigation.navigate("CreateAccount");
    }

    return (
        <SafeAreaView style={LoginStyle.container}>
            <View style={{ width: "90%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontWeight: 800, fontSize: 20 }}>Login Account</Text>
                </View>
                <View>
                    <View>
                        <Text>Email:</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <MaterialIcons name="email" size={20} color="black" />
                            <TextInput
                                style={{ borderBottomWidth: 1, width: "80%", marginLeft: 10 }}
                                placeholder="Enter your email"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text>Password:</Text>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                            <FontAwesome5 name="key" size={20} color="black" />
                            <TextInput
                                style={{ borderBottomWidth: 1, width: "80%", marginLeft: 10 }}
                                placeholder="Enter your password"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 20, backgroundColor: "#00bdd5", borderRadius: 5}}>
                        <Pressable style={{display: "flex", alignItems: "center", padding: 8}} onPress={() => solveLogin()}>
                            <Text style={{fontWeight: 700, color: "white"}}>Login</Text>
                        </Pressable>
                    </View>
                    <View style={{ width: "100%", marginTop: 10 }}>
                        <Text style={{ textAlign: "center" }}>or</Text>
                    </View>
                    <View style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <View style={{width: "100%", borderWidth: 1, borderColor: "#323232", borderRadius: 5, marginTop: 10}}>
                            <Pressable  style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 8}}>
                                <AntDesign name="apple-o" size={20} color="#323232" />
                                <Text style={{marginLeft: 10, color: "#323232"}}>Continue with Apple</Text>
                            </Pressable>
                        </View>
                        <View style={{width: "100%", borderWidth: 1, borderColor: "#3c99e3", borderRadius: 5, marginTop: 10}}>
                            <Pressable  style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 8}}>
                                <FontAwesome5 name="facebook" size={20} color="#3c99e3" />
                                <Text style={{marginLeft: 10, color: "#3c99e3"}}>Continue with Facebook</Text>
                            </Pressable>
                        </View>
                        <View style={{width: "100%", borderWidth: 1, borderColor: "#d04442", borderRadius: 5, marginTop: 10}}>
                            <Pressable  style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 8}}>
                                <AntDesign name="google" size={20} color="#d04442" />
                                <Text style={{marginLeft: 10, color: "#d04442"}}>Continue with Google</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{marginTop: 25, justifyContent: "center", alignItems: "center"}}>

                    </View>
                </View>
                <View>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <Text>Hasn't ever an account yet?</Text>
                        <Pressable style={{marginLeft: 10}} onPress={() => solveCreateAccount()}>
                            <Text style={{color: "#589dd5", textDecorationLine: "underline"}}>Create an account</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}