<template>
  <div class="card">
    <img class="card__photo" :src="product.images" :alt="product.info.type" />

    <div class="card__info">
      <p class="card__title">{{ product.info.title }}</p>
      <p class="card__type">{{ product.info.type }}</p>
      <div class="card__settings settings">
        <ButtonComponent
          v-for="(button, buttonIndex) in buttons"
          :key="buttonIndex"
          class="settings__setting setting"
          :variant="ECButtonType.round"
        >
          <template #icon>
            <img class="setting__ico" :src="button.ico" :alt="button.ico" />
          </template>
        </ButtonComponent>
      </div>
    </div>

    <div class="card__total">
      <p class="card__price">{{ fullPrice }}</p>
      <div class="card__quantity-controller quantity-controller">
        <AddRemoveComponent
          :variant="ECAddRemoveType.remove"
          class="quantity-controller__btn quantity-controller__btn--decrement"
          @click="
            changeQuantityProductInBasket(
              EActionBasketForProduct.decrement,
              product.id,
            )
          "
        />
        <span class="quantity-controller__total">{{
          props.countDuplicateProduct
        }}</span>
        <AddRemoveComponent
          :variant="ECAddRemoveType.add"
          class="quantity-controller__btn quantity-controller__btn--increment"
          @click="
            changeQuantityProductInBasket(
              EActionBasketForProduct.increment,
              product.id,
            )
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useStore } from "@/store/store";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";
import AddRemoveComponent from "@/components/ui/AddRemoveComponent/AddRemoveComponent.vue";
import HeartSmallIco from "/icons/heart-small.svg";
import BasketIco from "/icons/basket.svg";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";
import { ECAddRemoveType } from "@/components/ui/AddRemoveComponent/AddRemoveComponent.enums";
import { EActionBasketForProduct } from "@/store/initialData/basket/basket.enums";

import { TBasketCard } from "@/store/initialData/basket/basket.types";

type IProps = TBasketCard;

const store = useStore();
const { changeQuantityProductInBasket } = store;
const props = defineProps<IProps>();

const buttons = ref([
  {
    ico: HeartSmallIco,
  },
  {
    ico: BasketIco,
  },
]);

const fullPrice = computed(() => {
  return Number(props.product.info.total.price) * props.countDuplicateProduct;
});
</script>

<style lang="less" scoped>
.card {
  .flex-properties(flex, flex-start, space-between);
  border-bottom: 1px solid @grey-gradation--100;
  padding-bottom: 24px;

  & > *:not(:last-child) {
    margin-right: 24px;
  }

  &__photo {
    .content(8px, 12px);
    border: 1px solid @grey-gradation--100;
    max-width: 108px;
  }

  &__info {
    .flex-properties(flex);
    flex-direction: column;
    width: 100%;
  }

  &__title {
    .text-lead-s;
    color: @grey-gradation--black;
    margin-bottom: 12px;
  }

  &__type {
    .text-m;
    color: @grey-gradation--200;
    margin-bottom: 18px;
  }

  &__settings {
    .flex-properties(flex, flex-start);

    .setting {
      .flex-properties(flex);

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    &__ico {
      display: block;
    }
  }

  &__total {
    .flex-properties(flex, end, space-between);
    flex-direction: column;
    align-self: stretch;
  }

  .quantity-controller {
    .content(1px, 1000px, @grey-gradation--100);
    .flex-properties(flex, center, center);
    border: 1px solid @grey-gradation--100;

    & > *:not(:last-child) {
      margin-right: 12px;
    }

    &__total {
      .text-body;
      text-align: center;
      color: @grey-gradation--black;
      padding: 0 12px;
    }
  }
}
</style>
