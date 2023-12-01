import { EQueriesCloth } from "@/utils/query/useClothRouteQuery";
import { EQueriesCategory } from "@/utils/query/useCategoriesRouteQuery";

import { TProductCardGallery } from "@/components/Product/ProductCardGalleryComponent.types";
import { TProductCardInfoColors } from "@/components/Product/ProductCardInfoColorsComponent.types";
import { TProductCardInfoSizes } from "@/components/Product/ProductCardInfoSizesComponent.types";
import { IProductCardInfoTotal } from "@/components/Product/ProductCardInfoTotalComponent.types";
import { TProductCardDescriptions } from "@/components/Product/ProductCardDescriptionComponent.types";
import { TProductCardCharacteristics } from "@/components/Product/ProductCardCharacteristicsComponent.types";

export type TProduct = {
  id: string;
  images: TProductCardGallery;
  info: {
    title: string;
    type: string;
    typeFloor: EQueriesCloth;
    typeCategory: EQueriesCategory;
    colors: TProductCardInfoColors;
    sizes: TProductCardInfoSizes;
    total: IProductCardInfoTotal;
    descriptions: TProductCardDescriptions;
    characteristics: TProductCardCharacteristics;
  };
};

export type TProducts = TProduct[];
