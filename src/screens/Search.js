import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderSearch from '../components/HeaderSearch';

const Search = ({ navigation }) => (
  <React.Fragment>
    <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
      <View style={gStyle.container}>
        <HeaderSearch />
      </View>
    </TouchableWithoutFeedback>

    <Cast navigation={navigation} />
  </React.Fragment>
);

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Search;
