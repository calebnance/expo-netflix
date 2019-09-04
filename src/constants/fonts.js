import { Platform } from 'react-native';

const bold = Platform.select({
  android: 'sans-serif-condensed',
  ios: 'HelveticaNeue-Bold',
  web: 'Helvetica Neue'
});

const light = Platform.select({
  android: 'sans-serif-light',
  ios: 'HelveticaNeue-Light',
  web: 'Helvetica Neue'
});

const medium = Platform.select({
  android: 'sans-serif-medium',
  ios: 'HelveticaNeue-Medium',
  web: 'Helvetica Neue'
});

const regular = Platform.select({
  android: 'sans-serif',
  ios: 'HelveticaNeue',
  web: 'Helvetica Neue'
});

export default {
  bold,
  light,
  medium,
  regular
};
