// @flow

import { StyleSheet, Platform } from "react-native";
import {
  colors,
  dimensions,
  fonts
} from "../global";

import type { ViewStyleProp, TextStyleProp, ImageStyleProp } from "react-native/Libraries/StyleSheet/StyleSheet";

const columnWidth = dimensions.width / 4;

const viewStyles: { [string]: ViewStyleProp } = StyleSheet.create( {
  ccButton: {
    bottom: 0,
    padding: 15,
    position: "absolute",
    right: 0,
    zIndex: 1
  },
  landscapeBackground: {
    backgroundColor: colors.black,
    width: columnWidth
  },
  photoContainer: {
    backgroundColor: colors.black,
    height: columnWidth,
    width: columnWidth
  },
  errorContainer: {
    justifyContent: "center",
    backgroundColor: colors.black,
    height: 250
  },
  footer: {
    padding: 100,
    backgroundColor: colors.white
  }
} );

const textStyles: { [string]: TextStyleProp } = StyleSheet.create( {
  ccButtonText: {
    backgroundColor: colors.black,
    borderRadius: 40,
    color: colors.white,
    fontFamily: fonts.semibold,
    fontSize: 16,
    paddingBottom: Platform.OS === "ios" ? 3 : 5,
    paddingHorizontal: 5,
    paddingTop: Platform.OS === "ios" ? 8 : 5
  },
  errorText: {
    color: colors.white,
    fontFamily: fonts.book,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center"
  }
} );

const imageStyles: { [string]: ImageStyleProp } = StyleSheet.create( {
  image: {
    height: columnWidth,
    resizeMode: "cover",
    width: columnWidth
  }
} );

export {
  textStyles,
  viewStyles,
  imageStyles
};
