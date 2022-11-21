import {Box, Heading, VStack, HStack, Text, Spacer} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

const SubscriptionCard = ({sub}: any) => {
  const {name, num, small} = sub;

  const styles = {
    card: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    headText: {
      fontSize: 20,
      lineHeight: 25,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    maxText: {
      fontSize: 15,
      lineHeight: 20,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    small: {
      marginBottom: -1,
      fontSize: 12,
      lineHeight: 16,
      color: colors.primaryGreen,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    bottomText: {
      marginTop: 22,
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    num: {
      fontSize: 28,
      lineHeight: 32,
      color: colors.primary,
    },
    changeBtn: {
      backgroundColor: colors.primary,
      borderRadius: 4,
      height: 45,
      width: 130,
    },
    changeBtnText: {
      color: colors.white,
      fontSize: 16,
      lineHeight: 22,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <VStack shadow={3} space={5} style={styles.card}>
      <HStack alignItems="center">
        <Heading fontWeight="600" style={styles.headText}>
          {name}
        </Heading>
        <Spacer />
        <Text fontWeight="600" style={styles.maxText}>
          Max 150 prodotti
        </Text>
      </HStack>

      <Box>
        {small && (
          <Text fontWeight="600" style={styles.small}>
            2 mesi in regalo
          </Text>
        )}

        <HStack>
          <Text fontWeight="600" style={styles.bottomText}>
            € <Text style={styles.num}>{num}</Text>/year
          </Text>
          <Spacer />
          <Box
            shadow={3}
            style={styles.changeBtn}
            alignItems="center"
            justifyContent="center">
            <Text fontWeight="600" style={styles.changeBtnText}>
              Change plan
            </Text>
          </Box>
        </HStack>
      </Box>
    </VStack>
  );
};

export default SubscriptionCard;
