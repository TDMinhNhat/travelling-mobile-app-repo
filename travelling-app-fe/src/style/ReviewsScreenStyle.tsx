import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  reviewsCount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  ratingOverview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f7f7f7',
    borderRadius: 10,
    marginBottom: 10,
  },
  rating: {
    alignItems: 'flex-start',
  },
  ratingNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  starsRow: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  ratingBreakdown: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  barBackground: {
    backgroundColor: '#eee',
    height: 10,
    width: 150,
    borderRadius: 5,
    marginLeft: 10,
  },
  barFill: {
    backgroundColor: '#f1c40f',
    height: '100%',
    borderRadius: 5,
  },
  reviewCard: {
    flexDirection: 'column', 
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 5,
    borderColor: '#eee',
    borderWidth: 1,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 25,
    marginRight: 10, 
  },
  reviewContent: {
    flexDirection: 'column',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 5,
  },
  reviewerName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  reviewTime: {
    color: '#999',
  },
  comment: {
    marginTop: 5, 
    color: '#555',
  },
});

export default styles;
