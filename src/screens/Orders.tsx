import {Box, VStack, ScrollView} from 'native-base';
import React from 'react';
import {colors} from '../assets/colors';
import StatusBarCon from '../components/StatusBar';
import OrderHead from '../components/OrderHead';
import TableHead from '../components/TableHead';
import BodyTableText from '../components/BodyTableText';
import Hero from '../layouts/Hero';

export const orders = [
  {
    num: 2222,
    name: 'Cameron Williamson',
    btntext: 'Shipped',
    btnbg: '#BE52F2',
  },
  {
    num: 2223,
    name: 'jefferyson Williamson',
    btntext: 'New',
    btnbg: '#21B8F9',
  },
  {
    num: 2224,
    name: 'Koladeola Nkemola',
    btntext: 'Shipped',
    btnbg: '#BE52F2',
  },
  {
    num: 2225,
    name: 'Peterson Samuelvi',
    btntext: 'New',
    btnbg: '#21B8F9',
  },
  {
    num: 2226,
    name: 'Aceolargg MakeOver',
    btntext: 'Cancelled',
    btnbg: '#F33451',
  },
  {
    num: 2227,
    name: 'Preciousola Mattew',
    btntext: 'New',
    btnbg: '#21B8F9',
  },
  {
    num: 2228,
    name: 'Yusufbry Oladeleby',
    btntext: 'New',
    btnbg: '#21B8F9',
  },
  {
    num: 2229,
    name: 'Cameron Williamson',
    btntext: 'In progress',
    btnbg: '#FFA26B',
  },
  {
    num: 2220,
    name: 'Philomina Danielolasd',
    btntext: 'In progress',
    btnbg: '#FFA26B',
  },
  {
    num: 2212,
    name: 'Festusolasde Bright',
    btntext: 'In progress',
    btnbg: '#FFA26B',
  },
  {
    num: 2232,
    name: 'Mercynkem Frankson',
    btntext: 'New',
    btnbg: '#21B8F9',
  },
];

const Orders = ({navigation}: any) => {
  const styles = {
    box: {
      flex: 1,
      backgroundColor: colors.body,
    },
    body: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 28,
    },
    table: {
      flex: 1,
      marginTop: 30,
      backgroundColor: colors.white,
      paddingBottom: 10,
      borderRadius: 2,
    },
  };

  return (
    <Box style={styles.box}>
      <StatusBarCon />
      <Hero title="Orders" navigation={navigation} option={true} />
      <Box style={styles.body}>
        <OrderHead />

        <Box style={styles.table}>
          {/* Table head */}

          <TableHead />

          {/* Table body text */}

          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack pb={12}>
              {orders.map((order, index) => (
                <BodyTableText
                  key={index}
                  order={order}
                  navigation={navigation}
                />
              ))}
            </VStack>
          </ScrollView>
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
