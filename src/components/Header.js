import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, images } from '../api/constants';

const Header = props => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image source={images.netflix} style={{ height: 35, width: 20 }} />
    </View>
  );
};

Header.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30
  }
});

export default Header;
