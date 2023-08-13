import { type RouteLocationRaw } from "vue-router";

type Crumb = {
  text: string;
  path?: RouteLocationRaw;
};

type Category = {
  title: string;
  img: string;
};

type Slide = {
  img: string;
  info: {
    title: string;
    subtitle: string;
    btn: {
      text: string;
      ico?: string;
      href?: HTMLLinkElement["href"];
      target?: HTMLLinkElement["target"];
    };
  };
};

type Cloth = {
  img: string;
  title: string;
};

type Product = {
  img: string;
  type: string;
  title: string;
  price: number;
};

export type Breadcrumbs = {
  testCrumb1: Crumb;
  testCrumb2: Crumb;
  testCrumb3: Crumb;
};

export type Categories = {
  testCategory1: Category;
  testCategory2: Category;
  testCategory3: Category;
  testCategory4: Category;
  testCategory5: Category;
  testCategory6: Category;
};

export type Slides = {
  testSlide1: Slide;
  testSlide2: Slide;
  testSlide3: Slide;
  testSlide4: Slide;
  testSlide5: Slide;
};

export type Clothes = {
  male: Cloth;
  female: Cloth;
};

export type Products = {
  testProduct1: Product;
  testProduct2: Product;
  testProduct3: Product;
  testProduct4: Product;
  testProduct5: Product;
  testProduct6: Product;
  testProduct7: Product;
  testProduct8: Product;
};

export const breadcrumbs: Breadcrumbs = {
  testCrumb1: {
    text: "Мужское",
  },
  testCrumb2: {
    text: "Категории",
  },
  testCrumb3: {
    text: "Носки",
  },
};

export const categories: Categories = {
  testCategory1: {
    title: "Носки",
    img: "/categories/1.png",
  },
  testCategory2: {
    title: "Толстовки",
    img: "/categories/2.png",
  },
  testCategory3: {
    title: "Куртки",
    img: "/categories/3.png",
  },
  testCategory4: {
    title: "Трусы",
    img: "/categories/4.png",
  },
  testCategory5: {
    title: "Футболки",
    img: "/categories/5.png",
  },
  testCategory6: {
    title: "Украшения",
    img: "/categories/6.png",
  },
};

const defaultSlide = {
  img: "/preview/1.png",
  info: {
    title: "Новая коллекция «дизайнер с душой».",
    subtitle: "В продаже с 2024 года",
    btn: {
      text: "Оформить предзаказ",
      ico: "/icons/shop.svg",
      href: "#",
      target: "_self",
    },
  },
};

export const slides: Slides = {
  testSlide1: {
    ...defaultSlide,
  },
  testSlide2: {
    ...defaultSlide,
  },
  testSlide3: {
    ...defaultSlide,
  },
  testSlide4: {
    ...defaultSlide,
  },
  testSlide5: {
    ...defaultSlide,
  },
};

export const clothes: Clothes = {
  male: {
    img: "/images/male-cloth.png",
    title: "Мужское",
  },
  female: {
    img: "/images/female-cloth.png",
    title: "Женское",
  },
};

const defaultProduct: Product = {
  img: "/products/t-shirt.png",
  type: "t-shirt",
  title: "Recombinate",
  price: 3400,
};

export const products: Products = {
  testProduct1: {
    ...defaultProduct,
  },
  testProduct2: {
    ...defaultProduct,
  },
  testProduct3: {
    ...defaultProduct,
  },
  testProduct4: {
    ...defaultProduct,
  },
  testProduct5: {
    ...defaultProduct,
  },
  testProduct6: {
    ...defaultProduct,
  },
  testProduct7: {
    ...defaultProduct,
  },
  testProduct8: {
    ...defaultProduct,
  },
};
