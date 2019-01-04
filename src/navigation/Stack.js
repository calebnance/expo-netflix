import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab screens
import ModalCastConnect from '../screens/ModalCastConnect';
import ModalVideo from '../screens/ModalVideo';

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
      screen: ModalCastConnect
    },
    ModalVideo: {
      screen: ModalVideo
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
