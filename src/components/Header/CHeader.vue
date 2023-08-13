<template>
  <header class="header">
    <a class="header__logo logo" href="#" target="_self">
      <img class="logo__image" :src="logoDivMerchUrl" alt="div.merch" />
    </a>
    <CHeaderMenu class="header__menu" :menu="menu" />
    <CHeaderActions class="header__actions" :actions="actions" />
  </header>
</template>

<script setup lang="ts">
import CHeaderMenu from "./CHeaderMenu.vue";
import CHeaderActions from "./CHeaderActions.vue";

import logoDivMerchUrl from "/logos/div-merch.svg";

import { menu, actions } from "@/data/menu";
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
