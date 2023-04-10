import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../constants';

function SvgPlay({ active, fill, size }) {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? colors.white : colors.inactiveGrey;
  }

  return (
    <View style={styles.container}>
      <Svg
        height={size}
        width={size}
        overflow="visible"
        viewBox="0 0 590.74 460.5"
      >
        <Path d="M.5.866l459 265.004L.5 530.874z" fill={fillColor} />
      </Svg>
    </View>
  );
}

SvgPlay.defaultProps = {
  active: true,
  fill: null,
  size: 20
};

SvgPlay.propTypes = {
  // optional
  active: PropTypes.bool,
  fill: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  size: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 3
  }
});

export default React.memo(SvgPlay);
