import {Text, HStack, Heading, Image} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../assets/colors';
import BoxCard from '../layouts/BoxCard';
import CardIcon from '../layouts/CardIcon';
import Card from '../layouts/Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';

const Extensions = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    content: {
      paddingTop: 25,
      paddingBottom: 10,
    },
    num: {
      fontSize: 36,
      lineHeight: 41,
      color: colors.white,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    text: {
      marginTop: 2,
      fontSize: 21,
      lineHeight: 26,
      color: colors.white,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <Card link="Discover all extensions" arrow={true} space={true} pr={true}>
      <CardIcon header="Extensions Marketplace">
        <FontAwesomeIcon size={25} icon={faAdd} />
      </CardIcon>
      <HStack style={styles.content} space={5} overflow="hidden">
        <BoxCard bg={colors.orangeDefault} text="Custom Domain">
          <Image
            source={require(`../assets/img/world.png`)}
            alt="world"
            size={60}
          />
        </BoxCard>
        <BoxCard
          bg={colors.primaryGreen}
          text="+ 50 Products"
          position="relative">
          <Heading fontWeight="600" style={styles.num}>
            +50
          </Heading>
          <Text style={styles.text}>Prodotti</Text>
        </BoxCard>
      </HStack>
    </Card>
  );
};

export default Extensions;
