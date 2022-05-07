import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import DownloadsScreen from '../screens/Downloads';

const Stack = createNativeStackNavigator();

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
