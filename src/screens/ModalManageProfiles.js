import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Header from '../components/Header';

const ModalManageProfiles = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header close closeText="Close" navigation={navigation} showLogo />
    </View>
  );
};

ModalManageProfiles.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default ModalManageProfiles;
