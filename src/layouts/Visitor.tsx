import {Box, Heading} from 'native-base';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../assets/colors';
import CardIcon from './CardIcon';
import Card from './Card';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Visitor = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    num: {
      paddingTop: 50,
      paddingBottom: 15,
      fontSize: 42,
      lineHeight: 39,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    icon: {
      
    }
  };

  return (
    <Card link="Vuoi ricevere più visite? Contattaci!" arrow={true}>
      <CardIcon header="Visitors" select={true}>
      <FontAwesomeIcon size={25} icon={faEye} style={styles.icon} color={colors.primaryBlack} />
      </CardIcon>
      <Box>
        <Heading style={styles.num} textAlign="center" fontWeight="600">
          0
        </Heading>
      </Box>
    </Card>
  );
};

export default Visitor;
