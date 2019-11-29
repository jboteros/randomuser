import {Dimensions, Platform} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');
const isXSeriesIphone = ifIphoneX; //DeviceTypeHelper.isXSeriesIphone();

const addFooter = Platform.OS === 'ios' && isXSeriesIphone ? 20 : 0;
const addHeader = Platform.OS === 'ios' ? (isXSeriesIphone ? 40 : 20) : 0;

const metrics = {
  header: 70 + addHeader,
  addHeader,
  footerMenu: 50 + addFooter,
  addFooter,

  borderRadius: 10,
  textInBr: 10,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,

  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  buttonRadius: 4,

  images: {
    small: 25,
    medium: 50,
    large: 80,
    logo: 120,
  },
};

export default metrics;
