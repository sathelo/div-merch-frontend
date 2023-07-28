<template>
  <footer class="footer">
    <CFooterInfo :footer="footer" />
    <span class="footer__line"></span>
    <CFooterMeta />
  </footer>
</template>

<script setup lang="ts">
import CFooterInfo from "@/components/Footer/CFooterInfo.vue";
import CFooterMeta from "@/components/Footer/CFooterMeta.vue";
import { footer } from "@/data/footer";
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
