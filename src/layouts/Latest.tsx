import {Text, Box, HStack, Spacer, Heading, VStack, Image} from 'native-base';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../assets/colors';
import CardIcon from './CardIcon';
import Card from './Card';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFileAlt, faFileLines } from '@fortawesome/free-solid-svg-icons';
const items = [
  {
    img: require(`../assets/img/imageone.png`),
    textone: 'E-COMMERCE TIPS',
    header: '13 tips on How to Write a Business Plan with success',
    texttwo: 'Stima lettura: 5 min',
  },
  {
    img: require(`../assets/img/imagetwo.png`),
    textone: 'E-COMMERCE TIPS',
    header: '20 tips on How to Write a Business Plan with success',
    texttwo: 'Stima lettura: 3 min',
  },
  {
    img: require(`../assets/img/imagethree.png`),
    textone: 'E-COMMERCE TIPS',
    header: '10 profitable Things to make and sell Online for...',
    texttwo: 'Stima lettura: 8 min',
  },
];
const Lastest = () => {
  const styles = {
    headText: {
      fontSize: 22,
      lineHeight: 27,
      color: colors.primaryBlack,
    },
    content: {
      paddingTop: 25,
      paddingBottom: 15,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 10,
      paddingRight: 50,
    },
    textContent: {
      paddingVertical: 5,
      paddingRight: 100,
    },
    firstText: {
      fontSize: 12,
      lineHeight: 16,
      color: colors.primary,
      fontFamily: 'SourceSansPro-Regular',
    },
    header: {
      fontSize: 15,
      lineHeight: 20,
      color: colors.primaryBlack,
      width: '60%',
      fontFamily: 'SourceSansPro-SemiBold',
    },
    secondText: {
      fontSize: 12,
      lineHeight: 14,
      color: colors.blackDefault,
      fontFamily: 'SourceSansPro-Light',
    },
  };

  return (
    <Card link="Visita il nostro Blog" linkicon={true}>
      <CardIcon header="Lastest news">
        <FontAwesomeIcon size={25} icon={faFileAlt} color={colors.primaryBlack} />
      </CardIcon>
      <VStack style={styles.content} space={7}>
        {items &&
          items.map((item, index) => (
            <HStack
              key={index}
              space={3}
              style={styles.card}
              shadow={3}
              alignItems="center">
              <Image source={item.img} alt="image" width="95" height={120} />
              <VStack space={2} style={styles.textContent}>
                <Text style={styles.firstText}>{item.textone}</Text>
                <Heading fontWeight="600" style={styles.header}>
                  {item.header}
                </Heading>
                <Text fontWeight="300" style={styles.secondText}>
                  {item.texttwo}
                </Text>
              </VStack>
            </HStack>
          ))}
      </VStack>
    </Card>
  );
};

export default Lastest;
