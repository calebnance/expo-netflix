import * as React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle } from '../constants';

function HeaderManage({ backText, save, saveActive, title }) {
  const navigation = useNavigation();
  const saveColor = saveActive ? { color: colors.white } : {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={gStyle.activeOpacity}
        onPress={() => navigation.goBack(null)}
        style={styles.back}
      >
        <Text style={styles.backText}>{backText}</Text>
      </TouchableOpacity>

      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {!save && <View style={gStyle.flex1} />}

      {save && (
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.goBack(null)}
          style={styles.save}
        >
          <Text style={[styles.saveText, saveColor]}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

HeaderManage.defaultProps = {
  backText: 'Done',
  save: false,
  saveActive: false,
  title: 'Manage Profiles'
};

HeaderManage.propTypes = {
  // optional
  backText: PropTypes.string,
  save: PropTypes.bool,
  saveActive: PropTypes.bool,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 54 : 30
  },
  back: {
    alignItems: 'flex-start',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  backText: {
    color: colors.white,
    fontFamily: fonts.bold
  },
  containerTitle: {
    flex: 4,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    color: colors.heading,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: 'center'
  },
  save: {
    alignItems: 'flex-end',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  saveText: {
    color: colors.moreSaveText,
    fontFamily: fonts.bold
  }
});

export default HeaderManage;
