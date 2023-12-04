<template>
  <section class="content">
    <div class="cards">
      <CardComponent
        v-for="(product, productIndex) in products"
        :key="productIndex"
        :image="getImageForCard(product)"
        :info="{
          title: product.info.title,
          type: product.info.type,
          price: product.info.total.price,
        }"
        class="cards__card"
        @click="redirectToProduct(product.id)"
      />
    </div>

    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="prev, pager, next"
      :total="totalProducts"
      class="pagination"
      @current-change="handleCurrentChange"
    />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router/routes";

import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import { getImageForCard } from "@/utils/imageForCard";

import { Routes } from "@/router/routes.enums";

import { TProduct, TProducts } from "@/store/initialData/home/products.types";

interface IProps {
  products: TProducts;
  currentPage: number;
  pageSize: number;
  totalProducts: number;
}

interface IEmits {
  (e: "changeCurrentPage", v: number): void;
}

defineProps<IProps>();
const emits = defineEmits<IEmits>();

const small = ref(false);
const background = ref(true);
const disabled = ref(false);

function handleCurrentChange(val: number) {
  emits("changeCurrentPage", val);
}

function redirectToProduct(hashProduct: TProduct["id"]) {
  router.push({ name: Routes.product, params: { id: hashProduct } });
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;

  .cards {
    .flex-properties(flex);
    flex-wrap: wrap;
    width: inherit;
    margin-bottom: 32px;

    &__card {
      width: calc(100% / 3);
    }
  }

  .pagination {
    .flex-properties(flex, center, center);
  }

  & ::v-deep .btn {
    &-prev {
      width: 48px;
      height: 48px;
      background: @grey-gradation--100;
      backdrop-filter: blur(100px);
      border-radius: 1000px;

      &:hover {
        color: @blue--500;
      }
    }

    &-next {
      width: 48px;
      height: 48px;
      background: @grey-gradation--100;
      backdrop-filter: blur(100px);
      border-radius: 1000px;

      &:hover {
        color: @blue--500;
      }
    }
  }

  & ::v-deep li {
    .text-m;
    width: 48px;
    height: 48px;
    background: @grey-gradation--100 !important;
    backdrop-filter: blur(100px);
    border-radius: 1000px;

    &:hover {
      color: @blue--500;
    }

    &.is-active {
      background: @grey-gradation--black !important;
      backdrop-filter: blur(100px);
    }
  }
}
</style>
