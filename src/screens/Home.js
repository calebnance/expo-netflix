import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { gStyle, images } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const Home = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <Image source={images.bannerBander} style={{ width: '100%' }} />
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

export default Home;
