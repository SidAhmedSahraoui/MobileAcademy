import { Heading } from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

const Header = () => {
  const styles = {
    box: {
      paddingTop: 25,
      flex: 1,
      backgroundColor: 'white',
    },
    head: {
      fontSize: 32,
      color: "black"
    },
    span: {
      color: colors.primary,
      fontSize: 30,
    },
  };

  return (
    <Heading style={styles.head}>
      vetrina<Heading style={styles.span}>live</Heading>
    </Heading>
  );
};

export default Header;
