import React from 'react';
import { Image, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, fonts, gStyle, images } from '../api/constants';

import HeaderManage from '../components/HeaderManage';

class ModalAddProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forKidsValue: false,
      text: ''
    };
  }

  render() {
    const { navigation } = this.props;
    const { forKidsValue, text } = this.state;

    return (
      <View style={[gStyle.container, { backgroundColor: colors.black }]}>
        <HeaderManage
          backText="Cancel"
          navigation={navigation}
          save
          saveActive={text !== ''}
          title="Create Profile"
        />

        <View style={styles.container}>
          <Image source={images.penguin} style={styles.avatar} />
          <Text style={styles.text}>CHANGE</Text>

          <TextInput
            autoCapitalize="none"
            autoFocus
            keyboardAppearance="dark"
            onChangeText={input => this.setState({ text: input })}
            selectionColor={colors.brandPrimary}
            style={styles.input}
            value={text}
          />
        </View>
      </View>
    );
  }
}

/*
<Switch
  ios_backgroundColor={colors.black}
  onValueChange={val => this.setState({ forKidsValue: val })}
  value={forKidsValue}
/>
*/

ModalAddProfile.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const BLOCK_SIZE = 108;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 60
  },
  avatar: {
    height: BLOCK_SIZE,
    resizeMode: 'contain',
    width: BLOCK_SIZE
  },
  text: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.regular,
    marginBottom: 24,
    marginTop: 8,
    textAlign: 'center'
  },
  input: {
    borderColor: colors.white,
    borderWidth: 1,
    color: colors.white,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: 260
  }
});

export default ModalAddProfile;
