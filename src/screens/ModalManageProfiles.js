import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts, gStyle, images } from '../api/constants';

import Header from '../components/Header';
import SvgPlus from '../components/icons/Svg.Plus';

const ModalManageProfiles = props => {
  const { navigation } = props;

  return (
    <View style={[gStyle.container, { backgroundColor: colors.black }]}>
      <Header close closeText="Close" navigation={navigation} showLogo />

      <View style={styles.container}>
        <View style={styles.containerUser}>
          <View style={styles.overlay} />
          <Image source={images.robot} style={styles.avatar} />
          <Text style={styles.text}>Caleb</Text>
        </View>
        <View style={styles.containerUser}>
          <View style={styles.overlay} />
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.text}>Kim</Text>
        </View>
        <View style={styles.containerUser}>
          <View style={styles.containerPlus}>
            <SvgPlus active={false} size={40} />
          </View>
          <Text style={styles.text}>Add Profile</Text>
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
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 60,
    width: 280
  },
  containerUser: {
    marginBottom: 16
  },
  overlay: {
    backgroundColor: colors.black50,
    height: 108,
    top: 0,
    position: 'absolute',
    width: 108,
    zIndex: 10
  },
  avatar: {
    height: 108,
    resizeMode: 'contain',
    width: 108
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginTop: 8,
    textAlign: 'center'
  },
  containerPlus: {
    alignItems: 'center',
    backgroundColor: colors.moreAddProfileBg,
    borderRadius: 54,
    height: 108,
    justifyContent: 'center',
    marginBottom: 4,
    width: 108
  }
});

export default ModalManageProfiles;
