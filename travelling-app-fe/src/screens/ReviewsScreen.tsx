import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import styles from '../style/ReviewsScreenStyle'; 

const ratingData = {
  totalReviews: 262, 
  ratings: {
    5: 150, 
    4: 70,  
    3: 30,  
    2: 10,  
    1: 2    
  }
};

const reviews = [
  {
    name: 'John King',
    time: 'A day ago',
    avatar: 'https://picsum.photos/200/300', 
    rating: 5,
    comment: 'We loved staying in this charming home! It had all the amenities we needed, and the historic...'
  },
  {
    name: 'Jennifer Harris',
    time: 'A day ago',
    avatar: 'https://picsum.photos/id/237/200/300',
    rating: 3,
    comment: 'While the location of this home was convenient, we were disappointed with the cleanliness and overall...'
  },
  {
    name: 'John Edwards',
    time: 'A day ago',
    avatar: 'https://picsum.photos/200',
    rating: 5,
    comment: 'This home was perfect for our family vacation! The kids loved the pool and the game room...'
  },
  {
    name: 'Elizabeth Lopez',
    time: 'A day ago',
    avatar: 'https://picsum.photos/200/300?grayscale',
    rating: 5,
    comment: 'The photos don\'t do this home justice - it\'s absolutely stunning in person...'
  },
];

const ReviewsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back-outline" size={24} color="black" />
        <Text style={styles.headerText}>Reviews</Text>
      </View>

      {/* Reviews Count */}
      <Text style={styles.reviewsCount}>262 reviews</Text>

      {/* Rating Overview */}
      <View style={styles.ratingOverview}>
        <View style={styles.rating}>
          <Text style={styles.ratingNumber}>4.5/5</Text>
          <View style={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome key={i} name="star" size={24} color={i < 4.5 ? '#f1c40f' : '#ccc'} />
            ))}
          </View>
        </View>

        {/* Rating Breakdown */}
        <View style={styles.ratingBreakdown}>
          {[5, 4, 3, 2, 1].map((star, index) => {
            const percentage = (ratingData.ratings[star] / ratingData.totalReviews) * 100;
            return (
              <View key={index} style={styles.breakdownRow}>
                <Text>{star}</Text>
                <View style={styles.barBackground}>
                  <View style={[styles.barFill, { width: `${percentage}%` }]} />
                </View>
              </View>
            );
          })}
        </View>
      </View>

     {/* User Reviews */}
{reviews.map((review, index) => (
  <View key={index} style={styles.reviewCard}>
    <View style={styles.row}>
      {/* Ảnh đại diện nằm bên trái */}
      <Image source={{ uri: review.avatar }} style={styles.avatar} />
      
      {/* Nội dung nằm bên phải ảnh */}
      <View style={styles.reviewContent}>
        <View style={styles.row}>
          <Text style={styles.reviewerName}>{review.name}</Text>
          <View style={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome key={i} name="star" size={18} color={i < review.rating ? '#f1c40f' : '#ccc'} />
            ))}
          </View>
        </View>

        {/* Thời gian đánh giá */}
        <Text style={styles.reviewTime}>{review.time}</Text>
      </View>
    </View>

    {/* Nội dung bình luận */}
    <Text style={styles.comment}>{review.comment}</Text>
  </View>
))}
    </ScrollView>
  );
};

export default ReviewsScreen;
