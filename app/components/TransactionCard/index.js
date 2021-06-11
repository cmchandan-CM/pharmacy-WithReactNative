import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text, Button} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';
import {useTheme, BaseColor} from '@config';
import {useTranslation} from 'react-i18next';

export default function TransactionCard(props) {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const {style, name, checkIn, checkOut, price, total, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.9}>
      <View style={styles.contain}>
        <View
          style={[
            styles.nameContent,
            {
              backgroundColor: colors.primary,
            },
          ]}>
          <Text body2 whiteColor semibold>
            {name}
          </Text>
        </View>
        <View
          style={[
            styles.mainContent,
            {
              backgroundColor: BaseColor.whiteColor,
              // borderColor: colors.primary,
            },
          ]}>
          <View style={styles.leftContent}>
            <Text caption2 whiteColor style={styles.timeText}>
              7:45 PM
            </Text>
            <Text body1 whiteColor semibold style={styles.dateText}>
              {checkIn}
            </Text>
          </View>
          <View style={styles.rightContent}>
            <Button style={styles.ViewBtn} styleText={{fontSize: 12}}>
              {'View Order'}
            </Button>
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

TransactionCard.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  total: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
};

TransactionCard.defaultProps = {
  style: {},
  name: '',
  checkIn: '',
  checkOut: '',
  total: '',
  price: '',
  onPress: () => {},
};
