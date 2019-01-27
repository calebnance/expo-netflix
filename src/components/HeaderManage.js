import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts } from '../api/constants';

const HeaderManage = props => {
  const { navigation, save, title } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.done}
      >
        <Text style={styles.doneText}>Done</Text>
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
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

HeaderManage.defaultProps = {
  save: false,
  title: 'Manage Profiles'
};

HeaderManage.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,

  // optional
  save: PropTypes.bool,
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
    alignSelf: 'center',
    flex: 1
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
  containerLogoFull: {
    alignItems: 'center',
    flex: 2,
    height: 35,
    justifyContent: 'center'
  },
  logoFull: {
    height: 26,
    width: 95
  },
  done: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
    height: 35
  },
  doneText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  }
});

export default HeaderManage;
