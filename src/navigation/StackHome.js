import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import HomeScreen from '../screens/Home';
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
      navigationOptions
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
