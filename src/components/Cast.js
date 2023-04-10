import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, gStyle } from '../constants';

// icons
import SvgCast from '../icons/Svg.Cast';

function Cast() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={gStyle.activeOpacity}
      onPress={() => navigation.navigate('ModalCastConnect')}
      style={styles.container}
    >
      <SvgCast />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.castGrey,
    borderRadius: 26,
    bottom: 16,
    height: 52,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    shadowColor: colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    width: 52
  }
});

export default Cast;
