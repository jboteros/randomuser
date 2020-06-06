import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    paddingTop: Metrics.addHeader + 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#F43556',
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
