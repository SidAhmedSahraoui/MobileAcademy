import {HStack, Spacer, Text, VStack} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {colors} from '../assets/colors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface TotalItemProps {
  head: string;
  num: string;
  arrow?: boolean;
}
const TotalItem = ({head, num, arrow}: TotalItemProps) => {
  const styles = {
    box: {
      marginTop: 50,
      paddingBottom: 15,
    },
    text: {
      fontSize: 14,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
    num: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <HStack alignItems="center">
      <Text style={styles.text}>{head}</Text>
      <Spacer />
      <HStack alignItems="center" space={2}>
        <Text style={styles.num}>{num}</Text>
        {arrow && (
          <FontAwesomeIcon
            size={22}
            icon={faChevronDown}
            color={colors.blackDefault}
          />
        )}
      </HStack>
    </HStack>
  );
};

export default TotalItem;
