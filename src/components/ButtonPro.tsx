import {Text, Pressable, HStack} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
interface BtnProductProps {
  text: string;
  navigation: any;
}
const ButtonPro = ({text, navigation: {goBack}}: BtnProductProps) => {
  const styles = {
    btn: {
      borderColor: colors.primary,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      width: '45%',
      height: 50,
      paddingHorizontal: 8,
    },
    btnText: {
      fontSize: 16,
      lineHeight: 22,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <Pressable
      onPress={() => goBack()}
      shadow={3}
      style={styles.btn}
      justifyContent="center">
      <HStack space={1} alignItems="center">
        <FontAwesomeIcon
          size={20}
          icon={faChevronLeft}
          color={colors.blackTintsLight}
        />
        <Text fontWeight="600" style={styles.btnText}>
          {text}
        </Text>
      </HStack>
    </Pressable>
  );
};

export default ButtonPro;
