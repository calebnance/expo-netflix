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
        <Text style={gStyle.heading}>Home</Text>
      </ScrollView>
      <Cast navigation={navigation} />
    </View>
  );
};

export default Home;
