import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../style/MyBookingScreenStyle'; 

const BookingScreen = ({ navigation }) => {
  // Giả lập dữ liệu chuyến đi trước đây
  const lastTrips = [
    {
      id: 1,
      title: 'Farmstead "skazka"',
      location: '40 km away from Brest',
      details: '12 guests, 1-4 April',
      price: '$400 / night',
      image: 'https://picsum.photos/200/300', 
    },
    {
      id: 2,
      title: 'Hotel Room "Crowne Plaza"',
      location: '40 km away from destination',
      details: '2 guests, 18-30 June',
      price: '$700 / night',
      image: 'https://picsum.photos/200', 
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>My Booking</Text>
      </View>

      {/* Upcoming trips */}
      <Text style={styles.sectionTitle}>Upcoming trips</Text>
      <View style={styles.noUpcomingTrips}>
        <Text style={styles.noUpcomingTripsText}>No booked options</Text>
      </View>

      {/* Last trips */}
      <Text style={styles.sectionTitle}>Last trips</Text>
      <ScrollView contentContainerStyle={styles.tripsList}>
        {lastTrips.map((trip) => (
          <View key={trip.id} style={styles.tripCard}>
            <Image source={{ uri: trip.image }} style={styles.tripImage} />
            <View style={styles.tripDetails}>
              <Text style={styles.tripTitle}>{trip.title}</Text>
              <Text style={styles.tripLocation}>{trip.location}</Text>
              <Text style={styles.tripDetailsText}>{trip.details}</Text>
              <Text style={styles.tripPrice}>{trip.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BookingScreen;
