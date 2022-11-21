import {Box, HStack, Heading, Spacer, Pressable} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {HeroProps} from '../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars, faFilter, faSearch} from '@fortawesome/free-solid-svg-icons';

const Hero = ({title, navigation, option}: HeroProps) => {
  const styles = {
    head: {
      paddingBottom: 12,
      paddingHorizontal: 16,
      backgroundColor: colors.white,
    },
    headText: {
      fontSize: 20,
      lineHeight: 25,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  const handleNavDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <Box shadow="3" style={styles.head}>
      <HStack alignItems="center">
        <HStack alignItems="center" space={4}>
          <Pressable onPress={handleNavDrawer}>
            <FontAwesomeIcon icon={faBars} />
          </Pressable>
          <Heading fontWeight="600" style={styles.headText}>
            {title}
          </Heading>
        </HStack>
        <Spacer />
        {option ? (
          <HStack alignItems="center" space={8}>
            <FontAwesomeIcon icon={faSearch} />
            <FontAwesomeIcon icon={faFilter} />
          </HStack>
        ) : null}
      </HStack>
    </Box>
  );
};

export default Hero;
