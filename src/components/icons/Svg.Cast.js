import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgCast = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M2.2 15.1c-.5-.1-1.1.3-1.2.8s.2 1.1.8 1.2c1.6.3 2.8 1.5 3.1 3.1.1.5.5.8 1 .8h.2c.5-.1.9-.6.8-1.2-.5-2.4-2.3-4.2-4.7-4.7zM20 3H4C2.3 3 1 4.3 1 6v2c0 .6.4 1 1 1s1-.4 1-1V6c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
    <Path
      d="M2.1 11.1c-.5-.1-1 .3-1.1.9-.1.5.3 1 .9 1.1 3.7.4 6.6 3.3 7.1 7.1 0 .4.4.8.9.8h.1c.5-.1.9-.6.9-1.1-.5-4.7-4.1-8.3-8.8-8.8zM1.3 19.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3s.5-.1.7-.3c.2-.2.3-.4.3-.7s-.1-.5-.3-.7c-.4-.4-1-.4-1.4 0z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgCast.defaultProps = {
  active: true,
  size: 24
};

SvgCast.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgCast;
