import type { TProductCardGallery } from "@/components/Product/ProductCardGalleryComponent.types";
import type { TProductCardInfoColors } from "@/components/Product/ProductCardInfoColorsComponent.types";
import type { TProductCardInfoSizes } from "@/components/Product/ProductCardInfoSizesComponent.types";
import { IProductCardInfoTotal } from "@/components/Product/ProductCardInfoTotalComponent.types";
import type { TProductCardDescriptions } from "@/components/Product/ProductCardDescriptionComponent.types";
import type { TProductCardCharacteristics } from "@/components/Product/ProductCardCharacteristicsComponent.types";

export type TProductCard = {
  images: TProductCardGallery;
  info: {
    title: string;
    type: string;
    colors: TProductCardInfoColors;
    sizes: TProductCardInfoSizes;
    total: IProductCardInfoTotal;
    descriptions?: TProductCardDescriptions;
    characteristics?: TProductCardCharacteristics;
  };
};
