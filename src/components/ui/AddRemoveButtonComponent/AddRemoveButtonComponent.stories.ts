import AddRemoveButtonComponent from "@/components/ui/AddRemoveButtonComponent/AddRemoveButtonComponent.vue";

import { ECAddRemoveButtonType } from "@/components/ui/AddRemoveButtonComponent/AddRemoveButtonComponent.enums";

import { ICAddRemoveButtonProps } from "@/components/ui/AddRemoveButtonComponent/AddRemoveButtonComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof AddRemoveButtonComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: AddRemoveButtonComponent,
  title: "Buttons/AddRemoveButtonComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    variant: {
      description: "Вариант внешнего вида кнопки",
      options: ECAddRemoveButtonType,
      control: {
        type: "radio",
      },
    },
  },
  render: (args: ICAddRemoveButtonProps) => ({
    components: { AddRemoveButtonComponent },
    setup() {
      return { args };
    },
    template: `
    <AddRemoveButtonComponent 
      :variant='args.variant'>
    </AddRemoveButtonComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Add: ComponentStory = {
  args: {
    variant: ECAddRemoveButtonType.add,
  },
};
export const Remove: ComponentStory = {
  args: {
    variant: ECAddRemoveButtonType.remove,
  },
};
