import * as React from 'react';
import PropTypes from 'prop-types';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, device, fonts, gStyle, images } from '../constants';

// icons
import SvgArrowLeft from '../icons/Svg.ArrowLeft';

function Header({ bg, close, closeText, showBack, showLogo, title }) {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      {showBack && (
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.goBack(null)}
          style={styles.back}
        >
          <SvgArrowLeft />
        </TouchableOpacity>
      )}

      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {showLogo && (
        <React.Fragment>
          <View style={gStyle.flex1} />
          <View style={styles.containerLogoFull}>
            <Image source={images.netflixFull} style={styles.logoFull} />
          </View>
        </React.Fragment>
      )}

      {showBack && !close && <View style={gStyle.flex1} />}

      {close && (
        <TouchableOpacity
          activeOpacity={gStyle.activeOpacity}
          onPress={() => navigation.goBack(null)}
          style={styles.close}
        >
          <Text style={styles.closeText}>{closeText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

Header.defaultProps = {
  bg: colors.black,
  close: false,
  closeText: 'Cancel',
  showBack: false,
  showLogo: false,
  title: null
};

Header.propTypes = {
  // optional
  bg: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  close: PropTypes.bool,
  closeText: PropTypes.string,
  showBack: PropTypes.bool,
  showLogo: PropTypes.bool,
  title: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneNotch ? 54 : 30
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
  close: {
    alignItems: 'flex-end',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  closeText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 16
  }
});

export default Header;
