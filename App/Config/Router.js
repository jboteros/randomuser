import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from '../Screens/Home';
import ContactDetails from '../Screens/ContactDetails';
import Favorites from '../Screens/Favorites';
import CustomTabNavigator from '../Components/CustomTabNavigator';

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {header: null},
  },
  ContactDetails: {
    screen: ContactDetails,
    navigationOptions: {header: null},
    tabBarOptions: {
      visible: false,
    },
  },
});

const FavoritesStackNavigator = createStackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {header: null},
  },
  ContactDetails: {
    screen: ContactDetails,
    navigationOptions: {header: null},
    tabBarOptions: {
      visible: false,
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
    },
    Favorites: {
      screen: FavoritesStackNavigator,
      tabBarOptions: {
        visible: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: props => <CustomTabNavigator {...props} />,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    lazy: true,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
    navigationOptions: ({navigation}) => ({
      tabBarOnPress: (scene, jumpToIndex) => {
        jumpToIndex(scene.index);
      },
    }),
  },
);

TabNavigator.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  console.log(navigation);
  if (navigation.state.routes[1].routeName === 'ContactDetails') {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

const AppContainer = createAppContainer(TabNavigator);

export default AppContainer;
