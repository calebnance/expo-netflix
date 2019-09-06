import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgHome = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M21.6 8.2l-9-7c-.4-.3-.9-.3-1.2 0l-9 7c-.3.2-.4.5-.4.8v11c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-.3-.1-.6-.4-.8zM14 21h-4v-8h4v8zm6-1c0 .6-.4 1-1 1h-3v-9c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v9H5c-.6 0-1-.4-1-1V9.5l8-6.2 8 6.2V20z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgHome.defaultProps = {
  active: true,
  size: 24
};

SvgHome.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgHome;
