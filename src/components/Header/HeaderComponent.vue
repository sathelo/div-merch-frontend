<template>
  <header class="header">
    <a class="header__logo logo" @click="navigateToRoute(Routes.home)">
      <img class="logo__image" :src="DivMerchUrlLogo" alt="div.merch" />
    </a>
    <HeaderMenuComponent class="header__menu" :menu="menu" />
    <HeaderActionsComponent class="header__actions" :actions="actions" />
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { navigateToRoute } from "@/router/routes.ts";
import { useStore } from "@/store/store";

import HeaderMenuComponent from "@/components/Header/HeaderMenuComponent.vue";
import HeaderActionsComponent from "@/components/Header/HeaderActionsComponent.vue";

import DivMerchUrlLogo from "/logos/div-merch.svg";

import { Routes } from "@/router/routes.enums";

const store = useStore();
const menu = computed(() => store.$state.menu);
const actions = computed(() => store.$state.actions);
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
