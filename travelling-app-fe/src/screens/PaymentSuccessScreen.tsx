import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../style/PaymentSuccessScreenStyle';

const PaymentSuccessScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: 'https://picsum.photos/200/300' }}
            style={styles.successImage}
          />
        </View>

        
        <Text style={styles.title}>Payment success!</Text>

      
        <View style={styles.detailsRow}>
          <Text style={styles.label}>Ref number</Text>
          <Text style={styles.value}>00000072697027</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>09-05-2023</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>05:40 AM</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Payment method</Text>
          <Text style={[styles.value, styles.paymentMethod]}>Credit card</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>$30</Text>
        </View>

        {/* Get PDF Button */}
        <TouchableOpacity style={styles.pdfButton}>
          <Text style={styles.pdfButtonText}>
            <Text>📄 </Text> Get PDF receipt
          </Text>
        </TouchableOpacity>
      </View>

      {/* View Booking Button */}
      <TouchableOpacity style={styles.viewBookingButton}>
        <Text style={styles.viewBookingText}>View booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;
