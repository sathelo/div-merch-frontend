import ColorPickerComponent from "@/components/ui/ColorPickerComponent/ColorPickerComponent.vue";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";

import { ICColorProps } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof ColorPickerComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "ColorPicker/ColorPickerComponent",
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      description: "Состояние выбора цвета",
      control: {
        type: "boolean",
      },
    },
    /* props */
    index: {
      description:
        "Порядковый номер для привязки контекста (использовать, если в компоненте несколько выборов цветов, передаем порядковый index)",
      control: {
        type: "number",
      },
    },
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
    /* events */
    updateColor: {
      description: "Событие, обновление состояния выбора цвета",
    },
  },
  component: ColorPickerComponent,
  render: (args: ICColorProps) => ({
    components: { ColorPickerComponent },
    setup() {
      return { args };
    },
    template: `
    <ColorPickerComponent 
      :index='args.index' 
      :type='args.type' 
      :bg='args.bg'>
    </ColorPickerComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
