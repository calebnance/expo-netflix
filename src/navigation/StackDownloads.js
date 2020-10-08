import * as React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import navigationOptions from './defaultOptions';

// screens
import DownloadsScreen from '../screens/Downloads';

// icons
import SvgDownloads from '../components/icons/Svg.Downloads';

const Icon = ({ focused }) => <SvgDownloads active={focused} />;

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
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'Downloads',
      tabBarIcon: Icon
    }
  }
);
