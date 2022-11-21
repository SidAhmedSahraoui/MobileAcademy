import {Box, Text} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

interface TabProps {
  tab?: boolean;
  text: string;
  wide?: boolean;
  bcolor: string;
}
const Tab = ({tab, text, wide, bcolor}: TabProps) => {
  const styles = {
    tabOne: {
      paddingVertical: 10,
      borderBottomWidth: 3,
      borderBottomColor: bcolor,
      width: wide ? '33.3%' : '40%',
    },
    info: {
      color: tab ? colors.primary : colors.tabnull,
      fontSize: 12,
      lineHeight: 16,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };
  return (
    <Box style={styles.tabOne}>
      <Text textAlign="center" fontWeight="600" style={styles.info}>
        {text}
      </Text>
    </Box>
  );
};

export default Tab;
