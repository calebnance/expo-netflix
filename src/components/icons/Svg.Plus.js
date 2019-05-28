import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../constants';

const SvgPlus = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Svg.Path
      d="M19 11h-6V5c0-.6-.4-1-1-1s-1 .4-1 1v6H5c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1v-6h6c.6 0 1-.4 1-1s-.4-1-1-1z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgPlus.defaultProps = {
  active: true,
  size: 24
};

SvgPlus.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgPlus;
