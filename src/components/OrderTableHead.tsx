import {Box, HStack} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
interface OrderTableHeadProps {
  children: React.ReactNode;
  arrow?: boolean;
}
const OrderTableHead = ({children, arrow}: OrderTableHeadProps) => {
  const styles = {
    box: {
      flex: 1,
      backgroundColor: colors.body,
    },
    body: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 28,
    },
    headText: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
    },
    FadeBtn: {
      paddingHorizontal: 16,
      height: 48,
      backgroundColor: colors.borderTable,
      borderRadius: 5,
    },
    btnText: {
      fontSize: 16,
      lineHeight: 22,
      color: colors.blackLight,
    },
    table: {
      marginTop: 30,
      backgroundColor: colors.white,
      paddingBottom: 10,
      borderRadius: 2,
    },
    tableHead: {
      borderBottomColor: colors.borderTable,
      borderBottomWidth: 1,
    },
    HeadItemOne: {
      paddingVertical: 13,
      paddingLeft: 13,
      width: '25%',
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
    },
    HeadItemTwo: {
      paddingVertical: 13,
      paddingLeft: 13,
      width: '25%',
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
    },
    HeadItemThree: {
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
      paddingVertical: 13,
      width: '25%',
    },
    HeadItemfouth: {
      paddingVertical: 13,
      width: '25%',
    },
    iconTop: {
      marginBottom: 1,
    },
    iconBottom: {
      marginTop: 1,
    },
    tableHeadText: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.tableHead,
    },
    bodyfirsttext: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.primaryBlack,
    },
  };
  return (
    <HStack space={2} alignItems="center">
      {children}
      {arrow && (
        <Box>
          <FontAwesomeIcon
            style={styles.iconTop}
            size={15}
            icon={faChevronUp}
            color={colors.primaryBlack}
          />
          <FontAwesomeIcon
            style={styles.iconBottom}
            size={15}
            icon={faChevronDown}
            color={colors.primaryBlack}
          />
        </Box>
      )}
    </HStack>
  );
};

export default OrderTableHead;
