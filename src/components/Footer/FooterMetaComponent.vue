<template>
  <section class="meta">
    <img
      :src="CopyrightDivMerchUrlLogo"
      alt="div-merch-copyright"
      class="meta__copyright logo"
    />
    <div class="meta__wrapper">
      <img
        :src="MastercardUrlLogo"
        alt="mastercard"
        class="meta__mastercard logo"
      />
      <img :src="LogoMirUrlLogo" alt="mir" class="meta__mir logo" />
      <img :src="VisaUrlLogo" alt="visa" class="meta__visa logo" />
    </div>
  </section>
</template>

<script setup lang="ts">
import CopyrightDivMerchUrlLogo from "/logos/div-merch-copyright.svg";
import MastercardUrlLogo from "/logos/mastercard.svg";
import LogoMirUrlLogo from "/logos/mir.svg";
import VisaUrlLogo from "/logos/visa.svg";
</script>

<style lang="less" scoped>
.meta {
  .flex-properties(flex, initial, space-between);

  &__wrapper {
    & > *:not(:last-child) {
      margin-right: 24px;
    }
  }

  .logo {
    user-select: none;
  }
}
</style>
