import {AbortController} from 'native-abort-controller';
import axios from './axios';
import {IShopsListResponse} from '../interfaces/shops';

export const shopsController = new AbortController();

export const getShopsList = (favorite?: boolean) => {
  return axios.get<IShopsListResponse>('/items', {
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
