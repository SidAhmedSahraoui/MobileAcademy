import {Text, Box, HStack, Spacer, Heading, VStack} from 'native-base';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import {colors} from '../assets/colors';
import CardIcon from './CardIcon';
import OrderRow from '../components/OrderRow';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    content: {
      paddingTop: 27,
      paddingBottom: 17,
    },
  };

  return (
    <Card link="10 free tips to increase your sales" arrow={true}>
      <CardIcon header="Order" select={true}>
        <FontAwesomeIcon size={25} icon={faListUl} color={colors.primaryBlack} />
      </CardIcon>
      <Box style={styles.content}>
        <VStack space={3}>
          <OrderRow text="Orders received:" num="0" />
          <OrderRow text="Earnings:" num="€ 0,00" />
        </VStack>
      </Box>
    </Card>
  );
};

export default Orders;
