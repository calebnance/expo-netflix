import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';
import TvShowsScreen from '../screens/TvShows';
import MoviesScreen from '../screens/Movies';
import MyListScreen from '../screens/MyList';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="TvShows"
      component={TvShowsScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="Movies"
      component={MoviesScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
    <Stack.Screen
      name="MyList"
      component={MyListScreen}
      options={{
        animationEnabled: false,
        headerShown: false
      }}
    />
  </Stack.Navigator>
);
