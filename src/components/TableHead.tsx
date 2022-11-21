import {Box, Text, HStack, Checkbox} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import OrderTableHead from './OrderTableHead';

const TableHead = () => {
  const styles = {
    table: {
      marginTop: 30,
      backgroundColor: colors.white,
      paddingBottom: 10,
      borderRadius: 2,
    },
    tableHead: {
      borderBottomColor: colors.borderTable,
      borderBottomWidth: 1,
    },
    HeadItemOne: {
      paddingVertical: 13,
      paddingLeft: 13,
      width: '25%',
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
    },
    HeadItemTwo: {
      paddingVertical: 13,
      paddingLeft: 13,
      width: '35%',
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
    },
    HeadItemThree: {
      borderRightColor: colors.borderTable,
      borderRightWidth: 1,
      paddingVertical: 13,
      width: '25%',
    },
    HeadItemfouth: {
      paddingVertical: 13,
      width: '15%',
    },
    tableHeadText: {
      fontSize: 17,
      lineHeight: 22,
      color: colors.tableHead,
      fontFamily: 'SourceSansPro-SemiBold',
    },
  };

  return (
    <HStack style={styles.tableHead}>
      <Box style={styles.HeadItemOne}>
        <OrderTableHead arrow={true}>
          <Checkbox value="one">
            <Text fontWeight="600" style={styles.tableHeadText}>
              #
            </Text>
          </Checkbox>
        </OrderTableHead>
      </Box>
      <Box style={styles.HeadItemTwo}>
        <OrderTableHead arrow={true}>
          <Text fontWeight="600" style={styles.tableHeadText}>
            Name
          </Text>
        </OrderTableHead>
      </Box>
      <Box
        style={styles.HeadItemThree}
        justifyContent="center"
        alignItems="center">
        <OrderTableHead arrow={true}>
          <Text fontWeight="600" style={styles.tableHeadText}>
            Stato
          </Text>
        </OrderTableHead>
      </Box>
      <Box
        style={styles.HeadItemfouth}
        justifyContent="center"
        alignItems="center"
      />
    </HStack>
  );
};

export default TableHead;
