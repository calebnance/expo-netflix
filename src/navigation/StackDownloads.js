import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation';

import navigationOptions from './defaultOptions';

import DownloadsScreen from '../screens/Downloads';
import SvgHome from '../components/icons/Svg.Home';

const Icon = ({ focused }) => <SvgHome active={focused} />;

Icon.propTypes = {
  // required
  focused: PropTypes.bool.isRequired
};

export default createStackNavigator(
  {
    DownloadsMain: {
      screen: DownloadsScreen,
      navigationOptions
    }
  },
  {
    navigationOptions: {
      tabBarLabel: 'Downloads',
      tabBarIcon: Icon
    }
  }
);

// example of navigation state manipulation
// StackDownloads.navigationOptions = ({ navigation }) => {
//   const { index } = navigation.state;
//
//   return {
//     tabBarLabel: 'Downloads',
//     tabBarIcon: Icon
//   };
// };
