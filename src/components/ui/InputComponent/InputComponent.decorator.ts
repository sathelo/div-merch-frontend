import { h } from "vue";

export const InputDecoratorWithLimitedWidth = (story: any) => ({
  name: "input-decorator-with-limited-width",
  render: () => h("div", { style: "max-width: 154px" }, h(story())),
});
