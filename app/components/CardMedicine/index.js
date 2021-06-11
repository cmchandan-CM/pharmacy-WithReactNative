import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import {Image, Text, Icon, StarRating, Tag} from '@components';
import CheckBox from '@react-native-community/checkbox';
import {BaseColor, useTheme} from '@config';
import PropTypes from 'prop-types';
import {useTranslation} from 'react-i18next';
import styles from './styles';
export default function CardMedicine(props) {
  // console.log(props);
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <View style={[styles.cardContain]}>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => console.log('long')}
        onPress={() => props.onPress()}>
        <Image
          source={{
            uri: props.imageUri,
          }}
          style={styles.girdImage}
        />
      </TouchableOpacity>
      <View>
        <View style={[{flexDirection: 'row'}]}>
          <Text
            body2
            semibold
            style={{
              marginTop: 5,
            }}>
            {props.Name}
          </Text>
          <CheckBox
            style={{position: 'absolute', right: 0}}
            disabled={false}
            value={props.isSelected}
            tintColor="red"
            // onChange={() => props.checkChange(props.item, props.index)}
            onValueChange={() => props.checkChange(props.item, props.index)}
          />
        </View>

        <View style={styles.girdContentRate}>
          <StarRating
            disabled={true}
            starSize={10}
            maxStars={5}
            rating={4.5}
            selectedStar={rating => {}}
            fullStarColor={BaseColor.yellowColor}
          />
          <Text caption2 grayColor>
            400 Reviews
          </Text>
        </View>
        <Text
          title3
          primaryColor
          semibold
          style={{
            marginTop: 0,
          }}>
          $399
        </Text>
      </View>
    </View>
  );
}
