import {Box, Link} from 'native-base';
import React from 'react';
import {CardProps} from '../types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {colors} from '../assets/colors';
import {faArrowRight, faExternalLink} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Card = ({children, link, arrow, linkicon, space, pr}: CardProps) => {
  const styles = {
    card: {
      backgroundColor: 'white',
      width: '100%',
      maxWidth: '100%',
      paddingLeft: 23,
      paddingRight: pr ? 0 : 23,
      paddingVertical: 28,
    },
    linkwhole: {
      marginTop: link ? 22 : 0,
    },
    link: {
      color: colors.primary,
      fontSize: 17,
      lineHeight: 20,
      fontFamily: 'SourceSansPro-Regular',
    },
    icon: {
      paddingLeft: 24,
      paddingRight: 24,
    },
  };

  return (
    <Box rounded="xl" shadow={3} style={styles.card} overflow="hidden">
      {children}
      <Link
        style={styles.linkwhole}
        _text={styles.link}
        alignItems="center"
        justifyContent={space ? 'space-between' : 'center'}>
        {link}
        {arrow && (
          <FontAwesomeIcon
            size={22}
            icon={faArrowRight}
            style={styles.icon}
            color={colors.primary}
          />
        )}
        {linkicon ? (
          <FontAwesomeIcon
            size={24}
            icon={faExternalLink}
            style={styles.icon}
            color={colors.primary}
          />
        ) : null}
      </Link>
    </Box>
  );
};

export default Card;
