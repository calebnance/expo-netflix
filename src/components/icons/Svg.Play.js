import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgPlay = props => {
  const { active, size } = props;

  return (
    <Svg height={size} width={size} viewBox="0 0 24 24">
      <Svg.Path
        d="M19.5 11.2l-14-9c-.3-.2-.7-.2-1 0-.3.1-.5.4-.5.8v18c0 .4.2.7.5.9.2.1.3.1.5.1s.4-.1.5-.2l14-9c.3-.2.5-.5.5-.8s-.2-.7-.5-.8zM6 19.2V4.8L17.2 12 6 19.2z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

SvgPlay.defaultProps = {
  active: true,
  size: 24
};

SvgPlay.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgPlay;
