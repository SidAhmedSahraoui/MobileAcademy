import {Box, Text, HStack, Checkbox, Pressable} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import OrderTableHead from './OrderTableHead';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const BodyTableText = ({order, navigation}: any) => {
  const {num, name, btntext, btnbg} = order;

  const styles = {
    tableHead: {
      borderBottomColor: colors.borderTable,
      borderBottomWidth: 1,
    },
    HeadItemOne: {
      paddingVertical: 13,
      width: '25%',
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
    },
    HeadItemTwo: {
      paddingVertical: 13,
      paddingLeft: 13,
      width: '35%',
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
      width: '15%',
    },
    tableHeadText: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.tableHead,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    bodyfirsttext: {
      fontSize: 14,
      lineHeight: 16,
      color: colors.primaryBlack,
    },
    coloredBtn: {
      width: 70,
      height: 40,
      borderRadius: 5,
      backgroundColor: btnbg,
    },
    coloredBtnText: {
      color: colors.white,
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <HStack style={styles.tableHead}>
      <Box
        style={styles.HeadItemOne}
        justifyContent="center"
        alignItems="center">
        <OrderTableHead>
          <Checkbox value="one">
            <Text fontWeight="600" style={styles.tableHeadText}>
              {num}
            </Text>
          </Checkbox>
        </OrderTableHead>
      </Box>
      <Box style={styles.HeadItemTwo} justifyContent="center">
        <Text fontWeight="600" style={styles.tableHeadText}>
          {name}
        </Text>
      </Box>
      <Box
        style={styles.HeadItemThree}
        justifyContent="center"
        alignItems="center">
        <Pressable onPress={() => navigation.navigate('OrderInfo')}>
          <Box
            style={styles.coloredBtn}
            justifyContent="center"
            alignItems="center">
            <Text style={styles.coloredBtnText}>{btntext}</Text>
          </Box>
        </Pressable>
      </Box>
      <Box
        style={styles.HeadItemfouth}
        justifyContent="center"
        alignItems="center">
        <FontAwesomeIcon
          size={20}
          icon={faEllipsis}
          color={colors.primaryBlack}
        />
      </Box>
    </HStack>
  );
};

export default BodyTableText;
