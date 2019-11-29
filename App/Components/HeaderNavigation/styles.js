import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    height: Metrics.header,
    paddingTop: Metrics.addHeader,
    justifyContent: 'space-between',
    borderRadius: Metrics.borderRadius,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',

    paddingHorizontal: Metrics.screenWidth * 0.075,
  },
  image: {
    width: Metrics.images.small,
    height: Metrics.images.small,
    tintColor: Colors.light,
  },
});
