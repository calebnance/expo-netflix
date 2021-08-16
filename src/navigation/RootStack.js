import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// tab naviation
import TabNavigation from './TabNavigation';

// screens
import ModalAddProfile from '../screens/ModalAddProfile';
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';

const Stack = createStackNavigator();

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="ModalAddProfile"
        component={ModalAddProfile}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalCastConnect"
        component={ModalCastConnect}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalManageProfiles"
        component={ModalManageProfiles}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalVideo"
        component={ModalVideo}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="ModalWebView"
        component={ModalWebView}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
