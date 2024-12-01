import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from '../style/ProfileScreenStyles'; // Import file styles

const ProfileScreen = ({ navigation }) => {
  // Avatar URL (you can replace this with a real URL or use a local image)
  const avatarUrl = 'https://images.spiderum.com/sp-images/49827e9036ed11eb89bf472233a50f5e.jpg';

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}></View>

        {/* Avatar and Name */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            {/* Display avatar image */}
            <Image
              source={{ uri: avatarUrl }} 
              style={styles.avatarImage} 
            />
          </View>
          <Text style={styles.profileName}>TuNguyen</Text>
        </View>

        {/* Menu Items */}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('PersonalInforScreen')} >
          <Text><FontAwesome name="user" size={24} color="black"/></Text>
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
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text><FontAwesome name="credit-card" size={24} color="black" /></Text>
          <Text style={styles.menuText}>Payments</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="black" />
          <Text style={styles.menuText}>Support</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.popToTop()}>
          <Ionicons name="exit-outline" size={24} color="black" />
          <Text style={styles.menuText}>Logout</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
