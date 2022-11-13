import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from '../assets/colors';
import {StatusBarProps} from '../types';

const StatusBarCon = () => {
  return <StatusBar backgroundColor={colors.white} barStyle="dark-content" />;
};

export default StatusBarCon;
