import * as React from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { colors, device, fonts, gStyle } from '../constants';

function HeaderSearch() {
  // local state
  const [focus, setFocus] = React.useState(false);
  const [text, setText] = React.useState('');

  const cancelOpacity = React.useRef(new Animated.Value(0)).current;
  const inputWidth = React.useRef(new Animated.Value(100)).current;

  const onBlur = () => {
    setFocus(false);

    // if empty, go back to orignial state
    if (text === '') {
      Animated.timing(inputWidth, {
        duration: 300,
        toValue: 100,
        useNativeDriver: false
      }).start();
      Animated.timing(cancelOpacity, {
        duration: 300,
        toValue: 0,
        useNativeDriver: false
      }).start();
    }
  };

  const onCancel = () => {
    Keyboard.dismiss();

    setText('');
  };

  const onFocus = () => {
    setFocus(true);

    Animated.timing(inputWidth, {
      duration: 300,
      toValue: 80,
      useNativeDriver: false
    }).start();
    Animated.timing(cancelOpacity, {
      duration: 300,
      toValue: 1,
      useNativeDriver: false
    }).start();
  };

  // if there is focus or text in input, align left
  const inputOverride = focus || text ? { textAlign: 'left' } : {};
  // convert to percentage
  const percentage = inputWidth.interpolate({
    inputRange: [80, 100],
    outputRange: ['80%', '100%']
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.containerInput, { width: percentage }]}>
        <TextInput
          autoCapitalize="none"
          autoFocus
          keyboardAppearance="dark"
          onBlur={onBlur}
          onChangeText={(input) => setText(input)}
          onFocus={onFocus}
          placeholder="Search"
          placeholderTextColor={colors.searchIcon}
          selectionColor={colors.brandPrimary}
          style={[styles.input, inputOverride]}
          value={text}
        />
      </Animated.View>

      <Animated.View
        style={[styles.containerCancel, { opacity: cancelOpacity }]}
      >
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={onCancel}
        >
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingHorizontal: 8,
    paddingTop: device.iPhoneNotch ? 54 : 30,
    width: '100%'
  },
  containerInput: {
    width: '80%'
  },
  input: {
    backgroundColor: colors.searchBarBg,
    borderRadius: 4,
    color: colors.heading,
    fontFamily: fonts.regular,
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 4,
    textAlign: 'center'
  },
  containerCancel: {
    width: '20%'
  },
  cancel: {
    color: colors.heading,
    fontFamily: fonts.light,
    fontSize: 16,
    paddingVertical: 4,
    textAlign: 'center'
  }
});

export default HeaderSearch;
