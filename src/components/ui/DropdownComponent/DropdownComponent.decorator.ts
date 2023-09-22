import { h } from "vue";

export const DropdownDecoratorWithLimitedWidth = (story: any) => ({
  name: "dropdown-decorator-with-limited-width",
  render: () => h("div", { style: "width: 128px" }, h(story())),
});
