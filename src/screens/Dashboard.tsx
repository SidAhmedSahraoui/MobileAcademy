import {Box, VStack, ScrollView, Heading, Link, Pressable} from 'native-base';
import React from 'react';
import Hero from '../layouts/Hero';
import StatusBar from '../components/StatusBar';
import Configura from '../layouts/Config';
import Visitor from '../layouts/Visitor';
import Order from '../layouts/Orders';
import Lastest from '../layouts/Latest';
import Extensions from '../layouts/Extensions';
import Customer from '../layouts/Customer';
import Invite from '../layouts/Invite';
import DoubleCard from '../layouts/DoubleCard';
import {colors} from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faExternalLink} from '@fortawesome/free-solid-svg-icons';

const Dashboard = ({navigation}: any) => {
  const styles = {
    box: {
      flex: 1,
      backgroundColor: colors.body,
    },
    welcome: {
      height: 270,
    },
    inner: {
      paddingTop: 32,
      paddingHorizontal: 16,
    },
    headText: {
      color: colors.white,
      fontSize: 34,
      lineHeight: 38,
      fontFamily: 'SourceSansPro-SemiBold',
    },
    linkwhole: {
      marginTop: 22,
    },
    link: {
      color: 'white',
      fontSize: 17,
      fontFamily: 'SourceSansPro-Regular',
    },
    icon: {
      paddingLeft: 10,
      marginLeft: 16,
    },
    up: {
      marginTop: -80,
      paddingTop: 30,
      paddingHorizontal: 16,
    },
  };

  const handleLink = () => {
  };

  return (
    <Box style={styles.box}>
      <StatusBar />

      <LinearGradient
        colors={['#21B8F9', 'rgba(33, 184, 249, 0)']}
        style={styles.welcome}>
        <Hero title="Dashboard" navigation={navigation} option />
        <Box style={styles.inner}>
          <Heading fontWeight={600} style={styles.headText}>
            Welcome Mario!
          </Heading>
          <Pressable onPress={() =>navigation.navigate("Products")}>

            <Link  style={styles.linkwhole} _text={styles.link}>
              app.vetrinalive.com/mario-store
              <FontAwesomeIcon
                icon={faExternalLink}
                style={styles.icon}
                color="white"
                size={24}
              />
            </Link>
            </Pressable>
        </Box>
      </LinearGradient>
      <Box flex={1}>
        <ScrollView
          style={styles.up}
          flex={1}
          showsVerticalScrollIndicator={false}>
          <VStack space={6} pb={24}>
            <Configura />
            <Visitor />
            <Order />
            <Lastest />
            <Extensions />
            <DoubleCard />
            <Customer />
            <Invite />
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
};

export default Dashboard;
