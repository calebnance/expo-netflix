import * as React from 'react';
import { View } from 'react-native';
import { colors, gStyle } from '../constants';

// components
import Header from '../components/Header';

function MoreNotifications() {
  return (
    <View style={gStyle.container}>
      <Header bg={colors.headerBarBg} showBack title="Notifications" />
    </View>
  );
}

export default MoreNotifications;
