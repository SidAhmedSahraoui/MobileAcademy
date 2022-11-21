import {Text, Box} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../assets/colors';
import CardIcon from './CardIcon';
import Card from './Card';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

const Invite = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    content: {
      paddingTop: 25,
      paddingBottom: 10,
    },
    text: {
      fontSize: 18,
      lineHeight: 24,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    span: {
      color: colors.primaryGreen,
    },
  };

  return (
    <Card link="Start inviting friends!" arrow={true} space={true}>
      <CardIcon header="Invite a friend!">
        <FontAwesomeIcon size={25} icon={faUsers} color={colors.primaryBlack} />
      </CardIcon>
      <Box style={styles.content}>
        <Text style={styles.text} fontWeight="600">
          <Text style={styles.span}>Receive 50 products</Text> by inviting a
          friend who subscribes to a plan. Your friend will receive a 30%
          discount coupon valid for any plan.
        </Text>
      </Box>
    </Card>
  );
};

export default Invite;
