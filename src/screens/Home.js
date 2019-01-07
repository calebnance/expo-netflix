import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';

const Home = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <HeaderHome navigation={navigation} />

      <ScrollView>
        <PromotionBanner />

        <Text style={gStyle.heading}>Previews</Text>
        <ShowScroller type="containerRound" />

        <Text style={gStyle.heading}>Popular on Netflix</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Trending Now</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Watch It Again</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
        <ShowScroller />

        <Text style={gStyle.heading}>Documentaries</Text>
        <ShowScroller />

        <View style={gStyle.spacer24} />
      </ScrollView>

      <Cast navigation={navigation} />
    </View>
  );
};

export default Home;
