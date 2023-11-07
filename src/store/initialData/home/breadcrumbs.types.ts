import { NamePath } from "@/router/routes.types";

interface IBreadcrumb {
  name: string;
  path: NamePath;
}

type TBreadcrumb = IBreadcrumb;

export type TBreadcrumbs = TBreadcrumb[];
