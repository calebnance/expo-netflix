import * as React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

function TvShows() {
  return (
    <View style={gStyle.container}>
      <HeaderHome show />

      <View style={gStyle.spacer12} />

      <View style={gStyle.pHHalf}>
        <Text style={gStyle.heading}>TV Shows</Text>
      </View>

      <Cast />
    </View>
  );
}

export default TvShows;
