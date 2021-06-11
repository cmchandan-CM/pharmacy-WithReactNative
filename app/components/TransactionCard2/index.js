import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button, Image, Icon} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTheme, BaseColor} from '@config';
import {useTranslation} from 'react-i18next';

export default function TransactionCard2(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {style, onPress} = props;
  console.log(props);
  return (
    <TouchableOpacity style={[styles.contain, style]} activeOpacity={0.9}>
      <View
        style={[
          styles.mainContent,
          {
            backgroundColor: BaseColor.whiteColor,
          },
        ]}>
        <View style={styles.imgContain}>
          <Image
            source={{uri: 'https://source.unsplash.com/1600x900/?capsules14'}}
            style={styles.cardImg}
          />
        </View>

        <View style={styles.rightContent}>
          <View style={styles.contentBar}>
            <Text>{props.name}</Text>
            <Text>5000$</Text>
            <View style={styles.boxContain}>
              <Text>Box :</Text>
              <View style={styles.boxQuantity}>
                <Text>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnContain}>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.plusBtnTouch, {backgroundColor: colors.primary}]}>
              <View style={styles.plusBtnContain}>
                <Icon name="plus" size={20} color={BaseColor.whiteColor} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              style={[styles.minusBtnTouch, {backgroundColor: colors.primary}]}>
              <View style={styles.minusBtnContain}>
                <Icon name="minus" size={20} color={BaseColor.whiteColor} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* <View style={[styles.validContent, {backgroundColor: colors.card}]}>
        <Text overline semibold>
          {total}
        </Text>
        <Text overline semibold>
          {price}
        </Text>
      </View> */}
    </TouchableOpacity>
  );
}

TransactionCard2.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  total: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
};

TransactionCard2.defaultProps = {
  style: {},
  name: '',
  checkIn: '',
  checkOut: '',
  total: '',
  price: '',
  onPress: () => {},
};
