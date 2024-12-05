import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import styles from '../style/PersonalInforScreenStyle';  // Import styles from styles.js
import authenticateModel from '../models/authenticate';

const PersonalInforScreen = ({ navigation, route }) => {
  const [user, setUser] = useState(route.params.user);
  const [isEditing, setIsEditing] = useState(false); // Tracks whether in editing mode
  const [isViewingDetails, setIsViewingDetails] = useState(false); // Tracks whether in view-only mode

  const handleUpdate = async () => {
    alert('Thông tin đã được cập nhật!');
    const result = await authenticateModel.update(
      user.fullName,
      user.username,
      user.sex,
      user.birthDate,
      user.phone,
      user.email,
      user.address
    );

    if(result === null) {
      alert("Failure the update information account!");
    } else {
      alert("Success the update information account!");
      setIsEditing(false);
    }  
  };

  const handleCancelEdit = () => {
    setIsEditing(false);  // Stop editing mode without saving
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false} // This hides the vertical scroll bar
      >
        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={30} color="#D3D3D3" />
        </TouchableOpacity>

        {/* Avatar Section */}
        <View style={styles.avatarContainer}>
          {/* Use Image component to display the avatar */}
          <Image
            source={{ uri: user.avatar }} // Replace with actual image URL or local image path
            style={styles.avatarImage}
          />
          
          {/* Tên và Tên đăng nhập nằm ở giữa phía dưới avatar */}
          <View style={styles.userInfoContainer}>
            <Text style={styles.userFullName}>{user.fullName}</Text>
            <Text style={styles.userUsername}>{user.username}</Text>
          </View>
        </View>

        {/* Personal Information */}
        <View style={styles.infoContainer}>
          {isEditing || isViewingDetails ? (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Tên đầy đủ:</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={user.fullName}
                  onChangeText={(value) => setUser({ ...user, fullName: value })}
                />
              ) : (
                <Text style={styles.infoText}>{user.fullName}</Text>
              )}
            </View>
          ) : null}

          {isEditing || isViewingDetails ? (
            <View style={styles.infoRow}>
              <Text style={styles.label}>Tên đăng nhập:</Text>
              {isEditing ? (
                <TextInput
                  style={styles.input}
                  value={user.username}
                  onChangeText={(value) => setUser({ ...user, username: value })}
                />
              ) : (
                <Text style={styles.infoText}>{user.username}</Text>
              )}
            </View>
          ) : null}

          <View style={styles.infoRow}>
            <Text style={styles.label}>Giới tính:</Text>
            {isEditing ? (
              <RadioButton.Group
                onValueChange={value => setUser({ ...user, sex: value === "Nam" ? false : true })}
                value={user.sex === false ? "Nam" : "Nữ"}
              >
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="Nam" />
                  <Text style={styles.radioButtonLabel}>Nam</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="Nữ" />
                  <Text style={styles.radioButtonLabel}>Nữ</Text>
                </View>
              </RadioButton.Group>
            ) : (
              <Text style={styles.infoText}>{user.sex === false ? "Nam" : "Nữ"}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Ngày sinh:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.birthDate}
                onChangeText={(value) => setUser({ ...user, birthDate: value })}
              />
            ) : (
              <Text style={styles.infoText}>{user.birthDate}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Số điện thoại:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.phone}
                onChangeText={(value) => setUser({ ...user, phone: value })}
              />
            ) : (
              <Text style={styles.infoText}>{user.phone}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Email:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.email}
                onChangeText={(value) => setUser({ ...user, email: value })}
              />
            ) : (
              <Text style={styles.infoText}>{user.email}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Địa chỉ:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.address}
                onChangeText={(value) => setUser({ ...user, address: value })}
              />
            ) : (
              <Text style={styles.infoText}>{user.address === null ? "KHÔNG CÓ" : user.address}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Nhà cung cấp:</Text>
            <Text style={styles.infoText}>{user.provider}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Ngày tạo tài khoản:</Text>
            <Text style={styles.infoText}>{user.dateCreated}</Text>
          </View>
        </View>

        {/* Action buttons */}
        <View style={styles.buttonContainer}>
          {!isEditing && !isViewingDetails && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsEditing(true)} // Enable editing
              >
                <Text style={styles.buttonText}>Chỉnh sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsViewingDetails(true)} // Enable view-only mode
              >
                <Text style={styles.buttonText}>Xem chi tiết</Text>
              </TouchableOpacity>
            </>
          )}

          {isEditing && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={handleUpdate} // Save the changes
              >
                <Text style={styles.buttonText}>Cập nhật</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleCancelEdit} // Cancel edit mode
              >
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
            </>
          )}

          {isViewingDetails && !isEditing && (
            <>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsViewingDetails(false)} // Exit view-only mode
              >
                <Text style={styles.buttonText}>Đóng</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setIsEditing(true)} // Switch to editing mode
              >
                <Text style={styles.buttonText}>Chỉnh sửa</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PersonalInforScreen;
