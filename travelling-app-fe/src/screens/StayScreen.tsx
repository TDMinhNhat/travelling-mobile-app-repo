import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar } from 'react-native-calendars';
import styles from '../style/StayScreenStyle'; 

const StayScreen = () => {
  const [location, setLocation] = useState('Anywhere');
  const [selectedDate, setSelectedDate] = useState(null);
  const [days, setDays] = useState(1); 

  const incrementDays = () => setDays(prev => prev + 1);
  const decrementDays = () => setDays(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Close Icon */}
      <TouchableOpacity style={styles.closeIcon}>
        <Ionicons name="close" size={24} color="black" />
      </TouchableOpacity>

      {/* Location Section */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationLabel}>Location</Text>
        <Text style={styles.locationValue}>{location}</Text>
      </View>

      {/* Date Selection Section */}
      <View style={styles.dateContainer}>
        <Text style={styles.title}>When staying</Text>

        {/* Choose dates and Anytime in the same bar */}
        <View style={styles.dateChoiceBar}>
          <TouchableOpacity style={styles.dateChoiceButtonActive}>
            <Text style={styles.dateChoiceTextActive}>Choose dates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateChoiceButton}>
            <Text style={styles.dateChoiceText}>Anytime</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar */}
        <View style={styles.calendarHeader}>
        </View>
        <Calendar 
          style={styles.calendar} 
          current={'2022-02-01'}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          markedDates={selectedDate ? {
            [selectedDate]: {
              selected: true,
              selectedColor: '#00A8E8'
            }
          } : {}}
          theme={{
            textSectionTitleColor: '#00BCD4',  
            arrowColor: '#000',
            todayTextColor: '#00A8E8',
            selectedDayBackgroundColor: '#00A8E8',
            selectedDayTextColor: '#ffffff',

            
            textDayFontWeight: 'bold',
            dayTextColor:'#a0a0a0',  
            textMonthFontWeight: 'bold', 
            textDayHeaderFontWeight: 'bold', 
            
            textDayFontSize: 12, 
            textMonthFontSize: 16, 
            textDayHeaderFontSize: 12, 
          }}
        />

        {/* Day selection */}
        <View style={styles.daySelectionContainer}>
          <TouchableOpacity style={styles.decrementButton} onPress={decrementDays}>
            <Text style={styles.incrementDecrementText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.dayCounter}>{days} days</Text>
          <TouchableOpacity style={styles.incrementButton} onPress={incrementDays}>
            <Text style={styles.incrementDecrementText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Skip and Next */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
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

export default StayScreen;
