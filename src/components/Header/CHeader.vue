<template>
  <header class="header">
    <a class="header-logo" href="#" target="_self">
      <img
        class="header-logo__image"
        src="/images/header/logo.svg"
        alt="logo"
      />
    </a>
    <CMenu />
    <CActions />
    <ElMessage />
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
