import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import { colors, images } from '../constants';

import mockData from '../mockdata/data';

const ShowScroller = ({ dataset, type }) => {
  const dataArray = Object.values(mockData[dataset]);

  return (
    <FlatList
      contentContainerStyle={{ paddingHorizontal: 4 }}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        let renderItem = <View style={styles[type]} />;

        if (item.image) {
          renderItem = (
            <Image source={images[item.image]} style={styles[`${type}Image`]} />
          );
        }

        return renderItem;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

ShowScroller.defaultProps = {
  dataset: 'dumbData',
  type: 'rectangle'
};

ShowScroller.propTypes = {
  // optional
  dataset: PropTypes.string,
  type: PropTypes.string
};

const styles = StyleSheet.create({
  rectangle: {
    backgroundColor: colors.infoGrey,
    height: 131,
    marginRight: 8,
    width: 91
  },
  rectangleImage: {
    height: 131,
    marginRight: 8,
    resizeMode: 'contain',
    width: 91
  },
  round: {
    backgroundColor: colors.infoGrey,
    borderRadius: 48,
    height: 96,
    marginRight: 8,
    width: 96
  },
  roundImage: {
    height: 96,
    marginRight: 8,
    resizeMode: 'contain',
    width: 96
  }
});

export default ShowScroller;
