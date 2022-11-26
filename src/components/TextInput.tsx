import React from 'react';
import {Input} from 'native-base';
import {TextInputProps} from '../types';

const TextInput = ({size, name, wide, value, change}: TextInputProps) => {
  const styles = {
    input: {
      height: 52,
      paddingLeft: 22,
      fontFamily: 'SourceSansPro-Regular',
    },
  };

  return (
    <Input
      size={size}
      placeholder={name}
      w={wide ? '100%' : '85%'}
      value={value}
      onChangeText={change}
      style={styles.input}
    />
  );
};

export default TextInput;
