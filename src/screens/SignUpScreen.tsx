import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import styles from "../style/SignUpScreenStyles";
import { RadioButton } from "react-native-paper";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import authenticateModel from "../models/authenticate";

const SignUpScreen = ({ navigation, route }) => {
  const { phone } = route.params;
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [sex, setSex] = useState(true);
  const [birthDate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const solveCompleteRegisterAccount = async () => {
    const result = authenticateModel.register(
      fullName,
      sex,
      birthDate,
      email,
      userName,
      password,
      phone
    );
    if (result != null) {
      navigation.navigate("TravellingDetail");
    } else {
      console.log("Register failed");
      return;
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Confirm Information</Text>
      </View>

      {/* Full Name */}
      <View>
        <Text>Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
      </View>

      {/* Sex */}
      <View>
        <Text>Sex:</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Male</Text>
            <RadioButton
              value="Female"
              onPress={() => setSex(true)}
              status={sex ? "checked" : "unchecked"}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text>Female</Text>
            <RadioButton
              value="Male"
              onPress={() => setSex(false)}
              status={!sex ? "checked" : "unchecked"}
            />
          </View>
        </View>
      </View>

      {/* Birth Date */}
      <View style={{ marginTop: 15 }}>
        <Text>Select Birth Day:</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "blue",
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
            }}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={{ color: "white" }}>Select Date</Text>
          </TouchableOpacity>
          <Text style={{ marginLeft: 20 }}>{birthDate.toUTCString()}</Text>
        </View>
        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="date"
          onConfirm={(date) => {
            setBirthDate(date);
            setShowDatePicker(false);
          }}
          onCancel={() => setShowDatePicker(false)}
        />
      </View>

      {/* Email */}
      <View style={{ marginTop: 15 }}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      {/* User Name */}
      <View>
        <Text>Username:</Text>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
        />
      </View>

      {/* Password */}
      <View>
        <Text>Password:</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={secureTextEntry}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}
            style={styles.icon}
          >
            <FontAwesome
              name={secureTextEntry ? "eye" : "eye-slash"}
              size={24}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => solveCompleteRegisterAccount()}
      >
        <Text style={styles.buttonText}>Register Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpScreen;
