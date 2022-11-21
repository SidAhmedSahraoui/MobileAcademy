import {Input, InputGroup, InputLeftAddon} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';

interface CustomInputIconProps {
  children: React.ReactNode;
  name?: string;
  bg: string;
}
const CustomInputIcon = ({children, name, bg}: CustomInputIconProps) => {
  return (
    <InputGroup w="100%">
      <InputLeftAddon
        alignItems="flex-start"
        w="20%"
        bgColor={bg}
        borderRightWidth={0}>
        {children}
      </InputLeftAddon>
      <Input
        borderLeftWidth={0}
        w="80%"
        bgColor={bg}
        placeholder={name && name}
      />
    </InputGroup>
  );
};

export default CustomInputIcon;
