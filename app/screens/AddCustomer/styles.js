import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

export default StyleSheet.create({
  contentTitle: {
    alignItems: 'flex-start',
    width: '100%',
    height: 32,
    justifyContent: 'center',
  },
  contain: {
    padding: 10,
  },
  imgContain: {alignItems: 'center'},
  textInput: {
    padding: 5,
  },
  thumb: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
  },
  tagContain: {flexDirection: 'row'},
  tagStyle: {
    marginTop: 5,
    marginRight: 5,
    borderWidth: null,
    padding: 5,
  },
});
