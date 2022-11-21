import {Link} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {LinkProps} from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const LinkCom = ({link}: LinkProps) => {
  const styles = {
    linkwhole: {
      marginTop: 22,
    },
    link: {
      color: colors.primaryGreen,
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'SourceSansPro-Regular',
    },
    icon: {
      paddingLeft: 55,
    },
  };

  return (
    <Link style={styles.linkwhole} _text={styles.link} alignItems="center">
      {link}
      <FontAwesomeIcon
        size={22}
        style={styles.icon}
        icon={faArrowRight}
        color={colors.primaryGreen}
      />
    </Link>
  );
};

export default LinkCom;
