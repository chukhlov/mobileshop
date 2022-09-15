import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopList from '../screens/shopList';
import ShopDetails from '../screens/shopDetails';
import {ShopStackParamList} from '../interfaces/stack';

const defaultScreenOptions = {
  headerShown: false,
};

const ShopStack = () => {
  const Stack = createNativeStackNavigator<ShopStackParamList>();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="ShopList" component={ShopList} />
      <Stack.Screen
        name="ShopDetails"
        component={ShopDetails}
        options={{
          headerBackTitle: '',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopStack;
