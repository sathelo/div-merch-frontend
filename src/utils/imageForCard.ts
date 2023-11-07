import { TProduct } from "@/store/initialData/home/products.types";

export function getImageForCard(product: TProduct) {
  return Array.isArray(product.images) ? product.images[0] : product.images;
}
