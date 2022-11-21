import {Box, VStack, HStack, Text, Spacer, Center, Image} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

const CardPayment = ({payment}: any) => {
  const {img, name, live, disable, soon} = payment;

  const styles = {
    card: {
      borderRadius: 5,
      padding: 18,
      backgroundColor: colors.white,
    },
    imgwidth: {
      height: 70,
    },
    liveBtn: {
      paddingHorizontal: 10,
      height: 32,
      borderRadius: 5,
      backgroundColor: colors.live,
    },
    disableBtn: {
      paddingHorizontal: 10,
      height: 32,
      borderRadius: 5,
      backgroundColor: colors.borderTable,
    },
    disableText: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.blackDefault,
      fontFamily: 'SourceSansPro-Regular',
    },
    liveText: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.primaryGreen,
      fontFamily: 'SourceSansPro-Regular',
    },
    soonText: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.blue,
      fontFamily: 'SourceSansPro-Regular',
    },
    cardText: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <Box shadow={3} style={styles.card}>
      <VStack space={6}>
        <HStack>
          <Box style={styles.imgwidth}>
            <Image source={img} alt="payment-image" resizeMode="contain" />
          </Box>
          <Spacer />
          {live && (
            <Center style={styles.liveBtn}>
              <Text style={styles.liveText}>Disable</Text>
            </Center>
          )}

          {disable && (
            <Center style={styles.disableBtn}>
              <Text style={styles.disableText}>Disable</Text>
            </Center>
          )}

          {soon && (
            <Center style={styles.disableBtn}>
              <Text style={styles.soonText}>Coming soon</Text>
            </Center>
          )}
        </HStack>
        <Text fontWeight="600" style={styles.cardText}>
          {name}
        </Text>
      </VStack>
    </Box>
  );
};

export default CardPayment;
