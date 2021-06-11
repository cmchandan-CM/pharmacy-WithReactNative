import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';
import * as Utils from '@utils';
export default StyleSheet.create({
  textInput: {
    height: 46,
    backgroundColor: BaseColor.fieldColor,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
    width: '100%',
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    flex: 1,
  },
  // add style from Walkthrough page
  wrapper: {
    width: '100%',
    height: 350,
    marginBottom: 5,
  },
  contentPage: {
    bottom: 0,
  },
  img: {
    width: Utils.scaleWithPixel(180),
    height: Utils.scaleWithPixel(180),
    borderRadius: Utils.scaleWithPixel(180) / 2,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textSlide: {
    marginTop: 10,
  },
  containScroll: {
    // alignItems: 'center',
    // padding: 0,
  },
});
