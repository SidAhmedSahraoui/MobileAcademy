import {HStack, Image, Pressable, Spacer, Text} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

const OrderInfoHeader = ({navigation: {goBack}}: any) => {
  const styles = {
    headBox: {
      paddingBottom: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderTable,
    },
    order: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
    },
    stamp: {
      fontSize: 15,
      lineHeight: 20,
      color: colors.primary,
    },
    cancel: {
      fontSize: 30,
      lineHeight: 30,
      color: colors.primaryBlack,
    },
  };

  return (
    <HStack alignItems="center" style={styles.headBox}>
      <Text style={styles.order}>Orders: #1292</Text>
      <Spacer />
      <HStack space={6} alignItems="center">
        <HStack space={2} alignItems="center">
          <Image
            source={require(`../assets/img/starfil.png`)}
            alt="starfil"
            size={8}
          />
          <Text style={styles.stamp}>Stampa ordine</Text>
        </HStack>
        <Pressable onPress={() => goBack()}>
          <Text style={styles.cancel}>x</Text>
        </Pressable>
      </HStack>
    </HStack>
  );
};

export default OrderInfoHeader;
