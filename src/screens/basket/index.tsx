import React, {useCallback} from 'react';
import {observer} from 'mobx-react-lite';
import {SafeAreaView, FlatList} from 'react-native';
import NoData from '../../components/noData';
import Loader from '../../components/loader';
import BasketItem from './basketItem';
import state from '../../mobx/basket/state';
import styles from './styles';

const Basket = () => {
  const {items, loading} = state;
  const keys = items.keys();

  const keyExtractor = useCallback((key: string) => 'basket-item-' + key, []);

  const renderItem = useCallback(({item}: {item: string}) => {
    const shop = state.items.get(item) as any;

    return <BasketItem {...shop} />;
  }, []);

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        contentContainerStyle={styles.grow}
        data={[...keys]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        maxToRenderPerBatch={10}
        initialNumToRender={10}
        ListEmptyComponent={NoData}
        numColumns={2}
      />
      <Loader show={loading} />
    </SafeAreaView>
  );
};

export default observer(Basket);
