<template>
  <section class="summary">
    <h3 class="summary__title">Итого к&nbsp;оплате</h3>
    <span class="summary__total">{{ total }}</span>
    <div class="summary__subtitle">Без учета возможной стоимости доставки</div>
    <ButtonComponent :variant="ECButtonType.primary">
      Оформить заказ
    </ButtonComponent>
  </section>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

interface IProps {
  total: string;
}

defineProps<IProps>();
</script>

<style lang="less" scoped>
.summary {
  &__title {
    .text-body;
    color: @grey-gradation--black;
    margin-bottom: 16px;
  }

  &__total {
    .text-h2;
    color: @grey-gradation--black;
    margin-bottom: 8px;
  }

  &__subtitle {
    .text-s;
    color: @grey-gradation--200;
    margin-bottom: 24px;
  }
}
</style>
