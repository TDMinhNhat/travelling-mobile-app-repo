import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'left',  
    color: '#000',
  },
  label: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 10,
    textAlign: 'left',
    color: '#333',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryPickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    backgroundColor: '#F0F0F0',
    marginRight: 10, // Khoảng cách giữa picker và input
  },
  chevronIcon: {
    marginLeft: 5,
  },
  phoneInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#000',
  },
  button: {
    backgroundColor: '#00C4CC', // Màu nền nút xanh tươi
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // Màu chữ trắng đảm bảo tương phản với nền xanh
    fontSize: 18,
    fontWeight: 'bold',
  },  
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 16,
    color: '#888',
  },
  socialButtonApple: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },

  socialButtonTextApple: {
    marginLeft: 10,
    fontSize: 18,
  }, 
  socialButtonFacebook: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  socialButtonTextFacebook: {
    color:'blue',
    marginLeft: 10,
    fontSize: 18,
  },
  socialButtonGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  socialButtonTextGoogle: {
    color:'red',
    marginLeft: 10,
    fontSize: 18,
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 10,
    color: '#888',
  },
  link: {
    color: '#888',
    textDecorationLine: 'underline',
  },
  Already: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 16,
    color: '#888',
  },
  loginLink: {
    textAlign: 'center',
    marginTop: 90,
    fontSize: 16,
    color: '#00ADEF',
    textDecorationLine: 'underline',
  },
});

export default styles;
