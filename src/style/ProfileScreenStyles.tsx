import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
  },
  avatarContainer: {
    alignItems: 'center', 
    marginBottom: 10,
  },
  avatarImage: {
    width: 100, 
    height: 100, 
    borderRadius: 50, 
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
   userInfoContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  userFullName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  userUsername: {
    fontSize: 14,
    color: '#666',
  },
  notificationBadge: {
    backgroundColor: '#8B5C5C',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
  },
});

export default styles;
