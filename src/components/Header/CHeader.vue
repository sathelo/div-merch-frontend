<template>
  <header class="header">
    <img src="/images/header/logo.svg" alt="logo" class="header__logo" />
    <CMenu />
    <CActions />
  </header>
</template>

<script setup lang="ts">
import CMenu from "./CMenu.vue";
import CActions from "./CActions.vue";
</script>

<style lang="less" scoped>
.header {
  .content(24px 40px);
  .flex-properties(flex, initial, space-between);
}
</style>
