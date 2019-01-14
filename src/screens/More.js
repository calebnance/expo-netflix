import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import PropTypes from 'prop-types';
import { colors, fonts, gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderAccounts from '../components/HeaderAccounts';
import TouchLineItem from '../components/TouchLineItem';

import SvgBell from '../components/icons/Svg.Bell';
import SvgCheck from '../components/icons/Svg.Check';

class More extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      some: 'text'
    };
  }

  render() {
    const { navigation } = this.props;
    const { some } = this.state;

    return (
      <View style={gStyle.container}>
        <HeaderAccounts navigation={navigation} />

        <ScrollView>
          <TouchLineItem
            icon={<SvgBell />}
            onPress={() => console.log('Notifications')}
            showBorder
            text="Notifications"
          />
          <TouchLineItem
            icon={<SvgCheck />}
            onPress={() => console.log('My List')}
            showBorder
            text="My List"
          />
          <TouchLineItem
            onPress={() => console.log('App Settings')}
            showArrow={false}
            showBorder
            text="App Settings"
          />
          <TouchLineItem
            onPress={() => console.log('Privacy')}
            showArrow={false}
            text="Privacy"
          />
          <TouchLineItem
            onPress={() => console.log('Help')}
            showArrow={false}
            text="Help"
          />
          <TouchLineItem
            onPress={() => console.log('Sign Out')}
            showArrow={false}
            text="Sign Out"
          />
          <Text style={styles.versionText}>
            {`Version: ${Constants.manifest.version}`}
          </Text>
        </ScrollView>

        <Cast navigation={navigation} />
      </View>
    );
  }
}

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
