import CheckboxComponent from "@/components/ui/CheckboxComponent/CheckboxComponent.vue";

import type { Meta, StoryObj } from "@storybook/vue3";
import { ICCheckboxProps } from "./CheckboxComponent.types";

type ComponentMeta = Meta<typeof CheckboxComponent>;
type ComponentStory = StoryObj<typeof meta>;

const meta: ComponentMeta = {
  title: "Checkbox/CheckboxComponent",
  tags: ["autodocs"],
  argTypes: {
    /* props */
    index: {
      description:
        "Порядковый номер для привязки контекста (использовать, если в компоненте несколько флажков, передаем порядковый index)",
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
    updateCheckboxes: {
      description: "Событие, обновление состояния флажка",
    },
    /* slots */
    default: {
      description: "Текст в флажке",
    },
  },
  component: CheckboxComponent,
  render: (args: ICCheckboxProps) => ({
    components: { CheckboxComponent },
    setup() {
      return { args };
    },
    template:
      "<CheckboxComponent :index='args.index' :isChecked='args.isChecked' :disabled='args.disabled'></CheckboxComponent>",
  }),
} as ComponentStory;

export default meta;

export const Default: ComponentStory = {};
