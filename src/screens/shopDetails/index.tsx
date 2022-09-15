import React, {useLayoutEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import styles from './styles';
import {ShopScreenRouteProp} from '../../interfaces/stack';

const ShopDetails = () => {
  const {params} = useRoute<ShopScreenRouteProp>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [params, navigation]);

  return (
    <SafeAreaView style={styles.flex}>
      <Text>Shop screen</Text>
    </SafeAreaView>
  );
};

export default ShopDetails;
