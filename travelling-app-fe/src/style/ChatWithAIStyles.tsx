import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  messagesContainer: {
    paddingBottom: 100,  // Adjust padding to ensure input field is visible when keyboard is up
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
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1, // Ensure input area is above messages
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
  adminMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e0f7fa",
  },
  customerMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#c8e6c9",
  },
  chatContainer: {
    flexGrow: 1,
    padding: 10,
  },
});

export default styles;


