import { h } from "vue";

export const ChispDecoratorWithLimitedWidth = (story: any) => ({
  name: "chisp-decorator-with-limited-width",
  render: () => h("div", { style: "max-width: 63px" }, h(story())),
});
