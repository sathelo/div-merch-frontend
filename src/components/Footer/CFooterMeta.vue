<template>
  <section class="footer-meta">
    <img
      :src="copyrightDivMerchUrl"
      alt="div-merch-copyright"
      class="footer-meta__copyright"
    />
    <div class="footer-meta__wrapper">
      <img
        :src="logoMastercardUrl"
        alt="mastercard"
        class="footer-meta__logo"
      />
      <img :src="logoMirUrl" alt="mir" class="footer-meta__logo" />
      <img :src="logoVisaUrl" alt="visa" class="footer-meta__logo" />
    </div>
  </section>
</template>

<script setup lang="ts">
import copyrightDivMerchUrl from "/logos/div-merch-copyright.svg";
import logoMastercardUrl from "/logos/mastercard.svg";
import logoMirUrl from "/logos/mir.svg";
import logoVisaUrl from "/logos/visa.svg";
</script>

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
