import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {ThemeSupport} from '@config';
import {BaseStyle, useTheme} from '@config';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TransactionCard2,
} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {BookingHistoryData} from '@data';
export default function Reorder({navigation}) {
  const [refreshing] = useState(false);
  const [bookingHistory] = useState(BookingHistoryData);
  const themeStorage = useSelector(state => state.application.theme);
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const renderItem = item => {
    return (
      <TransactionCard2
        name={item.name}
        checkIn={item.checkIn}
        checkOut={item.checkOut}
        total={item.total}
        price={item.price}
        style={{margin: 8}}
        onPress={() => {
          console.log('chandan');
        }}
      />
    );
  };
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Reorder')}
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
          navigation.goBack();
        }}
      />
      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={() => {}}
          />
        }
        data={bookingHistory}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => renderItem(item)}
      />
    </SafeAreaView>
  );
}
