import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { colors, device, fonts } from '../constants';

const HeaderManage = ({ backText, navigation, save, saveActive, title }) => {
  const saveColor = saveActive ? { color: colors.white } : {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
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

      {!save && <View style={{ flex: 1 }} />}

      {save && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack(null)}
          style={styles.save}
        >
          <Text style={[styles.saveText, saveColor]}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

HeaderManage.defaultProps = {
  backText: 'Done',
  save: false,
  saveActive: false,
  title: 'Manage Profiles'
};

HeaderManage.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

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
    paddingTop: device.iPhoneX ? 54 : 30
  },
  back: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    height: 35
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
    justifyContent: 'center',
    height: 35
  },
  saveText: {
    color: colors.moreSaveText,
    fontFamily: fonts.bold
  }
});

export default withNavigation(HeaderManage);
