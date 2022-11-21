import {Text, Box, HStack, Spacer, Heading} from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {colors} from '../assets/colors';
import {CardIconProps} from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const CardIcon = ({children, header, select}: CardIconProps) => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    month: {
      fontSize: 14,
      color: colors.blackTintsLight,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <HStack>
      <HStack space={5} alignItems="center">
        {children}
        <Text fontWeight={600} style={styles.headText}>
          {header}
        </Text>
      </HStack>
      <Spacer />
      {select ? (
        <HStack alignItems="center" space={3}>
          <Text fontWeight="16" style={styles.month}>
            October
          </Text>
          <FontAwesomeIcon
            size={16}
            icon={faChevronDown}
            color={colors.blackTintsLight}
          />
        </HStack>
      ) : null}
    </HStack>
  );
};

export default CardIcon;
