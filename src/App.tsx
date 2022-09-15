import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlashMessage from 'react-native-flash-message';
import MainStack from './stack/main';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.flex}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
      <FlashMessage position="top" />
    </SafeAreaView>
  );
};

export default App;
