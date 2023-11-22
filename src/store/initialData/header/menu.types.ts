import { NamePath } from "@/router/routes.types";

type TNav = {
  title: string;
  originalTitle: string;
  namePath?: NamePath;
};

export type TMenu = TNav[];
