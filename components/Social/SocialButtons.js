// @flow

import React, { useState, useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "../../styles/social/social";
import { dimensions } from "../../styles/global";
import GreenButton from "../UIComponents/Buttons/GreenButton";
import i18n from "../../i18n";
import { shareToFacebook, saveToCameraRoll } from "../../utility/socialHelpers";
import { UserContext } from "../UserContext";

type Props = {
  image: ?string
};

const SocialButtons = ( { image }: Props ) => {
  const { login } = useContext( UserContext );

  const [saved, setSaved] = useState( false );
  const navigation = useNavigation( );
  const navigateBack = ( ) => navigation.goBack( );

  const shareToSocial = ( ) => shareToFacebook( image );

  const saveWatermarkedImage = async ( ) => {
    const completedSave = await saveToCameraRoll( image );
    if ( completedSave ) {
      setSaved( true );
    }
  };

  const setSaveToCameraText = ( ) => {
    let text = "social.save_to_camera_roll";
    if ( saved ) {
      text = "social.saved_to_camera_roll";
    }
    return text;
  };

  const cameraRollText = setSaveToCameraText( );

  return (
    <View style={styles.spaceBeforeButtons}>
      {login && (
        <>
          <GreenButton
            width={dimensions.width}
            handlePress={shareToSocial}
            text="social.share"
          />
          <View style={styles.spaceBetweenButtons} />
        </>
      )}
      <GreenButton
        width={dimensions.width}
        handlePress={saveWatermarkedImage}
        text={cameraRollText}
      />
      <View style={styles.spaceAfterButtons} />
      <TouchableOpacity onPress={navigateBack}>
        <Text style={styles.linkText}>{i18n.t( "social.back_to_id" )}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SocialButtons;
