export type CardWithoutPrice = {
  img: string;
  type: string;
  title: string;
};

export interface ICardWithNumberPrice extends CardWithoutPrice {
  price: number;
}

export interface ICardWithStringPrice extends CardWithoutPrice {
  price: string;
}

export type Card = ICardWithNumberPrice | ICardWithStringPrice;
export type Cards = Card[];

export interface ICCardProps {
  infoProduct: Card;
}
