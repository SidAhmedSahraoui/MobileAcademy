import {Box, Pressable} from 'native-base';
import React, {useState} from 'react';
import {colors} from '../assets/colors';

interface CustomSwitchProps {
  select: boolean;
}
const CustomSwitch = ({select}: CustomSwitchProps) => {
  const [enable, setEnable] = useState(select);

  const styles = {
    switch: {
      backgroundColor: enable ? colors.primary : colors.blackLight,
      width: 65,
      height: 35,
      borderRadius: 20,
      padding: 2,
    },
    switchInner: {
      backgroundColor: 'white',
      width: 30,
      height: 30,
      borderRadius: 20,
    },
  };

  return (
    <Pressable
      alignItems={enable ? 'flex-end' : 'flex-start'}
      style={styles.switch}
      onPress={() => setEnable(!enable)}>
      <Box style={styles.switchInner} />
    </Pressable>
  );
};

export default CustomSwitch;
