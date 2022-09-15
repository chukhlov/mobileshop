import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name="rocket" size={size} color={color} />
          ),
        }}
      />
      <Stack.Screen name="Search" component={() => null} />
      <Stack.Screen name="Favourite" component={() => null} />
      <Stack.Screen name="Bucker" component={() => null} />
    </Stack.Navigator>
  );
};

export default ShopStack;
