import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = {
  test: {
    marginTop: Metrics.screenWidth * 0.22,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: Colors.light,
    fontFamily: Fonts.type.bold,
  },
};

export default ApplicationStyles;
