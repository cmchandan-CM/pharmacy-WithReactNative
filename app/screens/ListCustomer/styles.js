import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

export default StyleSheet.create({
  cardGroup: {margin: 8},
  elevationContain: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
  },
});
