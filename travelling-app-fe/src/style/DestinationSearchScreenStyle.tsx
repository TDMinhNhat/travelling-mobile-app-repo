import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  closeIcon: {
    position: 'absolute',
    top:20,
    right: 20,
    zIndex: 1, 
  },
  
 
  header: {
    marginTop:55,
    borderWidth: 1,
    borderColor: '#e0e0e0', 
    borderRadius: 8,
    padding: 20, 
    backgroundColor: '#fff', 
    marginBottom: 20, 
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#e0e0e0', 
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
  },
  destinationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  destinationItem: {
    alignItems: 'center',
    width: 120,
    marginRight: 15, // Thêm khoảng cách giữa các mục khi cuộn ngang
  },
  destinationImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  destinationText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  optionContainer: {
    marginBottom: 20,
    borderTopColor: '#e0e0e0',
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderWidth: 1, 
    borderColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 20,
  },
  optionText: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: '600',
    color: '#9E9E9E', 
  },
  optionDetail: {
    paddingRight:20,
    fontSize: 16,
    fontWeight: '600',
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