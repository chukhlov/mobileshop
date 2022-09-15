import {observable} from 'mobx';

type IStateProps = {
  loading: boolean;
  items: number[];
};

const initialState: IStateProps = {
  items: [],
  loading: false,
};

export default observable(initialState);
