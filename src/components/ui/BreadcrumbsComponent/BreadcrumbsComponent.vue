<template>
  <ul
    itemscope
    itemtype="https://schema.org/BreadcrumbList"
    class="breadcrumbs"
  >
    <li
      v-for="(breadcrumb, breadcrumbIndex) in breadcrumbs"
      :key="breadcrumbIndex"
      itemprop="itemListElement"
      itemtype="https://schema.org/ListItem"
      itemscope
      class="breadcrumbs__crumb crumb"
    >
      <ButtonComponent
        :tag="breadcrumb.tag"
        :variant="ECButtonType.linkCrumb"
        class="crumb__btn btn"
        itemprop="item"
        @click.stop="
          breadcrumb?.path && breadcrumbIndex !== breadcrumbs.length - 1
            ? $router.replace(
                breadcrumbs
                  .slice(0, breadcrumbIndex + 1)
                  .map((b) => b.path)
                  .join(''),
              )
            : ''
        "
      >
        <span class="btn__text" itemprop="name">
          {{ breadcrumb.name }}
        </span>
      </ButtonComponent>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "@/store/store";

import router from "@/router/routes.ts";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";
import { ETagButton } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import { TBreadcrumbs } from "@/store/initialData/home/breadcrumbs.types";
import { TMenu } from "@/store/initialData/header/menu.types";
import { TCategories } from "@/store/initialData/home/categories.types";
import { TClothes } from "@/store/initialData/home/clothes.types";
import {
  EQueriesCloth,
  useClothRouteQuery,
} from "@/utils/query/useClothRouteQuery";
import {
  EQueriesCategory,
  useCategoriesRouteQuery,
} from "@/utils/query/useCategoriesRouteQuery";

const store = useStore();

const menu = store.$state.menu;
const clothes = store.$state.clothes;
const categories = store.$state.categories;

const currentRouteName = router.currentRoute.value.name;
const currentRouteParams = router.currentRoute.value.params;
const cloth = useClothRouteQuery();
const category = useCategoriesRouteQuery();

const breadcrumbs = computed((): TBreadcrumbs => {
  const res: TBreadcrumbs = [];

  if (currentRouteName)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(String(currentRouteName), menu),
      path: String(currentRouteName) + "?",
    });

  if (cloth.value.length)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(cloth.value, clothes),
      path: `cloth=${cloth.value}`,
    });

  if (category.value.length)
    res.push({
      tag: ETagButton.a,
      name: translateTextEngToRu(category.value, categories),
      path: `categories=${category.value}`,
    });

  if (currentRouteParams.id)
    res.push({
      tag: ETagButton.a,
      name: `${Object.keys(currentRouteParams)[0]}`,
    });

  return res;
});

function translateTextEngToRu<
  P extends string | EQueriesCategory[] | EQueriesCloth[],
  T extends TMenu | TCategories | TClothes,
>(originalText: string | Array<P>, arr: T): string | undefined {
  const currentLine = Array.isArray(originalText)
    ? (originalText as string[])
    : originalText.split(",");
  const filteredArrWithText: string[] = [];
  arr.forEach((a) => {
    if (currentLine.includes(a.originalTitle))
      filteredArrWithText.push(a.title);
  });
  return filteredArrWithText.join(",");
}
</script>

<style lang="less" scoped>
.breadcrumbs {
  .flex-properties(flex, center);

  & > :not(&__crumb:last-of-type) {
    .flex-properties(flex, center);

    &::after {
      content: "";
      padding: 6px;
      background-image: url("/icons/arrow-right.svg");
      background-repeat: no-repeat;
      background-position: center center;
      margin: 0 2px;
    }
  }
}
</style>
