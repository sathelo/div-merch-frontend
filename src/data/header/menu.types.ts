import type { NamePath } from "@/router/routes.types";

export type Nav = {
  title: string;
  namePath?: NamePath;
};

export type Menu = Nav[];
