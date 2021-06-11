import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {BaseStyle, useTheme, BaseColor, iconSize} from '@config';
import {Icon, Text, Image} from '@components';

export default function FavouriteProductCard(props) {
  console.log(props);
  const {colors} = useTheme();
  const {
    style,
    image,
    styleLeft,
    styleThumb,
    styleRight,
    onPress,
    name,
    description,
    textRight,
  } = props;
  return (
    <View style={[styles.contain, {backgroundColor: BaseColor.whiteColor}]}>
      <View style={styles.leftContain}>
        <Image source={{uri: props.imageUrl}} style={styles.img} />
        <View style={[styles.mrpContain, {}]}>
          <View style={styles.mrpBackground} />
          <View style={styles.mrpTextContain}>
            <Text caption1 bold whiteColor>{`MRP:${props.price}`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.rightContain}>
        <View>
          <Text style={styles.medicineName}>{props.name}</Text>
        </View>
        <View style={styles.typeAndCatContainer}>
          <View style={styles.categoryContainer}>
            <Icon
              name="play"
              size={10}
              color={colors.primary}
              enableRTL={true}
            />
            <Text style={[styles.category, {color: BaseColor.grayColor}]}>
              {props.medicineCategory}
            </Text>
          </View>
          <View style={styles.typeContainer}>
            <Icon
              name="capsules"
              size={10}
              color={colors.primary}
              enableRTL={true}
            />
            <Text style={[styles.category, {color: BaseColor.grayColor}]}>
              {props.medicineType}
            </Text>
          </View>
        </View>
        <View style={styles.actionBtn}>
          <TouchableOpacity style={styles.cartBtnOpacity} activeOpacity={0.9}>
            <View style={[styles.cartBtn, {backgroundColor: colors.primary}]}>
              <Icon
                style={{paddingHorizontal: 5}}
                name="cart-plus"
                size={15}
                color={BaseColor.whiteColor}
                enableRTL={true}
              />
              <Text style={{color: BaseColor.whiteColor}}>Add to Cart</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
