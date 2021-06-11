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
    alignItems: 'center',
    padding: 20,
    // flex: 1,
    width: '100%',
  },

  thumb: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 5,
  },
  fieldContain: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    // backgroundColor: 'green',
  },
  heading: {flex: 3},
  headingContent: {flex: 6},
  infoContain: {
    // backgroundColor: 'red',
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    width: '100%',
    padding: 10,
  },
});
