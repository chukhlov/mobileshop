import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ShopStackParamList = {
  ShopList: undefined;
  ShopDetails: {id: string; name: string};
};

export type Props = NativeStackNavigationProp<
  ShopStackParamList,
  'ShopDetails'
>;

export type ShopScreenNavigationProp = Props['navigation'];

type ShopScreenRouteProp = Props['route'];
