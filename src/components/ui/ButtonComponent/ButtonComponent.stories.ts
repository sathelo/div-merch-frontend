// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/vue3";

import CButton from "@/components/ui/ButtonComponent/ButtonComponent.vue";
import { ICButtonProps, TypesCButton } from "./ButtonComponent.types";

type ComponentMeta = Meta<typeof CButton>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Button/CButton",
  component: CButton,
  render: (args: ICButtonProps) => ({
    components: { CButton },
    setup() {
      return { args };
    },
    template: "<ButtonComponent :variant='args.variant'>button<ButtonComponent/>",
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
