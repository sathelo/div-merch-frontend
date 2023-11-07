import { NamePath } from "@/router/routes.types";

type TNav = {
  title: string;
  namePath?: NamePath;
};

export type TMenu = TNav[];
