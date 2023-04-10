import * as React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { gStyle } from '../constants';

// components
import Header from '../components/Header';

function ModalWebView({ route }) {
  const { url = 'https://netflix.com' } = route.params;

  return (
    <View style={gStyle.container}>
      <Header close closeText="Close" showLogo />

      <WebView
        bounces={false}
        javaScriptEnabled
        scalesPageToFit
        source={{ uri: url }}
        startInLoadingState
      />
    </View>
  );
}

ModalWebView.propTypes = {
  // required
  route: PropTypes.object.isRequired
};

export default ModalWebView;
