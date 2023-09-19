import { NamePath } from "@/router/routes.types";

export type DataInfoWithoutTextBlock = {
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
  namePath?: NamePath;
};

export type DataInfoBlock = {
  text: string;
  args?: DataInfoWithoutTextBlock;
};

export type InfoBlock = {
  title: string;
  items: DataInfoBlock[];
};

export type InfoBlocks = InfoBlock[];

export type Info = InfoBlocks;
