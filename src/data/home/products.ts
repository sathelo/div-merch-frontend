import type {
  Card,
  Cards,
} from "@/components/ui/CardComponent/CardComponent.types";

const defaultProduct: Card = {
  img: "/products/t-shirt.png",
  type: "Футболка",
  title: "Recombinate",
  price: 3400,
};

export const products: Cards = [
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
