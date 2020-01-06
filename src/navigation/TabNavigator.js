import { createBottomTabNavigator } from 'react-navigation-tabs';
import { colors } from '../constants';

// grabs stacks
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import StackDownloads from './StackDownloads';
import StackMore from './StackMore';

export default createBottomTabNavigator(
  {
    StackHome,
    StackSearch,
    StackDownloads,
    StackMore
  },
  {
    initialRouteName: 'StackHome',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.inactiveGrey,
      style: {
        backgroundColor: colors.black,
        borderTopWidth: 0
      }
    }
  }
);
