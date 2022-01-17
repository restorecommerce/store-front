export interface ProductImage {
  src: string;
  srcThumb: string;
  alt: string;
}

export interface MultiColorsProductImage {
  [key: string]: ProductImage[];
}

export interface ProductDetail {
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
}
