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
import {ThemeSupport} from '@config';
import {BaseStyle, useTheme, BaseColor} from '@config';
import {
  Header,
  SafeAreaView,
  Icon,
  TransactionCard2,
  TextInput,
  ProfileCard,
} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {BookingHistoryData} from '@data';
export default function ListCustomer({navigation}) {
  const [searchInput, setSearchInput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [refreshing] = useState(false);
  const themeStorage = useSelector(state => state.application.theme);
  const {colors} = useTheme();
  const [bookingHistory, setBookingHistory] = useState([]);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(res => res.json())
      .then(res1 => setBookingHistory(res1.results));
  }, []);

  const renderItem = item => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('ViewCustomer', item)}>
        <View style={styles.cardGroup}>
          <ProfileCard
            imageUrl={item.picture.large}
            name={`${item.name.first} ${item.name.last}`}
            email={item.email}
            location={item.location.country}
            phone="7078626926"
            profession="Chemist"
            navigat={navigation}
          />
        </View>
      </TouchableOpacity>
    );
  };
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Customers')}
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
