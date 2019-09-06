import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../constants';

import SvgArrowRight from './icons/Svg.ArrowRight';

const TouchLineItem = props => {
  const { icon, iconSize, onPress, showArrow, showBorder, text } = props;

  const borderTopWidth = showBorder ? 2 : 0;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { borderTopWidth }]}
    >
      {icon && (
        <View style={styles.icon}>
          {React.cloneElement(icon, { size: iconSize })}
        </View>
      )}
      <Text style={styles.text}>{text}</Text>
      {showArrow && (
        <View style={styles.arrow}>
          <SvgArrowRight size={iconSize} />
        </View>
      )}
    </TouchableOpacity>
  );
};

TouchLineItem.defaultProps = {
  icon: null,
  iconSize: 20,
  showArrow: true,
  showBorder: false
};

TouchLineItem.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,

  // optional
  icon: PropTypes.element,
  iconSize: PropTypes.number,
  showArrow: PropTypes.bool,
  showBorder: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.black,
    borderTopWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  icon: {
    justifyContent: 'center',
    marginRight: 16
  },
  text: {
    color: colors.textGrey,
    flex: 2,
    fontFamily: fonts.regular,
    fontSize: 16
  },
  arrow: {
    justifyContent: 'center'
  }
});

export default TouchLineItem;
