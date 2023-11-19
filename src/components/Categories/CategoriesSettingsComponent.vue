<template>
  <section class="settings">
    <SettingPriceComponent
      title="Цена"
      :prices="prices"
      :max-price="maxPrice"
      class="settings__setting"
      @update-prices="updatePrices"
    />
    <SettingFloorComponent title="Пол" class="settings__setting" />
    <SettingCategoryComponent title="Категория" class="settings__setting" />
    <SettingSizeComponent title="Размер" class="settings__setting" />
    <SettingColorComponent title="Цвет" class="settings__setting" />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { usePriceRouteQuery } from "@/utils/query/usePriceRouteQuery";

import SettingPriceComponent from "@/components/Settings/SettingPriceComponent.vue";
import SettingFloorComponent from "@/components/Settings/SettingFloorComponent.vue";
import SettingCategoryComponent from "@/components/Settings/SettingCategoryComponent.vue";
import SettingSizeComponent from "@/components/Settings/SettingSizeComponent.vue";
import SettingColorComponent from "@/components/Settings/SettingColorComponent.vue";

const maxPrice = ref(480000);
const defaultPrices: [number, number] = [0, 240000];

const prices = usePriceRouteQuery(defaultPrices);

function updatePrices(newPrices: [number, number]): void {
  prices.value = newPrices;
}
</script>

<style lang="less" scoped>
.settings {
  width: 100%;
  max-width: 340px;
}
</style>
