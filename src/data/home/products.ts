import type { Product, Products } from "@/data/home/products.types";

const defaultProduct: Product = {
  img: "/products/t-shirt.png",
  type: "Футболка",
  title: "Recombinate",
  price: 3400,
};

export const products: Products = [
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
  {
    ...defaultProduct,
  },
];
