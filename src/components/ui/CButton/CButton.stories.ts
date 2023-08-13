// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/vue3";

import CButton from "@/components/ui/CButton/CButton.vue";
import { ICButtonProps, TypeCButton } from "./CButton.types";

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
    template: "<CButton :variant='args.variant'>button<CButton/>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
export const Primary: ComponentStory = {
  args: {
    variant: TypeCButton.primary,
  },
};
export const Secondary: ComponentStory = {
  args: {
    variant: TypeCButton.secondary,
  },
};
export const Link: ComponentStory = {
  args: {
    variant: TypeCButton.link,
  },
};
