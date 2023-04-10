import * as React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderSearch from '../components/HeaderSearch';

function Search() {
  return (
    <React.Fragment>
      <TouchableWithoutFeedback accessible={false} onPress={Keyboard.dismiss}>
        <View style={gStyle.container}>
          <HeaderSearch />
        </View>
      </TouchableWithoutFeedback>

      <Cast />
    </React.Fragment>
  );
}

export default Search;
