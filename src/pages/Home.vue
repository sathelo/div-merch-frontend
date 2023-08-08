<template>
  <page class="home-page">
    <CMain />
    <CFooter />
  </page>
</template>

<script setup lang="ts">
import CMain from "@/components/Main/CMain.vue";
import CFooter from "@/components/Footer/CFooter.vue";
</script>

<style lang="less" scoped>
.home-page {
  .page();
}
</style>
