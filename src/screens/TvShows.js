import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const TvShows = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} show />
      <Cast navigation={navigation} />
    </View>
  );
};

TvShows.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default TvShows;
