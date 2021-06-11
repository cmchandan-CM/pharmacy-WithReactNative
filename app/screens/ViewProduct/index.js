import React, {useState, useEffect} from 'react';
import Swiper from 'react-native-swiper';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {BaseStyle, useTheme, uData1, BaseColor} from '@config';

import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
} from '@components';
import styles from './styles';

import {useTranslation} from 'react-i18next';

export default function ViewProduct({navigation, route}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const slide = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13];
  // console.log(r);
  const [userData, setUserData] = useState(uData1);
  const goToPicker = () => {
    console.log('');
  };

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  useEffect(() => {
    if (route.params !== undefined) {
      setUserData(route.params);
    }
  });
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('View Product')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        onPressLeft={() => {
          // console.log('chandan');
          navigation.goBack();
        }}
      />

      <ScrollView contentContainerStyle={styles.contain}>
        <View style={[styles.swiperContain]}>
          <Swiper
            dotStyle={{
              backgroundColor: BaseColor.dividerColor,
            }}
            activeDotColor={colors.primary}
            paginationStyle={styles.contentPage}
            removeClippedSubviews={false}>
            {slide.map((item, index) => {
              return (
                <Image
                  source={{
                    uri: `https://foodish-api.herokuapp.com/images/pasta/pasta${item +
                      1}.jpg`,
                  }}
                  style={styles.img}
                  resizeMode="stretch"
                  key={index}
                />
              );
            })}
          </Swiper>
        </View>
        <View style={styles.infoContain}>
          <View style={{backgroundColor: 'white'}}>
            <Text bold headline>
              Atoclop-75
            </Text>
            <View style={[styles.priceContain, {}]}>
              <Text style={[{color: colors.primary, fontSize: 12}]}>
                inStock
              </Text>
              <Text bold>$ 500</Text>
            </View>
            <View
              style={{
                // backgroundColor: 'red',
                marginTop: 15,
              }}>
              <Text adjustsFontSizeToFit={true} numberOfLines={5} style={{}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
