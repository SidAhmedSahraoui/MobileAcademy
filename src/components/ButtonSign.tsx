import {Text, Pressable} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import {ButtonSignProps} from '../types';

const ButtonSign = ({text, wide, navigation}: ButtonSignProps) => {
  const styles = {
    btn: {
      height: 52,
      width: wide ? '100%' : '85%',
      backgroundColor: colors.primary,
      borderRadius: 5,
    },
    btnText: {
      color: 'white',
      fontSize: 15,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <Pressable
      onPress={navigation}
      shadow={3}
      style={styles.btn}
      alignItems="center"
      justifyContent="center">
      <Text fontWeight="600" style={styles.btnText}>
        {text}
      </Text>
    </Pressable>
  );
};

export default ButtonSign;
