import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import MoreScreen from '../screens/More';
import MoreAppSettingsScreen from '../screens/MoreAppSettings';
import MoreNotificationsScreen from '../screens/MoreNotifications';
import MoreMyListScreen from '../screens/MoreMyList';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="More"
      component={MoreScreen}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="MoreAppSettings"
      component={MoreAppSettingsScreen}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="MoreNotifications"
      component={MoreNotificationsScreen}
      options={{
        headerShown: false
      }}
    />
    <Stack.Screen
      name="MoreMyList"
      component={MoreMyListScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
