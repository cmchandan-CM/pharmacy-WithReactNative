import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {BaseStyle, useTheme, statesDropdownArray, indiaStates} from '@config';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Image,
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
  Tag,
  AddForm,
} from '@components';
import styles from './styles';
import {UserData} from '@data';
import {useTranslation} from 'react-i18next';

export default function AddCustomer({navigation, route}) {
  // console.log(route.params);
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [userData, setUserData] = useState(route.params);
  const [imageUri, setImageUri] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [states, setStates] = useState('');
  const [email, setEmail] = useState('');
  const [hospital, setHospital] = useState('');
  const [dob, setDob] = useState('');
  const [loading, setLoading] = useState(false);

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  const submitData = () => {
    console.log('click');
  };
  useEffect(() => {
    console.log(indiaStates.AN);
    if (userData !== undefined) {
      setImageUri(userData.picture.large);
      setName(`${userData.name.first} ${userData.name.last}`);
      setPhone(userData.phone);
      setProfession('Chemist');
      setAddress(userData.location.city);
      setStates('usa');
      setEmail(userData.email);
      setHospital(userData.location.country);
      setDob(userData.dob.date.split('T', 1) + '');
    } else {
      setImageUri('https://picsum.photos/200/300');
      //
    }
  }, []);
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Add New Customer')}
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

      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        keyboardVerticalOffset={offsetKeyboard}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.contain}>
          <View style={styles.imgContain}>
            <Image
              source={{
                uri: imageUri,
              }}
              style={styles.thumb}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder={t('Enter Name')}
              value={name}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setPhone(text)}
              placeholder={t('Enter Phone')}
              value={phone}
            />
          </View>
          <View style={[styles.textInput, {paddingHorizontal: 10}]}>
            <Text>Customer Profession</Text>
            <View style={styles.tagContain}>
              <TouchableOpacity>
                <Tag
                  chip
                  onPress={() => setProfession('Chemist')}
                  style={[
                    styles.tagStyle,
                    {
                      backgroundColor:
                        profession == 'Chemist' ? colors.primary : colors.card,
                    },
                  ]}
                  textStyle={{color: 'black', fontWeight: '550'}}>
                  Chemist
                </Tag>
              </TouchableOpacity>
              <TouchableOpacity>
                <Tag
                  chip
                  onPress={() => setProfession('Doctor')}
                  style={[
                    styles.tagStyle,
                    {
                      backgroundColor:
                        profession == 'Doctor' ? colors.primary : colors.card,
                    },
                  ]}
                  textStyle={{color: 'black', fontWeight: '550'}}>
                  Doctor
                </Tag>
              </TouchableOpacity>
              <TouchableOpacity>
                <Tag
                  chip
                  onPress={() => setProfession('Other')}
                  style={[
                    styles.tagStyle,
                    {
                      backgroundColor:
                        profession == 'Other' ? colors.primary : colors.card,
                    },
                  ]}
                  textStyle={{color: 'black', fontWeight: '550'}}>
                  Other
                </Tag>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter Address')}
              value={address}
            />
          </View>
          <View style={{width: '100%', padding: 5}}>
            <DropDownPicker
              placeholder="Select state"
              items={statesDropdownArray}
              defaultValue="UK"
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              onChangeItem={item => setStates(item)}
              value={states}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder={t('Enter Email')}
              value={email}
            />
          </View>

          {/* <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter Operating Area')}
              value={address}
            />
          </View> */}
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setHospital(text)}
              placeholder={t('Enter Hospital Name')}
              value={hospital}
            />
          </View>

          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setDob(text)}
              placeholder={t('Enter DOB')}
              value={dob}
            />
          </View>
        </ScrollView>

        <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
          <Button
            loading={loading}
            full
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                navigation.goBack();
              }, 500);
            }}>
            {t('Add Customer')}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
