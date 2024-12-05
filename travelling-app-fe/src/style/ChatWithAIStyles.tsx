import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  messageContainer: {
    marginBottom: 10, // Khoảng cách giữa các tin nhắn
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    maxWidth: '80%',
  },
  customerMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end', // Canh bên phải cho tin nhắn khách hàng
    borderBottomRightRadius: 0,
  },
  adminMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start', // Canh bên trái cho tin nhắn admin
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  messageTime: {
    fontSize: 12,
    color: '#777',
    marginTop: 5, // Khoảng cách giữa tin nhắn và giờ
  },
  customerTime: {
    textAlign: 'right',
  },
  adminTime: {
    textAlign: 'left',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingVertical: 10,
  },
  inputField: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
