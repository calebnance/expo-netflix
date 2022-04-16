import * as React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { func } from './src/constants';

// main navigation stack
import RootStack from './src/navigation/RootStack';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // pre-loading assets/fonts?
  if (isLoading) {
    return (
      <AppLoading
        onError={() => {
          // console.warn
        }}
        onFinish={() => setIsLoading(false)}
        startAsync={func.loadAssetsAsync}
      />
    );
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="light-content" />

      <RootStack />
    </React.Fragment>
  );
};

export default App;
