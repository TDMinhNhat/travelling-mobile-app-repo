import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import các màn hình từ thư mục screens
import DestinationSearchScreen from './src/screens/DestinationSearchScreen'; 
import BookingScreen from './src/screens/BookingScreen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import DashBoardScreen from './src/screens/DashBoardScreen';
import LoginScreen from './src/screens/LoginScreen';
import TravellingDetailScreen from './src/screens/TravellingDetailScreen';
import StayScreen from './src/screens/StayScreen';

// Khởi tạo Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StayScreen">
      <Stack.Screen 
          name="StayScreen" 
          component={StayScreen} 
          options={{ title: 'Stay Screen' }} 
        />
        <Stack.Screen 
          name="DestinationSearch" 
          component={DestinationSearchScreen} 
          options={{ title: 'Search Destination' }} // Đặt tiêu đề của màn hình
        />
        <Stack.Screen 
          name="Booking" 
          component={BookingScreen} 
          options={{ title: 'Booking' }} 
        />
        <Stack.Screen 
          name="CreateAccount" 
          component={CreateAccountScreen} 
          options={{ title: 'Create Account' }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashBoardScreen} 
          options={{ title: 'Dashboard' }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="TravellingDetail" 
          component={TravellingDetailScreen} 
          options={{ title: 'Travelling Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
