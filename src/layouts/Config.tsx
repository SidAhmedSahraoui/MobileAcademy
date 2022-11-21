import {Text, Box, Heading} from 'native-base';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {colors} from '../assets/colors';
import CardIcon from './CardIcon';
import Card from './Card';
import {faWrench} from '@fortawesome/free-solid-svg-icons';

const Config = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    content: {
      paddingTop: 25,
      paddingBottom: 15,
    },
    per: {
      color: 'red',
      fontSize: 34,
      lineHeight: 39,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    com: {
      color: 'red',
      fontSize: 20,
      lineHeight: 25,
      fontFamily: 'SourceSansPro-Regular',
    },
    contentText: {
      fontFamily: 'SourceSansPro-Regular',
      paddingTop: 20,
      color: colors.blackDefault,
      fontSize: 20,
      lineHeight: 28,
    },
    icon: {},
  };

  return (
    <Card link="Completa la configurazione!" arrow={true}>
      <CardIcon header="Configura la tua vetrina">
        <FontAwesomeIcon
          size={25}
          icon={faWrench}
          style={styles.icon}
          color={colors.primaryBlack}
        />
      </CardIcon>
      <Box style={styles.content}>
        <Box>
          <Heading textAlign="center" fontWeight={600} style={styles.per}>
            0%
          </Heading>
          <Text textAlign="center" style={styles.com}>
            completato
          </Text>
        </Box>

        <Text style={styles.contentText} textAlign="center">
          Completa tutti i step per ricevere maggiore visibilità e una vetrina
          accattivante
        </Text>
      </Box>
    </Card>
  );
};

export default Config;
