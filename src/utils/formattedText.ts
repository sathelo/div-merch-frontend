type TPrice = number | string;

export function formattedPriceToRub<T>(
  value: Array<T & { price?: any }> | TPrice,
): T {
  const res = value.map((a) => {
    if (a.price) {
      return {
        ...a,
        price: `${a.price}`.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ") + " ₽",
      };
    }
    return a;
  });
  return res;
}
