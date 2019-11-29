import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default styles = StyleSheet.create({
  container: {
    height: 40,
    marginVertical: 5,
    borderRadius: Metrics.textInBr,
    alignSelf: 'center',
    //position: "absolute",
    width: '100%',
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
