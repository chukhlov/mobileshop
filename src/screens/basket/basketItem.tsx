import React, {FC, useCallback, useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {useDebouncedCallback} from 'use-debounce';
import {updateItemsInCart, removeItemFromCart} from '../../mobx/basket/actions';
import Quantity from '../../components/quantity';
import ProgressiveImage from '../../components/progressiveImage';
import {ShopScreenNavigationProp} from '../../interfaces/stack';
import styles from './styles';
import {IAddItemToCartProps, IShopShortProps} from '../../interfaces/shops';

const BasketItem: FC<IShopShortProps & IAddItemToCartProps> = ({
  id,
  name,
  quantity,
  image,
  price,
}) => {
  const quantityRef = useRef<any>(null);
  const navigation = useNavigation<ShopScreenNavigationProp>();

  const openDetailScreen = useCallback(() => {
    navigation.navigate('ShopDetails', {
      id: String(id),
      name: 'test',
    });
  }, [navigation, id]);

  const debounceUpdate = useDebouncedCallback(
    async (amount: number, prevValue: number) => {
      if (!amount) {
        return remove();
      }

      const isUpdateSuccess = await updateItemsInCart({
        id,
        quantity: amount,
      });

      if (!isUpdateSuccess) {
        quantityRef.current.setValue(prevValue || 1);
      }
    },
    500,
  );

  const remove = useCallback(async () => {
    removeItemFromCart(id);
  }, [id]);

  const onQuantityChange = useCallback(
    async (amount: number, prevValue: number) => {
      debounceUpdate(amount, prevValue);
    },
    [debounceUpdate],
  );

  return (
    <TouchableOpacity
      style={[styles.flex, styles.basketItem]}
      onPress={openDetailScreen}>
      <View>
        <ProgressiveImage uri={image} imageStyles={styles.basketImage} />
        <TouchableOpacity style={styles.removeBtn} onPress={remove}>
          <FontAwesome5Icon name={'times-circle'} size={24} color={'#000'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.basketItemTitle}>{name}</Text>
      <Text style={styles.basketItemPrice}>${price}</Text>

      <Quantity
        initialValue={quantity}
        style={styles.basketQuantity}
        onQuantityChange={onQuantityChange}
        ref={quantityRef}
      />
    </TouchableOpacity>
  );
};

export default BasketItem;
