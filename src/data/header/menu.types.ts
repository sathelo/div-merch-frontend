export type Nav = {
  name: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export type Menu = Nav[];
