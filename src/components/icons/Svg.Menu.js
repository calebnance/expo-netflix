import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../constants';

const SvgMenu = ({ active, size }) => (
  <Svg height={size} width={size} viewBox="0 0 24 24">
    <Path
      d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1zM21 17H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1z"
      fill={active ? colors.white : colors.inactiveGrey}
    />
  </Svg>
);

SvgMenu.defaultProps = {
  active: true,
  size: 24
};

SvgMenu.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgMenu;
