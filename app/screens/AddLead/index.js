import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import {BaseStyle, useTheme, uData1, medicineData} from '@config';
import DropDownPicker from 'react-native-dropdown-picker';
import {PromotionData, TourData, HotelData} from '@data';
import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  AddForm,
  ProfileCard2,
  CardMedicine,
} from '@components';
import styles from './styles';
import {UserData} from '@data';
import {useTranslation} from 'react-i18next';

export default function AddLead({navigation}) {
  const {colors} = useTheme();
  const [phone, setPhone] = useState('');
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [customer, setCustomer] = useState(null);
  const [category, setCategory] = useState(null);
  const [hotels] = useState(HotelData);
  const [data, setData] = useState(medicineData);
  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const AddCustomerForm = () => {
    return <AddForm />;
  };
  const renderForm = () => {
    console.log(customer);
    if (customer === 'New Customer') {
      return AddCustomerForm();
    } else {
      return (
        <View style={{zIndex: 0}}>
          <ProfileCard2 />
        </View>
      );
    }
  };
  const onChangeValue = (item, index) => {
    const newData = data.map(oldItem => {
      if (oldItem.Name === item.Name) {
        return {
          ...oldItem,
          isSelected: !item.isSelected,
        };
      }
      return {...oldItem};
    });
    setData(newData);
  };
  useEffect(() => {
    data.map(items => {
      if (items.isSelected) {
        console.log(items.Name);
      }
    });
  }, [data]);
  const renderMedicineList = () => {
    return (
      <View style={{marginTop: 10}}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          // columnWrapperStyle={{paddingLeft: 5, paddingRight: 20}}
          data={data}
          keyExtractor={(item, index) => item.id}
          horizontal
          renderItem={({item, index}) => (
            <CardMedicine
              imageUri={item.imageUri}
              Name={item.Name}
              isSelected={item.isSelected}
              onPress={() => navigation.navigate('ViewProduct')}
              item={item}
              index={index}
              checkChange={onChangeValue}
            />
          )}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Add Lead')}
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
        onPressRight={() => {}}
      />
      <View style={{flex: 1}}>
        <ScrollView nestedScrollEnabled={true} style={{}}>
          <View style={styles.pageContain}>
            <DropDownPicker
              placeholder="Select Customer"
              items={[
                {
                  label: 'New Customer',
                  value: 'france',
                  // icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'Dr. Samanta Jayanata',
                  value: 'Dr. Samanta Jayanata',
                  // icon: () => <Icon name="flag" size={18} color="#900" />,
                  // hidden: true,
                },
                {
                  label: 'Dr. Vikas Gupta',
                  value: 'uk',
                },
              ]}
              defaultValue="UK"
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCustomer(item.label)}
            />

            <View style={{paddingVertical: 10}}>
              {customer !== null ? renderForm() : null}
            </View>
            <DropDownPicker
              placeholder="Select Category"
              items={[
                {
                  label: 'pizza',
                  value: 'pizza',
                },
                {
                  label: 'burger',
                  value: 'burger',
                },
                {
                  label: 'biryani',
                  value: 'biryani',
                },

                {
                  label: 'samosa',
                  value: 'samosa',
                },
                {
                  label: 'dosa',
                  value: 'dosa',
                },
                {
                  label: 'butter-chicken',
                  value: 'butter-chicken',
                },
                {
                  label: 'dessert',
                  value: 'dessert',
                },

                {
                  label: 'pasta',
                  value: 'pasta',
                },
              ]}
              defaultValue="UK"
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa', zIndex: 10}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setCategory(item.label)}
            />
            {category !== null ? renderMedicineList() : null}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
