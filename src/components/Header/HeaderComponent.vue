<template>
  <header class="header">
    <a class="header__logo logo" @click="navigateToRoute(Routes.home)">
      <img class="logo__image" :src="DivMerchUrlLogo" alt="div.merch" />
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
import { navigateToRoute } from "@/router/routes.ts";

import { menu } from "@/data/header/menu";
import { actions } from "@/data/header/action";

import DivMerchUrlLogo from "/logos/div-merch.svg";

import HeaderMenuComponent from "@/components/Header/HeaderMenuComponent.vue";
import HeaderActionsComponent from "@/components/Header/HeaderActionsComponent.vue";

import { Routes } from "@/router/routes.enums";

const filteredActions = computed(() => {
  const reg = /(icons\/)(\w+).svg/;
  const res = actions.map((action) => {
    const match = action.iconUrl.match(reg);
    const iconName = match ? match[2] : undefined;
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
    cursor: pointer;
  }
}
</style>
