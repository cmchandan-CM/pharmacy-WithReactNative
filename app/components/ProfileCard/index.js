import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {BaseStyle, useTheme, BaseColor, iconSize} from '@config';
import {Icon, Text, Image, Tag} from '@components';

export default function ProfileCard(props) {
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
      </View>
      <View style={styles.rightContain}>
        <View style={styles.nameContain}>
          <Text style={styles.medicineName}>{props.name}</Text>
          <TouchableOpacity style={styles.chipContain}>
            <Tag
              chip
              style={styles.tagStyle}
              textStyle={[styles.chipTextStyle, {fontWeight: '550'}]}>
              {props.profession}
            </Tag>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.medicineName}>{props.name}</Text> */}
        <Text style={styles.emailText}>{props.email}</Text>
        {/* <Text>{props.phone}</Text> */}

        <View style={(styles.location, {flex: 1})}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              bottom: 0,
              right: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="map-marker-alt" size={iconSize.small} color="#d74028" />
            <Text style={styles.locationName}>{props.location}</Text>
          </View>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}
