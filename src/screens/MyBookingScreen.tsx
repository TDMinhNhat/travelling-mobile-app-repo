import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../style/MyBookingScreenStyle'; // Import style riêng

const BookingScreen = () => {
  // Dữ liệu các chuyến đi
  const lastTrips = {
    BEACH: [
      {
        id: 1,
        title: 'Virgo Hotel Nha Trang',
        location: 'Cách trung tâm 200m',
        details: '12 guests, 1-4 April',
        price: '$400 / night',
        image: 'https://danangsensetravel.com/view/at_mo-hinh-khach-san-va-villa-ben-bai-bien-my-khe_536a6368f23ec5d0d9fd20ed12c38135.jpg',
      },
      {
        id: 2,
        title: 'Moonlight Bay Panorama Condotel Ocean View',
        location: 'Giáp biển',
        details: '10 guests, 15-20 July',
        price: '$600 / night',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/509717279.jpg?k=bd39df4db3f2ab1c64d80e8e23c710f8dcf9c09e7bc63f512817b288d9d97faa&o=&hp=1',
      },
    ],
    MOUNTAIN: [
      {
        id: 3,
        title: 'Meek - Home and Coffee"',
        location: 'Cách trung tâm 2,5km',
        details: '8 guests, 10-14 June',
        price: '$500 / night',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/482417550.jpg?k=edc08636481fa8b4cfe262fb35fb2c5c18e052f41ea12e9df4872d3de7adfb5a&o=&hp=1',
      },
      {
        id: 4,
        title: 'TTR Moonstone Apart Hotel',
        location: '30 km away from Alaska',
        details: '4 guests, 25-29 May',
        price: '$750 / night',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/506989111.jpg?k=84062541b9c1a6e9cef4f1f414f036f7f718a62dadc0a06f3e6f3d1d825abca5&o=&hp=1',
      },
    ],
    CAMPING: [
      {
        id: 5,
        title: 'S Plus Bungalow',
        location: 'Cách trung tâm 6,7km',
        details: '15 guests, 1-4 July',
        price: '$200 / night',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/473740952.jpg?k=56c3b6797d2803c978b443d3eadab5e3b7eda91c9879c301e792b2587d5d76a3&o=&hp=1',
      },
      {
        id: 6,
        title: 'Sapa Relax Hotel & Spa',
        location: 'Cách trung tâm 300m',
        details: '20 guests, 18-22 June',
        price: '$300 / night',
        image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/387099209.jpg?k=14d261c825cf0749d54877a07d66e78c61b0f920d2ff78c3d65d6dd438904fa6&o=&hp=1',
      },
    ],
  };

  // Lấy ngày tháng và năm hiện tại bằng JavaScript thuần
  const currentDate = new Date();
  const currentMonthYear = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getFullYear()}`;

  const renderCategory = (category, data) => (
    <View style={styles.categoryContainer} key={category}>
      <Text
        style={[
          styles.categoryTitle,
          {
            color:
              category === 'BEACH'
                ? '#1E90FF' // Màu xanh dương cho BEACH
                : category === 'MOUNTAIN'
                ? '#32CD32' // Màu xanh lá cho MOUNTAIN
                : category === 'CAMPING'
                ? '#FF6347' // Màu cam cho CAMPING
                : '#000', // Mặc định là màu đen nếu không khớp
          },
        ]}
      >
        {category}
      </Text>
      {/* ScrollView dọc chứa danh sách chuyến đi của mỗi danh mục */}
      <ScrollView contentContainerStyle={styles.tripsList}>
        {data.map((trip) => (
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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LAST TRIPS</Text>

      {/* Lịch sử booking: Tháng và Năm */}
      <Text style={styles.historyHeader}> {currentMonthYear}</Text>

      {/* Hiển thị các danh mục với dữ liệu chuyến đi tương ứng */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(lastTrips).map(([category, data]) => renderCategory(category, data))}
      </ScrollView>
    </View>
  );
};

export default BookingScreen;
