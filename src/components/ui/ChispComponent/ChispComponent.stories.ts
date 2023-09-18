import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

import { ICChispProps } from "@/components/ui/ChispComponent/ChispComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof ChispComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: ChispComponent,
  title: "Navigation/ChispComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    modelValue: {
      description: "Состояние чипса",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Состояние чипса",
      control: {
        type: "boolean",
      },
    },
    /* events */
    "update:modelValue": {
      description: "Событие, обновление состояния чипса",
    },
    change: {
      description: "Событие, изменение состояния чипса",
    },
    /* slots */
    default: {
      description: "Текст в чипсе",
    },
  },
  render: (args: ICChispProps) => ({
    components: { ChispComponent },
    setup() {
      return { args };
    },
    template: `
    <ChispComponent 
      :modelValue='args.modelValue' 
      :disabled='args.disabled'>
    </ChispComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
