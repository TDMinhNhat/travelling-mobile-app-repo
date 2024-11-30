import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper'; // Import RadioButton from react-native-paper
import styles from '../style/PersonalInforScreenStyle';  // Import styles from styles.js

const PersonalInforScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    fullName: 'Nguyễn Văn Tú',
    username: '@TuNguyen',
    sex: 'Nam',  // Default is 'Nam'
    birthdate: '1995-05-15',
    phone: '0869.673.999',
    email: 'tunguyen@gmail.com',
    address: 'Hải Phòng, Việt Nam',
    provider: 'Google',
    dateCreated: '2021-06-10',
    avatarUrl: 'https://images.spiderum.com/sp-images/49827e9036ed11eb89bf472233a50f5e.jpg', // Replace with actual image URL or local image
  });

  const [isEditing, setIsEditing] = useState(false); // Tracks whether in editing mode
  const [isViewingDetails, setIsViewingDetails] = useState(false); // Tracks whether in view-only mode

  const handleUpdate = () => {
    alert('Thông tin đã được cập nhật!');
    setIsEditing(false);  // Stop editing mode
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
            source={{ uri: user.avatarUrl }} // Replace with actual image URL or local image path
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
                onValueChange={value => setUser({ ...user, sex: value })}
                value={user.sex}
              >
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="Nam" />
                  <Text style={styles.radioButtonLabel}>Nam</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="Nữ" />
                  <Text style={styles.radioButtonLabel}>Nữ</Text>
                </View>
                <View style={styles.radioButtonContainer}>
                  <RadioButton value="Khác" />
                  <Text style={styles.radioButtonLabel}>Khác</Text>
                </View>
              </RadioButton.Group>
            ) : (
              <Text style={styles.infoText}>{user.sex}</Text>
            )}
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.label}>Ngày sinh:</Text>
            {isEditing ? (
              <TextInput
                style={styles.input}
                value={user.birthdate}
                onChangeText={(value) => setUser({ ...user, birthdate: value })}
              />
            ) : (
              <Text style={styles.infoText}>{user.birthdate}</Text>
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
              <Text style={styles.infoText}>{user.address}</Text>
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
