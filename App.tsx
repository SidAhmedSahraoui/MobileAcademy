import React from 'react';

// navigation
import {Drawer, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forget from './src/screens/Forget';
import Dashboard from './src/screens/Dashboard';
import Products from './src/screens/Products';
import DrawerComponent from './src/navigator/DrawerComponent';
import OrderInfo from './src/screens/OrderInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Forget" component={Forget} />
          <Stack.Screen name="DrawerComponent" component={DrawerComponent} />
          <Stack.Screen name="OrderInfo" component={OrderInfo} />

        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
