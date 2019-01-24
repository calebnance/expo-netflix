import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab screens
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';

// grab tabbed stacks
import TabNavigator from './TabNavigator';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalCastConnect: {
      screen: ModalCastConnect,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    ModalManageProfiles,
    ModalVideo,
    ModalWebView: {
      screen: ModalWebView,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
    transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
