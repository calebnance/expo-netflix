import React from 'react';
import { Svg } from 'expo';
import PropTypes from 'prop-types';
import { colors } from '../../api/constants';

const SvgSearch = props => {
  const { active, size } = props;

  return (
    <Svg height={size} width={size} viewBox="0 0 32 32">
      <Svg.Path
        d="M31.008 27.231l-7.58-6.447c-.784-.705-1.622-1.029-2.299-.998a11.954 11.954 0 0 0 2.87-7.787c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-.031.677.293 1.515.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007.23s.997-2.903-.23-4.007zM12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
        fill={active ? colors.white : colors.inactiveGrey}
      />
    </Svg>
  );
};

SvgSearch.defaultProps = {
  active: true,
  size: 24
};

SvgSearch.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgSearch;
