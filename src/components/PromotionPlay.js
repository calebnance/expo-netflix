import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../constants';

import SvgPlay from './icons/Svg.Play';

const PromotionPlay = ({ icon, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.container}
  >
    <View style={styles.icon}>
      {React.cloneElement(icon, { fill: colors.black })}
    </View>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

PromotionPlay.defaultProps = {
  icon: <SvgPlay />,
  text: 'Play'
};

PromotionPlay.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  icon: PropTypes.element,
  text: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8
  },
  text: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 18
  },
  icon: {
    justifyContent: 'center'
  }
});

export default PromotionPlay;
