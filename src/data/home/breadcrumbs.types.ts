import { RouteRecordName } from "vue-router";

interface IBreadcrumb {
  name: string;
  path: RouteRecordName;
}

export type Breadcrumb = IBreadcrumb;
export type Breadcrumbs = Breadcrumb[];
