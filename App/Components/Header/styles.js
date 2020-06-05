import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';
export default StyleSheet.create({
  container: {
    paddingTop: Metrics.addHeader,
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    backgroundColor: Colors.accentColor,
  },
  profile: {
    paddingHorizontal: Metrics.screenWidth * 0.075,
    height: Metrics.header,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  layout: {
    width: '100%',
    height: 35,
    paddingHorizontal: Metrics.screenWidth * 0.075,
    backgroundColor: Colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    borderWidth: 2,
    borderColor: Colors.accentMask(1.0),
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2,
  },
  layoutController: {
    width: 65,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
