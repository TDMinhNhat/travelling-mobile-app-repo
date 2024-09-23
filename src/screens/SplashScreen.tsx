import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import { styles } from '../styles/styleSplashScreen';  // Import styles từ file styles.js

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {/* Thêm logo */}
      <Image
  source={require('../../assets/logo.png')}  // Đường dẫn đã điều chỉnh
  style={styles.logo}
/>

    </View>
  );
}
