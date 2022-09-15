import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ShopList from '../screens/shopList';

const defaultScreenOptions = {
  headerShown: false,
};

const ShopStack = () => {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="ShopList"
        component={ShopList}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="store" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={() => null}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="Favourite"
        component={() => null}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen
        name="Busket"
        component={() => null}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-basket" size={size} color={color} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
