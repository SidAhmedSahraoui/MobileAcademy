import React from 'react';
// navigation
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// screens
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Forget from './src/screens/Forget';

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
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
