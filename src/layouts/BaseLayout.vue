<template>
  <section class="base-layout">
    <Header />
    <router-view />
    <Footer />
  </section>
</template>

<script setup lang="ts">
import Header from "@/components/Header/CHeader.vue";
import Footer from "@/components/Footer/CFooter.vue";
</script>

<style lang="less" scoped></style>
