import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native';
import { colors, fonts, gStyle, images } from '../constants';

// components
import HeaderManage from '../components/HeaderManage';

class ModalAddProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      forKidsValue: false,
      text: ''
    };

    this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }

  handleSwitchChange(value) {
    // warn on switch off from kids settings...
    if (value === false) {
      Alert.alert(
        'This profile will now allow access to TV shows and movies of all maturity levels.',
        '',
        [{ text: 'OK' }],
        { cancelable: false }
      );
    }

    this.setState({
      forKidsValue: value
    });
  }

  render() {
    const { forKidsValue, text } = this.state;

    return (
      <View style={[gStyle.container, { backgroundColor: colors.black }]}>
        <HeaderManage
          backText="Cancel"
          save
          saveActive={text !== ''}
          title="Create Profile"
        />

        <View style={styles.container}>
          <Image source={images.mask} style={styles.avatar} />
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

          <View style={styles.containerSwitch}>
            <Text style={styles.switchLabel}>For Kids</Text>
            <Switch
              onValueChange={val => this.handleSwitchChange(val)}
              value={forKidsValue}
            />
          </View>
        </View>
      </View>
    );
  }
}

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
  },
  containerSwitch: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16
  },
  switchLabel: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16,
    marginRight: 8,
    textTransform: 'uppercase'
  }
});

export default ModalAddProfile;
