import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import SignIn from './signIn/index';
import Register from './register/index';
import AuthScreen from './AuthScreen';
import ForgotPass from './forgot_pass/index';
import ResetPass from './forgot_pass/index2';
import ChangePass from './change_pass/index';

const routes = [
  {
    title: null,
    component: AuthScreen,
    name: 'Auth',
    options: {
      headerShown: false,
    },
  },
  {
    title: null,
    component: SignIn,
    name: 'SignIn',
    options: {
      headerShown: false,
    },
  },
  {
    title: null,
    component: Register,
    name: 'Register',
    options: {
      headerShown: false,
    },
  },
  {
    title: null,
    component: ForgotPass,
    name: 'ForgotPass',
    options: {
      headerShown: false,
    },
  },
  {
    title: null,
    component: ResetPass,
    name: 'ResetPass',
    options: {
      headerShown: false,
    },
  },
  {
    title: null,
    component: ChangePass,
    name: 'ChangePass',
    options: {
      headerShown: false,
    },
  },
];

export default function AuthStack() {
  return (
    <Stack.Navigator
      options={{
        headerStyle: {
          shadowRadius: 0,
          shadowOffset: {
            height: 0,
          },
          borderBottomWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      initialRouteName="Auth">
      {routes.map((item) => {
        return (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              title: item._title || '',
              animationEnabled: true,
              headerBackTitleVisible: false,
              headerStyle: {
                shadowRadius: 0,
                shadowOffset: {
                  height: 0,
                },
                borderBottomWidth: 0,
                shadowColor: 'transparent',
                elevation: 0,
              },
              ...item.options,
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}
