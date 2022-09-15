import {AbortController} from 'native-abort-controller';
import axios from './axios';

export const cartController = new AbortController();

type IAddItemToCartProps = {
  id: number;
  quantity: number;
};

export const getCartItems = () => {
  return axios.get('/cart', {
    signal: cartController.signal,
  });
};

export const addItemToCart = (params: IAddItemToCartProps) => {
  return axios.post('/cart', {
    params,
    signal: cartController.signal,
  });
};

export const updateCart = (params: IAddItemToCartProps) => {
  return axios.put('/cart', {
    params,
    signal: cartController.signal,
  });
};

export const resetCart = (params: IAddItemToCartProps) => {
  return axios.delete('/cart', {
    params,
    signal: cartController.signal,
  });
};

export const deleteFromCart = (id: number) => {
  return axios.delete('/cart/' + id, {
    signal: cartController.signal,
  });
};
