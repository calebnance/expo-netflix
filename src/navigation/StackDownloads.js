import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import DownloadsScreen from '../screens/Downloads';

const Stack = createNativeStackNavigator();

function StackDownloads() {
  return (
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
}

export default StackDownloads;
