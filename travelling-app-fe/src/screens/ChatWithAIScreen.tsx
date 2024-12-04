import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import styles from "../style/InboxScreenStyle";

export default function ChatAIScreen() {
  const [messages, setMessages] = useState([]); 
  const [inputMessage, setInputMessage] = useState(""); 

  
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    
    const newMessage = {
      id: Date.now().toString(),
      sender: "customer",
      message: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    
    const systemMessage = {
      id: (Date.now() + 1).toString(),
      sender: "admin",
      message: "Chào bạn! Bạn cần gì?", 
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };


    setMessages((prevMessages) => [...prevMessages, newMessage, systemMessage]);
    setInputMessage(""); 
  };


  const renderMessage = ({ item }) => {
    const isAdmin = item.sender === "admin"; 
    return (
      <View style={[styles.messageContainer, isAdmin ? styles.adminMessage : styles.customerMessage]}>
        <Text style={styles.messageText}>{item.message}</Text>
     
        <Text style={[styles.messageTime, isAdmin ? styles.adminTime : styles.customerTime]}>{item.time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={messages} 
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
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
