export type Option = {
  value: string;
};

type Options = Option[];

export interface ICDropdownProps {
  modelValue?: boolean;
  selectValue?: Option;
  selectValueId?: number;
  disabled?: boolean;
  options?: Options;
}
