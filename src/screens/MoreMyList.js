import * as React from 'react';
import { View } from 'react-native';
import { colors, gStyle } from '../constants';

// components
import Header from '../components/Header';

function MoreMyList() {
  return (
    <View style={gStyle.container}>
      <Header bg={colors.headerBarBg} showBack title="My List" />
    </View>
  );
}

export default MoreMyList;
