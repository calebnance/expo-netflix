import React from 'react';
import { Text, View } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import { colors, gStyle } from '../api/constants';

import Header from '../components/Header';

// console.log(Constants.platform);

const AppSettings = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.headerBarBg}
        navigation={navigation}
        showBack
        title="App Settings"
      />
    </View>
  );
};

AppSettings.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default AppSettings;
