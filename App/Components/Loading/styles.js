import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: 'absolute',
    backgroundColor: Colors.accentMask(0.7),
  },
});
