import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const TvShows = () => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>TV Shows</Text>
    </View>

    <Cast />
  </View>
);

export default TvShows;
