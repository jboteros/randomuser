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
    backgroundColor: Colors.soft,
    paddingHorizontal: 10,
  },
  mapContainer: {
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: Colors.light,
    borderRadius: Metrics.borderRadius,
    marginVertical: 10,
    height: 200,
  },
});
