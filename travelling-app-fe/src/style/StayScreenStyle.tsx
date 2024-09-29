import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  locationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#a0a0a0',
  },
  locationValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  dateContainer: {
    marginBottom: 10,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: 'black',
  },
  dateChoiceBar: {
    flexDirection: 'row',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
  },
  dateChoiceButtonActive: {
    flex: 1,
    backgroundColor: '#00BCD4',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8 ,
  },
  dateChoiceButton: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  dateChoiceTextActive: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  dateChoiceText: {
    color: '#a0a0a0',
    fontWeight: '600',
    textAlign: 'center',
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
  },
  arrowButtonLeft: {
    position: 'absolute',
    left: 0, 
  },
  arrowButtonRight: {
    position: 'absolute',
    right: 0, 
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 10,
  },
  daySelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  incrementButton: {
    borderColor: '#f0f0f0',
    width: 30,        
    height: 30,       
    borderRadius: 15, 
    borderWidth: 2,
    backgroundColor: 'white',
  },
  decrementButton: {
    borderColor: '#f0f0f0',
    width: 30,        
    height: 30,       
    borderRadius: 15, 
    borderWidth: 2,
    backgroundColor: 'white',
  },
  incrementDecrementText: {
    fontSize: 20,
    fontWeight: '600',
    bottom:2,
    left:6,
    color: '#a0a0a0',
  },
  dayCounter: {
    fontSize: 12,
    fontWeight: '600',
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: 'black',
    color: '#a0a0a0',
    borderRadius: 10,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    padding: 5,
    borderRadius: 8,
  },
  nextButton: {
    backgroundColor: '#B2EBF2',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
  },
  skipButtonText: {
    color: '#9E9E9E',
    fontWeight: '600',
  },
  nextButtonText: {
    color: '#00BCD4',
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  clearButton: {
    justifyContent: 'center',
    width: '40%',
  },
  clearButtonText: {
    color: '#9E9E9E',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  searchButton: {
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
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
});

export default styles;
