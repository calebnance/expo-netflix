import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import { colors, fonts, gStyle } from '../api/constants';

import Header from '../components/Header';

// console.log(Constants.platform);

const AppSettings = props => {
  const { navigation } = props;
  const { platform } = Constants;
  let deviceType = 'Unknown Device';

  // is iOS?
  if (typeof platform.ios !== 'undefined') {
    deviceType = platform.ios.model;
  }

  return (
    <View style={gStyle.container}>
      <Header
        bg={colors.headerBarBg}
        navigation={navigation}
        showBack
        title="App Settings"
      />

      <View style={styles.containerHeading}>
        <Text style={styles.heading}>Video Playback</Text>
      </View>

      <View style={styles.containerDevice}>
        <Text style={styles.deviceText}>{deviceType}</Text>
        <View style={styles.containerStorage}>
          <View style={styles.storageUsed} />
          <View style={styles.storageNetflix} />
        </View>
        <View style={styles.containerIndex}>
          <View style={styles.containerIndexBlock}>
            <View style={[styles.indexBlock, styles.used]} />
            <Text style={styles.deviceText}>Used</Text>
          </View>
          <View style={styles.containerIndexBlock}>
            <View style={[styles.indexBlock, styles.netflix]} />
            <Text style={styles.deviceText}>Netflix</Text>
          </View>
          <View style={styles.containerIndexBlock}>
            <View style={[styles.indexBlock, styles.storage]} />
            <Text style={styles.deviceText}>Free</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

AppSettings.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  containerHeading: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  heading: {
    color: colors.moreSectionText,
    fontFamily: fonts.light,
    fontSize: 16,
    textTransform: 'uppercase'
  },
  containerDevice: {
    borderBottomColor: colors.moreSectionBorder,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 8,
    paddingVertical: 8
  },
  deviceText: {
    color: colors.moreDeviceText
  },
  containerStorage: {
    backgroundColor: colors.moreFree,
    flexDirection: 'row',
    height: 10,
    marginVertical: 8,
    width: '100%'
  },
  storageUsed: {
    backgroundColor: colors.moreUsed,
    height: '100%',
    width: '24%'
  },
  storageNetflix: {
    backgroundColor: colors.moreBlue,
    height: '100%',
    width: '4%'
  },
  containerIndex: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  containerIndexBlock: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  indexBlock: {
    height: 10,
    marginRight: 10,
    width: 10
  },
  storage: {
    backgroundColor: colors.moreFree
  },
  used: {
    backgroundColor: colors.moreUsed
  },
  netflix: {
    backgroundColor: colors.moreBlue
  }
});

export default AppSettings;
