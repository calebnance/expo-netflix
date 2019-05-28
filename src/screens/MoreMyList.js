import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, gStyle } from '../constants';

import Header from '../components/Header';

const MoreMyList = ({ navigation }) => (
  <View style={gStyle.container}>
    <Header
      bg={colors.headerBarBg}
      navigation={navigation}
      showBack
      title="My List"
    />
  </View>
);

MoreMyList.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MoreMyList;
