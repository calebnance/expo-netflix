import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import Header from '../components/Header';

const Home = props => {
  const { navigation } = props;

  return (
    <View style={gStyle.container}>
      <Header navigation={navigation} />

      <ScrollView style={gStyle.pH8}>
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
