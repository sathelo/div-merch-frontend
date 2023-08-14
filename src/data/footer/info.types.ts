export type DataInfoBlock = {
  text: string;
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
};

export type InfoBlock = {
  title: string;
  items: DataInfoBlock[];
};

export type InfoBlocks = InfoBlock[];

export type Info = InfoBlocks;
