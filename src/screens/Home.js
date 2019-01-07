import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { gStyle, images } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

import SvgPlus from '../components/icons/Svg.Plus';

const Home = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <ImageBackground
          source={images.bannerBander}
          style={styles.imageBackground}
        >
          <View style={styles.containerContent}>
            <Image source={images.logoBander} style={styles.image} />
            <SvgPlus />
          </View>
        </ImageBackground>

        <Text style={gStyle.heading}>Previews</Text>
        <Text style={gStyle.heading}>Popular on Netflix</Text>
        <Text style={gStyle.heading}>Trending Now</Text>
        <Text style={gStyle.heading}>Watch It Again</Text>
        <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
        <Text style={gStyle.heading}>Documentaries</Text>
      </ScrollView>

      <Cast navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    alignItems: 'center',
    height: 534,
    width: '100%'
  },
  containerContent: {
    bottom: 124,
    position: 'absolute',
    zIndex: 1
  },
  image: {
    height: 69,
    width: 291
  }
});

export default Home;
