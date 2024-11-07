import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LogBox } from 'react-native';
import styles from '../style/styleCreateAccountScreen';

// Tắt cảnh báo defaultProps
LogBox.ignoreLogs(['Support for defaultProps']);

const CreateAccountScreen = ({ navigation }) => {
  const [countryCode, setCountryCode] = useState<CountryCode>('VN');
  const [callingCode, setCallingCode] = useState('84');
  const [phoneInput, setPhoneInput] = useState('');

  const onSelect = (country: Country) => {
    if (country && country.cca2 && country.callingCode) {
      setCountryCode(country.cca2);
      setCallingCode(country.callingCode.length > 0 ? country.callingCode[0] : '');
    } else {
      console.error('Invalid country data:', country);
    }
  };

  function solveLogin() {
    navigation.navigate('Login');
  }

  function solveContinueSignUp() {
    navigation.navigate("SignUp", {
      phone: phoneInput
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <Text style={styles.label}>Enter your mobile number:</Text>

      <View style={styles.inputRow}>
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCode
            withEmoji={false}
            onSelect={onSelect}
            withModal={true}
          />
          <Entypo name="chevron-down" size={20} color="black" style={styles.chevronIcon} />
        </View>

        <TextInput
          style={styles.phoneInput}
          placeholder={`+${callingCode} Mobile number`}
          keyboardType="phone-pad"
          placeholderTextColor="#B0B0B0"
          onChangeText={(text) => setPhoneInput(text)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => solveContinueSignUp()}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TouchableOpacity style={styles.socialButtonApple}>
        <FontAwesome name="apple" size={24} color="black" />
        <Text style={styles.socialButtonTextApple}>Continue with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <FontAwesome name="facebook" size={24} color="blue" />
        <Text style={styles.socialButtonTextFacebook}>Continue with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonGoogle}>
        <FontAwesome name="google" size={24} color="red" />
        <Text style={styles.socialButtonTextGoogle}>Continue with Google</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By signing up, you agree to our <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      <TouchableOpacity onPress={() => solveLogin()}>
        <Text style={styles.Already}>Already had an account?<Text style={styles.loginLink}> Log in</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
