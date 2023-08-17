import { RouteRecordName } from "vue-router";

export type Nav = {
  title: string;
  namePath?: RouteRecordName;
};

export type Menu = Nav[];
