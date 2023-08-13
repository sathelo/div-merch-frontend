<template>
  <section class="main-settings">
    <div class="main-settings-cards">
      <CMainSettingsCardsCardPrice
        title="Цена"
        :prices="prices"
        @updatePrices="updatePrices"
        class="main-settings-cards-card"
      />
      <CMainSettingsCardsCardFloor class="main-settings-cards-card" />
      <CMainSettingsCardsCardCategory class="main-settings-cards-card" />
      <CMainSettingsCardsCardSize class="main-settings-cards-card" />
      <CMainSettingsCardsCardColor class="main-settings-cards-card" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CMainSettingsCardsCardPrice from "@/components/Main/CMainSettingsCardsCardPrice.vue";
import CMainSettingsCardsCardFloor from "@/components/Main/CMainSettingsCardsCardFloor.vue";
import CMainSettingsCardsCardCategory from "@/components/Main/CMainSettingsCardsCardCategory.vue";
import CMainSettingsCardsCardSize from "@/components/Main/CMainSettingsCardsCardSize.vue";
import CMainSettingsCardsCardColor from "@/components/Main/CMainSettingsCardsCardColor.vue";

const defaultPrices = ref([0, 30]);

const prices = computed({
  get() {
    return defaultPrices.value;
  },

  set(newPrices) {
    defaultPrices.value = newPrices;
  },
});

function updatePrices(newPrices: number[]): void {
  prices.value = newPrices;
}
</script>

<style lang="less" scoped>
.main-settings {
  width: 100%;
  max-width: 276px;

  &-cards {
    &-card {
      .content(32px, 24px, initial);
      border: 1px solid @grey-gradation--100;
    }
  }
}
</style>
