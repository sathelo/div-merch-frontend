import { RouteRecordName } from "vue-router";

export type DataInfoWithoutTextBlock = {
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
  namePath?: RouteRecordName;
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
