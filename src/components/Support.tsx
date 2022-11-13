import {Text, HStack, Image} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

const Support = () => {
  const styles = {
    socialItem: {
      borderColor: colors.primaryGreen,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      width: '38%',
      height: 50,
    },
    socialText: {
      fontSize: 14,
      lineHeight: 20,
      color: colors.primaryBlack,
    },
  };

  return (
    <HStack
      shadow={1}
      space={3}
      style={styles.socialItem}
      justifyContent="center"
      alignItems="center">
      <Image
        source={require(`../assets/img/headphone.png`)}
        alt="facebook"
        size={7}
      />
      <Text fontWeight="600" style={styles.socialText}>
        Support
      </Text>
    </HStack>
  );
};

export default Support;
