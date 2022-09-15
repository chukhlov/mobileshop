import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopStack from './shop';
import ShopDetails from '../screens/shopDetails';
import {ShopStackParamList} from '../interfaces/stack';

const defaultScreenOptions = {
  headerShown: false,
};

const MainStack = () => {
  const Stack = createNativeStackNavigator<ShopStackParamList>();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name="Shop" component={ShopStack} />
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

export default MainStack;
