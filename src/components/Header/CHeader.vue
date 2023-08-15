<template>
  <header class="header">
    <a class="header__logo logo" href="#" target="_self">
      <img class="logo__image" :src="logoDivMerchUrl" alt="div.merch" />
    </a>
    <CHeaderMenu class="header__menu" :menu="menu" />
    <CHeaderActions class="header__actions" :actions="filteredActions" />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

import CHeaderMenu from "./CHeaderMenu.vue";
import CHeaderActions from "./CHeaderActions.vue";

import logoDivMerchUrl from "/logos/div-merch.svg";

import { menu } from "@/data/header/menu";
import { actions } from "@/data/header/action";
import type { Action } from "@/data/header/action.types";

const filteredActions = computed(() => {
  const reg = /(icons\/)(\w+).svg/;
  const res = actions.map((action: Action) => {
    const match = action.iconUrl.match(reg);
    const iconName = match ? match[2] : null;
    return {
      ...action,
      name: iconName,
    };
  });
  return res;
});
</script>

<style lang="less" scoped>
.header {
  .content(24px 40px);
  .flex-properties(flex, center, space-between);

  &__logo {
    user-select: none;
  }
}
</style>
