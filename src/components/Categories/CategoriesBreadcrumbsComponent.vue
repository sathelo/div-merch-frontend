<template>
  <el-breadcrumb class="main-breadcrumbs" :separator-icon="ArrowRight">
    <el-breadcrumb-item
      v-for="({ text, path }, _keyCrumb, crumbIndex) in breadcrumbs"
      :key="crumbIndex"
      class="main-breadcrumbs__crumb"
      :to="{ path: path ?? path }"
      >{{ text }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { type Breadcrumbs } from "@/data/main";
import { ArrowRight } from "@element-plus/icons-vue"; // test/delete/stash

// Import styles element-plus
import "element-plus/dist/index.css";

interface IProps {
  breadcrumbs: Breadcrumbs;
}

defineProps<IProps>();
</script>

<style lang="less" scoped></style>
