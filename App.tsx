import React from 'react';
import { StatusBar, View, Platform } from 'react-native'; 
import Screen1 from './src/screens/Splash Screen';  

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* Cài đặt cho StatusBar, chỉ hiển thị trên thiết bị di động */}
      {Platform.OS !== 'web' ? <StatusBar style="auto" /> : null}

      {/* Hiển thị màn hình Screen1 */}
      <Screen1 />
    </View>
  );
}
