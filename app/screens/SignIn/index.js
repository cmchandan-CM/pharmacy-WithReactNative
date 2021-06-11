import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {AuthActions} from '@actions';
import {
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {BaseStyle, useTheme, BaseColor, Images} from '@config';
import {
  Header,
  SafeAreaView,
  Icon,
  Text,
  Button,
  TextInput,
  Image,
} from '@components';
import styles from './styles';
import {useTranslation} from 'react-i18next';

export default function SignIn({navigation}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
  const dispatch = useDispatch();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({id: true, password: true});
  const [slide] = useState([
    {key: 1, image: Images.trip2},
    {key: 2, image: Images.trip1},
    {key: 3, image: Images.trip3},
    {key: 4, image: Images.trip4},
  ]);
  /**
   * call when action login
   *
   */
  const onLogin = () => {
    if (id == '' || password == '') {
      setSuccess({
        ...success,
        id: false,
        password: false,
      });
    } else {
      setLoading(true);
      dispatch(
        AuthActions.authentication(true, response => {
          setLoading(false);
          navigation.goBack();
        }),
      );
    }
  };

  const offsetKeyboard = Platform.select({
    ios: 0,
    android: 20,
  });
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{top: 'always'}}>
      <Header
        title={t('sign_in')}
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
      <View
        style={{
          marginTop: 50,
          flex: 1,
          justifyContent: 'center',
        }}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          keyboardVerticalOffset={offsetKeyboard}
          style={{flex: 1}}>
          <ScrollView style={styles.containScroll}>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                flexDirection: 'row',
              }}>
              <Image
                style={{width: 100, height: 100, borderRadius: 50}}
                source={{
                  uri: 'https://unsplash.it/400/400?image=1',
                }}
                resizeMode="contain"
              />
            </View>
            <View style={styles.contain}>
              <TextInput
                onChangeText={text => setId(text)}
                onFocus={() => {
                  setSuccess({
                    ...success,
                    id: true,
                  });
                }}
                placeholder={t('Enter Email')}
                success={success.id}
                value={id}
              />
              <TextInput
                style={{marginTop: 10}}
                onChangeText={text => setPassword(text)}
                onFocus={() => {
                  setSuccess({
                    ...success,
                    password: true,
                  });
                }}
                placeholder={t('Enter Password')}
                secureTextEntry={true}
                success={success.password}
                value={password}
              />
              <Button
                style={{marginTop: 20}}
                full
                loading={loading}
                onPress={() => {
                  onLogin();
                }}>
                {t('sign_in')}
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}
