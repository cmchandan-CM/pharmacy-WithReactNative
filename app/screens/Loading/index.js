import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Images, BaseColor, useTheme} from '@config';
import {Image, Text} from '@components';
import styles from './styles';

export default function Loading({navigation}) {
  const {colors} = useTheme();

  const onProcess = () => {
    setTimeout(() => {
      navigation.replace('Main');
    }, 500);
  };
  useEffect(() => {
    onProcess();
  }, []);

  return (
    <View style={[styles.container, {backgroundColor: colors.primary}]}>
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
      <View style={styles.content}>
        <Text title1 whiteColor semibold>
          Felix Travel
        </Text>
        <ActivityIndicator
          size="large"
          color={BaseColor.whiteColor}
          style={{
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
}
