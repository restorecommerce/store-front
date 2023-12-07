import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements AfterViewInit, OnDestroy {
  mediaBreakPoint: string;

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

  constructor(public screenService: ScreenService) {}

  ngAfterViewInit(): void {
    this.screenService.mediaBreakpoint$.subscribe((value) => {
      this.mediaBreakPoint = value;
    });
  }

  ngOnDestroy(): void {
    this.screenService.ngOnDestroy();
  }

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
