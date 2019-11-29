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
    borderWidth: 2,
    borderColor: Colors.accentColorLight,
    borderRadius: Metrics.images.medium / 2,
  },
  textContainer: {
    marginHorizontal: 10,
  },

  iconsContainer: {
    flex: 1,
    height: 60,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconsItem: {marginHorizontal: 10},
});
