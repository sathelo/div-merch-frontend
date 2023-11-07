import CardComponent from "@/components/ui/CardComponent/CardComponent.vue";

import { CardDecoratorWithLimitedWidth } from "./CardComponent.decorator";

import { TCCard } from "@/components/ui/CardComponent/CardComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof CardComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: CardComponent,
  title: "Cards/CardComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    image: {
      description: "Картинка товара в карточке",
      control: {
        type: "string",
      },
    },
    info: {
      description: "Внутренний контент карточки",
      control: {
        type: "object",
      },
    },
  },
  decorators: [CardDecoratorWithLimitedWidth],
  render: (args: TCCard) => ({
    components: { CardComponent },
    setup() {
      return { args };
    },
    template: `
    <CardComponent 
      :image='args.image'
      :info='args.info'>
    </CardComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
