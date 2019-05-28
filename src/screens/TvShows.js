import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const TvShows = ({ navigation }) => (
  <View style={gStyle.container}>
    <HeaderHome navigation={navigation} show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>TV Shows</Text>
    </View>

    <Cast navigation={navigation} />
  </View>
);

TvShows.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default TvShows;
