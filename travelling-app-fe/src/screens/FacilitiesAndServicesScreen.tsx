import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  SafeAreaView,
  Image
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import styles from "../style/FacilitiesAndServicesScreenStyle";

const FacilitiesAndServices = ({ navigation, route }) => {
  const { service, facility, travelling } = route.params;
  const serviceType = service.map(item => item.type).filter((value, index, array) => array.indexOf(value) === index);

  const solveBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.header} onPress={() => solveBack()}>
        <Ionicons
          name="chevron-back-outline"
          size={24}
          color="black"
          style={styles.backIcon}
        />
        <Text style={styles.headerText}>Facilities & Services</Text>
      </Pressable>

      {/* Facilities Section */}
      <Text style={styles.sectionTitle}>Facilities</Text>
      <View style={styles.infoRow}>
        <Text style={styles.infoText}>{travelling.guest} Guests</Text>
        <Text style={styles.infoText}>{travelling.bedroom} bedroom</Text>
        <Text style={styles.infoText}>{travelling.bed} bed</Text>
        <Text style={styles.infoText}>{travelling.bathroom} bath</Text>
      </View>

      <View>
        <FlatList
          data={facility}
          renderItem={({
            item,
          }: {
            item: { id: number; name: string; imageURL: string };
          }) => {
            return (
              <View style={styles.facilityItem}>
                {/* <Ionicons name="wifi-outline" size={24} color="black" /> */}
                <Image source={{uri: item.imageURL}} style={{width: 24, height: 24}}/>
                <Text style={styles.facilityText}>{item.name}</Text>
              </View>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>

        <FlatList
          data={serviceType}
          renderItem={({item}) => {
            return <View>
                <Text style={styles.subSectionTitle}>{item}</Text>
                { service.filter(service => service.type === item).map((service) => {
                  return <View style={styles.facilityItem} key={service.id.toString()}>
                    {/* <FontAwesome5 name="concierge-bell" size={24} color="black" /> */}
                    <Image source={{uri: service.imageURL }} style={{width: 24, height: 24}}/>
                    <Text style={styles.facilityText}>{service.name}</Text>
                  </View>
                })}
            </View>
          }}
          keyExtractor={(item) => item.toString()}
          scrollEnabled={false}
        />

        {/* <Text style={styles.subSectionTitle}>Cleaning & laundry</Text>
        <View style={styles.facilityItem}>
          <MaterialCommunityIcons
            name="washing-machine"
            size={24}
            color="black"
          />
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
          <MaterialCommunityIcons
            name="bathtub-outline"
            size={24}
            color="black"
          />
          <Text style={styles.facilityText}>Bathtub</Text>
        </View>
        <View style={styles.facilityList}>
          <MaterialCommunityIcons
            name="hair-dryer-outline"
            size={24}
            color="black"
          />
          <Text style={styles.facilityText}>Hair dryer</Text>
        </View> */}
      </View>
    </ScrollView>
  );
};

export default FacilitiesAndServices;
