import {StyleSheet} from 'react-native';
import {Metrics, Colors} from '../../Themes';

export default StyleSheet.create({
  item: {
    height: 80,
    marginVertical: 5,
    borderRadius: Metrics.textInBr,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    //ali: "absolute",
    width: '95%',
    backgroundColor: Colors.textInputBg,
    paddingHorizontal: 10,
  },
  image: {
    width: Metrics.images.medium,
    height: Metrics.images.medium,
    borderRadius: Metrics.images.medium / 2,
  },
  textContainer: {
    marginHorizontal: 10,
  },
});
