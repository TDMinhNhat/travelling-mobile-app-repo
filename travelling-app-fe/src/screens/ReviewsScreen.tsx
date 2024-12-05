import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; 
import styles from '../style/ReviewsScreenStyle'; 

const USER_IMAGE_DEFAULT: string = process.env.USER_IMAGE_DEFAULt;

const ReviewsScreen = ({ navigation, route }: { navigation: any, route: any }) => {

  const { review } = route.params;

  const ratingData = {
    totalReviews: review.length, 
    ratings: {
      5: review.filter(item => item.review.star == 5).length, 
      4: review.filter(item => item.review.star == 4).length,  
      3: review.filter(item => item.review.star == 3).length,  
      2: review.filter(item => item.review.star == 2).length,  
      1: review.filter(item => item.review.star == 1).length    
    }
  };
  
  const solveGoBack = () => {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => solveGoBack()}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
        <Text style={styles.headerText}>Reviews</Text>
      </View>

      {/* Reviews Count */}
      <Text style={styles.reviewsCount}>{ratingData.totalReviews} Reviews</Text>

      {/* Rating Overview */}
      <View style={styles.ratingOverview}>
        <View style={styles.rating}>
          <Text style={styles.ratingNumber}>{Math.round(review.map(item => item.review.star).reduce((a, b) => a + b, 0) / review.length * 10) / 10}/5</Text>
          <View style={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome key={i} name="star" size={18} color={i < review.map(item => item.review.star).reduce((a, b) => a + b, 0) / review.length ? '#f1c40f' : '#ccc'} />
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
{review.map((review, index) => (
  <View key={index} style={styles.reviewCard}>
    <View style={styles.row}>
      {/* Ảnh đại diện nằm bên trái */}
      <Image source={{ uri: review.user.avatar == null ? USER_IMAGE_DEFAULT : review.user.avatar }} style={styles.avatar} />
      
      {/* Nội dung nằm bên phải ảnh */}
      <View style={styles.reviewContent}>
        <View style={styles.row}>
          <Text style={styles.reviewerName}>{review.user.fullName}</Text>
          <View style={styles.starsRow}>
            {[...Array(5)].map((_, i) => (
              <FontAwesome key={i} name="star" size={18} color={i < review.review.star ? '#f1c40f' : '#ccc'} />
            ))}
          </View>
        </View>

        {/* Thời gian đánh giá */}
        <Text style={styles.reviewTime}>{review.review.dateCreated}</Text>
      </View>
    </View>

    {/* Nội dung bình luận */}
    <Text style={styles.comment}>{review.review.comment}</Text>
  </View>
))}
    </ScrollView>
  );
};

export default ReviewsScreen;
