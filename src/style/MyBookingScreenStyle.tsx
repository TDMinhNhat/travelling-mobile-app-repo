import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  categoryContainer: {
    marginBottom: 32,
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  tripsList: {
    paddingBottom: 16,
  },
  tripCard: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
  },
  tripImage: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  tripDetails: {
    flex: 1,
    padding: 10,
  },
  tripTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  tripLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  tripDetailsText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  tripPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#333',
  },
});

export default styles;
