import React from 'react';
import {Text, HStack, Spacer} from 'native-base';
import {colors} from '../assets/colors';
import {OrderRowProps} from '../types';

const OrderRow = ({text, num}: OrderRowProps) => {
  const styles = {
    text: {
      fontSize: 20,
      lineHeight: 25,
      color: colors.blackDefault,
      fontFamily: 'SourceSansPro-Regular',
    },
    num: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <HStack alignItems="center">
      <Text style={styles.text}>{text}</Text>
      <Spacer />
      <Text fontWeight="600" style={styles.num}>
        {num}
      </Text>
    </HStack>
  );
};

export default OrderRow;
