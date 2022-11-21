import {Center, Checkbox, HStack, Text, VStack} from 'native-base';
import React from 'react';
import Label from './Label';
import FormCard from './FormCard';
import {colors} from '../assets/colors';
import CustomInputIcon from './CustomInputIcon';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEuro} from '@fortawesome/free-solid-svg-icons';

const Price = () => {
  const styles = {
    type: {
      borderColor: '#CDD2D8',
      borderWidth: 1,
      height: 40,
      marginBottom: -12,
    },
    input: {
      paddingTop: 10,
      paddingLeft: 10,
    },
    circle: {
      borderColor: colors.primaryBlack,
      borderRadius: 20,
      borderWidth: 1,
      height: 25,
      width: 25,
    },
    num: {
      fontSize: 14,
      lineHeight: 18,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-Regular',
    },
    check: {
      fontSize: 16,
      lineHeight: 24,
      color: colors.primaryBlack,
    },
  };

  return (
    <FormCard header="Price">
      <VStack space={6}>
        <VStack space={3}>
          <Label header="Original price" />
          <CustomInputIcon bg={colors.white}>
            <HStack alignItems="center" space={3}>
              <Center style={styles.circle}>
                <FontAwesomeIcon
                  size={15}
                  icon={faEuro}
                  color={colors.primaryBlack}
                />
              </Center>
              <Text style={styles.num}>0</Text>
            </HStack>
          </CustomInputIcon>
        </VStack>
        <VStack space={3}>
          <Label header="Discounted price" />
          <CustomInputIcon name="Lorem ipsum" bg={colors.borderTable}>
            <HStack alignItems="center" space={3}>
              <Center style={styles.circle}>
                <FontAwesomeIcon
                  size={15}
                  icon={faEuro}
                  color={colors.primaryBlack}
                />
              </Center>
            </HStack>
          </CustomInputIcon>
        </VStack>

        <Checkbox value="one" _text={styles.check}>
          Activate discounted price
        </Checkbox>
      </VStack>
    </FormCard>
  );
};

export default Price;
