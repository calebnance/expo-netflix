import * as React from 'react';
import { Text, View } from 'react-native';
import { ScreenOrientation } from 'expo';
import { gStyle } from '../constants';

class ModalVideo extends React.Component {
  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  }

  componentWillUnmount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
  }

  render() {
    return (
      <View style={gStyle.container}>
        <Text style={gStyle.heading}>Modal :: Video</Text>
      </View>
    );
  }
}

export default ModalVideo;
