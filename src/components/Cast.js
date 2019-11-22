import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors } from '../constants';

// icons
import SvgCast from './icons/Svg.Cast';

const Cast = ({ navigation }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={() => navigation.navigate('ModalCastConnect')}
    style={styles.container}
  >
    <SvgCast />
  </TouchableOpacity>
);

Cast.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.castGrey,
    borderRadius: 26,
    bottom: 16,
    height: 52,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    width: 52
  }
});

export default withNavigation(Cast);
