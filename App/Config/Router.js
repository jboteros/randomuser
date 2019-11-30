import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../Screens/Home';
import ContactDetails from '../Screens/ContactDetails';
import storybookView from '../../storybookView';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    ContactDetails: {
      screen: ContactDetails,
    },
    storybookView: {
      screen: storybookView,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false,
      },
      tabBarVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
