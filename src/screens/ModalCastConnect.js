import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { colors, fonts, gStyle } from '../constants';

import Header from '../components/Header';

const ModalCastConnect = () => (
  <View style={gStyle.container}>
    <Header close showLogo />

    <View style={styles.containerConnect}>
      <Text style={styles.connect}>Connect to device</Text>
    </View>

    <Text style={styles.deviceText}>[TV] Samsung 7 Series (43)</Text>
  </View>
);

const styles = StyleSheet.create({
  containerConnect: {
    backgroundColor: colors.castConnectBg,
    padding: 24
  },
  connect: {
    color: colors.textGrey,
    fontFamily: fonts.regular,
    fontSize: 16,
    textAlign: 'center'
  },
  deviceText: {
    color: colors.castConnectDeviceText,
    fontFamily: fonts.bold,
    fontSize: 16,
    padding: 20,
    textAlign: 'center'
  }
});

export default ModalCastConnect;
