import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, gStyle, images } from '../api/constants';

import Header from '../components/Header';

const ModalManageProfiles = props => {
  const { navigation } = props;

  return (
    <View style={[gStyle.container, { backgroundColor: colors.black }]}>
      <Header close closeText="Close" navigation={navigation} showLogo />

      <View style={styles.container}>
        <View style={styles.containerUser}>
          <Image source={images.robot} style={styles.avatar} />
          <Text style={[styles.username, styles.usernameActive]}>Caleb</Text>
        </View>
        <View style={styles.containerUser}>
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.username}>Kim</Text>
        </View>
      </View>
    </View>
  );
};

ModalManageProfiles.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 60,
    width: 264
  },
  avatar: {
    height: 94,
    resizeMode: 'contain',
    width: 94
  }
});

export default ModalManageProfiles;
