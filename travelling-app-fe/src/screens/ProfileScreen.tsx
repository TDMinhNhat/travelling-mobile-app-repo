import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import styles from '../style/ProfileScreenStyles'; // Import file styles

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>

        {/* Avatar and Name */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>H</Text>
          </View>
          <Text style={styles.profileName}>Heba Qaisar</Text>
        </View>

        {/* Menu Items */}
        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.menuText}>Personal Information</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="black" />
          <Text style={styles.menuText}>Settings</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text style={styles.menuText}>Notifications</Text>
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>1</Text>
          </View>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <FontAwesome name="credit-card" size={24} color="black" />
          <Text style={styles.menuText}>Payments</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.menuText}>Support</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="exit-outline" size={24} color="black" />
          <Text style={styles.menuText}>Logout</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="search" size={24} color="gray" />
          <Text style={styles.footerText}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="heart" size={24} color="gray" />
          <Text style={styles.footerText}>My Lists</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="calendar-alt" size={24} color="gray" />
          <Text style={styles.footerText}>Booking</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="envelope" size={24} color="gray" />
          <Text style={styles.footerText}>Inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <FontAwesome5 name="user" size={24} color="gray" />
          <Text style={styles.footerText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;
