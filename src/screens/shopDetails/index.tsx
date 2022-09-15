import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {getShop} from '../../api/shops';
import Loader from '../../components/loader';
import ProgressiveImage from '../../components/progressiveImage';
import Quantity from '../../components/quantity';
import {addItemToBasket} from '../../mobx/basket/actions';
import styles from './styles';
import {ShopScreenRouteProp} from '../../interfaces/stack';
import {IShopProps} from '../../interfaces/shops';

const ShopDetails = () => {
  const quantityRef = useRef<any>(null);
  const {params} = useRoute<ShopScreenRouteProp>();
  const navigation = useNavigation();
  const [details, setShopDetails] = useState<IShopProps | undefined>();
  const [loading, setLoading] = useState(false);

  const fetchShopDetails = useCallback(async () => {
    try {
      setLoading(true);
      const {data} = await getShop(params.id);
      setShopDetails(data);
    } catch (error: any) {
      showMessage({
        message: "Can't fetch shop details",
        description: error?.message,
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    fetchShopDetails();
  }, [fetchShopDetails]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [params.name, navigation]);

  const addtoCart = useCallback(() => {
    if (!details) {
      return;
    }

    addItemToBasket({
      id: params.id,
      quantity: quantityRef.current.getQuantity(),
      name: details.name,
      price: details.price,
      image: details.image,
    });
  }, [details, params.id]);

  const shopInfo = useMemo(() => {
    if (!details) {
      return null;
    }

    return (
      <>
        <ProgressiveImage uri={details.image} imageStyles={styles.shopImage} />
        <View style={styles.container}>
          <Text style={styles.shopTitle}>{details.name}</Text>
          <Text style={styles.shopPrice}>${details.price}</Text>
          <Quantity style={styles.quantity} ref={quantityRef} />
          <TouchableOpacity style={styles.btn} onPress={addtoCart}>
            <Text style={styles.btnText}>Add To Basket</Text>
          </TouchableOpacity>
          <Text style={styles.shopDescription}>{details.description}</Text>
        </View>
      </>
    );
  }, [addtoCart, details]);

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView contentContainerStyle={styles.grow}>{shopInfo}</ScrollView>
      <Loader show={loading} />
    </SafeAreaView>
  );
};

export default ShopDetails;
