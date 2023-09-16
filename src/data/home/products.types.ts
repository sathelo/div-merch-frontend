export type ProductWithoutPrice = {
  img: string;
  type: string;
  title: string;
};

export interface IProductWithNumberPrice extends ProductWithoutPrice {
  price: number;
}

export interface IProductWithStringPrice extends ProductWithoutPrice {
  price: string;
}

export type Product = IProductWithNumberPrice | IProductWithStringPrice;
export type Products = Product[];
