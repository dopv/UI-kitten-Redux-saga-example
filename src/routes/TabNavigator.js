import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import HomeScreen from '../views/main/home/index';
import NewsScreen from '../views/main/news/index';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import AuthStack from '../views/auth/AuthStack';
export default function TabNavigator() {
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const BellIcon = (props) => <Icon {...props} name="bell-outline" />;
  const PersonIcon = (props) => <Icon {...props} name="person-outline" />;

  const BottomTabBar = ({navigation, state}) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} title="Home" />
      <BottomNavigationTab icon={BellIcon} title="News" />
      <BottomNavigationTab icon={PersonIcon} title="User" />
    </BottomNavigation>
  );
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Auth" component={AuthStack} />
    </Tab.Navigator>
  );
}
