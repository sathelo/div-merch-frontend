import ButtonComponent from "./ButtonComponent.vue";

import type { Meta, StoryObj } from "@storybook/vue3";
import { ICButtonProps, TypesCButton } from "./ButtonComponent.types";

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
      options: TypesCButton,
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
    variant: TypesCButton.primary,
  },
};
export const Secondary: ComponentStory = {
  args: {
    variant: TypesCButton.secondary,
  },
};
export const Link: ComponentStory = {
  args: {
    variant: TypesCButton.link,
  },
};
export const Round: ComponentStory = {
  args: {
    variant: TypesCButton.round,
  },
};
