export interface ProductImage {
  src: string;
  srcThumb: string;
  alt: string;
}

export interface MultiColorsProductImage {
  [key: string]: ProductImage[];
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  isBestSeller: boolean;
  liked: boolean;
  productImageSources: MultiColorsProductImage;
  selectedColor: string;
  colors: string[];
  materialInfo: string;
  additionalLabel: string;
  // meta: {
  //   // SKU Item : Will form part of the IItem
  //   sku: string;
  //   taxType: string;
  //   weight: number;
  //   height: number;
  //   width: number;
  //   depth: number;
  //   currency: string;
  // };
}
