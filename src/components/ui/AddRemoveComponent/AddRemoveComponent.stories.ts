import AddRemoveComponent from "@/components/ui/AddRemoveComponent/AddRemoveComponent.vue";

import { ECAddRemoveType } from "@/components/ui/AddRemoveComponent/AddRemoveComponent.enums";

import { ICAddRemoveProps } from "@/components/ui/AddRemoveComponent/AddRemoveComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof AddRemoveComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: AddRemoveComponent,
  title: "Navigation/AddRemoveComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    variant: {
      description: "Вариант внешнего вида кнопки",
      options: ECAddRemoveType,
      control: {
        type: "radio",
      },
    },
  },
  render: (args: ICAddRemoveProps) => ({
    components: { AddRemoveComponent },
    setup() {
      return { args };
    },
    template: `
    <AddRemoveComponent 
      :variant='args.variant'>
    </AddRemoveComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Add: ComponentStory = {
  args: {
    variant: ECAddRemoveType.add,
  },
};
export const Remove: ComponentStory = {
  args: {
    variant: ECAddRemoveType.remove,
  },
};
