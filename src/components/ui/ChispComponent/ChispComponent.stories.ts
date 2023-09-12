import type { Meta, StoryObj } from "@storybook/vue3";

import ChispComponent from "@/components/ui/ChispComponent/ChispComponent.vue";

import { ICChispProps } from "./ChispComponent.types";

type ComponentMeta = Meta<typeof ChispComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Chips/ChispComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    index: {
      description:
        "Порядковый номер для привязки контекста (использовать, если в компоненте несколько чипсов, передаем порядковый index)",
    },
    disabled: {
      description: "Состояние кнопки",
      control: {
        type: "boolean",
      },
    },
    /* events */
    updateChisp: {
      description: "Событие, обновление состояния чипса",
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
      "<ChispComponent :index='args.index' :disabled='args.disabled'></ChispComponent>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
