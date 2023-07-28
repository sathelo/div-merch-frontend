<template>
  <el-breadcrumb class="main-breadcrumbs" :separator-icon="ArrowRight">
    <el-breadcrumb-item
      class="main-breadcrumbs__crumb"
      v-for="({ text, path }, _keyCrumb, crumbIndex) in breadcrumbs"
      :key="crumbIndex"
      :to="{ path: path ?? path }"
      >{{ text }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { type Breadcrumbs } from "@/data/main";
import { ArrowRight } from "@element-plus/icons-vue"; // test/delete/stash

interface IProps {
  breadcrumbs: Breadcrumbs;
}

defineProps<IProps>();
</script>

<style lang="less" scoped></style>
