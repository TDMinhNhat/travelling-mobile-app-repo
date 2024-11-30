import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F5F8', 
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20, 
  },
  successImage: {
    width: 80,  
    height: 80,
    resizeMode: 'contain',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    alignItems: 'center',  
  },
  title: {
    fontSize: 30 ,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: '100%', 
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  paymentMethod: {
    color: '#000', 
  },
  pdfButton: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
  },
  pdfButtonText: {
    fontSize: 16,
    color: '#555',
  },
  viewBookingButton: {
    backgroundColor: '#00BCD4', 
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30 ,
  },
  viewBookingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
