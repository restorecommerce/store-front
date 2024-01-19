import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-layout',
  templateUrl: './products-layout.component.html',
  styleUrls: ['./products-layout.component.scss'],
})
export class ProductsLayoutComponent {
  pageTitle = 'Products';

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

  constructor(private router: Router) {}

  sortOptionClicked(option: string, event) {
    this.sortBy = option;
    this.sortDropdownExpanded = false;
    event.stopPropagation();
  }
}
