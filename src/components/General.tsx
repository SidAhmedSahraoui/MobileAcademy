import {HStack, Input, TextArea, VStack} from 'native-base';
import React from 'react';
import Label from './Label';
import FormCard from './FormCard';
import {colors} from '../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBold,
  faItalic,
  faLinkSlash,
  faList,
  faTextSlash,
  faUnderline,
} from '@fortawesome/free-solid-svg-icons';

const General = () => {
  const styles = {
    type: {
      paddingVertical: 7,
      paddingHorizontal: 10,
      borderColor: '#CDD2D8',
      borderWidth: 1,
      height: 40,
      marginBottom: -12,
    },
    input: {
      paddingTop: 10,
      paddingLeft: 10,
    },
  };

  return (
    <FormCard header="General Information">
      <VStack space={6}>
        <VStack space={3}>
          <Label header="Product name" />
          <Input placeholder="Lorem ipsum" />
        </VStack>
        <VStack space={3}>
          <Label header="Description" />
          <HStack
            style={styles.type}
            alignItems="center"
            justifyContent="space-around">
            <FontAwesomeIcon size={22} icon={faBold} color={colors.iconInput} />
            <FontAwesomeIcon
              size={22}
              icon={faItalic}
              color={colors.iconInput}
            />
            <FontAwesomeIcon
              size={22}
              icon={faTextSlash}
              color={colors.iconInput}
            />

            <FontAwesomeIcon
              size={22}
              icon={faUnderline}
              color={colors.iconInput}
            />
            <FontAwesomeIcon size={22} icon={faList} color={colors.iconInput} />
            <FontAwesomeIcon
              size={22}
              icon={faLinkSlash}
              color={colors.iconInput}
            />
          </HStack>
          <TextArea
            style={styles.input}
            h={40}
            autoCompleteType
            aria-label="t1"
            placeholder="Description (0 / 5000)"
          />
        </VStack>
      </VStack>
    </FormCard>
  );
};

export default General;
