import {runInAction} from 'mobx';
import {showMessage} from 'react-native-flash-message';
import {getShopsList} from '../../api/shops';
import state from './state';
import {IShopsListResponse} from '../../interfaces/shops';

export const getShops = async () => {
  let result: IShopsListResponse = [];
  try {
    runInAction(() => {
      state.loading = true;
    });

    const {data} = await getShopsList();
    result = data;
  } catch (error: any) {
    showMessage({
      message: "Can't load shop list",
      description: error?.message,
      type: 'danger',
    });
  } finally {
    runInAction(() => {
      state.loading = false;
      state.shops = result;
    });
  }
};
