import { TProductCardGallery } from "@/components/Product/ProductCardGalleryComponent.types";
import { TProductCardInfoColors } from "@/components/Product/ProductCardInfoColorsComponent.types";
import { TProductCardInfoSizes } from "@/components/Product/ProductCardInfoSizesComponent.types";
import { IProductCardInfoTotal } from "@/components/Product/ProductCardInfoTotalComponent.types";
import { TProductCardDescriptions } from "@/components/Product/ProductCardDescriptionComponent.types";
import { TProductCardCharacteristics } from "@/components/Product/ProductCardCharacteristicsComponent.types";

export type TProduct = {
  id: number;
  images: TProductCardGallery;
  info: {
    title: string;
    type: string;
    colors: TProductCardInfoColors;
    sizes: TProductCardInfoSizes;
    total: IProductCardInfoTotal;
    descriptions: TProductCardDescriptions;
    characteristics: TProductCardCharacteristics;
  };
};

export type TProducts = TProduct[];
