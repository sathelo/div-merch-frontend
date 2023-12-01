export type TOption<T> = {
  value: string;
  id: T;
};

export interface ICDropdownProps<T> {
  modelValue?: boolean;
  selectValue?: T;
  disabled?: boolean;
  options: TOption<T>[];
}
