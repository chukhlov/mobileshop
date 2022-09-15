import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ShopStack from './stack/shop';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <ShopStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
