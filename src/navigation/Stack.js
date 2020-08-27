import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// grab screens
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalAddProfile from '../screens/ModalAddProfile';
import ModalManageProfiles from '../screens/ModalManageProfiles';
import ModalVideo from '../screens/ModalVideo';
import ModalWebView from '../screens/ModalWebView';

// grab tabbed stacks
import TabNavigator from './TabNavigator';

const StackNavigator = createStackNavigator(
  {
    Main: {
      screen: TabNavigator
    },

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalCastConnect,
    ModalAddProfile,
    ModalManageProfiles,
    ModalVideo,
    ModalWebView
  },
  {
    headerMode: 'none',
    initialRouteName: 'Main',
    mode: 'modal'
  }
);

const App = createAppContainer(StackNavigator);

export default App;
