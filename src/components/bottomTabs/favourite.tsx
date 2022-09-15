import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';

const FavouriteTab = ({accessibilityState, onPress}: any) => {
  const color = accessibilityState.selected
    ? styles.activeTabColor.color
    : styles.inactiveTabColor.color;

  return (
    <TouchableOpacity style={styles.tab} onPress={onPress}>
      <Icon name="heart" size={24} color={color} />
    </TouchableOpacity>
  );
};

export default FavouriteTab;
