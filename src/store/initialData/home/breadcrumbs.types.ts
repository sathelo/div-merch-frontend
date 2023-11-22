import { ETagButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";

import { NamePath } from "@/router/routes.types";

interface IBreadcrumb {
  tag?: ETagButton;
  name?: string;
  path?: NamePath;
}

type TBreadcrumb = IBreadcrumb;

export type TBreadcrumbs = TBreadcrumb[];
