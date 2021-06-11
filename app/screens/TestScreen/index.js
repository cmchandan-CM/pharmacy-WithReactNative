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
  Text,
  Button,
  TransactionCard2,
  Image,
  TextInput,
  ProductCard,
} from '@components';
import {ApplicationActions} from '@actions';
import styles from './styles';
import {useTranslation} from 'react-i18next';
import {BookingHistoryData} from '@data';
export default function TestScreen({navigation}) {
  const [selectedLanguage, setSelectedLanguage] = useState('java');
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
        style={{paddingVertical: 10, marginHorizontal: 20}}
        onPress={() => {
          console.log('chandan');
        }}
      />
    );
  };
  useEffect(() => {}, []);

  /**
   * call when select theme
   *
   * @param {*} selected
   */

  /**
   * call when save theme
   *
   */

  /**
   * render UI theme item
   *
   * @param {*} item
   * @returns
   */

  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Products')}
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
        renderRight={() => {
          return (
            <Icon
              name="ellipsis-v"
              size={20}
              color={colors.primary}
              enableRTL={true}
            />
          );
        }}
        renderRightSecond={() => {
          return (
            <Icon
              name="bell"
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
      <View
        style={{
          backgroundColor: colors.primary,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: BaseColor.whiteColor,
              borderRadius: 10,
              flex: 1,
              height: 30,
              marginRight: 5,
              justifyContent: 'center',
            }}>
            <Picker
              itemStyle={{marginHorizontal: 0, margin: 0}}
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: BaseColor.whiteColor,
              borderRadius: 10,
              flex: 1,
              height: 30,
              marginRight: 5,
              justifyContent: 'center',
            }}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
          <View
            style={{
              backgroundColor: BaseColor.whiteColor,
              borderRadius: 10,
              flex: 1,
              height: 30,
              justifyContent: 'center',
            }}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>

        <View style={{paddingTop: 5}}>
          <TextInput
            // onChangeText={text => setSearch(text)}
            placeholder="search"
            // onSubmitEditing={() => {
            //   onSearch(search);
            // }}
            icon={
              <TouchableOpacity
                // onPress={() => {
                //   setSearch('');
                // }}
                style={styles.btnClearSearch}>
                <Icon name="times" size={18} color={BaseColor.grayColor} />
              </TouchableOpacity>
            }
          />
        </View>
      </View>
      <View style={[styles.contain, {backgroundColor: colors.primaryLight}]}>
        <ProductCard
          imageUrl="https://source.unsplash.com/random"
          price="100"
          name="ATOCLOP-10"
          medicineType="Tablet"
          medicineCategory="Antibi"
          description="ATORVASTATIN 10 MG+CLOPIDOGRIEL 75MG"
        />
      </View>
      {/* <FlatList
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
      /> */}
    </SafeAreaView>
  );
}
