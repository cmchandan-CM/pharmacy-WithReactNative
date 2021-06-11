import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {BaseStyle, useTheme, uData1} from '@config';

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

export default function ViewCustomer({navigation, route}) {
  const {colors} = useTheme();
  const {t} = useTranslation();
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
        title={t('View Customer')}
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
              name="user-edit"
              size={20}
              color={colors.primary}
              enableRTL={true}
              activeOpacity={0.9}
            />
          );
        }}
        onPressRight={() => {
          navigation.navigate('AddCustomer', userData);
        }}
        onPressLeft={() => {
          // console.log('chandan');
          navigation.goBack();
        }}
      />

      <ScrollView contentContainerStyle={styles.contain}>
        <View>
          <TouchableOpacity onPress={goToPicker}>
            <Image
              source={{
                uri: userData.picture.large,
              }}
              style={styles.thumb}
            />
          </TouchableOpacity>
        </View>
        <View />
        <View style={styles.infoContain}>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              Name
            </Text>
            <Text style={styles.headingContent} body2>
              {`${userData.name.first} ${userData.name.last}`}
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              Phone
            </Text>
            <Text style={styles.headingContent} body2>
              {userData.phone}
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              Email
            </Text>
            <Text style={styles.headingContent} body2>
              {userData.email}
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              DOB
            </Text>
            <Text style={styles.headingContent} body2>
              {userData.dob.date.split('T', 1)}
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              Profession
            </Text>
            <Text style={styles.headingContent} body2>
              Developer
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              Address
            </Text>
            <Text style={styles.headingContent} body2>
              {userData.location.city}
            </Text>
          </View>
          <View style={styles.fieldContain}>
            <Text subhead bold style={styles.heading}>
              State
            </Text>
            <Text style={styles.headingContent} body2>
              {userData.location.state}
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* <View style={{paddingVertical: 15, paddingHorizontal: 20}}>
          <Button
            loading={loading}
            full
            onPress={() => {
              setLoading(true);
              setTimeout(() => {
                navigation.goBack();
              }, 500);
            }}>
            {t('Update')}
          </Button>
        </View> */}
    </SafeAreaView>
  );
}
