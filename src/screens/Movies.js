import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const Movies = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} show />

      <View style={gStyle.spacer96} />

      <View style={gStyle.pH4}>
        <Text style={gStyle.heading}>Movies</Text>
      </View>

      <Cast navigation={navigation} />
    </View>
  );
};

Movies.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Movies;
