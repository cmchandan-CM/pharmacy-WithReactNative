import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {BaseStyle, useTheme} from '@config';
import DropDownPicker from 'react-native-dropdown-picker';
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
import {UserData} from '@data';
import {useTranslation} from 'react-i18next';

export default function AddMR({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('java');
  const [id, setId] = useState(UserData[0].id);
  const [name, setName] = useState(UserData[0].name);
  const [email, setEmail] = useState(UserData[0].email);
  const [address, setAddress] = useState(UserData[0].address);
  const [image] = useState(UserData[0].image);
  const [loading, setLoading] = useState(false);

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('Add MR')}
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
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setId(text)}
              placeholder={t('Enter Name')}
              value={id}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setName(text)}
              placeholder={t('Enter Email')}
              value={name}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setEmail(text)}
              placeholder={t('Enter DOB')}
              value={email}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter Phone')}
              value={address}
            />
          </View>
          <View style={{width: '100%', padding: 5}}>
            <DropDownPicker
              placeholder="Select operating area"
              items={[
                {
                  label: 'USA',
                  value: 'usa',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                  // hidden: true,
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'USA',
                  value: 'usa',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                  // hidden: true,
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'USA',
                  value: 'usa',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                  // hidden: true,
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
              ]}
              defaultValue="UK"
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              // onChangeItem={item => this.setState({
              //     country: item.value
              // })}
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
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter Address')}
              value={address}
            />
          </View>
          <View style={{width: '100%', padding: 5}}>
            <DropDownPicker
              placeholder="Select state"
              items={[
                {
                  label: 'USA',
                  value: 'usa',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                  hidden: true,
                },
                {
                  label: 'UK',
                  value: 'uk',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
                {
                  label: 'France',
                  value: 'france',
                  icon: () => <Icon name="flag" size={18} color="#900" />,
                },
              ]}
              defaultValue="UK"
              containerStyle={{height: 40}}
              style={{backgroundColor: '#fafafa'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fafafa'}}
              // onChangeItem={item => this.setState({
              //     country: item.value
              // })}
            />
          </View>

          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter Password')}
              value={address}
            />
          </View>
          <View style={styles.textInput}>
            <TextInput
              secureTextEntry={true}
              onChangeText={text => setAddress(text)}
              placeholder={t('Enter New Password')}
              value={address}
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
            {t('Add MR')}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
