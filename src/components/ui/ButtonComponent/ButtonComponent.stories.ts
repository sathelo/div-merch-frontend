// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/vue3";

import ButtonComponent from "@/components/ui/ButtonComponent/ButtonComponent.vue";
import { ICButtonProps, TypesCButton } from "./ButtonComponent.types";

type ComponentMeta = Meta<typeof ButtonComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Button/ButtonComponent",
  tags: ["autodocs"],
  component: ButtonComponent,
  render: (args: ICButtonProps) => ({
    components: { ButtonComponent },
    setup() {
      return { args };
    },
    template:
      "<ButtonComponent :variant='args.variant' :variant='args.size' :disabled='args.disabled'>button<ButtonComponent/>",
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
