import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../style/GuestScreenStyle'; 

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const increment = (setter, value) => setter(value + 1);
  const decrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>


      {/* Location Section */}
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionLabel}>Location</Text>
        <Text style={styles.selectionValue}>Anywhere</Text>
      </View>

      {/* Dates Section */}
      <View style={styles.selectionContainer}>
        <Text style={styles.selectionLabel}>Dates</Text>
        <Text style={styles.selectionValue}>23 - 31 May</Text>
      </View>

      {/* Guests Section */}
      <View style={styles.guestContainer}>
        <Text style={styles.title}>How many guests?</Text>

        {/* Adults */}
        <View style={styles.guestRow}>
          <Text style={styles.guestLabel}>Adults</Text>
          <View style={styles.guestControl}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => decrement(setAdults, adults)}
            >
              <Ionicons name="remove-outline" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.guestCount}>{adults}</Text>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => increment(setAdults, adults)}
            >
              <Ionicons name="add-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Children */}
        <View style={styles.guestRow}>
          <Text style={styles.guestLabel}>Children</Text>
          <View style={styles.guestControl}>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => decrement(setChildren, children)}
            >
              <Ionicons name="remove-outline" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.guestCount}>{children}</Text>
            <TouchableOpacity
              style={styles.controlButton}
              onPress={() => increment(setChildren, children)}
            >
              <Ionicons name="add-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearButtonText}>Clear all</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#fff" />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GuestScreen;
