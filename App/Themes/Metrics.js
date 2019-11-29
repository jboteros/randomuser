import {Dimensions, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = ifIphoneX; //DeviceTypeHelper.isXSeriesIphone();

const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 20 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

const metrics = {
  videoExpanded: (1080 / 1942) * width,
  bigImage: (1200 / 1080) * width,
  // middleImage: (600 / 1080) * width,
  middleImage: wth => (600 / 1080) * wth,
  smallImage: wth => (400 / 1080) * wth,

  videoCollapsed: 80,
  header: 60 + addHeader,
  addHeader,
  footerMenu: 50 + addFooter,
  itemMenu: 40,
  addFooter,
  filter: 40,
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  borderRadius: 5,
  textInBr: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  blurRadius: Platform.OS === 'ios' ? 20 : 10,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200,
  },
};

export default metrics;
