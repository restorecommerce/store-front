import { IItem } from '@restorecommerce/cart/lib/model/IItem';

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
  materialInfo: string;
  additionalLabel: string;
  selectedColor: string;
  colors: string[];
  selectedSize: number;
  sizes: number[];
}
