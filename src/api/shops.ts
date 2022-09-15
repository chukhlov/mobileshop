import {AbortController} from 'native-abort-controller';
import axios from './axios';

export const shopsController = new AbortController();

type IGetShopProps = {
  favorite?: boolean;
};

export const getShopsList = ({favorite}: IGetShopProps) => {
  return axios.get('/items', {
    params: {
      favorite,
    },
    signal: shopsController.signal,
  });
};

export const getShop = (id: number) => {
  return axios.get(`/items/${id}/`, {
    signal: shopsController.signal,
  });
};
