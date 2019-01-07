import { Platform } from 'react-native';

const isiOS = Platform.OS === 'ios';

export default {
  bold: isiOS ? 'HelveticaNeue-Bold' : 'sans-serif-condensed',
  light: isiOS ? 'HelveticaNeue-Light' : 'sans-serif-light',
  medium: isiOS ? 'HelveticaNeue-Medium' : 'sans-serif-medium',
  regular: isiOS ? 'HelveticaNeue' : 'sans-serif'
};
