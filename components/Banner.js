// @flow
import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Animated
} from "react-native";

import styles from "../styles/banner";
import { colors } from "../styles/global";

type Props = {
  bannerText: string,
  main: boolean
}

class Banner extends Component {
  constructor( { bannerText, main }: Props ) {
    super();

    this.state = {
      bannerText,
      main
    };

    this.animatedValue = new Animated.Value( -120 );
  }

  componentDidMount() {
    this.showToast();
  }

  showToast() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 0,
        duration: 750
      }
    ).start( this.hideToast() );
  }

  hideToast() {
    setTimeout( () => {
      Animated.timing(
        this.animatedValue,
        {
          toValue: -120,
          duration: 350
        }
      ).start();
    }, 2000 );
  }

  render() {
    const { bannerText, main } = this.state;

    let banner;

    if ( main ) {
      banner = (
        <Animated.View style={{
          transform: [{ translateY: this.animatedValue }],
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          justifyContent: "center",
          backgroundColor: colors.white,
          height: 50
        }}
        >
          <View style={styles.row}>
            <Image
              source={require( "../assets/results/icn-results-match.png" )}
              style={styles.mainBannerImage}
            />
            <Text style={styles.text}>{bannerText}</Text>
          </View>
        </Animated.View>
      );
    } else {
      banner = (
        <View style={styles.banner}>
          <View style={styles.row}>
            <Image
              source={require( "../assets/results/icn-results-match.png" )}
              style={styles.speciesBannerImage}
            />
            <Text style={styles.text}>{bannerText}</Text>
          </View>
        </View>
      );
    }

    return (
      <View>
        {banner}
      </View>
    );
  }
}

export default Banner;
