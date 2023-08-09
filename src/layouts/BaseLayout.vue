<template>
  <section class="base-layout">
    <Header />
    <router-view></router-view>
  </section>
</template>

<script setup lang="ts">
import Header from "@/components/Header/CHeader.vue";
</script>

<style lang="less" scoped></style>
