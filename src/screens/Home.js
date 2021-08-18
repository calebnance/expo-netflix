import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';
import PromotionBanner from '../components/PromotionBanner';
import ShowScroller from '../components/ShowScroller';

class Home extends React.Component {
  constructor() {
    super();

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
    show = currentOffset < this.offset;

    if (show !== showHeader || this.offset <= 0) {
      // account for negative value with "bounce" offset
      if (this.offset <= 0) show = true;

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
          bounces
          onScroll={this.onScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <PromotionBanner />

          <Text style={gStyle.heading}>Previews</Text>
          <ShowScroller dataset="previews" type="round" />

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

          <View style={gStyle.spacer3} />
        </ScrollView>

        <Cast />
      </View>
    );
  }
}

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
