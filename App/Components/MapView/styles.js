import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
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
  mapContainer: {
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    overflow: 'hidden',
    borderRadius: Metrics.borderRadius,
    marginVertical: 10,
    height: 200,
  },
});
