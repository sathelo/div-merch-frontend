<template>
  <page class="home">
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

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
