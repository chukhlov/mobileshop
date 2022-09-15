import React, {useMemo} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome5';
import state from '../../mobx/basket/state';
import styles from './styles';

const BacketTab = ({accessibilityState, onPress}: any) => {
  const keys = state.items.keys();

  const color = accessibilityState.selected
    ? styles.activeTabColor.color
    : styles.inactiveTabColor.color;

  const amountOfItemInBasket = useMemo(() => {
    return [...keys].reduce((amount, key) => {
      const shop = state.items.get(key);
      const quantity = shop?.quantity || 0;

      return amount + quantity;
    }, 0);
  }, [keys]);

  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <View>
        <Icon name="shopping-basket" size={24} color={color} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{amountOfItemInBasket}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default observer(BacketTab);
