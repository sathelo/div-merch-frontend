import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";

import { ICCheckboxProps } from "@/components/ui/CheckboxComponent/CheckboxComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof CheckboxComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: CheckboxComponent,
  title: "Navigation/CheckboxComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    modelValue: {
      description: "Состояние флажка",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Состояние флажка",
      control: {
        type: "boolean",
      },
    },
    /* events */
    "update:modelValue": {
      description: "Событие, обновление состояния флажка",
    },
    change: {
      description: "Событие, изменение состояния флажка",
    },
    /* slots */
    default: {
      description: "Текст в флажке",
    },
  },
  render: (args: ICCheckboxProps) => ({
    components: { CheckboxComponent },
    setup() {
      return { args };
    },
    template: `
    <CheckboxComponent 
      :modelValue='args.modelValue' 
      :disabled='args.disabled'>
    </CheckboxComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
