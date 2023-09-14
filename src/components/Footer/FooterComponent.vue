<template>
  <footer class="footer">
    <FooterInfoComponent class="footer__info" :info="info" />
    <span class="footer__line" />
    <FooterMetaComponent class="footer__meta" />
  </footer>
</template>

<script setup lang="ts">
import { info } from "@/data/footer/info";

import FooterInfoComponent from "@/components/Footer/FooterInfoComponent.vue";
import FooterMetaComponent from "@/components/Footer/FooterMetaComponent.vue";
</script>

<style lang="less" scoped>
.footer {
  .content(60px 40px);
  .flex-properties(flex, initial, space-between);
  flex-direction: column;
  margin-top: auto;

  &__line {
    width: 100%;
    height: 1px;
    background: @grey-gradation--200;
    margin-bottom: 32px;
  }
}
</style>
