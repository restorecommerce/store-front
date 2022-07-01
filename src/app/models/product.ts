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
  selectedColor: string;
  colors: string[];
  materialInfo: string;
  additionalLabel: string;
  availableSizes: number[];
}

export class ProductItem implements Product, IItem {
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
  availableSizes: number[];

  sku: string;
  taxType: 'vat_standard' | 'vat_reduced' | 'vat_free' | 'vat_placeholder';
  weight: number;
  height: number;
  width: number;
  depth: number;
  currency: string;
  quantity: number;
}
