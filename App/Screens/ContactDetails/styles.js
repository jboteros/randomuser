import {Metrics, Colors} from '../../Themes';

export default {
  container: {
    flex: 1,
    width: Metrics.screenWidth,

    justifyContent: 'center',
    alignItems: 'center',
  },
  itemBasic: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
  },
  ovalContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  ovalItem: {
    alignSelf: 'center',
    justifyContent: 'space-between',
    width: Metrics.screenWidth * 0.6,
    borderRadius: 40,
    height: 80,
    backgroundColor: Colors.accentMask(0.5),
    position: 'absolute',
    flexDirection: 'row',
  },
  image: {
    zIndex: 1000,
    width: Metrics.screenWidth,
    height: Metrics.screenWidth * 0.8,
    backgroundColor: Colors.light,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBg: {
    width: Metrics.screenWidth,
    height: '100%',
    backgroundColor: Colors.dark,
    position: 'absolute',
  },
  imageSmall: {
    marginVertical: 10,
    width: Metrics.images.logo,
    height: Metrics.images.logo,
    borderRadius: Metrics.images.logo,
    borderWidth: 5,
    borderColor: Colors.accentMask(1.0),
    backgroundColor: Colors.accentMask(1.0),
  },
  marginScroll: {height: Metrics.footerMenu * 2},
  itemsContact: {paddingTop: 60, zIndex: 100},
  ctaContainer: {
    // width: 200,
    height: 80,
    position: 'absolute',

    bottom: -40,
    flexDirection: 'row',
  },
  ctaItem: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light,
  },
  contentList: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  loading: {
    backgroundColor: Colors.accentMask(0.5),
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.screenHeight,
    width: Metrics.screenWidth,
    zIndex: 5000,
  },
};
