import type { Meta, StoryObj } from "@storybook/vue3";

import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";
import { ICCheckboxProps } from "./CheckboxComponent.types";

type ComponentMeta = Meta<typeof CheckboxComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Checkbox/CheckboxComponent",
  tags: ["autodocs"],
  component: CheckboxComponent,
  render: (args: ICCheckboxProps) => ({
    components: { CheckboxComponent },
    setup() {
      return { args };
    },
    template:
      "<CheckboxComponent :size='args.size' :disabled='args.disabled'>checkbox</CheckboxComponent>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
