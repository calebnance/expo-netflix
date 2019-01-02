import { createAppContainer, createStackNavigator } from 'react-navigation';

// grab screens
import ModalVideo from '../screens/ModalVideo';

// grab tabbed stacks
import TabNavigator from './TabNavigator';

// grab modal routes (dynamic transitions)
import ModalRoutes from './ModalRoutes';

const StackNavigator = createStackNavigator(
  {
    TabMain: {
      screen: TabNavigator
    },

    // Modals
    // /////////////////////////////////////////////////////////////////////////
    ModalVideo: {
      screen: ModalVideo
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'TabMain',
    transitionConfig: ModalRoutes
  }
);

const App = createAppContainer(StackNavigator);

export default App;
