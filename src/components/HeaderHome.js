import React from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import { colors, device, fonts, images } from '../api/constants';

import TouchText from './TouchText';

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
    const { all, navigation, movies, myList, shows } = this.props;
    const { top } = this.state;

    return (
      <Animated.View style={[styles.container, { top }]}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HomeMain')}
        >
          <Image source={images.netflixTransparent} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.containerMenu}>
          {all && (
            <React.Fragment>
              <TouchText
                onPress={() => navigation.navigate('HomeTvShows')}
                text="TV Shows"
                textStyle={styles.text}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMovies')}
                text="Movies"
                textStyle={styles.text}
              />
              <TouchText
                onPress={() => navigation.navigate('HomeMyList')}
                text="My List"
                textStyle={styles.text}
              />
            </React.Fragment>
          )}
        </View>
      </Animated.View>
    );
  }
}

HeaderHome.defaultProps = {
  all: true,
  movies: false,
  myList: false,
  shows: false
};

HeaderHome.propTypes = {
  // required
  navigation: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,

  // optional
  all: PropTypes.bool,
  movies: PropTypes.bool,
  myList: PropTypes.bool,
  shows: PropTypes.bool
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
