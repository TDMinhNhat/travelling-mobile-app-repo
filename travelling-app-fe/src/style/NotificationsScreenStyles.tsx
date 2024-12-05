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
    marginBottom: 16,
  },
  notificationsList: {
    paddingBottom: 16,
  },
  notificationCard: {
    backgroundColor: '#d1c0b8',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  notificationDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  notificationDate: {
    fontSize: 12,
    color: '#6e6e6e',
  },
});

export default styles;
