import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'; 
import styles from '../style/FacilitiesAndServicesScreenStyle'; 

const FacilitiesAndServices = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="black" style={styles.backIcon} />
        <Text style={styles.headerText}>Facilities & Services</Text>
      </View>

      {/* Facilities Section */}
      <Text style={styles.sectionTitle}>Facilities</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>2 Guests</Text>
        <Text style={styles.infoText}>1 bedroom</Text>
        <Text style={styles.infoText}>1 bed</Text>
        <Text style={styles.infoText}>1 bath</Text>
      </View>

      <View >
        <View style={styles.facilityItem}>
          <Ionicons name="wifi-outline" size={24} color="black" />
          <Text style={styles.facilityText}>Wifi</Text>
        </View>
        <View style={styles.facilityItem}>
          <MaterialCommunityIcons name="silverware-fork-knife" size={24} color="black" />
          <Text style={styles.facilityText}>Kitchen</Text>
        </View>
        <View style={styles.facilityItem}>
          <FontAwesome5 name="dumbbell" size={24} color="black" />
          <Text style={styles.facilityText}>Exercise equipment</Text>
        </View>
        <View style={styles.facilityItem}>
          <Ionicons name="water-outline" size={24} color="black" />
          <Text style={styles.facilityText}>Pool</Text>
        </View>
        <View style={styles.facilityItem}>
          <MaterialCommunityIcons name="leaf" size={24} color="black" />
          <Text style={styles.facilityText}>Garden</Text>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>

              <Text style={styles.subSectionTitle}>Cleaning & laundry</Text>
      <View style={styles.facilityItem}>
        <MaterialCommunityIcons name="washing-machine" size={24} color="black" />
        <Text style={styles.facilityText}>Washer</Text>
      </View>
      <View style={styles.facilityItem}>
        <MaterialCommunityIcons name="tumble-dryer" size={24} color="black" />
        <Text style={styles.facilityText}>Free dryer - In unit</Text>
      </View>
      <View style={styles.facilityItem}>
        <MaterialCommunityIcons name="iron" size={24} color="black" />
        <Text style={styles.facilityText}>Iron</Text>
      </View>

        <Text style={styles.subSectionTitle}>Bathroom</Text>
        <View style={styles.facilityItem}>
          <MaterialCommunityIcons name="bathtub-outline" size={24} color="black" />
          <Text style={styles.facilityText}>Bathtub</Text>
        </View>
        <View style={styles.facilityList}>
          <MaterialCommunityIcons name="hair-dryer-outline" size={24} color="black" />
          <Text style={styles.facilityText}>Hair dryer</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default FacilitiesAndServices;
