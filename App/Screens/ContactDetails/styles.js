import {Metrics, Colors, Fonts} from '../../Themes';

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
  containerItems: {
    flex: 1,
    marginTop: Metrics.header,
    paddingBottom: 10,
    alignItems: 'center',
  },

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

  locationContainer: {flex: 0, justifyContent: 'center'},
  navigationIcon: {width: 15, height: 15, resizeMode: 'contain'},
  iconLocation: {
    width: 40,
    height: 40,
    right: 5,

    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCity: {
    width: '100%',
    flexDirection: 'column',
  },
  containerCites: {
    flex: 0,
    width: '100%',
    // height: 100,
  },
  itemCity: {
    width: '100%',
    flex: 0,
    backgroundColor: Colors.light,
    borderBottomWidth: 0.5,
    padding: 2.5,
    borderBottomColor: Colors.dark,
  },

  imageResto: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  itemResto: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 5,
    flex: 0,
    borderRadius: 10,
    backgroundColor: Colors.light,
    borderBottomWidth: 0.5,
    padding: 2.5,
    borderBottomColor: Colors.dark,
    flexDirection: 'row',
  },
  headerContainer: {
    flex: 0,
    alignSelf: 'center',
    marginTop: Metrics.addHeader + 20,
    width: Metrics.screenWidth * 0.9,
    backgroundColor: Colors.dark,
    padding: 10,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,

    width: Metrics.screenWidth,
  },

  textContainerResto: {
    flex: 1,
    padding: 10,
  },
  contentList: {
    flex: 1,
    width: Metrics.screenWidth,
  },
  footerContainer: {
    flex: 0,
    flexDirection: 'row',
    width: Metrics.screenWidth,

    justifyContent: 'flex-end',
    alignItems: 'center',
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
  logo: {
    width: Metrics.screenWidth * 0.4,
    height: Metrics.screenWidth * 0.4,
    resizeMode: 'contain',
    marginTop: 10,
  },
  selectorContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },

  welcome: {
    fontFamily: Fonts.type.base,
    color: Colors.dark,
    marginVertical: 10,
    marginHorizontal: 20,
    fontSize: Fonts.size.h6,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  descriptorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectorText: {
    marginHorizontal: 20,
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  btnText: {
    fontFamily: Fonts.type.bold,
    color: Colors.dark,
    fontSize: Fonts.size.medium,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  btnRegisterLogin: {
    flex: 0,
    width: Metrics.screenWidth / 2,
    height: 40,
    marginVertical: Metrics.addFooter * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    flex: 0,
    height: 60,
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    borderRadius: Metrics.borderRadius,
    marginVertical: Metrics.addFooter * 2,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accentColor,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,

    elevation: 5,
  },
  linearGradient: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
