import {observable} from 'mobx';
import {IAddItemToCartProps, IShopShortProps} from '../../interfaces/shops';

type IStateProps = {
  loading: boolean;
  items: Map<string, IShopShortProps & IAddItemToCartProps>;
};

const initialState: IStateProps = {
  items: new Map(),
  loading: false,
};

export default observable.object(initialState);
