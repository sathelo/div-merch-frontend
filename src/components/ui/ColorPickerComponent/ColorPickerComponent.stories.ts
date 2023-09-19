import ColorPickerComponent from "@/components/ui/ColorPickerComponent/ColorPickerComponent.vue";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { ICColorProps } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof ColorPickerComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: ColorPickerComponent,
  title: "Navigation/ColorPickerComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    type: {
      description: "Контрастность галочки",
      options: EColorPickerType,
      control: {
        type: "radio",
      },
    },
    bg: {
      description: "Фон выбора цвета",
    },
    modelValue: {
      description: "Состояние выбора цвета",
      control: {
        type: "boolean",
      },
    },
    /* events */
    "update:modelValue": {
      description: "Событие, обновление состояния выбора цвета",
    },
    change: {
      description: "Событие, изменение состояния выбора цвета",
    },
  },
  render: (args: ICColorProps) => ({
    components: { ColorPickerComponent },
    setup() {
      return { args };
    },
    template: `
    <ColorPickerComponent 
      :type='args.type' 
      :bg='args.bg'
      :modelValue='args.modelValue'>
    </ColorPickerComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
