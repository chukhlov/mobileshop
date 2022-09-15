import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List is empty</Text>
    </View>
  );
};

export default NoData;
