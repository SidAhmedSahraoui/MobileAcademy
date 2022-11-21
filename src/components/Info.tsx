import {Box, Heading, Text, VStack} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import SocialMedia from './SocialMedia';

const Info = () => {
  const styles = {
    date: {
      paddingTop: 15,
      fontSize: 15,
      lineHeight: 20,
      fontFamily: 'SourceSansPro-Regular',
    },
    client: {
      marginTop: 20,
      fontSize: 17,
      lineHeight: 22,
      color: colors.blackTints,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    social: {
      marginTop: 15,
      paddingBottom: 25,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderTable,
    },
  };

  return (
    <Box>
      <Text style={styles.date}>29/05/2020 18:54</Text>
      <Heading fontWeight="600" style={styles.client} color={colors.blackTints}>
        Cliente
      </Heading>
      <Text style={styles.date} color={colors.primaryBlack}>
        Mario Rossi
      </Text>
      <Text style={styles.date} color={colors.primary}>
        mariorossi@vetrinalive.it
      </Text>
      <Text style={styles.date} color={colors.primaryBlack}>
        Telefono: <Text color={colors.primary}>+39 3333232331</Text>
      </Text>
      <Text style={styles.date} color={colors.primaryBlack}>
        Codice Fiscale: RSSMAR22T33M123K
      </Text>
      <VStack space={4} style={styles.social}>
        <SocialMedia text="Contatta su Whatsapp" option={true} />
        <SocialMedia text="Contatta su Telegram" option={false} />
      </VStack>
    </Box>
  );
};

export default Info;
