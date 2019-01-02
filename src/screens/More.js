import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../api/constants';

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
      <View style={styles.container}>
        <Text>{some}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center'
  }
});

export default More;
