<template>
  <section class="summary">
    <div class="summary__discount discount">
      <p class="discount__title">Сумма заказа</p>
      <span class="discount__price">{{ totalPrice }}</span>
      <p class="discount__subtitle">за&nbsp;{{ totalProducts }}&nbsp;товара</p>
      <div class="discount__wrapper">
        <InputComponent
          v-model="promoValue"
          label="Промокод"
          class="discount__promo"
        >
          Оформить заказ
        </InputComponent>
        <ButtonComponent
          :variant="ECButtonType.secondary"
          class="discount__apply"
        >
          Применить
        </ButtonComponent>
      </div>
    </div>

    <div class="summary__total total">
      <h2 class="total__title">Итого к&nbsp;оплате</h2>
      <span class="total__price">{{ totalPrice }}</span>
      <p class="total__subtitle">Без учета возможной стоимости доставки</p>
      <ButtonComponent :variant="ECButtonType.primary" class="total__checkout">
        Оформить заказ
      </ButtonComponent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

import InputComponent from "@/components/ui/InputComponent/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

interface IProps {
  totalProducts: number;
  totalPrice: number;
}

defineProps<IProps>();

const promoValue = ref("");
</script>

<style lang="less" scoped>
.summary {
  .content(32px, 24px);
  position: sticky;
  top: 0;
  flex-shrink: 0;
  height: 100%;
  border: 1px solid @grey-gradation--100;

  & > *:not(:last-child) {
    &::after {
      content: "";
      .flex-properties(block);
      width: 100%;
      height: 1px;
      background: @grey-gradation--100;
      margin: 32px 0;
    }
  }

  .discount {
    margin-bottom: 24px;

    &__title {
      .text-body;
      color: @grey-gradation--black;
      margin-bottom: 16px;
    }

    &__price {
      .flex-properties(block);
      .text-lead-s;
      color: @grey-gradation--black;
      margin-bottom: 8px;
    }

    &__subtitle {
      .text-s;
      color: @grey-gradation--200;
      margin-bottom: 24px;
    }

    &__wrapper {
      .flex-properties(flex, center);
    }

    &__promo {
      margin-right: 12px;
    }
  }

  .total {
    &__title {
      .text-body;
      color: @grey-gradation--black;
      margin-bottom: 16px;
    }

    &__price {
      .flex-properties(block);
      .text-h2;
      color: @grey-gradation--black;
      margin-bottom: 8px;
    }

    &__subtitle {
      .text-s;
      color: @grey-gradation--200;
      margin-bottom: 24px;
    }

    &__checkout {
      width: 100%;
    }
  }
}
</style>
