import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderAccounts from '../components/HeaderAccounts';

class More extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      some: 'text'
    };
  }

  render() {
    const { navigation } = this.props;
    const { some } = this.state;

    return (
      <View style={gStyle.container}>
        <HeaderAccounts navigation={navigation} />

        <Cast navigation={navigation} />
      </View>
    );
  }
}

More.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default More;
