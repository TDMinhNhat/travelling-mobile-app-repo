import FavoriteScreen from "../screens/FavoriteScreen";
import InboxScreen from "../screens/InboxScreen";
import MyBookingScreen from "../screens/MyBookingScreen";
import DashBoardScreen from "../screens/DashBoardScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DashboardStyle from "../style/DashboardStyle";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";

export default function DashBoardTab({ route }) {
  const Tab = createBottomTabNavigator();
  const [tab, setTab] = useState("Search");
  return (
    <Tab.Navigator initialRouteName={tab}>
      <Tab.Screen
        name="Search"
        listeners={{
            tabPress: () => {
                setTab("Search")
            }
        }}
        component={DashBoardScreen}
        initialParams={{
          user: route.params.user,
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <FontAwesome
                name="search"
                color="black"
                style={[
                  tab == "Search"
                    ? DashboardStyle.fontActive
                    : DashboardStyle.fontUnative,
                  DashboardStyle.fontIcon,
                ]}
              />
            );
          },
          tabBarActiveTintColor: DashboardStyle.fontActive.color,
          tabBarInactiveTintColor: DashboardStyle.fontUnative.color,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        initialParams={{
          user: route.params.user,
        }}
        listeners={{
            tabPress: () => {
                setTab("Favorites")
            }
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="favorite-border"
                color="black"
                style={[
                  tab == "Favorites"
                    ? DashboardStyle.fontActive
                    : DashboardStyle.fontUnative,
                  DashboardStyle.fontIcon,
                ]}
              />
            );
          },
          tabBarActiveTintColor: DashboardStyle.fontActive.color,
          tabBarInactiveTintColor: DashboardStyle.fontUnative.color,
        }}
      />
      <Tab.Screen
        name="Booking"
        component={MyBookingScreen}
        initialParams={{
          user: route.params.user,
        }}
        listeners={{
            tabPress: () => {
                setTab("Booking")
            }
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <AntDesign
                name="shoppingcart"
                color="black"
                style={[
                  tab == "Booking"
                    ? DashboardStyle.fontActive
                    : DashboardStyle.fontUnative,
                  DashboardStyle.fontIcon,
                ]}
              />
            );
          },
          tabBarActiveTintColor: DashboardStyle.fontActive.color,
          tabBarInactiveTintColor: DashboardStyle.fontUnative.color,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        initialParams={{
          user: route.params.user,
        }}
        listeners={{
            tabPress: () => {
                setTab("Inbox")
            }
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                color="black"
                style={[
                  tab == "Inbox"
                    ? DashboardStyle.fontActive
                    : DashboardStyle.fontUnative,
                  DashboardStyle.fontIcon,
                ]}
              />
            );
          },
          tabBarActiveTintColor: DashboardStyle.fontActive.color,
          tabBarInactiveTintColor: DashboardStyle.fontUnative.color,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{
          user: route.params.user,
        }}
        listeners={{
            tabPress: () => {
                setTab("Profile")
            }
        }}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <MaterialIcons
                name="account-circle"
                color="black"
                style={[
                  tab == "Profile"
                    ? DashboardStyle.fontActive
                    : DashboardStyle.fontUnative,
                  DashboardStyle.fontIcon,
                ]}
              />
            );
          },
          tabBarActiveTintColor: DashboardStyle.fontActive.color,
          tabBarInactiveTintColor: DashboardStyle.fontUnative.color,
        }}
      />
    </Tab.Navigator>
  );
}
