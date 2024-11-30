import React, { useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import styles from "../style/InboxScreenStyle";

// Dữ liệu hội thoại mẫu
const defaultMessages = [
  { id: "1", sender: "admin", message: "Chào bạn! Chúc bạn có một ngày tốt lành! Chúng tôi ở đây để hỗ trợ bạn!", time: "08:00" },
  { id: "2", sender: "customer", message: "Tôi muốn hỏi về chính sách đặt phòng.", time: "08:05" },
  { id: "3", sender: "admin", message: "Chúng tôi có chính sách hoàn tiền trong vòng 7 ngày nếu bạn hủy đặt phòng.", time: "08:07" },
  { id: "4", sender: "customer", message: "Cảm ơn bạn, còn phí hủy phòng thì sao?", time: "08:10" },
  { id: "5", sender: "admin", message: "Sau 7 ngày, phí hủy sẽ được tính dựa trên quy định của từng loại phòng.", time: "08:12" },
];

export default function InboxScreen() {
  const [messages, setMessages] = useState(defaultMessages); 
  const [inputMessage, setInputMessage] = useState(""); 

  // Hàm xử lý gửi tin nhắn
  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Tin nhắn của người dùng
    const newMessage = {
      id: Date.now().toString(),
      sender: "customer",
      message: inputMessage.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Tin nhắn tự động từ hệ thống
    const systemMessage = {
      id: (Date.now() + 1).toString(),
      sender: "admin",
      message: "Xin chào! Chúng tôi đã nhận được tin nhắn của bạn.",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Cập nhật tin nhắn mới từ người dùng và tin nhắn tự động từ hệ thống
    setMessages((prevMessages) => [...prevMessages, newMessage, systemMessage]);
    setInputMessage(""); // Reset input field
  };

  // Hàm render từng tin nhắn
  const renderMessage = ({ item }) => {
    const isAdmin = item.sender === "admin"; 
    return (
      <View style={[styles.messageContainer, isAdmin ? styles.adminMessage : styles.customerMessage]}>
        <Text style={styles.messageText}>{item.message}</Text>
        <Text style={styles.messageTime}>{item.time}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hỗ trợ khách hàng</Text>

      {/* Danh sách tin nhắn */}
      <FlatList
        data={messages} 
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        inverted={false} // Đảm bảo tin nhắn mới nhất xuất hiện dưới cùng
      />

      {/* Thanh nhập liệu */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          placeholder="Nhập tin nhắn của bạn..."
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
