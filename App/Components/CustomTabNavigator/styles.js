import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    backgroundColor: '#F43556',
    flexDirection: 'row',
  },
  tab: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  textInactive: {
    fontSize: 16,
    color: '#e0e0e0',
  },
  icon: {
    color: 'white',
  },
  iconInactive: {
    color: '#e0e0e0',
  },
});
