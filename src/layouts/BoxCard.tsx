import {Text, Box, HStack, Spacer, Heading, Image} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {BoxCardProps} from '../types';

const BoxCard = ({children, bg, text, position, pl}: BoxCardProps) => {
  const styles = {
    box: {
      borderRadius: 15,
      height: 150,
      width: 170,
      backgroundColor: bg,
    },
    text: {
      marginTop: 10,
      fontSize: 15,
      lineHeight: 21,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <Box left={position ? 4 : 0}>
      <Box style={styles.box} alignItems="center" justifyContent="center">
        {children}
      </Box>
      <Text style={styles.text}>{text}</Text>
    </Box>
  );
};

export default BoxCard;
