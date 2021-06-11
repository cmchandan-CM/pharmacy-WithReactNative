import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';

export default StyleSheet.create({
  cardGroup: {margin: 8},
  btnClearSearch: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: '100%',
  },
  filterContainer: {
    flexDirection: 'row',
  },
  picker1: {
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 4,
    flex: 1,
    height: 30,
    marginRight: 5,
    justifyContent: 'center',
  },
  picker2: {
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 4,
    flex: 1,
    height: 30,
    marginRight: 5,
    justifyContent: 'center',
  },
  picker3: {
    backgroundColor: BaseColor.whiteColor,
    borderRadius: 4,
    flex: 1,
    height: 30,
    justifyContent: 'center',
  },

  contain: {
    flex: 1,
  },

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
