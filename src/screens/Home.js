import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../api/constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showHeader: true
    };

    this.offset = 0;

    this.onScroll = this.onScroll.bind(this);
  }

  onScroll(event) {
    const { showHeader } = this.state;

    let show = showHeader;
    const currentOffset = event.nativeEvent.contentOffset.y;
    const direction = currentOffset > this.offset ? 'down' : 'up';

    if (direction === 'down') {
      show = false;
    } else {
      show = true;
    }

    if (show !== showHeader || this.offset === 0) {
      this.setState({
        showHeader: show
      });
    }

    this.offset = currentOffset;
  }

  render() {
    const { navigation } = this.props;
    const { showHeader } = this.state;

    return (
      <View style={gStyle.container}>
        <HeaderHome navigation={navigation} show={showHeader} />

        <ScrollView
          bounces={false}
          onScroll={this.onScroll}
          scrollEventThrottle={16}
        >
          <PromotionBanner />

          <Text style={gStyle.heading}>Previews</Text>
          <ShowScroller type="round" />

          <Text style={gStyle.heading}>My List</Text>
          <ShowScroller dataset="myList" />

          <Text style={gStyle.heading}>Popular on Netflix</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>Trending Now</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>Watch It Again</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>NETFLIX ORIGINALS</Text>
          <ShowScroller />

          <Text style={gStyle.heading}>Documentaries</Text>
          <ShowScroller />

          <View style={gStyle.spacer24} />
        </ScrollView>

        <Cast navigation={navigation} />
      </View>
    );
  }
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
