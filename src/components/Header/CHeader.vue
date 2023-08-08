<template>
  <header class="header">
    <a class="header__logo logo" href="#" target="_self">
      <img class="logo__image" :src="logoDivMerchUrl" alt="div.merch" />
    </a>
    <CHeaderMenu :menu="menu" />
    <CHeaderActions :actions="actions" />
  </header>
</template>

<script setup lang="ts">
import CHeaderMenu from "./CHeaderMenu.vue";
import CHeaderActions from "./CHeaderActions.vue";

import logoDivMerchUrl from "/logos/div-merch.svg";

import { menu } from "@/data/menu";
import { actions } from "@/data/actions";
</script>

<style lang="less" scoped>
.header {
  .content(24px 40px);
  .flex-properties(flex, initial, space-between);
}
</style>
