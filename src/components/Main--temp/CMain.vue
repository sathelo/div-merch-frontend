<template>
  <main class="main">
    <!-- test/delete/stash -->
    <CMainBreadcrumbs :breadcrumbs="breadcrumbs" />
    <div class="main__wrapper">
      <CMainSettigs />
      <CMainContent />
    </div>
  </main>
</template>

<script setup lang="ts">
import CMainBreadcrumbs from "@/components/Main/CMainBreadcrumbs.vue";
import CMainSettigs from "@/components/Main/CMainSettigs.vue";
import CMainContent from "@/components/Main/CMainContent.vue";
import { breadcrumbs } from "@/data/main";
</script>

<style lang="less" scoped>
.main {
  .content(40px, 32px, @grey-gradation--white);
  width: 100%;
  height: 100%;

  &__wrapper {
    .flex-properties(flex, initial, space-between);
  }
}
</style>
