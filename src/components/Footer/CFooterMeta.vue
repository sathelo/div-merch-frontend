<template>
  <section class="footer-meta">
    <img
      src="/logos/div-merch-copyright.svg"
      alt="div-merch-copyright"
      class="footer-meta__copyright"
    />
    <div class="footer-meta__wrapper">
      <img
        src="/logos/mastercard.svg"
        alt="mastercard"
        class="footer-meta__logo"
      />
      <img src="/logos/mir.svg" alt="mir" class="footer-meta__logo" />
      <img src="/logos/visa.svg" alt="visa" class="footer-meta__logo" />
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.footer-meta {
  .flex-properties(flex, initial, space-between);

  &__wrapper {
    & > *:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
