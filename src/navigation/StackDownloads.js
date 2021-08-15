import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import DownloadsScreen from '../screens/Downloads';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Downloads"
      component={DownloadsScreen}
      options={{
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
