import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const Movies = ({ navigation }) => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>Movies</Text>
    </View>

    <Cast navigation={navigation} />
  </View>
);

Movies.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Movies;
