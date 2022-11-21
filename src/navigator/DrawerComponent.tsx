import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import CustomDrawer from './CustomDrawer';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {colors} from '../assets/colors';
import ProductsNav from './ProductsNav';
import Payment from '../screens/Payement';
import Subscription from '../screens/Subscription';
import Orders from '../screens/Orders';
import { faBox, faCreditCard, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane,  } from '@fortawesome/free-regular-svg-icons';

const Drawer = createDrawerNavigator();

const DrawerComponent = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {marginLeft: -15},
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: colors.white,
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon size={18} icon={faUser} color={color} />
            ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsNav}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesomeIcon size={18} icon={faBox} color={color} />
          ),
        }}
      />
      <Drawer.Screen name="Payment" component={Payment} options={{
        drawerIcon : ({color}) => (
          <FontAwesomeIcon size={18} icon={faCreditCard} color={color} />
          )}} 
      />
      <Drawer.Screen name="Orders" component={Orders} options={{
        drawerIcon : ({color}) => (
          <FontAwesomeIcon size={18} icon={faPaperPlane} color={color} />
          )}} 
      />
      <Drawer.Screen name="Subscription" component={Subscription} options={{
        drawerIcon : ({color}) => (
          <FontAwesomeIcon size={18} icon={faSignIn} color={color} />
        )}} 
      />
    </Drawer.Navigator>
  );
};

export default DrawerComponent;
