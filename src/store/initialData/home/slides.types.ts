export type TSlide = {
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

export type TSlides = TSlide[];
