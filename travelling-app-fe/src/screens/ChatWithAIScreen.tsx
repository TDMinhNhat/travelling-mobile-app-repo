import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ChatWithAIScreen = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I assist you today?', sender: 'AI' },
  ]);
  const [message, setMessage] = useState('');

  // Function to handle sending messages
  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: `${prevMessages.length + 1}`, text: message, sender: 'User' },
        { id: `${prevMessages.length + 2}`, text: 'AI is typing...', sender: 'AI' },
      ]);
      setMessage('');
      
      // Simulate AI response after a short delay
      setTimeout(() => {
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1].text = "I'm here to help you with any questions!";
          return updatedMessages;
        });
      }, 1000); // Delay for AI response
    }
  };

  return (
    <View style={styles.container}>
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.chatContainer}>
          <FlatList
            data={messages}
            renderItem={({ item }) => (
              <View
                style={[
                  styles.messageContainer,
                  item.sender === 'User' ? styles.userMessage : styles.aiMessage,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    item.sender === 'User' ? styles.userMessageText : styles.aiMessageText,
                  ]}
                >
                  {item.text}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 100 }} // Add padding to make sure the input is not covered
          />

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
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
              <Ionicons name="send" size={24} style={styles.sendIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-end',
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  messageContainer: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 12,
    maxWidth: '75%',
  },
  userMessage: {
    backgroundColor: '#4CAF50',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 0, // Adjust message bubble corners
  },
  aiMessage: {
    backgroundColor: '#E1E1E1',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 0, // Adjust message bubble corners
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  userMessageText: {
    color: '#fff',
  },
  aiMessageText: {
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: 'white',
  },
  textInput: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 20,
    fontSize: 16,
    marginRight: 10,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
  sendIcon: {
    color: 'white',
  },
});

export default ChatWithAIScreen;
