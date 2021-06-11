import React from 'react';
import {StyleSheet} from 'react-native';
import {BaseColor} from '@config';
export default StyleSheet.create({
  contain: {
    flexDirection: 'row',
    // backgroundColor: BaseColor.whiteColor,
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 5,
    padding: 10,
    borderRadius: 8,
  },
  mrpBackground: {
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    position: 'absolute',
    opacity: 0.5,
    borderRadius: 4,
  },
  rightContain: {
    paddingLeft: 10,
    // backgroundColor: 'green',
    flex: 4,
  },

  leftContain: {flex: 2},
  img: {height: 100, width: '100%', borderRadius: 4},
  mrpContain: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    borderRadius: 4,
  },
  mrpTextcontain: {},
  mrpText: {color: BaseColor.whiteColor},
  medicineName: {fontFamily: 'Roboto-Bold'},
  typeAndCatContainer: {flexDirection: 'row'},
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  category: {paddingHorizontal: 4, fontSize: 12},
  typeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
  type: {paddingHorizontal: 8, fontSize: 12},
  actionBtn: {
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
    flex: 1,
  },

  cartBtn: {
    flexDirection: 'row',
    borderRadius: 4,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  cartBtnOpacity: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
});
