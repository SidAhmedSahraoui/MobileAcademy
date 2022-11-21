import React from 'react';
import {Heading, HStack, Spacer} from 'native-base';
import {colors} from '../assets/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons';
interface LabelProps {
  header: string;
  icon?: boolean;
}

const Label = ({header, icon}: LabelProps) => {
  const styles = {
    header: {
      fontSize: 15,
      lineHeight: 20,
      color: colors.blackTints,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <HStack>
      <Heading fontWeight="600" style={styles.header}>
        {header}
      </Heading>
      <Spacer />
      {icon && (
        <FontAwesomeIcon
          size={22}
          icon={faInfoCircle}
          color={colors.blackDefault}
        />
      )}
    </HStack>
  );
};

export default Label;
