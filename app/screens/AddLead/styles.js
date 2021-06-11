import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';
import {getHeightDevice} from '@utils';

export default StyleSheet.create({
  contentTitle: {
    alignItems: 'flex-start',
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
  contain: {
    paddingHorizontal: 20,
    flex: 1,
  },
  textInput: {
    padding: 5,
  },
  pageContain: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    minHeight: getHeightDevice(),
    zIndex: 1,
  },
});
