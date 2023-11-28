import { TProducts } from "@/store/initialData/home/products.types";

import { EColorPickerType } from "@/components/ui/ColorPickerComponent/ColorPickerComponent.enums";
import { EQueriesCloth } from "@/utils/query/useClothRouteQuery";
import { EQueriesCategory } from "@/utils/query/useCategoriesRouteQuery";
import { EQueriesSizes } from "@/utils/query/useSizesRouteQuery";
import { EQueriesColors } from "@/utils/query/useColorsRouteQuery";

export const initialProducts: TProducts = [
  {
    id: "0",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.anoraks,
      colors: [
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1525,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "1",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.sweatshirts,
      colors: [
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "2",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.trousers,
      colors: [
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 12400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "3",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.socks,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 123123,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "4",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.windbreakers,
      colors: [
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 54000,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "5",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.bracelets,
      colors: [
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 250000,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "6",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.keychains,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 300000,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "7",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.anoraks,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 30000,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "8",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.sweatshirts,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 40000,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "9",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.trousers,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 11312,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "10",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.socks,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 29,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "11",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.windbreakers,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 65,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "12",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.bracelets,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "13",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.keychains,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "14",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.male,
      typeCategory: EQueriesCategory.anoraks,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
  {
    id: "15",
    images: [
      "/categories/1.png",
      "/categories/2.png",
      "/categories/3.png",
      "/categories/4.png",
      "/categories/5.png",
      "/categories/6.png",
    ],
    info: {
      title: "Носки St. Friday, укороченные",
      type: "Носки мужские",
      typeFloor: EQueriesCloth.female,
      typeCategory: EQueriesCategory.anoraks,
      colors: [
        {
          type: EQueriesColors.COLOR1,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#501599",
        },
        {
          type: EQueriesColors.COLOR2,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#87ABB7",
        },
        {
          type: EQueriesColors.COLOR3,
          contrastType: EColorPickerType.low,
          isChecked: false,
          bg: "#B0BFCF",
        },
      ],
      sizes: [
        { label: "S", type: EQueriesSizes.s, isChecked: false },
        { label: "M", type: EQueriesSizes.m, isChecked: false },
        { label: "L", type: EQueriesSizes.l, isChecked: false },
      ],
      total: {
        price: 1400,
        discount: "-30%",
      },
      descriptions: [
        `Короткие носки унисекс "Ангел-вредитель" с соответствующей надписью и изображением попугая, связанного куском хлеба, пусть уберегут владельца от необдуманных поступков. На разных носках в паре свой принт.
    В составе мягкий гребенной хлопок с добавлением полиамида и эластана, делающими изделия износостойкими и эластичными. Не линяют и не выцветают при соблюдении рекомендованных условий ухода.`,
        `Носки вяжутся на фабрике в Санкт-Петербурге, отсюда в названии бренда и St. Создатели торговой марки помогают нам разбавлять скучные офисные будни своими необычными моделями в стиле Casual Friday - когда можно ослабить дресс-код и повеселиться!`,
      ],
      characteristics: [
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Зеленый",
        },
        {
          key: "Цвет",
          value: "Классические",
        },
        {
          key: "Цвет",
          value: "полиамид 17%, хлопок 80%, эластан 3%",
        },
      ],
    },
  },
];
