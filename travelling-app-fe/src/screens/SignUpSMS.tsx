import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../style/SignUpSMSStyles'; // Import style từ file riêng

const SignUpSMSScreen = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const otpArray = [...otp];
    otpArray[index] = text;

    setOtp(otpArray);

    // Move to next input automatically if a number is entered
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      // Move to previous input on backspace
      inputs.current[index - 1].focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100} // Điều chỉnh khoảng cách nếu cần thiết
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign up</Text>
      </View>

      {/* Instructions */}
      <Text style={styles.subTitle}>Enter code from SMS</Text>
      <Text style={styles.subText}>Enter code sent to your number</Text>
      <Text style={styles.subText}>+925326734734</Text>

      {/* OTP Inputs */}
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            ref={(input) => inputs.current[index] = input}
          />
        ))}
      </View>

      {/* Confirm Code Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm Code</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default SignUpSMSScreen;
