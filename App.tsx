import React, { useState, useEffect } from 'react';
import { StatusBar, View, Platform } from 'react-native'; 
import SplashScreen from './src/screens/SplashScreen';  // Import màn hình SplashScreen
import CreateAccountScreen from './src/screens/CreateAccountScreen';  // Import màn hình CreateAccountScreen

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);  // Trạng thái để quản lý SplashScreen

  useEffect(() => {
    // Đặt hẹn giờ để ẩn màn hình SplashScreen sau 3 giây (3000ms)
    const timer = setTimeout(() => {
      setIsSplashVisible(false);  // Ẩn SplashScreen
    }, 3000);

    // Dọn dẹp hẹn giờ khi component bị hủy
    return () => clearTimeout(timer);
  }, []);

  // Hiển thị StatusBar nếu không phải web
  const renderStatusBar = () => {
    if (Platform.OS !== 'web') {
      return <StatusBar barStyle="dark-content" />;
    }
    return null;
  };

  // Điều kiện hiển thị màn hình dựa trên trạng thái SplashScreen
  const renderScreen = () => {
    return isSplashVisible ? <SplashScreen /> : <CreateAccountScreen />;
  };

  return (
    <View style={{ flex: 1 }}>
      {renderStatusBar()}
      {renderScreen()}
    </View>
  );
}
