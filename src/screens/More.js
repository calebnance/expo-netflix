import React from 'react';
import PropTypes from 'prop-types';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { colors, fonts, gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderAccounts from '../components/HeaderAccounts';
import TouchLineItem from '../components/TouchLineItem';

import SvgBell from '../components/icons/Svg.Bell';
import SvgCheck from '../components/icons/Svg.Check';

// full :: https://help.netflix.com/legal/privacy?headless=true&locale=en-US
const privacyUrl = 'https://help.netflix.com/legal/privacy?headless=true';

const alertSignOut = () => {
  Alert.alert(
    'Sign Out',
    'Are you sure that you want to sign out?',
    [{ text: 'No' }, { text: 'Yes' }],
    { cancelable: false }
  );
};

const More = ({ navigation }) => (
  <View style={gStyle.container}>
    <HeaderAccounts />

    <ScrollView showsVerticalScrollIndicator={false}>
      <TouchLineItem
        icon={<SvgBell />}
        onPress={() => navigation.navigate('MoreNotificationsScreen')}
        showBorder
        text="Notifications"
      />
      <TouchLineItem
        icon={<SvgCheck />}
        onPress={() => navigation.navigate('MoreMyListScreen')}
        showBorder
        text="My List"
      />
      <TouchLineItem
        onPress={() => navigation.navigate('MoreAppSettingsScreen')}
        showArrow={false}
        showBorder
        text="App Settings"
      />
      <TouchLineItem
        onPress={() => {
          navigation.navigate('ModalWebView', { url: privacyUrl });
        }}
        showArrow={false}
        text="Privacy"
      />
      <TouchLineItem onPress={() => null} showArrow={false} text="Help" />
      <TouchLineItem
        onPress={() => alertSignOut()}
        showArrow={false}
        text="Sign Out"
      />
      <Text style={styles.versionText}>
        {`Version: ${Constants.manifest.version}`}
      </Text>
    </ScrollView>

    <Cast />
  </View>
);

More.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  versionText: {
    color: colors.moreVersionText,
    fontFamily: fonts.regular,
    fontSize: 18,
    paddingHorizontal: 8,
    paddingVertical: 16
  }
});

export default More;
