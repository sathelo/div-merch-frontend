import DropdownComponent from "@/components/ui/DropdownComponent/DropdownComponent.vue";

import { DropdownDecoratorWithLimitedWidth } from "@/components/ui/DropdownComponent/DropdownComponent.decorator";

import { ICDropdownProps } from "@/components/ui/DropdownComponent/DropdownComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof DropdownComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: DropdownComponent,
  title: "Dropdown/DropdownComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    modelValue: {
      description: "Состояние выпадающего списка",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Состояние выпадающего списка",
      control: {
        type: "boolean",
      },
    },
    options: {
      description: "Опции выпадающего списка",
      control: {
        type: "object",
      },
    },
    /* events */
    "update:modelValue": {
      description: "Событие, обновление состояния выпадающего списка",
    },
    changeSelect: {
      description: "Событие, изменение состояния выпадающего списка",
    },
    selectOption: {
      description: "Событие, выбор опции",
    },
    /* slots */
    default: {
      description: "Текст в выпадающем списке",
    },
  },
  decorators: [DropdownDecoratorWithLimitedWidth],
  render: (args: ICDropdownProps) => ({
    components: { DropdownComponent },
    setup() {
      return { args };
    },
    template: `
    <DropdownComponent 
      :modelValue='args.modelValue'
      :disabled='args.disabled'
      :options='args.options'>
    </DropdownComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
