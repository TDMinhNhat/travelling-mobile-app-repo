import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../style/DescriptionScreenStyle";

const DescriptionScreen = ({ navigation, route }) => {
  const {
    description,
    travelling,
    image
  }: { description: string; travelling: object; image: any } = route.params;

  const solveBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity style={styles.backIcon} onPress={() => solveBack()}>
        <Ionicons name="chevron-back" size={24} color="#a0a0a0" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Description</Text>

      {/* Image Section */}
      <Image
        source={{ uri: image[0] }}
        style={styles.image}
      />

      {/* Description Text */}
      <Text style={styles.description}>{description.description}</Text>

      {/* Location Info */}
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={18} color="#00BCD4" />
            <Text style={styles.locationText}>{travelling.address}</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.openMapText}>Open map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bullet Points */}
      <View style={styles.bulletPointsContainer}>
        <FlatList
          data={description.specific}
          renderItem={({ item }) => {
            return (
              <View style={styles.bulletRow}>
                <Ionicons name="checkmark" size={18} color="black" />
                <Text style={styles.bulletText}>{item}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          scrollEnabled={false}
        />
      </View>
    </ScrollView>
  );
};

export default DescriptionScreen;
