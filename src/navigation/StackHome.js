import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';
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
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMovies: {
      screen: MoviesScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle
      }
    },
    HomeMyList: {
      screen: MyListScreen,
      navigationOptions: {
        headerStyle: gStyle.navHeaderStyle
      }
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: Icon
    }
  }
);
