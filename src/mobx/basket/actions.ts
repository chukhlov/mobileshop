import {action} from 'mobx';
import state from './state';

export const addItemToBasket = action((id: number) => {
  state.items.push(id);
});
