import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import các màn hình từ thư mục screens
import DestinationSearchScreen from "./src/screens/DestinationSearchScreen";
import BookingScreen from "./src/screens/BookingScreen";
import CreateAccountScreen from "./src/screens/CreateAccountScreen";
import DashBoardScreen from "./src/screens/DashBoardScreen";
import LoginScreen from "./src/screens/LoginScreen";
import TravellingDetailScreen from "./src/screens/TravellingDetailScreen";
import StayScreen from "./src/screens/StayScreen";
import GuestScreen from "./src/screens/GuestScreen";
import DescriptionScreen from "./src/screens/DescriptionScreen";
import FacilitiesAndServicesScreen from "./src/screens/FacilitiesAndServicesScreen";
import ReviewsScreen from "./src/screens/ReviewsScreen";
import PaymentSuccessScreen from "./src/screens/PaymentSuccessScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignUpSMSScreen from "./src/screens/SignUpSMS";

// Khởi tạo Stack Navigator
const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="PaymentSuccessScreen"
            component={PaymentSuccessScreen}
            options={{ title: "Payment Success" }}
          />
          <Stack.Screen
            name="ReviewsScreen"
            component={ReviewsScreen}
            options={{ title: "Reviews" }}
          />

          <Stack.Screen
            name="FacilitiesAndServicesScreen"
            component={FacilitiesAndServicesScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DescriptionScreen"
            component={DescriptionScreen}
            options={{ title: "DescriptionScreen" }}
          />
          <Stack.Screen
            name="GuestScreen"
            component={GuestScreen}
            options={{ title: "GuestScreen" }}
          />
          <Stack.Screen
            name="StayScreen"
            component={StayScreen}
            options={{ title: "Stay Screen" }}
          />
          <Stack.Screen
            name="DestinationSearch"
            component={DestinationSearchScreen}
            options={{ title: "Search Destination" }} // Đặt tiêu đề của màn hình
          />
          <Stack.Screen
            name="Booking"
            component={BookingScreen}
            options={{ title: "Booking" }}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpSMS"
            component={SignUpSMSScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashBoardScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TravellingDetail"
            component={TravellingDetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
