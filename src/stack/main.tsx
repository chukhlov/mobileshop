import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  BasketTab,
  SearchTab,
  ShopTab,
  FavouriteTab,
} from '../components/bottomTabs';

import ShopStack from './shop';
import Search from '../screens/search';
import Favourite from '../screens/favourite';
import Basket from '../screens/basket';

const defaultScreenOptions = {
  headerShown: false,
};

const MainStack = () => {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Shops"
        component={ShopStack}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <ShopTab {...props} />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <SearchTab {...props} />,
        }}
      />
      <Stack.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarButton: props => <FavouriteTab {...props} />,
          tabBarShowLabel: false,
        }}
      />
      <Stack.Screen
        name="Basket"
        component={Basket}
        options={{
          tabBarShowLabel: false,
          tabBarButton: props => <BasketTab {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
