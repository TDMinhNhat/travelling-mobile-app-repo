import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight
  },
 header: {
    marginBottom:10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',  
    position: 'relative',      
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',       
    flex: 1,                  
  },
  backIcon: {
    position: 'absolute',      
    left: 0,
  },
  sectionTitle: {
    fontSize: 22 ,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft:20,
    marginRight:20,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#686868',
  },
  facilityList: {
    marginLeft:20,
    marginRight:20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:10,        
  },
  facilityItem: {
    marginLeft:20,
    marginRight:20,
    marginBottom: 10,
    borderBottomWidth: 1,          
    borderBottomColor: '#E0E0E0',  
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom:10,
  },
  facilityText: {
    fontSize: 14,
    marginLeft: 10,
    color: '#686868',

  },
  subSectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  servicesSection: {
    borderBottomColor: '#dcdcdc',
    paddingBottom: 15,
    marginBottom: 10,              
  },
});

export default styles;
