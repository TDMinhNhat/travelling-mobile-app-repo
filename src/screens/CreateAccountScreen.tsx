import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';  // Import CountryPicker
import { Entypo } from '@expo/vector-icons'; // Import icon mũi tên chỉ xuống
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/styleCreateAccountScreen';  

const CreateAccountScreen = () => {
  const [countryCode, setCountryCode] = useState('US');  // Mã quốc gia mặc định là Mỹ
  const [callingCode, setCallingCode] = useState('1');   // Mã gọi điện mặc định là +1

  const onSelect = (country) => {
    // Kiểm tra country có hợp lệ trước khi cập nhật
    if (country && country.cca2 && country.callingCode) {
      setCountryCode(country.cca2);  // Cập nhật mã quốc gia
      setCallingCode(country.callingCode.length > 0 ? country.callingCode[0] : '');  // Kiểm tra và cập nhật mã gọi điện
    } else {
      console.error('Invalid country data:', country);  // In ra lỗi nếu country không hợp lệ
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>

      <Text style={styles.label}>Enter your mobile number:</Text>

      <View style={styles.inputRow}>
        {/* Picker chọn quốc gia */}
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag
            withCallingCode
            withEmoji={false} // Không sử dụng biểu tượng emoji cho quốc gia
            onSelect={onSelect}
            withModal={true}  // Hiển thị modal quốc gia khi người dùng nhấn
          />
          <Entypo name="chevron-down" size={20} color="black" style={styles.chevronIcon} />
        </View>

        {/* Mã quốc gia + số điện thoại */}
        <TextInput
          style={styles.phoneInput}
          placeholder={`+${callingCode} Mobile number`}
          keyboardType="phone-pad"
          placeholderTextColor="#B0B0B0"
        />
      </View>

      <TouchableOpacity style={styles.button}>
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

      <TouchableOpacity>
        <Text style={styles.Already}>Already had an account?<Text style={styles.loginLink}> Log in</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen;
