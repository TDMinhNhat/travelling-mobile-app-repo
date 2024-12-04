import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "../style/ChatWithAIStyles";
import aiModel from '../models/ai';

const ChatWithAIScreen = ({ navigation, route }) => {
  const [message, setMessage] = useState('');
  const { user } = route.params;
  const [listMessage, setListMessage] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await aiModel.get(user.userId);
      if(result !== null) {
        setListMessage(result.data);
      } else {
        alert("Something wrong when get message. Please contact to administrator")
      }
    }

    fetchData();
  }, [])

  const sendMessage = async () => {
    setBtnDisable(true);
    if(message !== '') {
      const result = await aiModel.generate(message, user.userId)
      if(result !== null) {
        async function fetchData() {
          const result = await aiModel.get(user.userId);
          if(result !== null) {
            setListMessage(result.data);
          } else {
            alert("Something wrong when get message. Please contact to administrator")
          }
        }

        fetchData();
      } else {
        alert("Something wrong when generate answer. Please contact to administrator")
      }
      setBtnDisable(false);
      setMessage('');
    } else {
      alert("Please type your message to generate answer");
    }
  };

  return (
    <View style={styles.container}>
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <ScrollView style={styles.chatContainer} showsVerticalScrollIndicator={false}>
          <FlatList
            data={listMessage}
            renderItem={({ item }) => (
              <View style={styles.messageContainer}>
                <View style={styles.userMessage}>
                  <Text style={styles.messageText}>{item.request}</Text>
                </View>
                <View style={styles.adminMessage}>
                  <Text style={styles.messageText}>{item.response}</Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 100 }} // Add padding to make sure the input is not covered
          />
          </ScrollView>

          {/* Input message area fixed at the bottom */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              value={message}
              onChangeText={setMessage}
              placeholder="Type your message..."
              placeholderTextColor="#888"
              returnKeyType="send"
              onSubmitEditing={sendMessage}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage} disabled={btnDisable}>
              <Ionicons name="send" size={24} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default ChatWithAIScreen;
