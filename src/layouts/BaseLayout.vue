<template>
  <section class="base-layout container">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </section>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import FooterComponent from "@/components/Footer/FooterComponent.vue";
</script>

<style lang="less" scoped></style>
