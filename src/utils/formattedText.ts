import { TPrice } from "@/utils/formattedText.types";

export function formattedPriceToRub(value: TPrice): string {
  const formattedPrice =
    `${value}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") + " ₽";
  return formattedPrice;
}
