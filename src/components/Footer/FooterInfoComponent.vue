<template>
  <section class="info">
    <div class="info-blocks">
      <div
        v-for="({ title, items }, _keyItems, itemsIndex) in info"
        :key="itemsIndex"
        class="info-blocks__block block"
      >
        <div class="block__title">
          {{ title }}
        </div>
        <div class="block__items items">
          <ButtonComponent
            v-for="(item, itemIndex) in items"
            :key="itemIndex"
            :variant="ECButtonType.link"
            class="items__item item"
            :class="{ 'item--select-none': isBtn(item?.args) }"
          >
            {{ item.text }}
          </ButtonComponent>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import {
  TFooter,
  TDataFooterWithoutTextBlock,
} from "@/store/initialData/footer/footer.types";

interface IProps {
  info: TFooter;
}

defineProps<IProps>();

function isBtn(args?: TDataFooterWithoutTextBlock): boolean {
  return !(args?.href || args?.target || args?.namePath);
}
</script>

<style lang="less" scoped>
.info {
  width: 100%;
  margin-bottom: 32px;

  &-blocks {
    .flex-properties(flex, initial, space-between);

    .block {
      &__title {
        .text-s;
        color: @grey-gradation--300;
        margin-bottom: 24px;
      }

      &__items {
        .flex-properties(flex, flex-start, initial);
        flex-direction: column;

        & > *:not(:last-child) {
          margin-bottom: 16px;
        }

        .item {
          &--select-none {
            user-select: none;
            pointer-events: none;
          }
        }
      }
    }
  }
}
</style>
