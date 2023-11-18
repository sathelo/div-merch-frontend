import { TProduct } from "@/store/initialData/home/products.types";
import { IProductCardInfoTotal } from "@/components/Product/ProductCardInfoTotalComponent.types";

export type TBasket = {
  product: TProduct;
  countDuplicateProduct: number;
};
export type TBaskets = TBasket[];

export type TBasketCard = {
  product: {
    id: string;
    images: string;
    info: {
      title: string;
      type: string;
      total: IProductCardInfoTotal;
    };
  };
  countDuplicateProduct: number;
};
