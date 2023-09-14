import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";

import { ICCheckboxProps } from "@/components/ui/CheckboxComponent/CheckboxComponent.types";
import type { Meta, StoryObj } from "@storybook/vue3";

type ComponentMeta = Meta<typeof CheckboxComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  component: CheckboxComponent,
  title: "Navigation/CheckboxComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    index: {
      description:
        "Порядковый номер для привязки контекста (использовать, если в компоненте несколько флажков, передаем порядковый index)",
      control: {
        type: "number",
      },
    },
    isChecked: {
      description: "Состояние флажка",
      control: {
        type: "boolean",
      },
    },
    disabled: {
      description: "Состояние флажка",
      control: {
        type: "boolean",
      },
    },
    /* events */
    updateCheckbox: {
      description: "Событие, обновление состояния флажка",
    },
    /* slots */
    default: {
      description: "Текст в флажке",
    },
  },
  render: (args: ICCheckboxProps) => ({
    components: { CheckboxComponent },
    setup() {
      return { args };
    },
    template: `
    <CheckboxComponent 
      :index='args.index' 
      :isChecked='args.isChecked' 
      :disabled='args.disabled'>
    </CheckboxComponent>
    `,
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
