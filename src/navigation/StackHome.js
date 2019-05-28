import React from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';
import { gStyle } from '../constants';

import HomeScreen from '../screens/Home';
import TvShowsScreen from '../screens/TvShows';
import MoviesScreen from '../screens/Movies';
import MyListScreen from '../screens/MyList';

import SvgHome from '../components/icons/Svg.Home';

const Icon = ({ focused }) => <SvgHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

const transitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

export default createStackNavigator(
  {
    HomeMain: {
      screen: HomeScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeTvShows: {
      screen: TvShowsScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMovies: {
      screen: MoviesScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMyList: {
      screen: MyListScreen,
      navigationOptions: {
        gesturesEnabled: false,
        headerStyle: gStyle.navHeaderStyle
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon
    },
    transitionConfig
  }
);
