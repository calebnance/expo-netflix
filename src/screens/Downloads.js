import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, gStyle } from '../api/constants';

import Cast from '../components/Cast';
import Header from '../components/Header';

const Downloads = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.downloadsHeaderBg}
        navigation={navigation}
        showLogo={false}
        title="My Downloads"
      />

      <Cast navigation={navigation} />
    </View>
  );
};

Downloads.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Downloads;
