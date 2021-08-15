import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

// icons
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let icon = <SvgHome fill={color} />;

        if (route.name === 'StackMore') {
          icon = <SvgMenu fill={color} />;
        }

        return icon;
      }
    })}
    tabBarOptions={{
      activeTintColor: colors.itemActive,
      inactiveTintColor: colors.itemInactive,
      style: gStyle.navTabStyle
    }}
  >
    <Tab.Screen
      name="StackHome"
      component={StackHome}
      options={{
        tabBarLabel: 'Home'
      }}
    />
    <Tab.Screen
      name="StackSearch"
      component={StackSearch}
      options={{
        tabBarLabel: 'Search'
      }}
    />
    <Tab.Screen
      name="StackDownloads"
      component={StackDownloads}
      options={{
        tabBarLabel: 'Downloads'
      }}
    />
    <Tab.Screen
      name="StackMore"
      component={StackMore}
      options={{
        tabBarLabel: 'More'
      }}
    />
  </Tab.Navigator>
);
