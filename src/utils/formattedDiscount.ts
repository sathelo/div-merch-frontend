type TDiscount = number | string;

export function formattedDiscount(value: TDiscount): string {
  if (typeof value === "string")
    return `${value}${value.includes("%") ? "" : "%"}`;
  return `${value}%`;
}
