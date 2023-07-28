type FooterItem = {
  text: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export type Footer = {
  onlineShop: {
    title: string;
    items: FooterItem[];
  };
  offlineShop: {
    title: string;
    items: FooterItem[];
  };
  support: {
    title: string;
    items: FooterItem[];
  };
  info: {
    title: string;
    items: FooterItem[];
  };
  feedback: {
    title: string;
    items: FooterItem[];
  };
};

export const footer: Footer = {
  onlineShop: {
    title: "Онлайн магазин",
    items: [
      {
        text: "+7 (928) 700-80-90",
      },
      { text: "+7 (928) 700-90-90" },
    ],
  },
  offlineShop: {
    title: "Офлайн магазин",
    items: [
      {
        text: "Москва, Ленина 220",
      },
    ],
  },
  support: {
    title: "Поддержка",
    items: [
      {
        text: "Помощь",
        href: "#",
        target: "_self",
      },
      {
        text: "Возврат",
        href: "#",
        target: "_self",
      },
      {
        text: "Доставка и оплата",
        href: "#",
        target: "_self",
      },
      {
        text: "Программа лояльности",
        href: "#",
        target: "_self",
      },
    ],
  },
  info: {
    title: "Информация",
    items: [
      {
        text: "Контакты",
        href: "#",
        target: "_self",
      },
      {
        text: "Магазины",
        href: "#",
        target: "_self",
      },
      {
        text: "Блог",
        href: "#",
        target: "_self",
      },
    ],
  },
  feedback: {
    title: "Обратная связь",
    items: [
      {
        text: "Подписаться на email рассылку",
        href: "#",
        target: "_self",
      },
      {
        text: "Див в вк",
        href: "#",
        target: "_self",
      },
      {
        text: "Див в телеграме",
        href: "#",
        target: "_self",
      },
    ],
  },
};
