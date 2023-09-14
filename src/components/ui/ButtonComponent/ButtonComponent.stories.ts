import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";

import { ECButtonType } from "@/components/ui/ButtonComponent/ButtonComponent.enums";

import { ICButtonProps } from "@/components/ui/ButtonComponent/ButtonComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof ButtonComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: ButtonComponent,
  title: "Button/ButtonComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    variant: {
      description: "Вариант внешнего вида кнопки",
      options: ECButtonType,
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
    icon: {
      description: "Иконка в кнопке",
    },
    default: {
      description: "Текст в кнопке",
    },
  },
  render: (args: ICButtonProps) => ({
    components: { ButtonComponent },
    setup() {
      return { args };
    },
    template:
      "<ButtonComponent :variant='args.variant' :disabled='args.disabled'></ ButtonComponent>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
export const Primary: ComponentStory = {
  args: {
    variant: ECButtonType.primary,
  },
};
export const Secondary: ComponentStory = {
  args: {
    variant: ECButtonType.secondary,
  },
};
export const Link: ComponentStory = {
  args: {
    variant: ECButtonType.link,
  },
};
export const Round: ComponentStory = {
  args: {
    variant: ECButtonType.round,
  },
};
