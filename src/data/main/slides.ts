import type { Slides } from "@/data/main/slides.types";

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

export const slides: Slides = [
  {
    ...defaultSlide,
  },
  {
    ...defaultSlide,
  },
  {
    ...defaultSlide,
  },
  {
    ...defaultSlide,
  },
  {
    ...defaultSlide,
  },
];
