import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { colors, gStyle } from '../constants';

import Header from '../components/Header';

const MoreNotifications = ({ navigation }) => (
  <View style={gStyle.container}>
    <Header
      bg={colors.headerBarBg}
      navigation={navigation}
      showBack
      title="Notifications"
    />
  </View>
);

MoreNotifications.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MoreNotifications;
