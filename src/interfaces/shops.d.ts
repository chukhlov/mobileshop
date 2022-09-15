export type IShopShortProps = {
  id: number;
  price: number;
  name: string;
  image: string;
};

export type IShopProps = IShopShortProps & {
  description: string;
};

export type IShopsListResponse = IShopShortProps[];

export type IAddItemToCartProps = {
  id: number | string;
  quantity: number;
};
