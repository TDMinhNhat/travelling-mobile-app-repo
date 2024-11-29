import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../style/NotificationsScreenStyles'; 

const NotificationsScreen = ({ navigation }) => {
  // Giả lập danh sách thông báo
  const notifications = [
    {
      id: 1,
      title: 'Booking confirmed',
      description: 'Your booking at Farmstead "Zebva" is successfully verified',
      date: '24.01.2023',
    },
    {
      id: 2,
      title: 'Booking confirmed',
      description: 'Your booking at Farmstead "Skasza" is successfully verified',
      date: '19.05.2023',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>

      {/* All notifications */}
      <Text style={styles.sectionTitle}>All notifications</Text>

      {/* Notification list */}
      <ScrollView contentContainerStyle={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationDate}>{notification.date}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;
