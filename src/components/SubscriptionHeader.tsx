import {Box, Heading, HStack, Text} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import CustomSwitch from './CustomSwitch';

const SubscriptionHeader = () => {
  const styles = {
    headBox: {
      marginTop: 15,
    },
    header: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    headerSwitch: {
      marginTop: 15,
      marginLeft: 40,
    },
    switch: {
      backgroundColor: colors.blackLight,
      width: 65,
      height: 35,
      borderRadius: 20,
      padding: 2,
    },
    switchInner: {
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 20,
    },
    switchText: {
      fontSize: 17,
      lineHeight: 22,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    btncon: {
      height: 30,
      width: 70,
      backgroundColor: colors.primaryGreen,
      borderRadius: 5,
    },
    promo: {
      fontSize: 12,
      lineHeight: 16,
      color: colors.white,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <Box style={styles.headBox} alignItems="center">
      <Heading fontWeight="600" style={styles.header}>
        Choose your plan
      </Heading>
      <HStack space={6} style={styles.headerSwitch} alignItems="center">
        <Text
          color={colors.blackDefault}
          fontWeight="600"
          style={styles.switchText}>
          Monthly
        </Text>
        <CustomSwitch select={true} />
        <HStack space={3} alignItems="center">
          <Text
            color={colors.primaryBlack}
            fontWeight="600"
            style={styles.switchText}>
            Yearly
          </Text>
          <Box
            style={styles.btncon}
            alignItems="center"
            justifyContent="center">
            <Text fontWeight="600" style={styles.promo}>
              Promo
            </Text>
          </Box>
        </HStack>
      </HStack>
    </Box>
  );
};

export default SubscriptionHeader;
