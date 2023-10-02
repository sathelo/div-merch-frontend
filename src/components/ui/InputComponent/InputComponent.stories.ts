import InputComponent from "@/components/ui/InputComponent/InputComponent.vue";

import { InputDecoratorWithLimitedWidth } from "./InputComponent.decorator";

import { ICInputProps } from "@/components/ui/InputComponent/InputComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof InputComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: InputComponent,
  title: "Fields/InputComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    modelValue: {
      description: "Состояние текста элемента формы",
    },
    errMsg: {
      description: "Текст ошибки в текстовом элементе формы",
    },
    disabled: {
      description: "Состояние текста элемента формы",
    },
    /* events */
    "update:modelValue": {
      description: "Событие, обновление состояния ввода строки",
    },
    change: {
      description: "Событие, изменение состояния ввода строки",
    },
  },
  decorators: [InputDecoratorWithLimitedWidth],
  render: (args: ICInputProps) => ({
    components: { InputComponent },
    setup() {
      return { args };
    },
    template: `
    <InputComponent 
      :modelValue='args.modelValue' 
      :label='args.label'
      :errMsg='args.errMsg'
      :disabled='args.disabled'>
    </InputComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
