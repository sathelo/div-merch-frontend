<template>
  <page class="home-page">
    <CHeader />
    <CMain />
    <CFooter />
  </page>
</template>

<script setup lang="ts">
import CHeader from "@/components/Header/CHeader.vue";
import CMain from "@/components/Main/CMain.vue";
import CFooter from "@/components/Footer/CFooter.vue";
</script>

<style lang="less" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
