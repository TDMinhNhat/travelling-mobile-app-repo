import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import styles from "../style/InboxScreenStyle";
import aiModel from "../models/ai";

export default function ChatAIScreen({ navigation, route }) {
  const [inputMessage, setInputMessage] = useState("");
  const [listMessage, setListMessage] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false); 
  const { user } = route.params;

  useEffect(() => {
    async function fetchData() {
      const result = await aiModel.get(user.userId);
      if(result !== null) {
        setListMessage(result.data);
      } else {
        alert("Something wrong when get message. Please contact to administrator")
      }
    }

    fetchData()
  }, [])

  const handleSendMessage = async () => {
    setBtnDisable(true)
    if(!btnDisable) {
      if(inputMessage === "") {
        alert("Please enter a message to ask");
      } else {
        const result = await aiModel.generate(inputMessage, user.userId)
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
      }
    }
    setInputMessage("");
    setBtnDisable(false)
  };


  const renderMessage = ({ item }) => {
    const isAdmin = item.sender === "admin"; 
    return (
      <View>
        <View style={[styles.messageContainer, styles.customerMessage]}>
          <Text style={styles.messageText}>{item.request}</Text>
        </View>
        <View style={[styles.messageContainer, styles.adminMessage]}>
          <Text style={styles.messageText}>{item.response}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={listMessage} 
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        inverted={false} 
      />

    
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Message..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage} disabled={btnDisable}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
