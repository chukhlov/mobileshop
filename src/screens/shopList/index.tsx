import React, {useCallback, useEffect, useMemo} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {observer} from 'mobx-react-lite';
import ShopItem from './shopItem';
import Loader from '../../components/loader';
import NoData from '../../components/noData';
import state from '../../mobx/shopList/state';
import {getShops} from '../../mobx/shopList/actions';
import styles from './styles';
import {IShopShortProps} from '../../interfaces/shops';

const ShopList = () => {
  const {loading, shops} = state;

  useEffect(() => {
    getShops();
  }, []);

  const keyExtractor = useCallback(
    (item: IShopShortProps) => 'shop-item-' + item.id,
    [],
  );

  const renderItem = useCallback(
    ({item}: {item: IShopShortProps}) => <ShopItem {...item} />,
    [],
  );

  const data = useMemo(() => [...shops], [shops]);

  return (
    <SafeAreaView style={styles.flex}>
      <FlatList
        contentContainerStyle={styles.grow}
        data={data}
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

export default observer(ShopList);
