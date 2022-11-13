import {Text, Box, Heading} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {ContentProps} from '../types';

const Content = ({head, children}: ContentProps) => {
  const styles = {
    content: {
      paddingVertical: 22,
    },
    head: {
      fontSize: 26,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <Box style={styles.content} alignItems="center">
      <Heading fontWeight="600" style={styles.head}>
        {head}
      </Heading>
      {children}
    </Box>
  );
};

export default Content;
