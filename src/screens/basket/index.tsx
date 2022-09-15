import React from 'react';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, Text} from 'react-native';
import state from '../../mobx/basket/state';
import styles from './styles';

const Basket = () => {
  const {items} = state;

  return (
    <SafeAreaView style={styles.flex}>
      <Text>Basket screen</Text>
    </SafeAreaView>
  );
};

export default observer(Basket);
