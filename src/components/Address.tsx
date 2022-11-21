import React from 'react';
import {Heading, Text, VStack} from 'native-base';
import {colors} from '../assets/colors';

const Address = () => {
  const styles = {
    box: {
      marginTop: 25,
      paddingBottom: 15,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderTable,
    },
    head: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.blackTints,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    text: {
      fontSize: 16,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <VStack style={styles.box} space={4}>
      <Heading fontWeight="600" style={styles.head}>
        Shipping Address
      </Heading>
      <Text style={styles.text}>Via Roma, 59, Torre del Greco, NA, 80059</Text>
    </VStack>
  );
};

export default Address;
