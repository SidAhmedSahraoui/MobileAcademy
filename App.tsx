import {NativeBaseProvider} from 'native-base';
import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';
import React from 'react';
import {Button, View} from 'react-native';
// screens
import Login from './src/screens/Login';

export default function App() {
  return (
    <NativeBaseProvider>
      <Login />
    </NativeBaseProvider>
  );
}
