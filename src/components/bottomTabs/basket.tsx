import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Icon from 'react-native-vector-icons/FontAwesome5';
import state from '../../mobx/basket/state';
import styles from './styles';

const BacketTab = ({accessibilityState, onPress}: any) => {
  const {items} = state;

  const color = accessibilityState.selected
    ? styles.activeTabColor.color
    : styles.inactiveTabColor.color;

  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <View>
        <Icon name="shopping-basket" size={24} color={color} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{items.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default observer(BacketTab);
