import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

function TouchText({ onPress, text, textStyle }) {
  return (
    <TouchableOpacity activeOpacity={gStyle.activeOpacity} onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
}

TouchText.defaultProps = {
  textStyle: {}
};

TouchText.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  textStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
};

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontFamily: fonts.medium
  }
});

export default TouchText;
