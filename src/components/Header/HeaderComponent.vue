<template>
  <header class="header">
    <a class="header__logo logo" @click="router.push({ name: Routes.home })">
      <img class="logo__image" :src="logoDivMerchUrl" alt="div.merch" />
    </a>
    <HeaderMenuComponent class="header__menu" :menu="menu" />
    <HeaderActionsComponent
      class="header__actions"
      :actions="filteredActions"
    />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

import HeaderMenuComponent from "./HeaderMenuComponent.vue";
import HeaderActionsComponent from "./HeaderActionsComponent.vue";

import logoDivMerchUrl from "/logos/div-merch.svg";

import { menu } from "@/data/header/menu";
import { actions } from "@/data/header/action";
import { Routes } from "@/router/routes.types";
import type { Action } from "@/data/header/action.types";

const filteredActions = computed(() => {
  const reg = /(icons\/)(\w+).svg/;
  const res = actions.map((action: Action) => {
    const match = action.iconUrl.match(reg);
    const iconName = match ? match[2] : undefined;
    return {
      ...action,
      name: iconName,
    };
  });
  return res;
});

const router = useRouter();
</script>

<style lang="less" scoped>
.header {
  .content(24px 40px);
  .flex-properties(flex, center, space-between);

  &__logo {
    user-select: none;
    cursor: pointer;
  }
}
</style>
