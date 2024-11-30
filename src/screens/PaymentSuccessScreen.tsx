import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import styles from '../style/PaymentSuccessScreenStyle';
import { useNavigation } from '@react-navigation/native';

const PaymentSuccessScreen = ({ navigation, route }) => {

  navigation = useNavigation();
  const [bookingNumber, setBookingNumber] = React.useState("00000072697027");
  const { travelling, image, paymentOption } = route.params;
  const bookingDate = new Date();
  const solveBooking = () => {
    navigation.popToTop();
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: image[0] }}
            style={styles.successImage}
          />
        </View>

        
        <Text style={styles.title}>Payment success!</Text>

      
        <View style={styles.detailsRow}>
          <Text style={styles.label}>Booking number</Text>
          <Text style={styles.value}>00000072697027</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.value}>{bookingDate.getDate()}-{bookingDate.getMonth()}-{bookingDate.getFullYear()}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Time</Text>
          <Text style={styles.value}>{bookingDate.getHours()}:{bookingDate.getMinutes()}</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Payment method</Text>
          <Text style={[styles.value, styles.paymentMethod]}>Credit Card</Text>
        </View>

        <View style={styles.detailsRow}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>${travelling.pricePerNight + 10}</Text>
        </View>

        {/* Get PDF Button */}
        <TouchableOpacity style={styles.pdfButton}>
          <Text style={styles.pdfButtonText}>
            <Text>📄 </Text> Get PDF receipt
          </Text>
        </TouchableOpacity>
      </View>

      {/* View Booking Button */}
      <TouchableOpacity style={styles.viewBookingButton} onPress={() => solveBooking()}>
        <Text style={styles.viewBookingText}>View Booking</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentSuccessScreen;
