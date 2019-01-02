import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import MoreScreen from '../screens/More';
import SvgHome from '../components/icons/Svg.Home';

const Icon = ({ focused }) => <SvgHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    MoreMain: {
      screen: MoreScreen,
      navigationOptions
    }
  },
  {
    navigationOptions: {
      tabBarLabel: 'More',
      tabBarIcon: Icon
    }
  }
);
