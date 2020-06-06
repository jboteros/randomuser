import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    height: Metrics.header,
    paddingTop: Metrics.addHeader,
    justifyContent: 'space-between',
    //  borderRadius: Metrics.borderRadius,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.accentColor,
    paddingHorizontal: Metrics.screenWidth * 0.075,
  },
  image: {
    borderWidth: 2,
    borderColor: Colors.accentMask(1.0),
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2,
  },
});
