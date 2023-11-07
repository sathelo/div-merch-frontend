import { NamePath } from "@/router/routes.types";

export type TDataFooterWithoutTextBlock = {
  href?: HTMLLinkElement["href"];
  target?: HTMLLinkElement["target"];
  namePath?: NamePath;
};

type TDataFooterBlock = {
  text: string;
  args?: TDataFooterWithoutTextBlock;
};

type TFooterBlock = {
  title: string;
  items: TDataFooterBlock[];
};

type TFooterBlocks = TFooterBlock[];

export type TFooter = TFooterBlocks;
