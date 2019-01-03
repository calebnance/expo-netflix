import React from 'react';
import { Text, View } from 'react-native';
import { gStyle } from '../api/constants';

class More extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      some: 'text'
    };
  }

  render() {
    const { some } = this.state;

    return (
      <View style={gStyle.container}>
        <Text style={gStyle.heading}>{some}</Text>
      </View>
    );
  }
}

export default More;
