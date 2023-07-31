<template>
  <header class="header">
    <a class="header-logo" href="#" target="_self">
      <img class="header-logo__image" :src="logoDivMerchUrl" alt="div.merch" />
    </a>
    <CHeaderMenu />
    <CHeaderActions />
  </header>
</template>

<script setup lang="ts">
import CHeaderMenu from "./CHeaderMenu.vue";
import CHeaderActions from "./CHeaderActions.vue";
import logoDivMerchUrl from "/logos/div-merch.svg";
</script>

<style lang="less" scoped>
.header {
  .content(24px 40px);
  .flex-properties(flex, initial, space-between);
}
</style>
