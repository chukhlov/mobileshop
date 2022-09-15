import React, {FC, useCallback} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {addItemToBasket} from '../../mobx/basket/actions';
import ProgressiveImage from '../../components/progressiveImage';
import {IShopShortProps} from '../../interfaces/shops';
import {ShopScreenNavigationProp} from '../../interfaces/stack';
import styles from './styles';

const ShopItem: FC<IShopShortProps> = ({id, name, price, image}) => {
  const navigation = useNavigation<ShopScreenNavigationProp>();

  const openDetailScreen = useCallback(() => {
    navigation.navigate('ShopDetails', {
      id: String(id),
      name,
    });
  }, [navigation, id, name]);

  const addtoCart = useCallback(() => {
    addItemToBasket(id);
  }, [id]);

  return (
    <TouchableOpacity
      style={[styles.flex, styles.shopItem]}
      onPress={openDetailScreen}>
      <ProgressiveImage uri={image} imageStyles={styles.shopImage} />
      <Text style={styles.shopItemTitle}>{name}</Text>
      <Text style={styles.shopItemPrice}>${price}</Text>

      <TouchableOpacity style={styles.addBtn} onPress={addtoCart}>
        <Text style={styles.addBtnText}>Add to cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ShopItem;
