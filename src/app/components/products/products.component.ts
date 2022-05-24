import { Component, Input } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
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
  id: string | number;
  title: string;
  price: number;
  like: boolean;
  additionalLabel: string;
  colors: string[];
  selectedColor: string;
  images: {};
  urls: {};
}
