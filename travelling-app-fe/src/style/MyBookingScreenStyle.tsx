import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  noUpcomingTrips: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  noUpcomingTripsText: {
    fontSize: 16,
    color: '#666',
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
    width: 100,
    height: 100,
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
  },
});

export default styles;
