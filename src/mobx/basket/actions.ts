import {runInAction} from 'mobx';
import {showMessage} from 'react-native-flash-message';
import {
  addItemToCart,
  getCartItems,
  updateCart,
  deleteFromCart,
} from '../../api/cart';
import state from './state';
import {IAddItemToCartProps, IShopShortProps} from '../../interfaces/shops';
import {IBasketItemProps} from '../../interfaces/basket';

export const getBasketItems = async () => {
  try {
    const {data} = await getCartItems();
    runInAction(() => {
      data.forEach((item: IBasketItemProps) => {
        const id = String(item.item_id);

        state.items.set(id, {
          id: item.item_id,
          price: item.price,
          quantity: item.quantity,
          name: item.name,
          image: item.image,
        });
      });
    });
  } catch (err: any) {
    showMessage({
      message: "Can't get list of basket items",
      description: err?.message,
      type: 'danger',
    });
  }
};

export const addItemToBasket = async (
  props: IShopShortProps & IAddItemToCartProps,
) => {
  let isRequestSuccess = false;

  try {
    runInAction(() => {
      state.loading = true;
    });

    await addItemToCart({
      id: props.id,
      quantity: props.quantity,
    });

    isRequestSuccess = true;
  } catch (err: any) {
    showMessage({
      message: "Can't add item to basket",
      description: err?.message,
      type: 'danger',
    });
  }

  runInAction(() => {
    state.loading = false;

    if (isRequestSuccess) {
      const id = String(props.id);
      const shop = state.items.get(id);
      const quantity = (shop?.quantity || 0) + props.quantity;

      state.items.set(id, {
        ...props,
        quantity,
      });
    }
  });
};

export const updateItemsInCart = async (props: {
  id: number;
  quantity: number;
}) => {
  let isUpdateSuccess = false;

  try {
    runInAction(() => {
      state.loading = true;
    });

    await updateCart(props);

    runInAction(() => {
      const id = String(props.id);
      const shop = state.items.get(id) as any;

      state.items.set(id, {
        ...shop,
        quantity: props.quantity,
      });
    });

    isUpdateSuccess = true;
  } catch (err: any) {
    showMessage({
      message: "Can't delete item from the basket",
      description: err?.message,
      type: 'danger',
    });
  }

  runInAction(() => {
    state.loading = false;
  });

  return isUpdateSuccess;
};

export const removeItemFromCart = async (id: number) => {
  try {
    runInAction(() => {
      state.loading = true;
    });

    await deleteFromCart(id);

    runInAction(() => {
      state.items.delete(String(id));
    });
  } catch (err: any) {
    showMessage({
      message: "Can't update basket",
      description: err?.message,
      type: 'danger',
    });
  }

  runInAction(() => {
    state.loading = false;
  });
};
