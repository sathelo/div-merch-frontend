import DropdownComponent from "@/components/ui/DropdownComponent/DropdownComponent.vue";

import { DropdownDecoratorWithLimitedWidth } from "@/components/ui/DropdownComponent/DropdownComponent.decorator";

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
    selectValue: {
      description: "Выбранный элемент из выпадающего списка",
      control: {
        type: "object",
      },
    },
    selectValueId: {
      description: "Выбранное значение из выпадающего списка (по умполчанию)",
      control: {
        type: "number",
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
    updateModelValue: {
      description: "Событие, обновление состояния выпадающего списка",
    },
    updateSelectValue: {
      description: "Событие, выбор опции",
    },
    /* slots */
    default: {
      description: "Текст в выпадающем списке",
    },
  },
  decorators: [DropdownDecoratorWithLimitedWidth],
  render: () => ({
    components: { DropdownComponent },
    setup() {
      return {
        args: {
          options: [
            { value: "Option 1", id: "Option 1" },
            { value: "Option 2", id: "Option 2" },
            { value: "Option 3", id: "Option 3" },
            { value: "Option 4", id: "Option 4" },
            { value: "Option 5", id: "Option 5" },
            { value: "Option 6", id: "Option 6" },
          ],
        },
      };
    },
    template: `
    <DropdownComponent 
      :modelValue='args.modelValue'
      :selectValueId='args.selectValueId'
      :disabled='args.disabled'
      :options='args.options'>
    </DropdownComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
