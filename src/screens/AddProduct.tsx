import {Box, Heading, VStack, ScrollView, HStack} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import ButtonPro from '../components/ButtonPro';
import Tab from '../components/Tab';
import General from '../components/General';
import Price from '../components/Price';
import Details from '../components/Details';
import ProductType from '../components/ProductType';

const AddProduct = ({navigation}: any) => {
  const styles = {
    body: {
      flex: 1,
      paddingHorizontal: 16,
      paddingVertical: 16,
    },
    headBox: {
      marginTop: 20,
    },
    headText: {
      fontSize: 28,
      lineHeight: 32,
      color: colors.primaryBlack,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    main: {
      marginTop: 25,
      flex: 1,
    },
    up: {
      paddingTop: 30,
    },
  };

  return (
    <Box style={styles.body}>
      <ButtonPro text="All Products" navigation={navigation} />

      <Box style={styles.headBox}>
        <Heading fontWeight="600" style={styles.headText}>
          New product
        </Heading>
      </Box>

      <Box style={styles.main}>
        <HStack alignItems="center">
          <Tab text="info" tab={true} bcolor={colors.primary} />
          <Tab text="variants" bcolor={colors.borderTable} />
        </HStack>

        <Box flex={1}>
          <ScrollView
            style={styles.up}
            flex={1}
            showsVerticalScrollIndicator={false}>
            <VStack space={6} pb={12}>
              <General />
              <Price />
              <Details />
              <ProductType />
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default AddProduct;
