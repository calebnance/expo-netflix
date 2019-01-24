import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, gStyle } from '../api/constants';

import Header from '../components/Header';

const MoreMyList = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.headerBarBg}
        navigation={navigation}
        showBack
        title="My List"
      />
    </View>
  );
};

MoreMyList.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MoreMyList;
