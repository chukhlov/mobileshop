import {observable} from 'mobx';
import {IShopsListResponse} from '../../interfaces/shops';

type IStateProps = {
  loading: boolean;
  shops: IShopsListResponse;
};

const initialState: IStateProps = {
  shops: [],
  loading: false,
};

export default observable(initialState);
