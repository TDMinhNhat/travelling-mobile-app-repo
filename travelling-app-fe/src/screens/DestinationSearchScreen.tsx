import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../style/DestinationSearchScreenStyle';

const HomeScreen = () => {
  const [destination, setDestination] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Close Icon */}
      <TouchableOpacity style={styles.closeIcon}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      {/* Header section */}
      <View style={styles.header}>
        {/* Title */}
        <Text style={styles.title}>Where to?</Text>

        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <Ionicons name="search" size={20} color="#000" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={destination}
            onChangeText={setDestination}
          />
        </View>

        {/* Destination Options with Horizontal Scroll */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.destinationContainer}>
          {/* Option 1: Anywhere */}
          <TouchableOpacity style={styles.destinationItem}>
            <Image 
              source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }} 
              style={styles.destinationImage} 
            />
            <Text style={styles.destinationText}>Anywhere</Text>
          </TouchableOpacity>

          {/* Option 2: Europe */}
          <TouchableOpacity style={styles.destinationItem}>
            <Image 
              source={{ uri: 'https://picsum.photos/200/300' }} 
              style={styles.destinationImage} 
            />
            <Text style={styles.destinationText}>Europe</Text>
          </TouchableOpacity>

          {/* Option 3: Asia */}
          <TouchableOpacity style={styles.destinationItem}>
            <Image 
              source={{ uri: 'https://picsum.photos/200' }} 
              style={styles.destinationImage} 
            />
            <Text style={styles.destinationText}>Asia</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      
      {/* Time and Guests Options */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>When</Text>
          <Text style={styles.optionDetail}>Add time</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionItem}>
          <Text style={styles.optionText}>Guests</Text>
          <Text style={styles.optionDetail}>Add guests</Text>
        </TouchableOpacity>
      </View>

      {/* Search Button */}
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

export default HomeScreen;
