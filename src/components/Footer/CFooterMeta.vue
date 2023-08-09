<template>
  <section class="meta">
    <img
      :src="copyrightDivMerchUrl"
      alt="div-merch-copyright"
      class="meta__copyright"
    />
    <div class="meta__wrapper">
      <img :src="logoMastercardUrl" alt="mastercard" class="meta__logo" />
      <img :src="logoMirUrl" alt="mir" class="meta__logo" />
      <img :src="logoVisaUrl" alt="visa" class="meta__logo" />
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
.meta {
  .flex-properties(flex, initial, space-between);

  &__wrapper {
    & > *:not(:last-child) {
      margin-right: 24px;
    }
  }
}
</style>
