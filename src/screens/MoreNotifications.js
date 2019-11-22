import React from 'react';
import { View } from 'react-native';
import { colors, gStyle } from '../constants';

import Header from '../components/Header';

const MoreNotifications = () => (
  <View style={gStyle.container}>
    <Header bg={colors.headerBarBg} showBack title="Notifications" />
  </View>
);

export default MoreNotifications;
