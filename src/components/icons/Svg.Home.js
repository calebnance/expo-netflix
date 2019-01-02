import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgHome = props => {
  const { active, size } = props;

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Svg.Path
        d="M32 18.451L16 6.031 0 18.451v-5.064L16 .967l16 12.42zM28 18v12h-8v-8h-8v8H4V18l12-9z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

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
