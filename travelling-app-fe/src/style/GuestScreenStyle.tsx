import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  selectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: 'White',
  },
  selectionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#a0a0a0',
  },
  selectionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  guestContainer: {
    marginBottom: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: 'black',
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  guestLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  guestControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 20,
  },
  guestCount: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    color: '#000',
  },
   footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#e0e0e0',
    marginTop: 'auto', 
    paddingTop: 20,
  },
  searchButton: {
    marginBottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BCD4',
    paddingVertical: 10,
    borderRadius: 8,
    width: '30%',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  clearButton: {
    marginBottom: 30,
    justifyContent: 'center',
    width: '40%',
  },
  clearButtonText: {
    color: '#9E9E9E',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default styles;
