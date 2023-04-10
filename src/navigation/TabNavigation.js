import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors, gStyle } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

// icons
import SvgDownloads from '../icons/Svg.Downloads';
import SvgHome from '../icons/Svg.Home';
import SvgMenu from '../icons/Svg.Menu';
import SvgSearch from '../icons/Svg.Search';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.inactiveGrey,
        tabBarIcon: ({ color }) => {
          let icon = <SvgHome fill={color} />;

          if (route.name === 'StackSearch') {
            icon = <SvgSearch fill={color} />;
          } else if (route.name === 'StackDownloads') {
            icon = <SvgDownloads fill={color} />;
          } else if (route.name === 'StackMore') {
            icon = <SvgMenu fill={color} />;
          }

          return icon;
        },
        tabBarStyle: gStyle.navTabStyle
      })}
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
}

export default TabNavigation;
