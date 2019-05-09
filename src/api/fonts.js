import { Platform } from 'react-native';

export default {
  bold: Platform.select({
    ios: 'HelveticaNeue-Bold',
    android: 'sans-serif-condensed'
  }),
  light: Platform.select({
    ios: 'HelveticaNeue-Light',
    android: 'sans-serif-light'
  }),
  medium: Platform.select({
    ios: 'HelveticaNeue-Medium',
    android: 'sans-serif-medium'
  }),
  regular: Platform.select({
    ios: 'HelveticaNeue',
    android: 'sans-serif'
  })
};
