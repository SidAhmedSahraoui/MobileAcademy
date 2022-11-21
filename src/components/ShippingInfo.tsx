import React from 'react';
import {Box, Heading, HStack, Text, VStack} from 'native-base';
import {colors} from '../assets/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ShippingInfo = () => {
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
    middle: {
      marginTop: 25,
    },
    text: {
      fontSize: 15,
      lineHeight: 20,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
    bottom: {
      marginTop: 20,
    },
    small: {
      fontFamily: 'SourceSansPro-Regular',
      marginTop: 10,
      fontSize: 13,
      lineHeight: 16,
      color: colors.blackDefault,
    },
  };

  return (
    <Box style={styles.box}>
      <Heading fontWeight="600" style={styles.head}>
        Shipping Info
      </Heading>
      <VStack space={3} style={styles.middle}>
        <Text style={styles.text}>Nome corriere: Fedex</Text>
        <Text style={styles.text}>Numero/Link ordine: FR12342123 2314</Text>
      </VStack>

      <HStack alignItems="center" space={3} style={styles.bottom}>
        <FontAwesomeIcon
          size={22}
          icon={faInfoCircle}
          color={colors.blackDefault}
        />
        <Text style={styles.text}>Spedizione Corriere</Text>
        <FontAwesomeIcon
          size={22}
          icon={faChevronDown}
          color={colors.blackDefault}
        />
      </HStack>

      <Text style={styles.small}>
        Se cambi la modalità e i costi di consegna, ricordati di comunicarlo al
        cliente.
      </Text>
    </Box>
  );
};

export default ShippingInfo;
