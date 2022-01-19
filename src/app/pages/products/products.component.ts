import { Component, Input } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  responsiveImagesConfiguration = [
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'webp' },
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'jpeg' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'webp' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'jpeg' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'webp' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'jpeg' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'webp' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'jpeg' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'webp' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'jpeg' },
  ];

  groups: { title: string; productCount: number }[] = [
    { title: 'all', productCount: 244 },
    { title: 'brand 1', productCount: 170 },
    { title: 'brand 2', productCount: 74 },
  ];

  selectedGroup = this.groups[0].title;

  selectedGridSize = '2x2';

  sortOptions: string[] = [
    'most popular',
    'newest',
    'price (low-high)',
    'price (high-low)',
  ];
  sortDropdownExpanded = false;
  sortBy = this.sortOptions[0];

  filterOptions: string[] = [
    'size',
    'color',
    'brand',
    'wearing occasion',
    'season',
    'capsule',
  ];

  @Input() currency: string;
  @Input() products: Product[] = [];
  @Input() pageTitle: string;
  constructor() {}

  sortOptionClicked(option: string, event) {
    this.sortBy = option;
    this.sortDropdownExpanded = false;
    event.stopPropagation();
  }
}

export function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Product {
  title: string;
  price: number;
  imgUrl: string;
  like: boolean;
  additionalLabel: string;
  colors: string[];
  selectedColor: string;
}
