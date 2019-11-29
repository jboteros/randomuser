import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    height: 80,
    marginVertical: 5,
    borderRadius: Metrics.textInBr,
    alignSelf: 'center',
    //position: "absolute",
    width: '95%',
    backgroundColor: Colors.textInputBg,
    paddingHorizontal: 10,
  },
  textInput: {
    width: Metrics.screenWidth * 0.8,
    height: 40,
    borderColor: 'transparent',
    borderWidth: 1,
  },
});
