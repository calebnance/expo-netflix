import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../api/constants';

const data = {
  1: {
    id: 1,
    title: 'Show 1'
  },
  2: {
    id: 2,
    title: 'Show 2'
  },
  3: {
    id: 3,
    title: 'Show 3'
  },
  4: {
    id: 4,
    title: 'Show 4'
  },
  5: {
    id: 5,
    title: 'Show 5'
  },
  6: {
    id: 6,
    title: 'Show 6'
  },
  7: {
    id: 7,
    title: 'Show 7'
  },
  8: {
    id: 8,
    title: 'Show 8'
  }
};

const ShowScroller = props => {
  const { type } = props;
  const dataArray = Object.values(data);

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 4 }}
      data={dataArray}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={() => <View style={styles[type]} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  type: 'containerRectangle'
};

ShowScroller.propTypes = {
  // optional
  type: PropTypes.string
};

const styles = StyleSheet.create({
  containerRectangle: {
    backgroundColor: colors.infoGrey,
    height: 160,
    marginRight: 8,
    width: 100
  },
  containerRound: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  }
});

export default ShowScroller;
