import {Center, HStack, Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import {colors} from '../assets/colors';

interface CustomCheckProps {
  text: string;
  state: boolean;
}
const CustomCheck = ({text, state}: CustomCheckProps) => {
  const [selected, setSelected] = useState<boolean>(state);

  const styles = {
    circleBig: {
      borderColor: colors.iconInput,
      borderRadius: 20,
      borderWidth: 1,
      height: 30,
      width: 30,
    },
    circleSmall: {
      backgroundColor: colors.primary,
      borderRadius: 20,
      height: 18,
      width: 18,
    },
    text: {
      fontFamily: 'SourceSansPro-Regular',
      fontSize: 17,
      lineHeight: 22,
      color: colors.primaryBlack,
    },
  };

  return (
    <Pressable onPress={() => setSelected(!selected)}>
      <HStack alignItems="center" space={3}>
        <Center style={styles.circleBig}>
          {selected && <Center style={styles.circleSmall} />}
        </Center>

        <Text style={styles.text}>{text}</Text>
      </HStack>
    </Pressable>
  );
};

export default CustomCheck;
