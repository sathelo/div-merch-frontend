export type TCCard = {
  image: string;
  info: {
    type: string;
    title: string;
    price: number | string;
  };
};

export type TCCards = TCCard[];
