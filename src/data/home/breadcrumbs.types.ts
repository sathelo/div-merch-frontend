import { NamePath } from "@/router/routes.types";

interface IBreadcrumb {
  name: string;
  path: NamePath;
}

export type Breadcrumb = IBreadcrumb;
export type Breadcrumbs = Breadcrumb[];
