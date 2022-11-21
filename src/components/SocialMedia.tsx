import React from 'react';
import {colors} from '../assets/colors';
import {HStack, Image, Text} from 'native-base';

interface SocialMediaProps {
  option: boolean;
  text: string;
}

const SocialMedia = ({option, text}: SocialMediaProps) => {
  const styles = {
    social: {
      marginTop: 15,
    },
    socialText: {
      fontSize: 15,
      lineHeight: 20,
      color: option ? colors.primaryGreen : colors.primary,
      fontFamily: 'SourceSansProRegular',
    },
  };

  return (
    <HStack space={5} alignItems="center">
      {option ? (
        <Image
          source={require(`../assets/img/whatapp.png`)}
          alt="whatapp"
          size={8}
        />
      ) : (
        <Image source={require(`../assets/img/tel.png`)} alt="tel" size={8} />
      )}
      <Text style={styles.socialText}>{text}</Text>
    </HStack>
  );
};

export default SocialMedia;
