import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    position: 'relative',
  },
  
  avatarImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    backgroundColor: '#f0f0f0', 
  },

  userInfoContainer: {
    position: 'absolute',  // Để phần tên và tên đăng nhập nằm dưới avatar
    bottom: -50,  // Điều chỉnh khoảng cách dưới avatar nếu cần
    alignItems: 'center',  // Căn giữa nội dung
  },

  userFullName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  userUsername: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },

  infoContainer: {
    marginTop: 50,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'left',
  },

  infoText: {
    fontSize: 16,
    flex: 2,
    textAlign: 'right',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    width: '70%',
    fontSize: 16,
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  radioButtonLabel: {
    fontSize: 16,
    marginLeft: 8,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 5,
  },
});

export default styles;
