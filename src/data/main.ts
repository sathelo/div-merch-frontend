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
  img: "/slides/1.png",
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
