import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import HeaderSearch from '../components/HeaderSearch';

const Search = props => {
  const { navigation } = props;

  return (
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View style={gStyle.container}>
        <HeaderSearch />
      </View>
    </TouchableWithoutFeedback>
  );
};

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Search;
