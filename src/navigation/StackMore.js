import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import navigationOptions from './defaultOptions';

import MoreScreen from '../screens/More';

import MoreAppSettingsScreen from '../screens/MoreAppSettings';
import MoreNotificationsScreen from '../screens/MoreNotifications';
import MoreMyListScreen from '../screens/MoreMyList';

import SvgMenu from '../components/icons/Svg.Menu';

const Icon = ({ focused }) => <SvgMenu active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    MoreMain: {
      screen: MoreScreen,
      navigationOptions
    },
    MoreAppSettingsScreen,
    MoreNotificationsScreen,
    MoreMyListScreen
  },
  {
    initialRouteName: 'MoreMain',
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: Icon
    }
  }
);
