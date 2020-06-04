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
    backgroundColor: '#182D84',
    paddingHorizontal: Metrics.screenWidth * 0.075,
  },
  image: {
    borderWidth: 4,
    borderColor: '#43B9E3',
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    //paddingLeft: '13%',
    height: 50,
  }
});
