export type Option = {
  value: string;
};

type Options = Option[];

export interface ICDropdownProps {
  modelValue?: boolean;
  disabled?: boolean;
  options?: Options;
}
