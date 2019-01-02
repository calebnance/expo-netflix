import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

const Search = props => {
  const { navigation } = props;
  console.log('hit search screen');
  console.log(navigation);
  console.log('-----------------');

  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  );
};

Search.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1
  }
});

export default Search;
