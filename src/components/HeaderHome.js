import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts, images } from '../api/constants';

class HeaderHome extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      top: new Animated.Value(0)
    };
  }

  componentDidUpdate(prevProps) {
    const { show } = this.props;
    const { top } = this.state;

    if (prevProps.show !== show) {
      if (show) {
        Animated.timing(top, { duration: 200, toValue: 0 }).start();
      } else {
        Animated.timing(top, { duration: 200, toValue: -100 }).start();
      }
    }
  }

  render() {
    const { navigation } = this.props;
    const { top } = this.state;

    return (
      <Animated.View style={[styles.container, { top }]}>
        <Image source={images.netflixTransparent} style={styles.logo} />
        <View style={styles.containerMenu}>
          <Text style={styles.text}>TV Shows</Text>
          <Text style={styles.text}>Movies</Text>
          <Text style={styles.text}>My List</Text>
        </View>
      </Animated.View>
    );
  }
}

HeaderHome.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.black20,
    flexDirection: 'row',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: device.iPhoneX ? 54 : 30,
    position: 'absolute',
    width: '100%',
    zIndex: 10
  },
  logo: {
    height: 35,
    marginRight: 48,
    width: 20
  },
  containerMenu: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
    flex: 1
  },
  text: {
    color: colors.white,
    fontFamily: fonts.medium,
    marginRight: 24
  }
});

export default HeaderHome;
