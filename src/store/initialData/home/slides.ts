import { TSlide, TSlides } from "@/store/initialData/home/slides.types";

const defaultSlide: TSlide = {
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

export const initialSlides: TSlides = [
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
