import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../style/DescriptionScreenStyle';

const DescriptionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity style={styles.backIcon}>
        <Ionicons name="chevron-back" size={24} color="#a0a0a0" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Description</Text>

      {/* Image Section */}
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={styles.image}
      />

      {/* Description Text */}
      <Text style={styles.description}>
        Looking for the perfect place to relax and unwind? This stunning Balinese villa is the ultimate tropical getaway. Located on a quiet street just minutes from the beach, this beautiful home offers everything you need for a luxurious and comfortable stay.
      </Text>

      {/* Location Info */}
      <View style={styles.locationContainer}>
        <View style={styles.locationRow}>
          <Ionicons name="location-outline" size={18} color="#00BCD4" />
          <Text style={styles.locationText}>Bali, Indonesia</Text> 
        </View>
        <TouchableOpacity>
          <Text style={styles.openMapText}>Open map</Text> 
        </TouchableOpacity>
      </View>

      {/* Bullet Points */}
      <View style={styles.bulletPointsContainer}>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark" size={18} color="black" />
          <Text style={styles.bulletText}>Consectetur magna consectetur</Text> 
        </View>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark" size={18} color="black" />
          <Text style={styles.bulletText}>Voluptate magna fugiat tempor incididunt</Text> 
        </View>
        <View style={styles.bulletRow}>
          <Ionicons name="checkmark" size={18} color="black" />
          <Text style={styles.bulletText}>
            Aliqua in in mollit laboris tempor in ut incididunt
          </Text> 
        </View>
      </View>
    </ScrollView>
  );
};

export default DescriptionScreen;
