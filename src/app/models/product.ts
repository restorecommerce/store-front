export interface ProductImage {
  src: string;
  srcThumb: string;
  alt: string;
}

export interface MultiColorsProductImage {
  [key: string]: ProductImage[];
}

export interface Product {
  title: string;
  description: string;
  price: number;
  isBestSeller: true;
  liked: boolean;
  productGalleryImages: MultiColorsProductImage;
  selectedColor: string;
  colors: string[];
  materialInfo: string;
  expectedDeliveryDuration: string;
  additionalLabel: string;
  meta: {
    // SKU Item : Will form part of the IItem
    sku: string;
    taxType: string;
    weight: number;
    height: number;
    width: number;
    depth: number;
  };
}
