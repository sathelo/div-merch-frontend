<template>
  <footer class="footer">
    <FooterInfoComponent class="footer__info" :info="store.$state.footer" />
    <span class="footer__line" />
    <FooterMetaComponent class="footer__meta" />
  </footer>
</template>

<script setup lang="ts">
import { useStore } from "@/store/store";

import FooterInfoComponent from "@/components/Footer/FooterInfoComponent.vue";
import FooterMetaComponent from "@/components/Footer/FooterMetaComponent.vue";

const store = useStore();
</script>

<style lang="less" scoped>
.footer {
  .content(60px 40px);
  .flex-properties(flex, initial, space-between);
  flex-direction: column;
  margin-top: auto;

  &__line {
    .flex-properties(block);
    width: 100%;
    height: 1px;
    background: @grey-gradation--200;
    margin-bottom: 32px;
  }
}
</style>
