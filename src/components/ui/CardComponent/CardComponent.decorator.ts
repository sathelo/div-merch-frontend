import { h } from "vue";

export const CardDecoratorWithLimitedWidth = (story: any) => ({
  name: "card-decorator-with-limited-width",
  render: () => h("div", { style: "max-width: 340px" }, h(story())),
});
