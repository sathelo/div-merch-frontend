import type { Meta, StoryObj } from "@storybook/vue3";

import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

import { Size } from "@/types/enums/typography.enum";
import { ICChispProps } from "./ChispComponent.types";

type ComponentMeta = Meta<typeof ChispComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Chips/ChispComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    size: {
      description: "Размер текста находящегося в чипсе",
      options: Size,
      control: {
        type: "radio",
      },
    },
    disabled: {
      description: "Состояние кнопки",
      control: {
        type: "boolean",
      },
    },
    /* slots */
    default: {
      description: "Текст в чипсе",
    },
  },
  component: ChispComponent,
  render: (args: ICChispProps) => ({
    components: { ChispComponent },
    setup() {
      return { args };
    },
    template:
      "<ChispComponent :size='args.size' :disabled='args.disabled'></ChispComponent>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
