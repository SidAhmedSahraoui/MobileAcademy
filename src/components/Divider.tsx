import {Text, Box, HStack} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {DividerProps} from '../types';

const Divider = ({wide}: DividerProps) => {
  const styles = {
    divide: {
      paddingVertical: 22,
      width: '100%',
    },
    line: {
      backgroundColor: colors.primary,
      height: 1,
      width: wide ? 142 : 118,
    },
  };

  return (
    <Box style={styles.divide}>
      <HStack alignItems="center" justifyContent="center" space={8}>
        <Box style={styles.line} />
        <Text fontWeight="600" fontFamily="SourceSansPro-SemiBold">
          OR
        </Text>
        <Box style={styles.line} />
      </HStack>
    </Box>
  );
};

export default Divider;
