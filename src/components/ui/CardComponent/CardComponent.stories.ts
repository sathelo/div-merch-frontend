import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import { ICCardProps } from "@/components/ui/CardComponent/CardComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof CardComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: CardComponent,
  title: "Cards/CardComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    infoProduct: {
      description: "Информация о продукте",
      control: {
        type: "object",
      },
    },
  },
  render: (args: ICCardProps) => ({
    components: { CardComponent },
    setup() {
      return { args };
    },
    template: `
    <CardComponent 
      :infoProduct='args.infoProduct'>
    </CardComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
