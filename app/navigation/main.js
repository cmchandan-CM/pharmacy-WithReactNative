import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import {BaseColor, useTheme, useFont} from '@config';
import {useTranslation} from 'react-i18next';
import {Icon} from '@components';
/* Stack Screen */

import SelectDarkOption from '@screens/SelectDarkOption';
import SelectFontOption from '@screens/SelectFontOption';
import SignUp from '@screens/SignUp';
import SignIn from '@screens/SignIn';
import ResetPassword from '@screens/ResetPassword';
import ChangePassword from '@screens/ChangePassword';
import ProfileEdit from '@screens/ProfileEdit';
import ContactUs from '@screens/ContactUs';
import AboutUs from '@screens/AboutUs';
import DashboardEvent from '@screens/DashboardEvent';
import NotFound from '@screens/NotFound';
/* Bottom Screen */
import Home from '@screens/Home';
import TestScreen from '@screens/TestScreen';
import Order from '@screens/Order';
import Reorder from '@screens/Reorder';
import Products from '../screens/Products';
import AddMR from '../screens/AddMR';
import ListCustomer from '../screens/ListCustomer';
import ViewCustomer from '../screens/ViewCustomer';
import AddCustomer from '../screens/AddCustomer';
import FavouriteProduct from '../screens/FavouriteProduct';
import ViewProduct from '../screens/ViewProduct';
import AddLead from '../screens/AddLead';
const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen name="AddLead" component={AddLead} />
      <MainStack.Screen name="Reorder" component={Reorder} />
      <MainStack.Screen name="Order" component={Order} />
      <MainStack.Screen name="ViewProduct" component={ViewProduct} />
      <MainStack.Screen name="Products" component={Products} />
      <MainStack.Screen name="FavouriteProduct" component={FavouriteProduct} />
      <MainStack.Screen name="ListCustomer" component={ListCustomer} />
      <MainStack.Screen name="AddCustomer" component={AddCustomer} />
      <MainStack.Screen name="ViewCustomer" component={ViewCustomer} />
      <MainStack.Screen name="AddMR" component={AddMR} />
      <MainStack.Screen name="ProfileEdit" component={ProfileEdit} />
      <MainStack.Screen name="SignUp" component={SignUp} />
      <MainStack.Screen name="SignIn" component={SignIn} />
      <MainStack.Screen name="ResetPassword" component={ResetPassword} />
      <MainStack.Screen name="ChangePassword" component={ChangePassword} />
      <MainStack.Screen name="ContactUs" component={ContactUs} />
      <MainStack.Screen name="AboutUs" component={AboutUs} />
      <MainStack.Screen name="DashboardEvent" component={DashboardEvent} />
      <MainStack.Screen name="NotFound" component={NotFound} />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  const {t} = useTranslation();
  const {colors} = useTheme();
  const font = useFont();
  const auth = useSelector(state => state.auth);
  const login = auth.login.success;
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: {borderTopWidth: 1},
        labelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: t('home'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="home" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Booking"
        component={AddLead}
        options={{
          title: t('booking'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="bookmark" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Messenger"
        component={ViewProduct}
        options={{
          title: t('message'),
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="envelope" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={AddMR}
        options={{
          title: t('news'),
          tabBarIcon: ({color}) => {
            return <Icon color={color} name="copy" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={NotFound}
        options={{
          title: t('account'),
          tabBarIcon: ({color}) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}
