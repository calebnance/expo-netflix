import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, images } from '../api/constants';

const Header = props => {
  const { bg, navigation, showLogo, title } = props;

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      {showLogo && (
        <Image source={images.netflix} style={{ height: 35, width: 20 }} />
      )}

      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
    </View>
  );
};

Header.defaultProps = {
  bg: colors.black,
  showLogo: true,
  title: null
};

Header.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  bg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showLogo: PropTypes.bool,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30
  },
  containerTitle: {
    flex: 1,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.heading,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: 'center'
  }
});

export default Header;
