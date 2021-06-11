import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  TouchableOpacity,
  FlatList,
  StatusBar,
  RefreshControl,
} from 'react-native';
import {ThemeSupport, iconSize} from '@config';
import {BaseStyle, useTheme, BaseColor} from '@config';
import {
  Header,
  SafeAreaView,
  Icon,
  TransactionCard2,
  TextInput,
  FavouriteProductCard,
} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {BookingHistoryData} from '@data';
export default function FavouriteProduct({navigation}) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [refreshing] = useState(false);
  const themeStorage = useSelector(state => state.application.theme);
  const {colors} = useTheme();
  const [bookingHistory] = useState(BookingHistoryData);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const renderItem = item => {
    console.log(item.id);
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ViewProduct')}>
        <View style={styles.cardGroup}>
          <FavouriteProductCard
            imageUrl={`https://foodish-api.herokuapp.com/images/pizza/pizza${
              item.id
            }.jpg`}
            price="100"
            name="ATOCLOP-10"
            medicineType="Tablet"
            medicineCategory="Antibi"
            description="ATORVASTATIN 10 MG+CLOPIDOGRIEL 75MG"
          />
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Favourite Products')}
        renderLeft={() => {
          return (
            <Icon
              name="arrow-left"
              size={iconSize.large}
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
