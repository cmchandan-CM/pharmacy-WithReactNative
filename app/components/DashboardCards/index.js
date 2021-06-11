import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {getWidthDevice,getHeightDevice} from '@utils'
import styles from './styles';
import {Text, Icon} from '@components';
import {useTheme, BaseColor} from '@config';
export default function DashboardCard(props) {
  // console.log(getWidthDevice(),getHeightDevice());
  const {colors} = useTheme();
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={[
          styles.contain,
          {
            height: props.height,
            width: props.width,
            backgroundColor: colors.primary,
          },
        ]}>
        <Text style={styles.count}>{props.count}</Text>
        <View style={styles.iconContainer}>
          <Icon
            name={props.icon}
            size={25}
            color={BaseColor.whiteColor}
            solid
          />
        </View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
