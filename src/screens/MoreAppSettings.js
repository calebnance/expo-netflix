import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

import Header from '../components/Header';
import TouchLineItemApp from '../components/TouchLineItemApp';
import TouchLineItemElement from '../components/TouchLineItemElement';

import SvgTrash from '../components/icons/Svg.Trash';

const alertDeleteDownloads = () => {
  Alert.alert(
    'Delete All Downloads',
    'Are you sure you want to delete this one download?',
    [
      {
        text: 'Cancel'
      },
      {
        style: 'destructive',
        text: 'Delete'
      }
    ],
    {
      cancelable: false
    }
  );
};

const AppSettings = () => {
  const { platform } = Constants;
  let deviceType = 'Unknown Device';

  // is iOS?
  if (typeof platform.ios !== 'undefined') {
    deviceType = platform.ios.model;
  }

  return (
    <ScrollView bounces={false} style={gStyle.container}>
      <Header bg={colors.headerBarBg} showBack title="App Settings" />

      <View style={styles.containerHeading}>
        <Text style={styles.heading}>Video Playback</Text>
      </View>

      <TouchLineItemApp
        onPress={() => null}
        tagline="Automatic"
        text="Cellular Data Usage"
      />

      <View style={styles.containerHeading}>
        <Text style={styles.heading}>Downloads</Text>
      </View>

      <TouchLineItemApp
        onPress={() => null}
        tagline="Standard"
        text="Video Quality"
      />

      <TouchLineItemElement
        onPress={() => alertDeleteDownloads()}
        element={<SvgTrash size={20} />}
        text="Delete All Downloads"
      />

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
    </ScrollView>
  );
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
