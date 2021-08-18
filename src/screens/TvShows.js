import * as React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const TvShows = ({ navigation }) => (
  <View style={gStyle.container}>
    <HeaderHome navigation={navigation} show />

    <View style={gStyle.spacer12} />

    <View style={gStyle.pHHalf}>
      <Text style={gStyle.heading}>TV Shows</Text>
    </View>

    <Cast />
  </View>
);

TvShows.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default TvShows;
