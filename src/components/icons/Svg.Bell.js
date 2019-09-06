import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgBell = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M14.2 20.1c-.5-.3-1.1-.1-1.4.4s-.9.6-1.4.4c-.2-.1-.3-.2-.4-.4-.3-.5-.9-.6-1.4-.4-.5.3-.6.9-.4 1.4.3.5.6.8 1.1 1.1s1 .4 1.5.4c1 0 2-.5 2.6-1.5.5-.5.3-1.1-.2-1.4zM22 16c-1.1 0-2-.9-2-2V9c0-4.4-3.6-8-8-8S4 4.6 4 9v5c0 1.1-.9 2-2 2-.6 0-1 .4-1 1s.4 1 1 1h20c.6 0 1-.4 1-1s-.4-1-1-1zM5.5 16c.3-.6.5-1.3.5-2V9c0-3.3 2.7-6 6-6s6 2.7 6 6v5c0 .7.2 1.4.5 2h-13z"
      fill={active ? colors.white : colors.textGrey}
    />
  </Svg>
);

SvgBell.defaultProps = {
  active: false,
  size: 24
};

SvgBell.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgBell;
